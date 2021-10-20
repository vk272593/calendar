import React from 'react'
import '../index.css'
function Timeslot({time,onChangeTime}) {
    return (
        <div className="timeslot-main">
        <div className="main-row">
            <div onClick={()=>{
                onChangeTime("9 AM")
            }}
            data-active={"9 AM" === time}>9 AM</div>
            <div
            onClick={()=>{
                onChangeTime("10 AM")
            }}
            data-active={"10 AM" === time}
            >10 AM</div>
            <div
            onClick={()=>{
                onChangeTime("11 AM")
            }}
            data-active={"11 AM" === time}>11 AM</div>
        </div>
        <div className="main-row">
            <div
            onClick={()=>{
                onChangeTime("12 PM")
            }}
            data-active={"12 PM" === time}>12 PM</div>
            <div
            onClick={()=>{
                onChangeTime("1 PM")
            }}
            data-active={"1 PM" === time}>1 PM</div>
            <div
            onClick={()=>{
                onChangeTime("2 PM")
            }}
            data-active={"2 PM" === time}>2 PM</div>
        </div>
        <div className="main-row">
            <div
            onClick={()=>{
                onChangeTime("3 PM")
            }}
            data-active={"3 PM" === time}>3 PM</div>
            <div
            onClick={()=>{
                onChangeTime("4 PM")
            }}
            data-active={"4 PM" === time}>4 PM</div>
            <div
            onClick={()=>{
                onChangeTime("5 PM")
            }}
            data-active={"5 PM" === time}>5 PM</div>
        </div>
        </div>
    )
}

export default Timeslot
