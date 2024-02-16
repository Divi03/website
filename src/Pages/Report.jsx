import React from 'react';

const Report = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const pdfUrl = queryParams.get('url');

  // Extracting the file ID from the Google Drive URL
  const fileIdMatch = pdfUrl && pdfUrl.match(/[-\w]{25,}/);
  const fileId = fileIdMatch ? fileIdMatch[0] : null;
  const embedUrl = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : '';

  return (
    <div className='contact__container w-screen h-screen p-2 absolute flex justify-center items-center'>
      {embedUrl ? (
        <div className="pdf-viewer">
          <iframe title="PDF Viewer" src={embedUrl} width="800" height="600"></iframe>
        </div>
      ) : (
        <div>No PDF to display</div>
      )}
    </div>
  );
}

export default Report;

// Report.js

// import React from 'react';
// import { useParams } from 'react-router-dom';

// const Report = () => {
//   const { url } = useParams(); // Access parameter using useParams hook

//   // Render the PDF viewer with the provided URL
//   return (
//     <div className='contact__container w-screen h-screen p-2 absolute flex justify-center items-center'>
//       <div className="pdf-viewer">
//         <iframe title="PDF Viewer" src={decodeURIComponent(url)} width="800" height="500"></iframe>
//       </div>
//     </div>
//   );
// }

// export default Report;
