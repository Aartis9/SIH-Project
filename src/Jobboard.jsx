import React from 'react'
import './Jobboard.css'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Jobboard = () => {
  return (
    <div>
        <div className="board111">  
     <h1 className="job111">The #1 job board for <br/> graphic design jobs </h1>
    
    <p className="p111"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium, ullam eligendi harum obcaecati porro ea atque. Saepe sed reiciendis corrupti odit adipisci perferendis, dolorem similique cum. Facere, impedit fugit. </p>
    </div>
    
    <div className="bt111">
 <Button  variant="warning">Post a job</Button> &nbsp;&nbsp;
    <Button  variant="light" className='l11'>All jobs</Button>{' '} 
 </div>

    </div>
  )
}

export default Jobboard