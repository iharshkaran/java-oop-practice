import React from 'react'

const LeftPane = ({ title, setTitle, content, setContent, editId, setEditId, submitHandler, resetForm, loading }) => {
    return (
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
    )
}

export default LeftPane
