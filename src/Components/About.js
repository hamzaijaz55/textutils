import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function About() {
        
    const [myStyle, setmyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=> {
        if(myStyle.color === 'white'){
            setmyStyle({
                
                color: 'black',
                backgroundColor: 'white'
                
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid white'
            })
            setBtnText("Enable Light Mode")
        }
    }

   
  return (
    <>
    <div className='container' style={myStyle}>
        <h1 className='my-4'>About Us</h1>
    <Accordion >
      <Accordion.Item eventKey="0" style={myStyle}>
        <Accordion.Header style={myStyle}>Accordion Item #1</Accordion.Header>
        <Accordion.Body style={myStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={myStyle}>
        <Accordion.Header style={myStyle}>Accordion Item #2</Accordion.Header>
        <Accordion.Body style={myStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <button  className='btn btn-primary mx-2 my-4'  onClick={toggleStyle} >{btnText}</button>
    </div>
    </>
  )
}
