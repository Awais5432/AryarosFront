import React, { Component, useState } from 'react';
import { withTranslate } from 'react-redux-multilingual'


const DeliveryTip = (props) => {
  const [tip, setTip] = useState("");

  const getValue = (e) => {
    setTip(e.target.value);
    props.deliveryTip(tip);
  }

  return (
    <div className="accordian-content" id={props.previd + 'acc'}>
      <div className="container p-5" id="panel2" data-parent="#myAccordion">
        <div style={{ display: 'flex', gap: '20px', gridTemplateColumns: 'repeat(5,minmax(0,1fr))', flexWrap: 'wrap' }}>
          <button style={{ fontSize: '16px', padding: '10px 15px', height: '50px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }} value="AED5" onClick={getValue}>AED5</button>
          <button style={{ fontSize: '16px', padding: '10px 15px', height: '50px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }} value="AED10" onClick={getValue}>AED10</button>
          <button style={{ fontSize: '16px', padding: '10px 15px', height: '50px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }} value="AED15" onClick={getValue}>AED15</button>
          <button style={{ fontSize: '16px', padding: '10px 15px', height: '50px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }} value="AED20" onClick={getValue}>AED20</button>
          <button style={{ fontSize: '16px', padding: '10px 15px', height: '50px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }} value="AED25" onClick={getValue}>AED25</button>
        </div>
      </div>
    </div>
  )
}
export default DeliveryTip;