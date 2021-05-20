import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
import pdf from '../assets/1.pdf'

function FormW() {

  const [fname, setFname] = useState('')
  const [email, setEmail] = useState('')
  const [show, setShow] = useState(false);

  const nameHandler = (e) => {
    setFname(e.target.value);
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const submitBtn = (e) => {
    e.preventDefault();

    // validation

    if ((fname && email) == '') {
      setShow(true)
    } else {
      //
      // Place code to send data to CRM
      //
      window.open(pdf)
    }

  }



  return (
    <div className=' col-md-5 col-sm-12 col-xs-12 m-5 p-2'>
    
      <Form>
        <p className="inform">Just Tell Us Where To Send Your FREE Castor Oil Hair Growth Recipe! (+ Bonus Essential Oil Recipe)</p>

        <Form.Group controlId="formBasicName">
          <Form.Control
            size="lg"  
            type="fname" 
            placeholder="First Name" 
            onInput={nameHandler} 
            value={fname} 
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control 
            size="lg"
            type="email"
            placeholder="Email Address" 
            onInput={emailHandler} 
            value={email} 
  
             
            />
        </Form.Group>

        <Button variant='success'  className='p-4 w-100' onClick={submitBtn} > Get it NOW!</Button>

      </Form>
    <Alert show={show} className='mt-3' variant="danger" onClose={() => setShow(false)} dismissible>Please enter name and email</Alert>
    </div>
  );
}

export default FormW;