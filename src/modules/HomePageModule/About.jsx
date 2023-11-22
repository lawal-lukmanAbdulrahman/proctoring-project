import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="commonContainer about-top">
        <h1>About</h1>
        <p>
          SDproctor is a websites mainly concerned about enhancing the security
          of online examinations,we are also conerened about the privacy and
          data security, of our verified exam takers which includes:
        </p>
      </div>

      <div className="about-bottom">
        <div className="commonContainer about-inner">
          {/* <div className=""> */}
          <div className="inner-left">
            <div className="inner-left-cont-box">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#FF9E00" />
                </svg>
              </div>
              <p>
                EnsurIng the security by implementing protective measures, like
                encryption, user authentication and secure data transmission.
                These measures will safeguard both user data and the integrity
                of proctoring sessions
              </p>
            </div>
            <div className="inner-left-cont-box">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#00B4D8" />
                </svg>
              </div>
              <p>
                Create a web-based interface that is easy to use and intuitively
                allow test takers, proctors and administrators to interact
                smoothly within the proctoring system.
              </p>
            </div>
            <div className="inner-left-cont-box">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#FF9E00" />
                </svg>
              </div>
              <p>
                Developing backend features that facilitate the proctoring
                process, such, as real time monitoring, secure identity
                verification and incident reporting. These functionalities
                ensure the integrity of assessments.
              </p>
            </div>
            <div className="inner-left-cont-box">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#00B4D8" />
                </svg>
              </div>
              <p>
                To guarantee the safety of our system we will incorporate
                measures such, as encryption, user authentication and secure
                data transmission. These precautions are put in place to protect
                user data and maintain the integrity of proctoring sessions
              </p>
            </div>
          </div>
          <div className="inner-right"></div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
