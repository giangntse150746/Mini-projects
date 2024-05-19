// FileUploadComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const ConverterComponent = () => {
  const [lsFiles, setLsFiles] = useState(null);

  const handleClickUpload = () => {
    document.getElementById('uploader')?.click();
  };

  const handleFileChange = (event) => {
    setLsFiles(event.target.files);
  };

  const handleUpload = async () => {
    if (!lsFiles) {
      alert('Please select an MP3 file');
      return;
    }
    const formData = new FormData();
    formData.append('mp3', lsFiles[0]);
    try {
      const response = await axios.post('http://localhost:3001/convert', formData, {
        responseType: 'blob',
      });
      // Create a blob URL for the WAV file
      const wavUrl = URL.createObjectURL(new Blob([response.data]));
      // Open the WAV file in a new tab
      window.open(wavUrl);
    } catch (error) {
      console.error('Error converting file:', error);
    }
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-start my-auto w-auto">
      <input id="uploader" type="file" onChange={handleFileChange} hidden aria-hidden />
      <div className="flex gap-3 items-center">
        <button
          onClick={handleClickUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Add File(s)
        </button>
        <span>
          File: <i>.../{lsFiles ? lsFiles[0]?.name : 'None'}</i>.
        </span>
      </div>
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Upload and Convert
      </button>
    </div>
  );
};

export default ConverterComponent;
