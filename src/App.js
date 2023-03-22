import { useState, useContext, useEffect } from 'react';
import Pomodoro from './components/Pomodoro';
import './css/App.css';
import { SettingContext } from './context/SettingsContext';
import RoundedButton from './components/RoundedButton';

function App() {
  const { executing } = useContext(SettingContext);
  const [bgColor, setBgColor] = useState(executing.color);

  useEffect(() => {
    setBgColor(executing.color);
  }, [executing]);

  return (
    <main style={{background: bgColor}}>
      <div className='container'>
        <Pomodoro />
      </div>

      <RoundedButton />
    </main>
  );
}

export default App;