// import React from 'react'
// import {motion} from 'framer-motion'

// const Home = () => {
//   return (
//     <div className='home__container w-screen h-screen absolute flex flex-col lg:flex-row justify-center'>
//         <motion.div
//           whileInView={{ x: [-100,0], y:[100,0], opacity: [0, 1] }}
//           transition={{ duration: 0.5 }}
//           className=" flex flex-row justify-center items-center "
//           // className="lg:h-full lg:w-full lg:z-10 lg:fixed flex flex-row justify-center items-center"
//         >
//           <div className="main_text font-serif p-4">
//             <h1 className='font-mono text-center '>Society <span className='text-teal-500' >for</span> Industrial <br /> <span className='text-teal-500'>and</span> Applied Mathematics</h1>
//           </div>
//         </motion.div>

//         <motion.div
//           className='flex justify-center items-center'
//         >
//           2nd div
//         </motion.div>
//     </div>
//   )
// }

// export default Home

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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

	const settings = {
		dots: false,
		infinite: true,
		lazyLoad: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		adaptiveHeight:true,
		pauseOnHover: true,
		vertical: true,
      	verticalSwiping: true,
		// centerMode:true,
		// slidesToShow:3,
		// fade:true,
		arrows:false
	  };


	const shuffleArray = (array) => {
		return array.slice().sort(() => Math.random() - 0.5);
	};
	// const imgArr2 = shuffleArray(imgArr);
	// const imgArr3 = shuffleArray(imgArr2); 

	// console.log(shuffledArray1);
	// console.log(shuffledArray2);

  return (
    <div className='home__container w-screen h-screen absolute flex flex-row justify-around -z-10'>
      <motion.div
        whileInView={{ x: [-100, 0], y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="h-full w-full fixed flex flex-col justify-center items-center lg:relative lg:h-auto lg:w-auto lg:max-w-[50%]"
      >

        <div className='backdrop-blur-lg bg-white/30 border-2 rounded-lg lg:bg-transparent h-fit p-2 flex flex-col justify-start'>

          <div className='home__image flex justify-center '>
            <img src={images.Siam_logo} alt="" className='w-1/2 bg-slate-700 backdrop-blur-sm rounded p-1' />
          </div>

          <div className=" main_text">
            {/* <h2 className='font-mono text-center whitespace-nowrap overflow-hidden text-ellipsis line-clamp-2 p-4'>
              Society <span className='text-teal-500'>for</span> Industrial <br />{' '}
              <span className='text-teal-500'>and</span> Applied Mathematics
            </h2> */}

			<h2 className='font-mono text-center whitespace-nowrap overflow-hidden text-ellipsis line-clamp-2 p-4'>
              Society <span className='text-teal-500'>for</span> Industrial <br />{' '}
              <span className='text-teal-500'>and</span> Applied Mathematics
            </h2>
          </div>

        </div>


      </motion.div>

      <motion.div className=' -z-10 hidden lg:flex flex-row justify-center items-center text-red-400 lg:w-[50%] w-full overflow-hidden brightness-90 p-4'>
		
	  	<div className="slider-container">
			<Slider {...settings} className="flex justify-center items-center">
				{imgArr.map((item, index) => (
					<div key={index} className="slide bg-contain h-1/2 xl:w-10 p-4 border-2 flex justify-center items-center">
					<img src={item} alt='' className='rounded-md h-96 xl:h-[33rem] 2xl:h-[40rem] w-full' />
					</div>
				))}
			</Slider>

        </div>

		{/* <div className="2 flex flex-col h-full w-1/3 ">
		{
				imgArr2.map((item,index)=>{
					return(
						<img src={item} key={index} alt='' className='m-2 rounded-md'/>
					)
				})
			}
		</div>
		<div className="3  flex flex-col h-full w-1/3">
		{
				imgArr3.map((item,index)=>{
					return(
						<img src={item} key={index} alt='' className='m-2 rounded-md'/>
					)
				})
			}
		</div> */}
      </motion.div>

    </div>
  );
};

export default Home;
