// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-24">
//       <header className="text-center py-10 bg-gray-900 text-white w-full">
//         <h1 className="text-4xl font-bold">Connect with Us</h1>
//       </header>

//       <main className="container mx-auto p-6 flex-grow flex flex-col items-center space-y-8">
//         <section className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 text-center">
//           {/* <h2 className="text-3xl font-bold mb-4">Connect with Us</h2> */}
//           <p className="mb-4">Department of CS&IT, Jaypee University of Information Technology, Solan, India</p>
//           <p>Email: <a href="mailto:siam@juitsolan.in" className="text-blue-500">siam@juitsolan.in</a></p>
//           <p>Email: <a href="mailto:presidentsiam@juitsolan.in" className="text-blue-500">presidentsiam@juitsolan.in</a></p>
//         </section>

//         <section className="w-full md:w-2/3 lg:w-1/2">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.34789297826!2d77.06758407576623!3d31.01655557186025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057db24364e085%3A0x4f4fefd65caa0317!2sJaypee%20University%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1718798213590!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
//             width="100%"
//             height="450"
//             allowFullScreen=""
//             loading="lazy"
//             className="border-0 rounded-lg shadow-lg"
//             title="Google Maps Location"
//           ></iframe>
//         </section>
//       </main>

//     </div>
//   );
// };

// export default Contact;


import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-24">
      <header className="text-center py-10 bg-gray-900 text-white w-full">
        <h1 className="text-4xl font-bold">Connect with Us</h1>
      </header>

      <main className="container mx-auto p-6 flex-grow flex flex-col items-center space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 text-center">
          <h2 className="text-3xl font-bold mb-4">SIAM-JUIT</h2>
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center text-lg mb-2">
              <span className="mr-2" role="img" aria-label="Location">📍</span>
              <p>Department of CS&IT, Jaypee University of Information Technology, Solan, India</p>
            </div>
            <div className="flex items-center text-lg mb-2">
              <span className="mr-2" role="img" aria-label="Email">✉️</span>
              <p><a href="mailto:siam@juitsolan.in" className="text-blue-500">siam@juitsolan.in</a></p>
            </div>
            <div className="flex items-center text-lg mb-2">
              <span className="mr-2" role="img" aria-label="Email">✉️</span>
              <p><a href="mailto:presidentsiam@juitsolan.in" className="text-blue-500">presidentsiam@juitsolan.in</a></p>
            </div>
          </div>
          <div className="mt-6 w-full flex justify-center">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.34789297826!2d77.06758407576623!3d31.01655557186025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057db24364e085%3A0x4f4fefd65caa0317!2sJaypee%20University%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1718798213590!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-0 rounded-lg shadow-lg"
            title="Google Maps Location"
          ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
