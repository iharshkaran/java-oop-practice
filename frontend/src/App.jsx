import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import LeftPane from './components/LeftPane'
import RightPane from './components/RightPane'
import AuthPage from './pages/AuthPage'
import ProtectedRoute from './components/ProtectedRoute'

axios.defaults.withCredentials = true;

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/notes`;

const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 1. User Authentication State
  const [user, setUser] = useState(null);
  const [authChecking, setAuthChecking] = useState(true);

  // Fetch all notes
  const fetchData = async () => {
    try {
      setError(null);
      const response = await axios.get(API_BASE_URL, { withCredentials: true });
      setNotes(response.data.notes || []);
      
      // if notes fetched successfully, set user as logged in
      setUser(true); 
    } catch (err) {
      console.error("Error fetching notes:", err);
      // if backend returns 401 (Unauthorized) or 403 (Forbidden), set user as not logged in
      if (err.response && (err.response.status === 401 || err.response.status === 403)) {
        setUser(null);
      } else {
        setError("Failed to load notes. Please check server.");
      }
    } finally {
      setAuthChecking(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Reset form inputs & editing state
  const resetForm = () => {
    setTitle('');
    setContent('');
    setEditId(null);
  };

  // Add or Update Note
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please enter both title and content!");
      return;
    }

    try {
      setLoading(true);
      if (editId) {
        await axios.patch(`${API_BASE_URL}/${editId}`, { title, content });
      } else {
        await axios.post(API_BASE_URL, { title, content });
      }

      resetForm();
      await fetchData();
    } catch (err) {
      console.error("Error saving note:", err);
      alert(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Delete Note
  const deleteNote = async (id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      setLoading(true);
      await axios.delete(`${API_BASE_URL}/${id}`);

      if (editId === id) resetForm();

      await fetchData();
    } catch (err) {
      console.error("Error deleting note:", err);
      alert("Failed to delete note.");
    } finally {
      setLoading(false);
    }
  };

  // Main Notes App Dashboard UI
  const NotesDashboard = (
    <div className='min-h-screen lg:h-screen w-full bg-[#111111] flex lg:flex-row flex-col text-white'>
      <LeftPane
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        editId={editId}
        setEditId={setEditId}
        submitHandler={submitHandler}
        resetForm={resetForm}
        loading={loading}
      />

      <RightPane
        notes={notes}
        setTitle={setTitle}
        setContent={setContent}
        setEditId={setEditId}
        deleteNote={deleteNote}
        error={error}
      />
    </div>
  );

  // Initially, while checking authentication, show a loading message
  if (authChecking) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center">
        <p className="text-xl">Checking authentication...</p>
      </div>
    );
  }

  return (
    <Routes>
      {/* Auth Route */}
      <Route 
        path="/auth" 
        element={!user ? <AuthPage setUser={setUser} fetchData={fetchData} /> : <Navigate to="/notes" />} 
      />

      {/* Protected Notes Route */}
      <Route
        path="/notes"
        element={
          <ProtectedRoute user={user}>
            {NotesDashboard}
          </ProtectedRoute>
        }
      />

      {/* Default Route: if user is logged in, redirect to /notes; otherwise, redirect to /auth */}
      <Route path="*" element={<Navigate to={user ? "/notes" : "/auth"} />} />
    </Routes>
  );
}

export default App;