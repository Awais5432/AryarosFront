import React, { Component, useState } from 'react';
import { withTranslate } from 'react-redux-multilingual'


const Contact = (props) => {
  const { green, setGreen } = useState("true");
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleClick = (id) => {
    // document.getElementsByClassName("accordian-content")[0].remove();
    document.getElementById(id).click();
    props.primaryContactData(primary);
    props.secondaryContactData(secondary);
    props.emailData(email);
    props.NameData(name);
  }
  const updateprimary = e => setPrimary(e.target.value);
  const updateSecondary = e => setSecondary(e.target.value);
  const updateEmail = e => setEmail(e.target.value);
  const updateName = e => setName(e.target.value);
  const btn_class = {
    border: '1px solid #d5b27c',
    borderRadius: '3px',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    fontSize: '16px',
    padding: '8px'
  };
  const btn_email = {
    border: '1px solid #d5b27c',
    borderRadius: '3px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
    padding: '8px'
  };
  return (
    <div className="accordian-content" id={props.previd + 'acc'}>
      <div className="container p-5" id="panel1" data-parent="#myAccordion">
        <div style={{ display: 'flex', gap: '20px', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div className="address_text">
            {/* <h4>Primary Number</h4>
          <p>(202) 555-0191</p> */}
            <input placeholder='Enter Primary Number' style={btn_class} value={primary} name="primary" onChange={updateprimary} />
          </div>
          <div className="address_text">
            <input placeholder='Enter Secondary Number' style={btn_class} value={secondary} name="secondary" onChange={updateSecondary} />
            {/* <h4>Secondary Number</h4>
            <p>(202) 555-0191</p> */}
          </div>
          {/* <div style={{ border: '2px solid #ccc', padding: '40px', borderRadius: '8px', }}>
            <div style={{ color: '#d5b27c', fontSize: '18px', fontWeight: 'bold' }}>
              <span>+</span>
              <span>Add Phone Number</span>
            </div>
          </div> */}
        </div>
        <div style={{ display: 'flex', gap: '20px', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div className="address_text">
            <input className='mt-5' placeholder='Enter Your Name' style={btn_email} value={name} name="name" onChange={updateName} />
          </div>
          <div className="address_text">
            <input className='mt-5' placeholder='Enter Email Address' style={btn_email} value={email} name="email" onChange={updateEmail} />
          </div>
        </div>
        <div className="text-right mt-5">
          <button data-toggle="collapse" data-parent="#accordion" href="#panel2" style={{ fontSize: '16px', padding: '10px 15px', height: '50px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white' }} onClick={() => handleClick(props.nextid)}>Next Steps</button>
        </div>
      </div>
    </div>
  )
}
export default Contact;