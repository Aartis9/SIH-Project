import React, { useRef }  from 'react'
import './About.css'
import Carde from './Carde'
const About = () => { 
    return (
        
        <div className="x">
            <div className="g111">
                <h1 className="s"> About Us</h1>
                <br/>
                <div className="para111"> <p> We are team Radhe Radhe. We believe in providing a better business experience for disability people.
                This<br/> platform provide information on job openings, skill development programs, and career resources for persons 
                with disabilities.
                </p>
                <p>Our objective is to bridge the gap between potential and opportunity, ensuring that every disabled person <br/> has the opportunity to pursue their career goals. </p>
                </div>
                <h1 className="s"> Our Team members</h1>
       </div>
      <br/>
      <div className="member">
     <div className="name">
    <div className="first">
       <Carde name="Aarti Kumari" role="Frontend Developer" email="mailto:aartirathore2004@gmail" url="./arti.jpg" github="https://github.com/Aartis9" li="https://www.linkedin.com/in/aarti-singh-685606285/" />
       <Carde name="Shuvam Sardar " role=" Backend Developer" email=" mailto:shuvamsardar2002@gmail.com" url="./shubham.jpg"  github="g4" li="https://www.linkedin.com/in/shuvam-sardar/"/>
       <Carde name=" Abhinaba Paul" role="Frontend Developer"  email="mailto:abhinabapaul48814@gmail.com " url="./abhinab.jpg"  github="https://github.com/AbhinabaPaul007" li="https://www.linkedin.com/in/abhinaba-paul-655835238/" />
    </div>

    <div className="first">
       <Carde name="Priyojit Kundu" role=" Frontend Developer" email="mailto:kundupriyojit21@gmail.com" url="./priyojitt.jpg"  github="https://github.com/priyojit21" li="https://www.linkedin.com/in/priyojit-kundu-37a024238/" />
       <Carde name="Subhodeep M." role="UI/UX"  email="mailto:subhodeepmukherjee72@gmail.com" url="./subhodeep.jpg" github="https://github.com/tubaiuzumakiWorld" li="https://www.linkedin.com/in/subhodeep-mukherjee-159510243/" />
       <Carde name="Debanjan Malakar" role=" Backend Developer" email="mailto:debanjan.atthework@gmail.com" url="debanjan.jpg" github="g3" li="https://www.linkedin.com/in/debanjan-malakar/" />
    </div>
    </div>
      </div>
       </div>
       
        
        
    )
}

export default About;





