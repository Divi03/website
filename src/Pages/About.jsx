// import React from 'react';
// import siamLogo from '../Assets/Images/SiamLogo.svg'


// const AboutUs = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen pt-24">
//       <header className="text-center py-10 bg-gray-600 text-white">
//         <h1 className="text-4xl font-bold">About Us</h1>
//       </header>

//       <main className="container mx-auto p-6">
//         <section className="flex flex-col md:flex-row md:justify-around items-center bg-white rounded-lg shadow-lg p-10 my-6">
//           <div className="flex-1 md:pr-10">
//             <h2 className="text-2xl font-semibold text-gray-700">SIAM</h2>
//             <p className="mt-4 text-gray-600">
//               Society for Industrial and Applied Mathematics (SIAM) is an international community with over 14,000 members and almost 500 worldwide academic, research and development, government, and military organisations as institutional members. Some of the reputed student chapters include the Massachusetts Institute of Technology, Harvard University, Imperial College London and Stanford University.
//             </p>
//             <p className="mt-4 text-gray-600">
//               SIAM was incorporated in 1952 as a non-profit organisation to convey and implement useful mathematical knowledge for practical, industrial and scientific use. Since then, SIAM has been successfully fostering the development of applied mathematics and computational sciences.
//             </p>
//           </div>
//           <div className="flex-1 md:pl-10 flex justify-center">
//             <img src={siamLogo} alt="SIAM Logo" className="max-w-full h-auto grayscale" />
//           </div>
//         </section>

//         <section className="flex flex-col md:flex-row md:justify-around items-center bg-white rounded-lg shadow-lg p-10 my-6">
//           <div className="flex-1 md:pr-10 flex justify-center">
//             <img src={siamLogo} alt="SIAM-JUIT" className="max-w-full h-auto" />
//           </div>
//           <div className="flex-1 md:pl-10">
//             <h2 className="text-2xl font-semibold text-gray-700">SIAM-JUIT</h2>
//             <p className="mt-4 text-gray-600">
//               SIAM-JUIT is the sixth student chapter of SIAM to be established in India, with the previously established ones being in IISc Bangalore, DTU Delhi, IIT Guwahati. SIAM-JUIT aims to provide the means to the students to excel in the fields that follow an interdisciplinary approach and bridge the gap between classroom knowledge and real-world applications.
//             </p>
//             <p className="mt-4 text-gray-600">
//               It provides the students with a platform to brainstorm, freely exchange ideas and work various aspects of mathematics related to their disciplines. It strives to enable the students to push past the boundaries of curriculum and widen their horizons through talks with experts and seasoned professionals, projects, research and industrial exposure.
//             </p>
//           </div>
//         </section>

//         <section className="flex flex-col md:flex-row md:justify-around items-center bg-white rounded-lg shadow-lg p-10 my-6">
//           <div className="flex-1 md:pr-10 flex justify-center">
//             <img src={"https://media.istockphoto.com/id/1285476239/vector/animator-sitting-at-workplace-and-creating-motion-design.jpg?s=612x612&w=0&k=20&c=svmViubF5mM3ECH_PUzMsUGVHotpAC2uioTanS3h3II="} alt="Interactive Work" className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 max-w-full h-auto" />
//           </div>
//           <div className="flex-1 md:pl-10">
//             <h2 className="text-2xl font-semibold text-gray-700">Interactive Learning</h2>
//             <p className="mt-4 text-gray-600">
//               SIAM-JUIT provides a conducive environment for students to learn and grow through interactive projects and activities. Students are encouraged to participate in hands-on learning experiences that complement their theoretical knowledge.
//             </p>
//             <p className="mt-4 text-gray-600">
//               Our approach integrates modern technology with traditional learning methods to create a well-rounded educational experience.
//             </p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default AboutUs;





import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-24">
      <header className="text-center py-10 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>

      <main className="container mx-auto p-6 space-y-8">
        {/* SIAM Section */}
        <section className="relative h-80 bg-cover bg-center rounded-lg overflow-hidden shadow-lg" 
                 style={{ backgroundImage: `url(${"https://media.istockphoto.com/id/1357188330/vector/artificial-intelligence-machine-learning-icons-monoline-series.jpg?s=612x612&w=0&k=20&c=psr7D9CsTlHvEUlIzYKypgbu058z1yMZ6H769Cf235k="})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
            <h2 className="text-3xl font-bold mb-4">SIAM</h2>
            <p className="max-w-2xl overflow-scroll">
              Society for Industrial and Applied Mathematics (SIAM) is an international community with over 14,000
              members and almost 500 worldwide academic, research and development, government, and military
              organisations as institutional members.
              Some of the reputed student chapters include the Massachusetts Institute of Technology, Harvard
              University, Imperial College London and Stanford University. SIAM was incorporated in 1952 as a non-profit
              organisation to convey and implement useful mathematical knowledge for practical, industrial and
              scientific use. Since then SIAM has been successfully fostering the development of applied mathematics and
              computational sciences.
            </p>
          </div>
        </section>

        {/* SIAM-JUIT Section */}
        <section className="relative h-80 bg-cover bg-center rounded-lg overflow-hidden shadow-lg" 
                 style={{ backgroundImage: `url(${"https://media.istockphoto.com/id/484669341/vector/operator.jpg?s=612x612&w=0&k=20&c=woDDFgm_l4d-QlRd5M0FyOabAkdMoqSteybnOHIij-4="})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
            <h2 className="text-3xl font-bold mb-4">SIAM-JUIT</h2>
            <p className="max-w-2xl overflow-scroll">
              SIAM-JUIT is the sixth student chapter of SIAM to be established in India, with the previously established
              ones being in IISc Bangalore, DTU Delhi, IIT Guwahati. SIAM-JUIT aims to provide the means to the students
              to excel in the fields that follow an interdisciplinary approach and bridge the gap between classroom
              knowledge and real-world applications. It provides the students with a platform to brainstorm, freely
              exchange ideas and work various aspects of mathematics related to their disciplines. It strives to enable
              the students to push past the boundaries of curriculum and widen their horizons through talks with experts
              and seasoned professionals, projects, research and industrial exposure.
            </p>
          </div>
        </section>

        {/* // Interactive Learning Section
        <section className="relative h-80 bg-cover bg-center rounded-lg overflow-hidden shadow-lg" 
                 style={{ backgroundImage: `url(${"https://media.istockphoto.com/id/1285476239/vector/animator-sitting-at-workplace-and-creating-motion-design.jpg?s=612x612&w=0&k=20&c=svmViubF5mM3ECH_PUzMsUGVHotpAC2uioTanS3h3II="})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Interactive Learning</h2>
            <p className="max-w-2xl">
              SIAM-JUIT provides a conducive environment for students to learn and grow through interactive projects and activities. Our approach integrates modern technology with traditional learning methods.
            </p>
          </div>
        </section> */}
      </main>

      {/* <footer className="text-center py-6 bg-gray-900 text-white">
        <p>&copy; 2024 SIAM-JUIT. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default About;
