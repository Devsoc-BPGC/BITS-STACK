import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function QuillTextArea({ height, setBody }) {
  const [text, setText] = useState(' ');
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'blockquote'],
      ['link', 'image', 'code-block'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'code-block',
  ];

  return (
    <div>
      <ReactQuill
        value={text}
        // scrollingContainer
        onChange={val => {
          setText(val);
          setBody(val);
        }}
        modules={modules}
        formats={formats}
        style={{ height, marginBottom: '5vh' }}
      />
    </div>
  );
}
