import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { withTranslate } from 'react-redux-multilingual'


export default function PaymentInputs(props) {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  const handleClick = (id)=>{
    // document.getElementsByClassName("accordian-content")[0].remove();
    document.getElementById(id).click();
  }

  return (
    <div className="accordian-content" id={props.previd + 'acc'}>
    <div className="container p-5" data-parent="#myAccordion">
    <label>Enter card info</label><br></br>
    <PaymentInputsWrapper {...wrapperProps} style={{width:'100%', display:'flex'}}>
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps()} style={{padding:'unset', height:'unset', border:'unset'}}/>
      <input {...getExpiryDateProps()} style={{marginLeft:'auto', padding:'unset', height:'unset', border:'unset'}}/>
      <input {...getCVCProps()} style={{padding:'unset', height:'unset', border:'unset'}}/>
    </PaymentInputsWrapper><br></br>
        <button className="mt-3" data-toggle="collapse" data-parent="#accordion" href="#panel2" style={{fontSize:'16px',padding:'10px 15px',height:'50px',backgroundColor:'#d5b27c',border:'none',borderRadius:'5px',color:'white'}}>Pay Now</button>
    <div className="text-right">
        <button data-toggle="collapse" data-parent="#accordion" href="#panel2" style={{fontSize:'16px',padding:'10px 15px',height:'50px',backgroundColor:'#d5b27c',border:'none',borderRadius:'5px',color:'white'}} onClick={()=>handleClick(props.nextid)}>Next Steps</button>
      </div>
    </div>
    </div>
  );
}