import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import emailjs from 'emailjs-com'


export const Contact = () => {
  function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_rpludpi','template_0gmm6bq',e.target,'BI9R0laRYuWPcCvz8').then(res=>{console.log(res)}).catch(err=>console.log(err));
     }
return (
<Container fluid>
      <Row className = 'mb-5 mt-3'>
           <Col lg = '8'>
               <h1 className='display-4 mb-4 hcont' id= 'htext'>Contact Me</h1>
           </Col>
     </Row>
    <Row className='sec_sp'>
           <Col lg ='5' className='mb-5'>
               <h3 className='color_sec py-4 text-light' id= 'htext_2'>Get in touch</h3>
                 <address>
                     <button
                         type="button"
                         className="btn btn-light"
                         onClick={()=>window.open("mailto:esmeraldafurriku93@gmail.com")}>Email
                     </button> 
                         <br/>
                        <br />
                 </address>
                  <p className='pcontact text-light'>  I'am interested in freelance opportunities. However, for any request or question, don't hesitate to contact me.</p>
           </Col>
                 <Col lg = '7' className='d-flex align-items-center'>
                    <form className='contact_form w-100' onSubmit={sendEmail}>
                         <Row>
                            <Col lg='6' className='form-group'>
                                 <input 
                                     className='form-control'
                                     id='name'
                                     placeholder='Name'
                                     type='text'
                                     name='name'
                                    />
                            </Col>
                            <Col lg='6' className='form-group'>
                                  <input 
                                     className='form-control rounded-0'
                                     id='email'
                                     placeholder='Email'
                                     type='email'
                                    name='user_email'
                                    />
                            </Col>
                         </Row>
                            <br />
                                <textarea className='form-control rounded-0' id ='message'
                                          name = 'message'
                                          placeholder='Message'
                                          rows='5'>
                                 </textarea>
                                    <br />
                         <Row>
                             <Col lg ='12' className='form-group'>
                                <button className='btn bg-light ac_btn' id='finalbutt' type = 'submit'>Send</button>
                             </Col>
                         </Row>
                    </form>
                 </Col>
    </Row>
</Container>
  )
}
