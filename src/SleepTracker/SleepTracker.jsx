import React, { useState } from 'react';
import './SleepTracker.css'

export const SleepTracker = () => {
  const [sleepDuration, setSleepDuration] = useState('');
  const [date, setDate] = useState('');
  const [sleepEntries, setSleepEntries] = useState([]);

  const addSleepEntry = () => {
    const newEntry = { sleepDuration, date };
    setSleepEntries([...sleepEntries, newEntry]);
  };

  return (
    <div>
      <h2>Sleep Tracker</h2>
      <div className='input'>
      <label>
        Sleep Duration (hours):
        <input
        placeholder='Hours'
          max={24}
          min={0}
          type="number"
          value={sleepDuration}
          onChange={(e) => setSleepDuration(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <button onClick={addSleepEntry}>Add Sleep Entry</button>

      <h3>Sleep History:</h3>
      <ul>
        {sleepEntries.map((entry, index) => (
          <li key={index}>{entry.sleepDuration} hours on {entry.date}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};


