import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios'
import LeftPane from './components/LeftPane'
import RightPane from './components/RightPane'
import AuthPage from './pages/AuthPage'

axios.defaults.withCredentials = true;

const API_BASE_URL = "http://localhost:3000/notes";

const App = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editId, setEditId] = useState(null)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch all notes
  const fetchData = async () => {
    try {
      setError(null);
      const response = await axios.get(API_BASE_URL);
      setNotes(response.data.notes || []);
    } catch (err) {
      console.error("Error fetching notes:", err);
      setError("Failed to load notes. Please login again or check server.");
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

  return (
    <Routes>
      {/* 1. Auth Page Route */}
      <Route path="/auth" element={<AuthPage />} />

      {/* 2. Protected Notes Dashboard Route */}
      <Route path="/notes" element={NotesDashboard} />

      {/* 3. Default redirect to Auth page */}
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
}

export default App;