import React, { useState } from 'react';
import './PhysicalReminder.css'
export const PhysicalReminder = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const activityOptions = ['Walking', 'Swimming', 'Yoga', 'Tai Chi'];

  const handleActivityChange = (activity) => {
    const updatedActivities = selectedActivities.includes(activity)
      ? selectedActivities.filter(item => item !== activity)
      : [...selectedActivities, activity];
    setSelectedActivities(updatedActivities);
  };

  const handleActivityReminderButtonClick = () => {
    if (selectedActivities.length > 0) {
      alert(`Encouragement sent for: ${selectedActivities.join(', ')} `);
    } else {
      alert('No activities selected. Are you sure you want to proceed without encouragement?');
    }
  };

  return (
    <div className='physical'>
      <h2>Physical Activity Reminder</h2>
      <p>
        Encourage Sunita Sharma to engage in regular physical activity appropriate for her age
        and fitness level. Physical activity can include activities like walking, swimming, yoga, or tai chi.
        It can help improve cardiovascular health, maintain strength and flexibility, and boost overall well-being.
      </p>

      <div >
        <button className='physical-button' onClick={handleActivityReminderButtonClick}>Physical Activity Reminder</button>
        <div className='physical-input'>
          <label>Select Activities:</label>
          {activityOptions.map(activity => (
            <div key={activity}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedActivities.includes(activity)}
                  onChange={() => handleActivityChange(activity)}
                />
                {activity}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


