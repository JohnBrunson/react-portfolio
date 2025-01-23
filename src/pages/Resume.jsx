import React, { useState } from 'react';

export default function Resume() {
  const [fileName, setFileName] = useState('JohnBrunsonResume.pdf'); // What file name should this save with?
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/JohnBrunsonResume.pdf'; // Where is the file located?
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="container">
      <div className="row pt-5">
        <h1 className="lora-header">Resume</h1>
        <div className="container col-md-6 body-main pt-5 mt-3">
          <div className="resume">
            <h2 className="lora-header">Programming Proficiencies</h2>
            <ul>
              <li className="raleway-body">HTML</li>
              <li className="raleway-body">CSS</li>
              <li className="raleway-body">Javascript/Typescript</li>
              <li className="raleway-body">SQL</li>
              <li className="raleway-body">React</li>
              <li className="raleway-body">NodeJS</li>
            </ul>
          </div>
        </div>
        <div className="container col-md-6 body-main pt-5 mt-3">
          <h2 className="lora-header">Other Technical Skills</h2>
          <ul>
            <li className="raleway-body">UAT/Some QA Testing Experience</li>
            <li className="raleway-body">Technical lead tester on multiple projects, large and small</li>
            <li className="raleway-body">Techical Documentation and Knowledge Management worker.</li>
          </ul>
        </div>

        <p className="raleway-body">Interested in more information?</p>
        <button className="btn btn-outline-primary" onClick={handleDownload}>Download My Resume!</button>

      </div>
    </div>

  )

}