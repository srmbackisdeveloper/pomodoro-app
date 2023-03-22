import React, { useEffect, useContext } from 'react'
import SetPomodoro from './SetPomodoro';
import { SettingContext } from '../context/SettingsContext';
import Modes from './Modes';
import Timer from './Timer';
import { FiSettings, FiPlayCircle, FiPauseCircle } from 'react-icons/fi';
import '../css/form.css';
import Header from './Header';
import Notification from './Notification';


export default function Pomodoro() {
    const { pomodoro, executing, SettingsBtn, startAnimate, startTimer, pauseTimer, updateExecution, sum } = useContext(SettingContext);
    <Notification />

    useEffect(() => {
      updateExecution(executing);

      ////////////////////////////
      let _title = '';

      if (executing.active === 'work') {
        _title = 'Work';
      } else if (executing.active === 'short') {
        _title = 'Short Break';
      } else if (executing.active === 'long') {
        _title = 'Long Break';
      }

      document.title = `Pomodoro ${_title}`;
      }, [executing, startAnimate]);
      ////////////////////////////


    return (
      <div className='pomodoro'>
        <Header />
  
        {pomodoro === 0 ?
          <>
            <SetPomodoro />
            <img src='./media/pomodoro.webp' alt=''/>
          </> 
          : 
          <div className='pomodoro-items'>
            <Modes />
  
            <button className='new-timer-btn' onClick={ SettingsBtn }><FiSettings />&nbsp;Settings</button>

            <Timer />
  
            <button className='new-timer-btn play-btn' disabled={sum} onClick={ startTimer }><FiPlayCircle />&nbsp;Play</button>
            <button className='new-timer-btn pause-btn' disabled={!startAnimate} onClick={ pauseTimer }><FiPauseCircle />&nbsp;Pause</button>
          </div>
        }
      </div>
    );
}
