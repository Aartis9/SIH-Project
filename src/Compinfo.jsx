import React from 'react'
import './Compinfo.css'
import Button from 'react-bootstrap/Button';
const Compinfo = () => {
  return (
    <div className="non12">
        <div className="bb55">
            <h6 className="as11">COMPANY INFORMATION</h6>

           <div className="as12">
            <p>What's your company name?<span style={{color:"red"}}>*</span></p>
            <input type="text" className="as13"/>
           </div>
           <div className="as12">
            <p>Your company Website<span style={{color:"red"}}>*</span></p>
            <input type="text" placeholder="e.g.https://domain.com" className="as13"/>
           </div>

           <div className="as14">
            <h5>Delete Account</h5>
            <p>
                Would you like to delete account?<br/>
                This account contains Paid Courses.Deleting your account will remove all the <br/>
                contain associated with it.
            </p>

            <p className="q1  ">I want to delete my account.</p>
           </div>

           <div className="as15">
            <Button variant="light" className='l11'>Cancel</Button>{' '} 
           <Button variant="warning">Save</Button> &nbsp;&nbsp;
    
 </div>
 </div>
    </div>
  )
}

export default Compinfo