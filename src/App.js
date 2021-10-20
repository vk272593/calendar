import {useState} from "react"
import './index.css';
import CalanderTable from "./components/CalandarTable";

import Timeslot from './components/Timeslot';
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function App() {
  const [date,onDateChange]=useState(new Date())
  const [time,onChangeTime]=useState()
  return (
    <>
    <div className="app">
      <CalanderTable date={date} onDateChange={onDateChange}/>
     <Timeslot time={time} onChangeTime={onChangeTime}/>
     </div>
     
       { date && time && <div className="show">
          Selected Time Slot :
          <span> </span>
          <span>{`${date.getDate()}-${monthNames[date.getMonth()]}-${date.getFullYear()}`}
          </span>
          <span>{" "}</span>
          <span>{time}</span>

          
        </div>}
     
     </>
  );
}

export default App;
