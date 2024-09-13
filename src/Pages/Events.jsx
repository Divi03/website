import React, { useEffect, useState } from 'react';

const Events = () => {
  // Assuming new event and events by year are passed as props or managed in state
  const [newEvent, setNewEvent] = useState({});
  const [eventsByYear, setEventsByYear] = useState({});

  const fetchEventsData = () => {
    fetch('https://divi03.github.io/test_api/events.json')
      .then(response => response.json())
      .then(data => {
        setNewEvent(data.newEvent);
        setEventsByYear(data.eventsByYear);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchEventsData();
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const [selectedYear, setSelectedYear] = useState(null); // Default selected year

  // Select the latest year automatically on component mount
  useEffect(() => {
    const years = Object.keys(eventsByYear);
    const latestYear = years[years.length - 1]; // Get the last (latest) year from eventsByYear object
    setSelectedYear(latestYear); // Set the selectedYear state to the latest year
  }, [eventsByYear]); // Only run this effect when eventsByYear changes

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  if (!selectedYear) {
    return <div>Loading...</div>; // Placeholder for when selectedYear is null (initial state)
  }

  return (
    <div className='min-h-screen flex flex-col items-center pt-24'>

      {/* New event section */}
      {newEvent && newEvent.name ? (
        <>
          {/* for Larger screen */}
          <div className='hidden sm:flex w-4/5 h-[45vh] m-2 border-gray-400 border-double border-[2px] justify-evenly items-center relative'>
            <div className='newEvent__image h-full w-auto'>
              <img src={newEvent.imageUrl} alt={newEvent.name} className='w-full h-full object-cover' />
            </div>

            <div className='newEvent__details flex flex-col justify-start items-center w-[45%] h-full p-4'>
              <h4 className='text-xl font-bold mb-2 text-center'>{newEvent.name}</h4>
              <p className='text-gray-600 mb-2 overflow-scroll h-[50%]'>{newEvent.description}</p>
              <div className='flex flex-col mb-2 w-full'>
                <span className='text-gray-500 text-sm'>Event Date:</span>
                <span className='text-gray-800'>{newEvent.eventDate}</span>
              </div>
              <div className='flex flex-col mb-2 w-full'>
                <span className='text-gray-500 text-sm'>Last Date to Register:</span>
                <span className='text-gray-800'>{newEvent.lastDateToRegister}</span>
              </div>
              <a
                href={newEvent.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center block'
                style={{ maxWidth: '200px' }}
              >
                Register
              </a>
            </div>
          </div>
          

          {/* for small screen */}
          <div className='flex sm:hidden w-full h-[45vh] m-2 border-gray-400 border-double border-[2px] relative'>
            <div className='relative w-full h-full flex flex-col justify-center items-center perspective-1000'>
              {/* Front Side (Image) */}
              <div
                className={`absolute w-full h-full transition-transform duration-500 transform ${
                  isFlipped ? 'rotate-y-180' : 'rotate-y-0'
                } flex flex-col justify-center items-center`}
                style={{ display: isFlipped ? 'none' : 'flex' }}
              >
                <div className='h-full w-full overflow-hidden'>
                  <img
                    src={newEvent.imageUrl}
                    alt={newEvent.name}
                    className='w-full h-full object-contain cursor-pointer'
                    onClick={handleFlip}
                  />
                  <button
                    className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-md'
                    onClick={handleFlip}
                  >
                    Info
                  </button>
                </div>
              </div>

              {/* Back Side (Details) */}
              <div
                className={`absolute w-full h-full bg-white p-4 flex flex-col justify-center items-center transition-transform duration-500 transform ${
                  isFlipped ? 'rotate-y-0' : 'rotate-y-180'
                }`}
                style={{ display: isFlipped ? 'flex' : 'none' }}
              >
                <h4 className='text-xl font-bold mb-2 text-center'>{newEvent.name}</h4>
                <p className='text-gray-600 m-2 overflow-scroll h-[55%] w-[90%]'>{newEvent.description}</p>
                <hr className="w-full" />
                <div className='flex flex-row justify-between mb-2 w-full'>
                  <div className='flex flex-col'>

                    <span className='text-gray-500 text-sm'>Event Date:</span>
                    <span className='text-gray-800'>{newEvent.eventDate}</span>
                  </div>

                  <div className='flex flex-col'>

                    <span className='text-gray-500 text-sm'>Last Date to Register:</span>
                    <span className='text-gray-800'>{newEvent.lastDateToRegister}</span>
                  </div>
                </div>
                <a
                  href={newEvent.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center block'
                  style={{ maxWidth: '200px' }}
                >
                  Register
                </a>
                <button
                  className='mt-4 text-blue-500 underline'
                  onClick={handleFlip}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {/* Year selector */}
      <div className='m-2 p-2 text-justify w-11/12 shadow-sm rounded-md'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight'>
          A Year in SIAM
        </h2>
      </div>

      <div className='w-4/5 mb-4 flex justify-center items-center'>
        <label className='block text-sm font-medium text-gray-700 p-2'>Select Year:</label>
        <select
          className='mt-1 block w-min p-2 border border-gray-300 rounded-md'
          value={selectedYear}
          onChange={handleYearChange}
        >
          {Object.keys(eventsByYear).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Year-wise events section */}
      <div className='w-full sm:w-90 md:w-4/5 px-4'>
        {eventsByYear[selectedYear].map(event => (
          <div key={event.id} className='flex items-center justify-between bg-white shadow-lg rounded-lg p-4 mb-4'>
            {/* Left side: Title, Description, and View Report button */}
            <div className='flex-1'>
              <h2 className='text-xl font-bold mb-2'>{event.name}</h2>
              <p className='text-gray-600 mb-2'>{event.description}</p>
              <a
                href={event.pdfUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block'
              >
                View Report
              </a>
            </div>
            {/* Right side: Event Image */}
            <div className='flex-shrink-0 w-32 h-32 ml-4'>
              <img
                src={event.imageUrl}
                alt={event.name}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
