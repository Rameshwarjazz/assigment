import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Health App</h1>
     <div className='container'>
     <div className='left-side'>
      <img src='https://media.istockphoto.com/id/953507506/photo/confident-senior-woman-of-india.jpg?s=612x612&w=0&k=20&c=GM_DuemyVSR-Fg_Xu_dUHZRe6KVNDInZRRVKjDYODCc=' alt='img'/ >
     </div>
     <div className='right-side'>
     <h2>Balanced Diet Advice</h2>
      <p>
      To maintain good health, it's crucial for me, Sunita Sharma, to prioritize a well-balanced diet. I'm encouraged to include a diverse range of foods from the following categories:
      </p>
      <label for="myCheckbox">Check me:</label>
      <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
      <ul>
        <li>Fruits</li>
        <li>Vegetables</li>
        <li>Whole grains</li>
        <li>Lean proteins</li>
        <li>Healthy fats</li>
      </ul>
      <p>
      Furthermore, I understand the importance of limiting my intake of:
      </p>
      <ul className='cross-red'>
        <li>Processed foods</li>
        <li>Sugary snacks</li>
        <li>High-sodium meals</li>
      </ul>
      <p>
      Recognizing that my dietary needs may be unique and influenced by underlying health conditions, I am motivated to seek personalized guidance. Consulting with a nutritionist is a proactive step towards creating a meal plan tailored to my individual requirements. With their expertise, I can make informed choices that contribute to my overall well-being and health.
      </p>
     </div>
     </div>
    </div>
  );
}

export default App;
