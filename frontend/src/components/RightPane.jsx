import React from 'react'

const RightPane = ({ notes, setTitle, setContent, setEditId, deleteNote, error }) => {
  return (
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
  )
}

export default RightPane
