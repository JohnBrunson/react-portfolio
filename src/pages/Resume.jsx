import React, { useState } from 'react';

export default function Resume() {
    function DownloadButton() {
        const [fileName, setFileName] = useState('John Brunson Resume.pdf'); // What file name should this save with?
        const handleDownload = () => {
          const link = document.createElement('a');
          link.href = './assets/JohnBrunsonResume.pdf'; // Where is the file located?
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
      }
return (
<div>
    <h1>Resume</h1>
    <ul>Proficiencies:
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript/Typescript</li>
        <li>SQL</li>
        <li>React</li>
        <li>NodeJS</li>
    </ul>
    <p>Interested in more information?</p>
    <button onClick={handleDownload}>Download {fileName}</button>
</div>
)

}