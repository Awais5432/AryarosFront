import React, { Component, useState } from 'react';
import CheckoutForm from './checkoutform';
import Address from './address';
import DeliverySchedule from './deliveryschedule';
import Contact from './contact';
import DeliveryInstructions from './deliveryinstruction';
import PaymentInputs from './paymentoptions';
import DeliveryTip from './deliverytip';
import { useTranslate } from 'react-redux-multilingual'


const CheckoutDetails = () => {


  const accordionData = [
    {
      id: 1,
      title: <div> <span className="mr-2" style={{ border: '2px solid #d5b27c', borderRadius: '9999px', padding: '6px 10px', color: '#d5b27c' }}>1</span>Delivery Address</div>,
      // content: <div className="accordian-content" ><Address nextid={2} /></div>
    },
    {
      id: 2,
      title: <div> <span className="mr-2" style={{ border: '2px solid #d5b27c', borderRadius: '9999px', padding: '6px 10px', color: '#d5b27c' }}>2</span>Delivery Schedule</div>,
      // content: <div className="accordian-content" ><DeliverySchedule nextid={3}/></div>
    },
    {
      id: 3,
      title: <div> <span className="mr-2" style={{ border: '2px solid #d5b27c', borderRadius: '9999px', padding: '6px 10px', color: '#d5b27c' }}>3</span>Contact Details</div>,
      // content: <div className="accordian-content" ><Contact nextid={4}/></div>
    },
    {
      id: 4,
      title: <div> <span className="mr-2" style={{ border: '2px solid #d5b27c', borderRadius: '9999px', padding: '6px 10px', color: '#d5b27c' }}>4</span>Card Message</div>,
      // content: <div className="accordian-content" ><PaymentInputs nextid={5}/></div>
    },
    // {
    //   id: 5,
    //   title: <div> <span className="mr-2" style={{ border: '2px solid #d5b27c', borderRadius: '9999px', padding: '6px 10px', color: '#d5b27c' }}>4</span>Payment Option</div>,

    //   // content: <div className="accordian-content" ><DeliveryInstructions nextid={6}/></div>
    // },
    {
      id: 5,
      title: <div> <span className="mr-2" style={{ border: '2px solid #d5b27c', borderRadius: '9999px', padding: '6px 10px', color: '#d5b27c' }}>5</span>Delivery Tip</div>,
      //  content: <div className="accordian-content" ><DeliveryTip nextid={10}/></div>

    }
  ];
  const [clicked, setClicked] = useState("0");
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0")
    }
    setClicked(index)
  };
  return (
    <div className="col-lg-6 col-sm-12 col-xs-12" style={{
      border: 'none',
      borderRadius: '4px',
      padding: 'unset'
    }}>
      {/* <h1>React Accordion Demo</h1> */}
      <div className="accordion" id="myAccordion">
        {accordionData.map(({ title, content, id }, index) => (
          <div>
            <CheckoutForm title={title} id={id} content={content} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutDetails;