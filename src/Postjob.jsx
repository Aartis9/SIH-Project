import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import './Postjob.css'
const Postjob = () => {
  return (
    <div>
        <div className="full111">
            <div className="start">
                <h1 className="t11">Post a job on Dribble</h1>
                <p className="p222">The #1 job board for hiring designer and creative professionals.
                </p> 
            </div> 
            <div className='outlast1'>
                <div className="last11">
                    <h3>Tell us about your role</h3>
                    <p>Job title <span style={{color:"red"}}>*</span></p>
                    <input className="bani11" placeholder="e.g. Senior Product Designer" />
                </div>
            </div>
       </div>
     <div className="cd55">
       <div className="d111">
        <p>Add your job description <span style={{color:"red"}}>*</span></p>
                 <div className="cd33"> <textarea className="b12" 
                  placeholder="e.g. We're looking for a full-time senior product designer with 6-8 yers experience in product design and leadership. The position is located in New York City." style={{height:'300px'}}  />
                   </div>
                   </div>


                   <div className="j12">
                   <p>Job location</p>
                   <div className="cd33">    <input className="loc12" 
                   placeholder=" e.g.'New York City' or 'San Francisco' "/>  </div>
                   <p className="pt12">If left blank, location will be set to 'Remote' </p>
                    </div> 
      <div className="w11">
        <p> Workplace type <span style={{color:"red"}}>*</span></p>
      </div>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Select Workplace type"
        className="mt-2 cd12"
        data-bs-theme="white">
        <Dropdown.Item href="#/action-1" active>
          Remote
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">On-site</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Hybrid</Dropdown.Item>
      </DropdownButton>
      <br/>

      <div className="w11">
        <p> Employment type <span style={{color:"red"}}>*</span></p></div>
        <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Select Employment type"
        className="mt-2 cd12"
        data-bs-theme="white">
        <Dropdown.Item href="#/action-1">Full-time employe</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Freelance/Contract hire</Dropdown.Item>
      </DropdownButton> <br/>
       
       <div className="l11">
          <p className="j22">Where can people apply?  <span style={{color:"red"}}>*</span></p>
          <div className="cd33"> <input className="loc112" 
          placeholder=" e.g.https://greenhouse.io/f73jff73wh "/></div>
          <p className="pt112">
          This is where people go to apply for your job.</p>  
       
</div>
       <div className="w11">
        <p> Type of disability or Functional Difficulties</p></div>
        <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Select disability type"
        className="mt-2 cd12"
        data-bs-theme="white">
        <Dropdown.Item href="#/action-1">Visual</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Hearing</Dropdown.Item>
        <Dropdown.Item href="#/action-2">mobility</Dropdown.Item>
      </DropdownButton> <br/>

      <div className="w11">
        <p> Assistive Device or Solution used or required</p></div>
        <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Select  type"
        className="mt-2 cd12"
        data-bs-theme="white">
        <Dropdown.Item href="#/action-1">Wheelchair</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Screen reader</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Etc</Dropdown.Item>
      </DropdownButton> <br/><br/>
     
      <div className="kt12">
        <h6 className="ht12">Pay</h6>
        <p>Review the pay we estimated for your job and adjust it as needed.Check your local
            minimum wage. </p>
            </div>
            </div>
            <div className="rf11">
            <div className="R11">
            <h6>Minimum</h6>
            <input type="text" Rs /> 
           
            </div>
            
            <div className="R12">
            <h6>Maximum</h6>
            <input type="text" Rs /> 
            </div>
            <div className="R13">
            <h6>Rate</h6>
            <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Select Rating"
     
        data-bs-theme="white">
        <Dropdown.Item href="#/action-1">permonth</Dropdown.Item>
        <Dropdown.Item href="#/action-2">S2</Dropdown.Item>
        <Dropdown.Item href="#/action-2">s3</Dropdown.Item>
      </DropdownButton> <br/><br/>
            </div>
            </div>

            <div className="bt111">
            <Button variant="light" className='l11'>Cancell</Button>{' '} 
           <Button variant="dark">Continue</Button> &nbsp;&nbsp;
           
 </div>
  
    </div>
  )
}

export default Postjob