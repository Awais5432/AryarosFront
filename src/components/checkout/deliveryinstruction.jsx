import React, { Component, useState } from 'react';
import { withTranslate } from 'react-redux-multilingual'

const DeliveryInstructions = (props) => {

  const [deliveryinst, setDeliveryInst] = useState("");
  const [leaveit, setLeaveIt] = useState("");

  const deliverinstChange = (e) => {
    setDeliveryInst(e.target.value);
  }
  const leaveitChange = (e) => {
    setLeaveIt(e.target.value);
  }
  const handleClick = (id) => {
    // document.getElementsByClassName("accordian-content")[0].remove();

    document.getElementById(id).click();
    props.deliveryInsCheckData(leaveit);
    props.deliveryInsData(deliveryinst);

  }
  const border_inp = {
    borderRight: "none",
    borderLeft: "none",
    borderTop: "none",
    width: '50%'
  };
  return (
    <div className="accordian-content" id={props.previd + 'acc'}>
      <div className="container p-5" id="panel4" data-parent="#myAccordion">
        <h5>Message on Card</h5>
        <input placeholder='To' name='from' className='form-control mb-2' style={border_inp} />
        <textarea placeholder='Message' value={deliveryinst} name="deliveryinst" onChange={deliverinstChange} className="form-control" style={{ height: '100px', border: 'none', paddingLeft: '12px' }}></textarea><br></br>
        <input placeholder='From' name='to' className='form-control' style={border_inp} />
        {/* <input value={leaveit} name="leaveit" onChange={leaveitChange} type="checkbox" className="mr-2" /> */}
        {/* <span style={{ fontWeight: 'bold' }}>Leave at my door if I am not around</span>
        <p className="mt-2">By selecting this option you accept full responsibility for your order after it has been delivered unattended, including any loss due to theft or damage due to temperature sensitivity.</p> */}
        <div className="text-right">
          <button data-toggle="collapse" data-parent="#accordion" href="#panel2" style={{ fontSize: '16px', padding: '10px 15px', height: '50px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white' }} onClick={() => handleClick(props.nextid)}>Next Steps</button>
        </div>
      </div>
    </div>
  )
}
export default DeliveryInstructions;