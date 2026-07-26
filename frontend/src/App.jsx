import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
      setError("Failed to load notes. Please check backend connection.");
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

    // Trim check: Prevent saving pure whitespaces
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
      
      // If currently editing the note that gets deleted, clear form
      if (editId === id) resetForm();

      await fetchData();
    } catch (err) {
      console.error("Error deleting note:", err);
      alert("Failed to delete note.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen lg:h-screen w-full bg-[#111111] flex lg:flex-row flex-col text-white'>
      {/* Left Pane - Form */}
      <div className='h-full w-full lg:w-1/3 p-8'>
        <h1 className='font-bold text-3xl pb-5'>
          {editId ? 'Edit Note' : 'Add Note'}
        </h1>

        <form onSubmit={submitHandler}>
          <input 
            type="text"
            placeholder='Enter the Title'
            maxLength="20"
            className='w-full h-12 border-2 rounded px-5 mb-5 outline-none bg-transparent'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <textarea
            placeholder='Details of Notes'
            maxLength="100"
            className='w-full border-2 rounded h-60 sm:h-40 p-5 mb-5 outline-none resize-none overflow-auto bg-transparent'
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
          />

          <div className='flex gap-2'>
            <button
              disabled={loading}
              type="submit"
              className='w-full border-2 rounded h-12 mb-5 text-black bg-white active:scale-95 disabled:opacity-50 transition cursor-pointer font-medium'
            >
              {loading ? 'Saving...' : editId ? 'Update Note' : 'Add Note'}
            </button>

            {editId && (
              <button
                type="button"
                onClick={resetForm}
                className='w-1/3 border-2 border-red-500 text-red-500 rounded h-12 mb-5 active:scale-95 transition cursor-pointer font-medium'
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Right Pane - Notes Display */}
      <div className='h-full w-full lg:w-2/3 border-t-2 lg:border-t-0 lg:border-l-2 border-white p-8 lg:overflow-hidden'>
        <h1 className='font-bold text-3xl pb-5'>Recent Notes</h1>

        {error && <p className='text-red-400 mb-4'>{error}</p>}

        <div id='right-box' className="lg:h-[84vh] w-full flex flex-wrap gap-6 lg:overflow-auto">
          {notes.length === 0 && !error ? (
            <p className='text-gray-400'>No notes added yet.</p>
          ) : (
            notes.map((item) => (
              <div 
                key={item._id} 
                className='bg-[url(/assets/note.webp)] bg-cover bg-no-repeat h-71 w-50 rounded-2xl p-4 pt-7 overflow-auto relative flex flex-col justify-between shadow-lg'
              >
                <div>
                  <h1 className='text-[#232323] font-bold mb-2 text-2xl break-words'>{item.title}</h1>
                  <h3 className='text-[#444444] break-words'>{item.content}</h3>
                </div>

                <div className='flex gap-2 w-full px-1 pt-2'>
                  <button 
                    className='bg-green-600 hover:bg-green-700 text-white w-1/2 py-1 rounded font-semibold active:scale-95 transition cursor-pointer'
                    onClick={() => {
                      setTitle(item.title);
                      setContent(item.content);
                      setEditId(item._id);

                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }}
                  >
                    Edit
                  </button>

                  <button 
                    className='bg-red-600 hover:bg-red-700 text-white w-1/2 py-1 rounded font-semibold active:scale-95 transition cursor-pointer'
                    onClick={() => deleteNote(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App