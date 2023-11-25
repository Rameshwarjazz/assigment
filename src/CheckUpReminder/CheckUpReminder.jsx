import React, { useState } from 'react'
import './CheckUpReminder.css'

export const CheckUpReminder = () => {
    const[selectedCheckUp,setSelectedCheckUp]=useState([])
    const checkUpOptions=[
        'Blood pressure monitoring',
        'Cholesterol levels check',
        'Bone density scan'
    ]
    const handleCheckupChange=(checkup)=>{
        const updatedCheckup=selectedCheckUp.includes(checkup) ? selectedCheckUp.filter(item=> item!==checkup)
        :[...selectedCheckUp,checkup]
        setSelectedCheckUp(updatedCheckup)
    }
    const handleReminderButton=()=>{
        if (selectedCheckUp.length > 0) {
            alert(`Reminders sent for: ${selectedCheckUp.join(', ')}`);
          } else {
            alert('No check-ups selected.');
          }
    }

  return (
    <div className='checkup'>
        <h2>Regular Health Check-up Reminder</h2>
        <p>It's essential for me,Sunita Sharma, to prioritize my health by scheduling regular checkups.Regular health check-ups with my primary care physician or relevant specialists can help monitor my overall health, manage existing conditions, and detect potential issues early on.
             I should consider the following screenings for common age-related health concerns:</p>
        <div >
            <button className='checkup-button' onClick={handleReminderButton}>Health Check-up Reminder</button>
            <div className='checkup-input'>
                <label>Select Check-ups:</label>
                {checkUpOptions.map((checkup=>(
                    <label key={checkup}>
                        <input type="checkbox" 
                        checked={selectedCheckUp.includes(checkup)}
                        onChange={()=>handleCheckupChange(checkup)}/>
                        {checkup}
                    </label>
                )))}

            </div>
        </div>    
    </div>
  )
}
