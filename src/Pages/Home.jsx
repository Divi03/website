import React from "react";
import { motion } from "framer-motion";
import images from '../Assets/Images'


const Home = () => {
  const imgArr = [
    // 'https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg',
    'https://plus.unsplash.com/premium_photo-1661898424988-a5f6d40d3db2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1633493702341-4d04841df53b?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://plus.unsplash.com/premium_photo-1673589625808-294b22d67848?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    ];



	const shuffleArray = (array) => {
		return array.slice().sort(() => Math.random() - 0.5);
	};
	const imgArr2 = shuffleArray(imgArr);
	const imgArr3 = shuffleArray(imgArr2); 


  return (
    <div className='home__container w-screen h-screen absolute flex flex-row justify-around -z-10'>
    	<motion.div whileInView={{ x: [-100, 0], y: [100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}
    		className="h-full w-full fixed flex flex-col justify-center items-center lg:relative lg:h-auto lg:w-auto lg:max-w-[50%]">

    		<div className="hidden lg:block">
				{/* Word cloud 1 */}
			</div>



    		{/* Main title SIAM */}
    		<div
    			className='backdrop-blur-lg bg-white/30 border-2 rounded-lg lg:bg-transparent h-fit p-2 flex flex-col justify-start'>

    			<div className='home__image flex justify-center '>
    				<img src={images.Siam_logo} alt="" className='w-1/2 bg-slate-700 backdrop-blur-sm rounded p-1' />
    			</div>

    			<div className=" main_text">
    				<h2
    					className='font-mono text-center whitespace-nowrap overflow-hidden text-ellipsis line-clamp-2 p-4'>
    					Society <span className='text-teal-500'>for</span> Industrial <br />{' '}
    					<span className='text-teal-500'>and</span> Applied Mathematics
    				</h2>
    			</div>

    		</div>


    		<div className="hidden lg:block">
				{/* Word cloud 2 */}
			</div>





    	</motion.div>

    	<motion.div
    		className=' -z-10  lg:flex flex-row justify-center items-center text-red-400 lg:w-[50%] w-full overflow-hidden brightness-90 m-4 mt-20'>

    		<div
    			className="slider-container bg-white shadow-lg h-[100vh] w-[90vw] overflow-hidden relative m-auto flex justify-center space-x-4">
    			{/* Column 1 - Scroll Up to Down */}
    			<div className="slider bg-white h-full w-1/3 overflow-hidden relative">
    				<div className="slide-track flex flex-col animate-scroll-up-slow">
    					{imgArr.concat(imgArr).map((item, index) => (
    					<div key={index} className="slide h-[200px] w-[250px] flex-shrink-0">
    						<img src={item} alt="" className="h-full w-full object-cover" />
    					</div>
    					))}
    				</div>
    			</div>

    			{/* Column 2 - Scroll Down to Up */}
    			<div className="slider bg-white h-full w-1/3 overflow-hidden relative">
    				<div className="slide-track flex flex-col animate-scroll-down-fast">
    					{imgArr2.concat(imgArr).map((item, index) => (
    					<div key={index} className="slide h-[200px] w-[250px] flex-shrink-0">
    						<img src={item} alt="" className="h-full w-full object-cover" />
    					</div>
    					))}
    				</div>
    			</div>

    			{/* Column 3 - Scroll Up to Down (Faster) */}
    			<div className="slider bg-white h-full w-1/3 overflow-hidden relative">
    				<div className="slide-track flex flex-col animate-scroll-up-fast">
    					{imgArr.concat(imgArr).map((item, index) => (
    					<div key={index} className="slide h-[200px] w-[250px] flex-shrink-0">
							<div className="text-white z-40 text-[2rem] hidden hover:block">HI</div>
    						<img src={item} alt="" className="h-full w-full object-cover" />
    					</div>
    					))}
    				</div>
    			</div>


				{/* <div className="slider bg-white h-full w-1/3 overflow-hidden relative">
					<div className="slide-track flex flex-col animate-scroll-up-fast">
						{imgArr.concat(imgArr).map((item, index) => (
						<div key={index} className="slide h-[200px] w-[250px] flex-shrink-0 relative group">
							<div // text appear on hover
								className="text-white z-40 text-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center">
								HI
							</div>
							<img src={item} alt="" className="h-full w-full object-cover" />
						</div>
						))}
					</div>
				</div> */}

				</div>


    	</motion.div>




    </div>
  );
};

export default Home;





// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import images from '../Assets/Images';
// import "./Home.css";

// const Home = () => {
//   const imgArr = [
//     'https://plus.unsplash.com/premium_photo-1661898424988-a5f6d40d3db2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1633493702341-4d04841df53b?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://plus.unsplash.com/premium_photo-1673589625808-294b22d67848?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   ];

//   const shuffleArray = (array) => {
//     return array.slice().sort(() => Math.random() - 0.5);
//   };

//   const imgArr2 = shuffleArray(imgArr);
//   const imgArr3 = shuffleArray(imgArr2);

//   const wordsArray = ["Mathematics", "Industry", "Research", "Applications", "Innovation", "Technology",
//     "Problem-Solving", "Science", "Collaboration"
//   ];

//   useEffect(() => {
//     const setupWordCloud = (containerId) => {
//       const container = document.getElementById(containerId);

//       if (!container) return;

//       // Grid variables
//       const grid = [];
//       const gridSize = 5; // Adjust grid density
//       const cellWidth = container.offsetWidth / gridSize;
//       const cellHeight = container.offsetHeight / gridSize;

//       // Initialize grid with nulls
//       for (let i = 0; i < gridSize * gridSize; i++) {
//         grid.push(null);
//       }

//       // Function to get random available cell from the grid
//       function getRandomAvailableCell() {
//         const availableCells = grid
//           .map((cell, index) => (cell === null ? index : null))
//           .filter((index) => index !== null);

//         if (availableCells.length === 0) return null;

//         const randomIndex = Math.floor(Math.random() * availableCells.length);
//         return availableCells[randomIndex];
//       }

//       // Function to place word in a random cell
//       function placeWordInCell(word) {
//         const randomCellIndex = getRandomAvailableCell();

//         if (randomCellIndex === null) return; // No available cells

//         // Mark the cell as occupied
//         grid[randomCellIndex] = word;

//         // Calculate position for the word
//         const row = Math.floor(randomCellIndex / gridSize);
//         const col = randomCellIndex % gridSize;
//         const x = col * cellWidth;
//         const y = row * cellHeight;

//         // Create and style the word element
//         const wordElement = document.createElement('div');
//         wordElement.classList.add('word');
//         wordElement.textContent = word;
//         wordElement.style.left = `${x}px`;
//         wordElement.style.top = `${y}px`;

//         // Append to container
//         container.appendChild(wordElement);

//         // Despawn (remove) the word after a delay
//         setTimeout(() => {
//           wordElement.classList.add('fade-out');
//           setTimeout(() => {
//             container.removeChild(wordElement);
//             grid[randomCellIndex] = null; // Free the cell again
//           }, 1000); // Match with fade-out animation duration
//         }, 4000); // Stay on screen for 4 seconds before fading out
//       }

//       function addWordsWithTypingEffect() {
//         wordsArray.forEach((word, index) => {
//           setTimeout(() => {
//             placeWordInCell(word);
//           }, index * 1000); // Delay the appearance of each word
//         });
//       }

//       // Loop the process to keep adding and removing words
//       addWordsWithTypingEffect();
//       const wordInterval = setInterval(() => {
//         addWordsWithTypingEffect();
//       }, wordsArray.length * 1000 + 5000); // Start a new cycle after the current one finishes

//       // Cleanup on component unmount
//       return () => clearInterval(wordInterval);
//     };

//     // Initialize word clouds for both containers
//     setupWordCloud('word-cloud-container-1');
//     setupWordCloud('word-cloud-container-2');
//   }, []);

//   return (
//     <div className='home__container w-screen h-screen absolute flex flex-row justify-around -z-10'>
//       <motion.div
//         whileInView={{ x: [-100, 0], y: [100, 0], opacity: [0, 1] }}
//         transition={{ duration: 0.5 }}
//         className="h-full w-full fixed flex flex-col justify-center items-center lg:relative lg:h-auto lg:w-auto lg:max-w-[50%]"
//       >
//         {/* Word Cloud Container 1 */}
//         <div id="word-cloud-container-1" className="hidden lg:block relative w-full h-[400px]"></div>

//         {/* Main title SIAM */}
//         <div className='backdrop-blur-lg bg-white/30 border-2 rounded-lg lg:bg-transparent h-fit p-2 flex flex-col justify-start'>
//           <div className='home__image flex justify-center'>
//             <img src={images.Siam_logo} alt="Siam Logo" className='w-1/2 bg-slate-700 backdrop-blur-sm rounded p-1' />
//           </div>
//           <div className="main_text">
//             <h2 className='font-mono text-center whitespace-nowrap overflow-hidden text-ellipsis line-clamp-2 p-4'>
//               Society <span className='text-teal-500'>for</span> Industrial <br />
//               <span className='text-teal-500'>and</span> Applied Mathematics
//             </h2>
//           </div>
//         </div>

//         {/* Word Cloud Container 2 */}
//         <div id="word-cloud-container-2" className="hidden lg:block relative w-full h-[400px]"></div>
//       </motion.div>

//       <motion.div
//         className='-z-10 lg:flex flex-row justify-center items-center text-red-400 lg:w-[50%] w-full overflow-hidden brightness-90 m-4 mt-20'
//       >
//         <div className="slider-container bg-white shadow-lg h-[100vh] w-[90vw] overflow-hidden relative m-auto flex justify-center space-x-4">
//           {/* Column 1 - Scroll Up to Down */}
//           <div className="slider bg-white h-full w-1/3 overflow-hidden relative">
//             <div className="slide-track flex flex-col animate-scroll-up-slow">
//               {imgArr.concat(imgArr).map((item, index) => (
//                 <div key={index} className="slide h-[200px] w-[250px] flex-shrink-0">
//                   <img src={item} alt="" className="h-full w-full object-cover" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Column 2 - Scroll Down to Up */}
//           <div className="slider bg-white h-full w-1/3 overflow-hidden relative">
//             <div className="slide-track flex flex-col animate-scroll-down-fast">
//               {imgArr2.concat(imgArr).map((item, index) => (
//                 <div key={index} className="slide h-[200px] w-[250px] flex-shrink-0">
//                   <img src={item} alt="" className="h-full w-full object-cover" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Column 3 - Scroll Up to Down (Faster) */}
//           <div className="slider bg-white h-full w-1/3 overflow-hidden relative">
//             <div className="slide-track flex flex-col animate-scroll-up-fast">
//               {imgArr.concat(imgArr3).map((item, index) => (
//                 <div key={index} className="slide h-[200px] w-[250px] flex-shrink-0">
//                   <img src={item} alt="" className="h-full w-full object-cover" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Home;
