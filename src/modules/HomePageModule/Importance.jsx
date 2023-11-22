import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/apichecker.svg';
import picture from '@/assets/images/Frame.svg';
import icon from '@/assets/images/preventionicon.svg';
import illustration from '@/assets/images/securityicon.svg';
const Importance = () => {
    return (
        <div className='commonContainer container1'>
            {/* <div className='cardBox'>
      <div className='cardImg' id='cardImgOne'>
        <Image src={logo} width={100} height={100} alt="Checker Image" />
      </div>
     <div className='cardCont'>
     <h2>Academic Integrity</h2>
        <p>SDProctor helps prevent and identify instances of cheating during assessments. Their presence ensures that students are evaluated fairly.</p>
     </div>
      </div>
      <div className="container1">
       <div className="cardBox">
        <div className='cardImg2'  id='cardImgtwo'>
        <Image src={picture} width={100} height={100} alt="Checker Image" />
        </div>
        <div className="cardcont2">
            <h2>Accessibility</h2>
              <p>SDproctor offer services that make it easy for students to take exams and assessments from wherever they are. </p>
        </div>
        </div>
        </div> */}
            {/* className="h-auto max-w-full rounded-lg" */}

            <div className="girdcontainer">
                <div>
                    <div className='cardBox'>
                        <div className='cardImg' id='cardImgOne'>
                            <Image src={logo} width={100} height={100} alt="Checker Image" />
                        </div>
                        <div className='cardCont'>
                            <h2>Academic Integrity</h2>
                            <p>SDProctor helps prevent and identify instances of cheating during assessments. Their presence ensures that students are evaluated fairly.</p>
                        </div>
                    </div>
                </div>
                <div >

                    <div className="cardBox">
                        <div className='cardImg2' id='cardImgtwo'>
                            <Image src={picture} width={100} height={100} alt="Checker Image" />
                        </div>
                        <div className="cardcont2">
                            <h2>Accessibility</h2>
                            <p>SDproctor offer services that make it easy for students to take exams and assessments from wherever they are. </p>
                        </div>
                    </div>

                </div>
                <div >
                    <div className="cardBox">
                        <div className='cardImg2' id='cardImgthree'>
                            <Image src={icon} width={100} height={100} alt="Checker Image" />
                        </div>
                        <div className="cardcont2">
                            <h2>Accessibility</h2>
                            <p>SDproctor offer services that make it easy for students to take exams and assessments from wherever they are. </p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="cardBox">
                        <div className='cardImg2' id='cardImgfour'>
                            <Image src={illustration} width={100} height={100} alt="Checker Image" />
                        </div>
                        <div className="cardcont2">
                            <h2>Accessibility</h2>
                            <p>SDproctor offer services that make it easy for students to take exams and assessments from wherever they are. </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Importance;