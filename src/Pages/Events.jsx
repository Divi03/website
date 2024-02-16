// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Events = () => {
//   const [events, setEvents] = useState([
//     { id: 1, name: 'Event 1', description: 'Description of Event 1', imageUrl: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaXVtfGVufDB8fDB8fHww', pdfUrl: 'https://drive.google.com/file/d/1Uq1ujdFYz0XnO9KBtitSWTUyb-q5lDlp/preview' },
//     { id: 2, name: 'Event 2', description: 'Description of Event 2', imageUrl: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaXVtfGVufDB8fDB8fHww', pdfUrl: 'https://drive.google.com/file/d/1Uq1ujdFYz0XnO9KBtitSWTUyb-q5lDlp/preview' },
//     { id: 3, name: 'Event 3', description: 'Description of Event 3', imageUrl: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaXVtfGVufDB8fDB8fHww', pdfUrl: 'https://drive.google.com/file/d/1Uq1ujdFYz0XnO9KBtitSWTUyb-q5lDlp/preview' }
//   ]);

//   const newEvent = false; // Change this to true if there's a new event

//   return (
//     <div className='events__container m-4 w-screen h-screen md:pt-4 absolute flex justify-around items-center flex-col-reverse md:flex-row'>
      
//       {/* Event List Div */}
//       <div className='flex h-auto md:h-4/5 w-full md:w-[40%] border-2 flex-col justify-center items-center'>
//         <h2>Event List</h2>
//         <ul className='divide-y-2 > * + * overflow-y-scroll'>
//           {events.map(event => (
//             <li key={event.id} className="mb-4">

//               <div className='flex flex-row'>
//                 <h3>{event.name}</h3>
//                 <img src={event.imageUrl} alt={event.name} className="h-[15rem] mb-2" />
//                 <p>{event.description}</p>
//                 {/* <Link to={`/viewreport?url=${encodeURIComponent(event.pdfUrl)}`}  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View PDF</Link> */}
//                 <Link to={`${event.pdfUrl}`}  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View PDF</Link>

//               </div>
              
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* New Event Div */}
//       <div className='flex h-auto md:h-4/5 w-full md:w-[40%] border-2 flex-col justify-center items-center'>
//         {newEvent ? (
//           <React.Fragment>
//             <h2>New Event</h2>
//             <ul>
//               {events.map(event => (
//                 <li key={event.id} className="mb-4">
//                   <h3>{event.name}</h3>
//                   <img src={event.imageUrl} alt={event.name} className="max-w-full h-auto mb-2" />
//                   <p>{event.description}</p>
//                   <Link to={`${event.pdfUrl}`}  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View PDF</Link>
//                 </li>
//               ))}
//             </ul>
//           </React.Fragment>
//         ) : (
//           <p>No new event</p>
//         )}
//       </div>

//     </div>
//   );
// }

// export default Events;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1', description: 'Description of Event 1', imageUrl: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaXVtfGVufDB8fDB8fHww', pdfUrl: 'https://drive.google.com/file/d/1Uq1ujdFYz0XnO9KBtitSWTUyb-q5lDlp/preview' },
    { id: 2, name: 'Event 2', description: 'Description of Event 2', imageUrl: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaXVtfGVufDB8fDB8fHww', pdfUrl: 'https://drive.google.com/file/d/1Uq1ujdFYz0XnO9KBtitSWTUyb-q5lDlp/preview' },
    { id: 3, name: 'Event 3', description: 'Description of Event 3', imageUrl: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaXVtfGVufDB8fDB8fHww', pdfUrl: 'https://drive.google.com/file/d/1Uq1ujdFYz0XnO9KBtitSWTUyb-q5lDlp/preview' }
  ]);

  const newEvent = false; // Change this to true if there's a new event

  return (
    <div className='events__container mt-[5rem] w-screen h-screen md:pt-4 absolute flex justify-center md:justify-around items-center flex-col-reverse md:flex-row'>
      
      {/* Event List Div */}
      <div className='flex h-4/5 md:h-4/5 w-full md:w-[40%] border-2 flex-col justify-center items-center'>
        <h2>Event List</h2>
        <div className='overflow-y-auto h-full'>
          <ul className='divide-y-2 > * + *'>
            {events.map(event => (
              <li key={event.id} className="mb-4">
                <div className='flex flex-row'>
                  <h3>{event.name}</h3>
                  <img src={event.imageUrl} alt={event.name} className="h-[15rem] mb-2" />
                  <p>{event.description}</p>
                  <Link to={`${event.pdfUrl}`}  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View PDF</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* New Event Div */}

      {/* For new event Make A Popup window */}
      {/* <div className='flex h-auto md:h-4/5 w-full md:w-[40%] border-2 flex-col justify-center items-center'>
        {newEvent ? (
          <React.Fragment>
            <h2>New Event</h2>
          </React.Fragment>
        ) : (
          <p>No new event</p>
        )}
      </div> */}


    </div>
  );
}

export default Events;
