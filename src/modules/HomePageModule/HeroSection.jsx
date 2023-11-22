import React from 'react';
// import backgroundhero from '/images/backgroundhero.svg';

const HeroSection = () => {
    // console.log(backgroundhero);
    return (
        <div className=' commonContainer  flex items-center justify-between'>
            <div className='leftSide'><h1 className='header1'>Enhancing the Integrity
                of Online Examinations </h1>
                <h2 className='header2'>At SD proctor we are foused on creating more secured/ safe methods for students to take exams</h2>
                <button className='btn'>Learn More</button>
            </div>
            <div
                className='rightSide'
            // style={{
            //   background: `url()`,
            //   backgroundSize: 'cover', // You can adjust the background size property
            //   width: '100px', // Set width and height as needed
            //   height: '100px',
            // }}
            >
                {/* Content for the second div */}
            </div>
        </div>
    );
};

export default HeroSection;

