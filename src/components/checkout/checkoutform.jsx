import React, { useState } from 'react';
import Address from './address';
import DeliverySchedule from './deliveryschedule';
import Contact from './contact';
import DeliveryInstructions from './deliveryinstruction';
import PaymentInputs from './paymentoptions';
import DeliveryTip from './deliverytip';
import { withTranslate } from 'react-redux-multilingual'

const CheckoutForm = ({ title, content, onToggle, id }, key) => {
  const [isActive, setIsActive] = useState(false);
  const [contentState, setcontentState] = useState("");

  // const [isActive1, setIsActive1] = useState(false);
  // const [isActive2, setIsActive2] = useState(false);
  // const [isActive3, setIsActive3] = useState(false);
  // const [isActive4, setIsActive4] = useState(false);
  // const [isActive5, setIsActive5] = useState(false);
  // const [isActive6, setIsActive6] = useState(false);
  const [btnActive, setbtnActive] = useState("0");
  const [open, setOpen] = useState("");
  const handleNext = (id) => {
    console.log(id);
    var incr = 1;
    var ids = id + 1;

  };
  const showAccor = {
    display: 'block'
  }
  const hideAccor = {
    display: 'none'
  }

  const primaryAddData = (index) => { // the callback. Use a better name
    console.log(index);
    setPrimeAdd(index);
    localStorage.setItem('primaryaddress', index);
  };
  const secondaryAddData = (index) => { // the callback. Use a better name
    console.log(index);
    setSecAdd(index);
    localStorage.setItem('secondaryaddress', index);

  };
  const scheduleData = (index) => { // the callback. Use a better name
    console.log(index);
    setScData(index);
    localStorage.setItem('deliveryhours', index);

  };
  const deliveryData = (index) => { // the callback. Use a better name
    console.log(index);
    setDeliveryDatas(index);
    localStorage.setItem('deliverydate', index);

  };

  const primaryContactData = (index) => { // the callback. Use a better name
    console.log(index);
    setPrimeCon(index);
    localStorage.setItem('primarycontact', index);

  };
  const secondaryContactData = (index) => { // the callback. Use a better name
    console.log(index);
    setSecCon(index);
    localStorage.setItem('secondarycontact', index);

  };
  const emailData = (index) => { // the callback. Use a better name
    console.log(index);
    SetEmailAdd(index);
    localStorage.setItem('useremail', index);

  };
  const NameData = (index) => { // the callback. Use a better name
    console.log(index);
    localStorage.setItem('username', index);

  };
  const deliveryInsData = (index) => { // the callback. Use a better name
    console.log(index);
    setInsData(index);
    localStorage.setItem('deliveryinstructions', index);

  };
  const deliveryInsCheckData = (index) => { // the callback. Use a better name
    console.log(index);
    setInsCData(index);
    localStorage.setItem('leaveitdelivery', index);

  };
  const deliveryTip = (index) => { // the callback. Use a better name
    console.log(index);
    setDTip(index);
    localStorage.setItem('deliverytip', index);

  };
  const [primeadd, setPrimeAdd] = useState("");
  const [secadd, setSecAdd] = useState("");
  const [scdata, setScData] = useState("");
  const [primeCon, setPrimeCon] = useState("");
  const [secCon, setSecCon] = useState("");
  const [insdata, setInsData] = useState("");
  const [inscdata, setInsCData] = useState("");
  const [dtip, setDTip] = useState("");
  const [deliverydatas, setDeliveryDatas] = useState("");
  const [emailadd, SetEmailAdd] = useState("");

  const [state, setState] = useState({
    prime_add: primeadd,
    secadd: secadd,
    scdata: scdata,
    primeCon: primeCon,
    secCon: secCon,
    insdata: insdata,
    inscdata: inscdata,
    dtip: dtip,
  });

  // console.log(state.prime_add);

  const clickHandle = (id) => {
    if (document.getElementById(id - 1 + 'acc')) {
      document.getElementById(id - 1 + 'acc').style.display = "none";
      setcontentState("");
    }

    switch (id) {
      case 1:
        setcontentState(<Address primaryAddData={primaryAddData} secondaryAddData={secondaryAddData} nextid={id + 1} previd={id} />)
        if (document.getElementsByClassName("accordian-content").length > 0) {
          document.getElementsByClassName("accordian-content")[0].style.display = "none";
        }
        if (document.getElementById(id + 'acc')) {
          document.getElementById(id + 'acc').style.display = "block";
        }
        break;
      case 2:
        setcontentState(<DeliverySchedule deliveryData={deliveryData} scheduleData={scheduleData} nextid={id + 1} previd={id} />)
        if (document.getElementsByClassName("accordian-content").length > 0) {
          document.getElementsByClassName("accordian-content")[0].style.display = "none";
        }
        if (document.getElementById(id + 'acc')) {
          document.getElementById(id + 'acc').style.display = "block";
        }
        break;
      case 3:
        setcontentState(<Contact emailData={emailData} NameData={NameData} primaryContactData={primaryContactData} secondaryContactData={secondaryContactData} nextid={id + 1} previd={id} />)
        if (document.getElementsByClassName("accordian-content").length > 0) {
          document.getElementsByClassName("accordian-content")[0].style.display = "none";
        }
        if (document.getElementById(id + 'acc')) {
          document.getElementById(id + 'acc').style.display = "block";
        }

        break;
      case 4:
        setcontentState(<DeliveryInstructions deliveryInsData={deliveryInsData} deliveryInsCheckData={deliveryInsCheckData} nextid={id + 1} previd={id} />)
        if (document.getElementsByClassName("accordian-content").length > 0) {
          document.getElementsByClassName("accordian-content")[0].style.display = "none";
        }
        if (document.getElementById(id + 'acc')) {
          document.getElementById(id + 'acc').style.display = "block";
        }
        break;
      // case 5:
      //   setcontentState(<PaymentInputs nextid={id + 1} previd={id} />)
      //   if (document.getElementsByClassName("accordian-content").length > 0) {
      //     document.getElementsByClassName("accordian-content")[0].style.display = "none";
      //   }
      //   if (document.getElementById(id + 'acc')) {
      //     document.getElementById(id + 'acc').style.display = "block";
      //   }
      //   break;
      case 5:
        setcontentState(<DeliveryTip deliveryTip={deliveryTip} PaymentInputs nextid={id + 1} previd={id} />)
        if (document.getElementsByClassName("accordian-content").length > 0) {
          document.getElementsByClassName("accordian-content")[0].style.display = "none";
        }
        if (document.getElementById(id + 'acc')) {
          document.getElementById(id + 'acc').style.display = "block";
        }
        break;

      default:
        setcontentState("");
        break;
    }
  }
  return (
    <div className="accordion-item">
      <div className="accordion-title" id={id} style={{ cursor: 'pointer', display: 'flex', padding: '20px', backgroundColor: "#f8f9fa", borderRadius: '4px', height: '90px', lineHeight: '45px', borderBottom: '1px solid #eee', }} onClick={() => clickHandle(id)}>
        <div style={{ display: 'inline-block', marginLeft: '10px', fontWeight: 'bold' }}>{title}</div>
      </div>
      {contentState}
      {/* {console.log("State")}
      {console.log(contentState)} */}
    </div>
  );
};

export default CheckoutForm;