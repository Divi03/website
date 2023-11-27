import React from 'react'

const About = () => {
  const imgArr = [
    'https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg',
    'https://plus.unsplash.com/premium_photo-1661898424988-a5f6d40d3db2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1633493702341-4d04841df53b?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://plus.unsplash.com/premium_photo-1673589625808-294b22d67848?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    ];
  return (
    <div className='about__container w-screen h-screen pt-2 absolute flex justify-center items-center'>About
    
    {imgArr.map((item, index) => (
				<div key={index} className="slide bg-cover m-4 border-2">
					<img src={item} alt='' className='rounded-md h-full w-full' />
				</div>
				))}
    
    </div>
    // <h1 className='p-32'>Hello</h1>
  )
}
export default About