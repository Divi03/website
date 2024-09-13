import React, { useState, useEffect } from 'react';

const Team = () => {
  const [data, setData] = useState(null);
  const [selectedYear, setSelectedYear] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from the external URL
    fetch('https://divi03.github.io/test_api/teams.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // console.log(data)
        setData(data);
        // Set the default selected year
        if (data.coordinators) {
          const years = Object.keys(data.coordinators);
          if (years.length > 0) {
            setSelectedYear(years[years.length-1]);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const coordinators = data.coordinators[selectedYear] || [];

  return (
    <div className='w-screen pt-24 flex flex-col items-center'>
      {/* Founding members */}
      <div className='pt-2 w-full'>
        <div className='w-full text-center py-4 bg-black bg-opacity-40 text-white'>
          <h2 className='text-xl font-bold'>Founding Members</h2>
        </div>

        <div className='flex justify-center items-center h-[33.33vh] w-full overflow-hidden relative transition-all duration-300 ease-in-out'>
          {/* Additional member */}
          <div className='relative flex-1 transition-all duration-300 ease-in-out overflow-hidden mx-[2px] hover:flex-[3] hover:z-10' style={{ height: '24rem' }}>
            <img
              src={data.additionalMember.image}
              alt={data.additionalMember.name}
              className='w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110'
            />
            <div className='absolute inset-0 bg-primary bg-opacity-60 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100'>
              <div className='text-center'>
                <h2 className='text-lg font-bold'>{data.additionalMember.name}</h2>
                <p className='text-gray-300'>{data.additionalMember.role}</p>
              </div>
            </div>
          </div>

          {data.foundingMembers.map((member, index) => (
            <div
              key={index}
              className='relative flex-1 transition-all duration-300 ease-in-out overflow-hidden mx-[2px] hover:flex-[3] hover:z-10'
              style={{ height: '24rem' }}
            >
              <img
                src={member.image}
                alt={member.name}
                className='w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110'
              />
              <div className='absolute inset-0 bg-primary bg-opacity-60 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100'>
                <div className='text-center'>
                  <h2 className='text-lg font-bold'>{member.name}</h2>
                  <p className='text-gray-300'>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full text-center py-4'>
        <h2 className='text-xl font-bold'>Coordinators</h2>
        <select
          className='p-2 border border-gray-300 rounded-md'
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {Object.keys(data.coordinators).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <div className='flex flex-row flex-wrap justify-center items-center w-full mt-4'>
          {coordinators.map((coordinator, index) => (
            <div
              key={index}
              className='m-2 p-2 border border-gray-300 rounded-lg shadow-lg bg-white coordinator-card'
            >
              <img
                src={coordinator.image}
                alt={coordinator.name}
                className='w-full h-40 object-cover mb-2'
                style={{ minWidth: '100%', minHeight: '100%', objectFit: 'cover' }} // Prevent images from shrinking
              />
              <div className='text-center'>
                <h3 className='text-lg font-bold'>{coordinator.name}</h3>
                <p className='text-gray-500'>{coordinator.designation}</p>
                <a href={coordinator.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className='w-6 h-6 mx-auto mt-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .coordinator-card {
          flex: 0 0 calc(16.66% - 16px); /* Adjust for margin */
          max-width: calc(16.66% - 16px); /* Adjust for margin */
          min-width: 150px; /* Minimum width to prevent shrinking */
        }
        @media (max-width: 1024px) {
          .coordinator-card {
            flex: 0 0 calc(33.33% - 16px); /* Show 3 cards per row on tablets */
            max-width: calc(33.33% - 16px);
          }
        }
        @media (max-width: 768px) {
          .coordinator-card {
            flex: 0 0 calc(50% - 16px); /* Show 2 cards per row on smaller screens */
            max-width: calc(50% - 16px);
          }
        }
        @media (max-width: 480px) {
          .coordinator-card {
            flex: 0 0 calc(50% - 16px); /* Show 2 cards per row on mobile */
            max-width: calc(50% - 16px);
          }
        }
      `}</style>
    </div>
  );
};

export default Team;
