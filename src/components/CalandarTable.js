import React from 'react'
import 'react-calendar/dist/Calendar.css';
import '../index.css'
import Calandar from 'react-calendar'
function CalanderTable({date,onDateChange}) {
    return (
        <div className="calander">
           <Calandar onChange={onDateChange} value={date}/> 
        </div>
    )
}
export default CalanderTable

