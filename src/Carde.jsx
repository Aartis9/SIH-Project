import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillLinkedin,AiOutlineMail,AiFillFacebook,AiOutlineGithub } from 'react-icons/ai';
const Carde = (props) => {
  return (
    <div>
        <Card className="cardtop111" style={{ width: '18rem' }}>
      <img variant="top" className="u111" src={props.url} />
      {/* <Card.Img> <div className="btt1"> {props.url} </div> </Card.Img> */}
      <Card.Body>
       
        <Card.Title> <div className="ctt1"> {props.name} </div> </Card.Title>
        <Card.Text>
          <br/>
          {props.role}<br/>
          <div className="linkbot111">
            <a href={props.li} className='link111'><AiFillLinkedin /></a> 
            <a href={props.github} className='link111'> <AiOutlineGithub/></a>
            <a href={props.email} className='link111'><AiOutlineMail/></a>
            </div>
        </Card.Text>
      </Card.Body>
    </Card>
        
        {/* {props.name},,,,{props.li},,,{props.fb},,,{props.insta},,,,{props.github}</div> */}
        </div>
  )
}

export default Carde