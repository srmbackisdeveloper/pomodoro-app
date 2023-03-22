import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingContext } from '../context/SettingsContext';

export default function CountdownAnimation({_key, timer, animate, children, color}) {
  const { stopTimer } = useContext(SettingContext);  

  return (
    <>
    <CountdownCircleTimer
        key={_key}
        isPlaying={animate}
        duration={timer * 60} // * 1

        rotation={'counterclockwise'}
        colors={color}
        strokeWidth={6}
        trailColor='whitesmoke'
        onComplete={() => {
          stopTimer();
        }}>
        {children}
    </CountdownCircleTimer>
    </>

  )
}