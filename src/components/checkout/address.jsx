import React, { Component, useState } from 'react';
import ".././style.css";
import { withTranslate } from 'react-redux-multilingual'


const Address = (props) => {
  const [state, setState] = React.useState({});
  const [border, setborder] = useState(true);
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");

  const bordergray = {
    border: '1.2px solid #ccc',
    padding: '40px',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    fontSize: '18px',
    resize: 'none'
  };
  const btn_class = {
    border: '1.2px solid #d5b27c',
    padding: '40px',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    fontSize: '16px',
    resize: 'none'
  };
  // const btn_class = border ? bordergray : borderbrown;

  const changeStyle = () => {
    // setborder(!border);
  }
  const handleClick = (id) => {
    document.getElementById(id).click();
    props.primaryAddData(primary);
    props.secondaryAddData(secondary);

  }
  const updateprimary = e => setPrimary(e.target.value);
  const updateSecondary = e => setSecondary(e.target.value);
  return (
    <div className="accordian-content" id={props.previd + 'acc'} >
      <div className="container p-5" id="panel1" data-parent="#myAccordion" >
        <div style={{ display: 'flex', gap: '20px', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div border={border} className='address_text' onClick={changeStyle}>
            <textarea placeholder='Enter Shipping Address' style={btn_class} value={primary} name="primary" onChange={updateprimary}></textarea>
            {/* <h4>Home</h4>
          <p>Wolfson Institute of Preventive Medicine, London EC1M 7BA, UK</p> */}
          </div>
          <div border={border} className='address_text' onClick={changeStyle}>
            <textarea placeholder='Enter Billing Address' style={btn_class} value={secondary} name="secondary" onChange={updateSecondary}></textarea>
          </div>
          {/* <div style={btn_class} border={border} onClick={changeStyle}>
            <div style={{ color: '#d5b27c', fontSize: '18px', fontWeight: 'bold' }}>
              <span>+</span>
              <span>Add Address</span>
            </div>
          </div> */}
        </div>
        <div className="text-right mt-5">
          <button data-toggle="collapse" href="#panel2" style={{ fontSize: '16px', padding: '10px 15px', height: '50px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white' }} onClick={() => handleClick(props.nextid)}>Next Steps</button>
        </div>
      </div>
    </div >
  )
}
export default withTranslate(Address);