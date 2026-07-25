import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [note, setnote] = useState(()=>{
    let savedData = localStorage.getItem("notes")
    return savedData? JSON.parse(savedData):[];
  })


  function submitHandler(e) {
    e.preventDefault();

    // note.push({
    //   title : title,
    //   detail : detail
    // })

    const copyNote = [...note]

    copyNote.push({ title, detail })
    setnote(copyNote)

    setTitle('')
    setDetail('')

  }

  function deleteNote(id) {
    const copyNote = [...note]

    copyNote.splice(id, 1)
    setnote(copyNote)
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(note));
  }, [note]);

  return (
    <div className='min-h-screen lg:h-screen w-full bg-[#111111] flex lg:flex-row flex-col text-white'>
      <div className='h-full w-full lg:w-1/3 p-8'>
        <h1 className='font-bold text-3xl pb-5'>Add Notes</h1>
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <input type="text"
            placeholder='Enter the Title'
            maxLength="20"
            className='w-full h-13 border-2 rounded px-5 mb-5 outline-none'
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            value={title}
          />
          <textarea
            id="text-box"
            placeholder='Details of Notes'
            maxLength="100"
            className='w-full border-2 rounded  h-60 sm:h-40 p-5 mb-5 outline-none resize-none overflow-auto'
            onChange={(e) => {
              setDetail(e.target.value)
            }}
            value={detail}
          />

          <button
            className='w-full border-2 rounded h-12 mb-5 text-black bg-white active:scale-98'>
            Create Note
          </button>

        </form>
      </div>

      <div className='h-full w-full lg:w-2/3 border-t-2 lg:border-t-0 lg:border-l-2 border-white p-8 lg:overflow-hidden'>
        <h1 className='font-bold text-3xl pb-5'>Recent Notes</h1>
        <div id='right-box' className="lg:h-[84vh] w-full flex flex-wrap gap-6 lg:overflow-auto">
          {
            note.map((notes, idx) => {
              return (

                <div key={idx} id='notes' className='bg-[url(/assets/note.webp)] bg-cover bg-no-repeat h-71 w-50 rounded-2xl p-4 pt-7 overflow-auto relative flex flex-col justify-between'>

                  <div>
                    <h1 className='text-[#232323] font-bold mb-2 text-2xl'>{notes.title}</h1>
                    <h3 className='text-[#444444]'>{notes.detail}</h3>
                  </div>

                  <button className='bg-red-500 w-full rounded py-1 font-bold mb-1 active:scale-98'
                    onClick={() => {
                      deleteNote(idx)
                    }}
                  >Delete</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App