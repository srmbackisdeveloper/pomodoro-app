import React, { useContext } from 'react'
import CountdownAnimation from './CountdownAnimation';
import { SettingContext } from '../context/SettingsContext';

export default function Timer() {
    const { pomodoro, executing, children, startAnimate } = useContext(SettingContext);

  
  return (
    <div className='timer'>
      <div className='timer-wrapper'>
          <CountdownAnimation
                _key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
                color={executing.color}
                children={children}>
          </CountdownAnimation>
      </div>
    </div>
  )
}
