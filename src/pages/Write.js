import React, { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div>

      <div className='mt-5 w-[70%] justify-center items-center mx-auto'>
        <input className='p-2 border mb-5' type="text" placeholder='title' />
        <div className=''>
          <ReactQuill theme='snow' value={value} onChange={setValue}  />
        </div>

        <input type="file" name="" id="" />
        <button className='bg-slate-300 p-2 rounded-lg m-2'>save as draft</button>
        <button className='bg-slate-300 p-2 rounded-lg m-2'>update</button>

        <input type="radio" name="cat" value="art" id="art" />
        <label htmlFor='art'>Art</label>

        <input type="radio" name="cat" value="science" id="science" />
        <label htmlFor='science'>science</label>

        <input type="radio" name="cat" value="technology" id="technology" />
        <label htmlFor='technology'>Technology</label>

        <input type="radio" name="cat" value="cinema" id="cinema" />
        <label htmlFor='cinema'>Cinema</label>

        <input type="radio" name="cat" value="design" id="design" />
        <label htmlFor='design'>Design</label>

        <input type="radio" name="cat" value="design" id="design" />
        <label htmlFor='design'>Food</label>
      </div>



    </div>
  )
}

export default Write