import React, { useEffect, useState } from 'react';
import { withTranslate } from 'react-redux-multilingual'


const DeliverySchedule = (props) => {
  const [deliverytimestate, setDeliveryTimeState] = useState("");
  const [deliverydays, setDeliveryDays] = useState("");
  const [firstday, setFirstDay] = useState("");
  const [seconday, setSecondDay] = useState("");
  const [thirdday, setThirdDay] = useState("");
  const [fourday, setFourDay] = useState("");
  const [fiveday, setFiveDay] = useState("");
  const handleClick = (id) => {
    // document.getElementsByClassName("accordian-content")[0].remove();
    document.getElementById(id).click();
    props.scheduleData(deliverytimestate);
    props.deliveryData(deliverydays);
  }

  const onChangeValue = (e) => {
    setDeliveryTimeState(e.target.value)
    // alert(deliverytimestate);
  };


  const handleSchedule = (e) => {
    setDeliveryDays(e.target.value);
  }

  // var myData = [];
  // useEffect(() => {
  //   var start = new Date();
  //   var end = start.setDate(start.getDate() + 4);
  //   var loop = new Date();
  //   while (loop <= end) {
  //     var newDate = loop.setDate(loop.getDate() + 1);
  //     myData.push(new Date(newDate));
  //   }
  //   // setFData(myData);
  //   console.log(fdata);
  // })
  useEffect(() => {
    var today = new Date();
    var date = today.getDate();
    var day = today.toLocaleString('default', { weekday: 'short' });
    var month = today.toLocaleString('default', { month: 'short' });
    var fday = day + '\n' + date + ' ' + month;
    setFirstDay(fday);
    var tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
    var tom_date = tomorrow.getDate();
    var tom_day = tomorrow.toLocaleString('default', { weekday: 'short' });
    var sday = tom_day + '\n' + tom_date + ' ' + month;
    setSecondDay(sday);
    var thday = new Date(new Date().setDate(new Date().getDate() + 2));
    var th_date = thday.getDate();
    var th_day = thday.toLocaleString('default', { weekday: 'short' });
    var thday = th_day + '\n' + th_date + ' ' + month;
    setThirdDay(thday);
    var forday = new Date(new Date().setDate(new Date().getDate() + 3));
    var for_date = forday.getDate();
    var for_day = forday.toLocaleString('default', { weekday: 'short' });
    var foday = for_day + '\n' + for_date + ' ' + month;
    setFourDay(foday);
    var fiveday = new Date(new Date().setDate(new Date().getDate() + 4));
    var fiv_date = fiveday.getDate();
    var fiv_day = fiveday.toLocaleString('default', { weekday: 'short' });
    var fivday = fiv_day + '\n' + fiv_date + ' ' + month;
    setFiveDay(fivday);
  })


  return (
    <div className="accordian-content" id={props.previd + 'acc'}>
      <div className="container p-5" id="panel2" data-parent="#myAccordion">
        <div style={{ display: 'flex', gap: '20px', gridTemplateColumns: 'repeat(5,minmax(0,1fr))', flexWrap: 'wrap' }}>
          {/* {fdata.map((data) => {
            return (
              <div>
                <div style={{ fontSize: '16px', padding: '10px 15px', height: '70px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }}>{data}</div>
              </div>
            )
          })} */}
          <button onClick={handleSchedule} value={firstday} style={{ fontSize: '16px', padding: '10px 15px', height: '70px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }}>{firstday}</button>
          <button onClick={handleSchedule} value={seconday} style={{ fontSize: '16px', padding: '10px 15px', height: '70px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }}>{seconday}</button>
          <button onClick={handleSchedule} value={thirdday} style={{ fontSize: '16px', padding: '10px 15px', height: '70px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }}>{thirdday}</button>
          <button onClick={handleSchedule} value={fourday} style={{ fontSize: '16px', padding: '10px 15px', height: '70px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }}>{fourday}</button>
          <button onClick={handleSchedule} value={fiveday} style={{ fontSize: '16px', padding: '10px 15px', height: '70px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }}>{fiveday}</button>
          {/* <div style={{ fontSize: '16px', padding: '10px 15px', height: '70px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }}>Sat <br></br> july 03</div>
          <div style={{ fontSize: '16px', padding: '10px 15px', height: '70px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }}>Sat <br></br> july 03</div>
          <div style={{ fontSize: '16px', padding: '10px 15px', height: '70px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }}>Sat <br></br> july 03</div>
          <div style={{ fontSize: '16px', padding: '10px 15px', height: '70px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white', width: '100px', fontWeight: 'bold', textAlign: 'center' }}>Sat <br></br> july 03</div> */}
        </div>
        <div className="mt-5" style={{ display: 'flex', gap: '20px', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', flexWrap: 'wrap' }} onChange={onChangeValue}>
          {/* <label class="continer">One
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label> */}
          <div style={{ display: 'flex', width: '130px', justifyContent: 'space-between' }}><input type="radio" name="deliverytime" style={{ width: '1.5rem', height: '1.5rem', border: '6px solid #d5b27c', borderRadius: '9999px', display: 'inline-block' }} value="11am to 01pm" /><div style={{ display: 'inline-block' }}>11am to 01pm</div></div>
          <div style={{ display: 'flex', width: '130px', justifyContent: 'space-between' }}><input type="radio" name="deliverytime" style={{ width: '1.5rem', height: '1.5rem', border: '6px solid #d5b27c', borderRadius: '9999px', display: 'inline-block' }} value="01am to 03pm" /><div style={{ display: 'inline-block' }}>01pm to 03pm</div></div>
          <div style={{ display: 'flex', width: '130px', justifyContent: 'space-between' }}><input type="radio" name="deliverytime" style={{ width: '1.5rem', height: '1.5rem', border: '6px solid #d5b27c', borderRadius: '9999px', display: 'inline-block' }} value="03am to 05pm" /><div style={{ display: 'inline-block' }}>03pm to 05pm</div></div>
          <div style={{ display: 'flex', width: '130px', justifyContent: 'space-between' }}><input type="radio" name="deliverytime" style={{ width: '1.5rem', height: '1.5rem', border: '6px solid #d5b27c', borderRadius: '9999px', display: 'inline-block' }} value="05am to 07pm" /><div style={{ display: 'inline-block' }}>05pm to 07pm</div></div>
          <div style={{ display: 'flex', width: '130px', justifyContent: 'space-between' }}><input type="radio" name="deliverytime" style={{ width: '1.5rem', height: '1.5rem', border: '6px solid #d5b27c', borderRadius: '9999px', display: 'inline-block' }} value="07am to 09pm" /><div style={{ display: 'inline-block' }}>07pm to 09pm</div></div>
          <div style={{ display: 'flex', width: '130px', justifyContent: 'space-between' }}><input type="radio" name="deliverytime" style={{ width: '1.5rem', height: '1.5rem', border: '6px solid #d5b27c', borderRadius: '9999px', display: 'inline-block' }} value="09am to 11pm" /><div style={{ display: 'inline-block' }}>09pm to 11pm</div></div>
        </div>
        <div className="text-right mt-2">
          <button data-toggle="collapse" data-parent="#accordion" href="#panel2" style={{ fontSize: '16px', padding: '10px 15px', height: '50px', backgroundColor: '#d5b27c', border: 'none', borderRadius: '5px', color: 'white' }} onClick={() => handleClick(props.nextid)}>Next Steps</button>
        </div>
      </div>
    </div>
  )
}
export default DeliverySchedule;