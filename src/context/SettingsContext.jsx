import React, { createContext, useState } from 'react';
import addNotification from 'react-push-notification';
import {notify_done} from '../components/Notification'
export const SettingContext = createContext();
var sum = 0;


export default function SettingsContextProvider(props) {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  const startTimer = () => {
    setStartAnimate(true);
    sum = 0;
  };

  const pauseTimer = () => {
    setStartAnimate(false);
    sum = 0;
  };

  const stopTimer = () => {
    setStartAnimate(false);
    sum = 1;
  };

  const SettingsBtn = () => {
    setPomodoro(0);
    setExecuting({});
  };

  // main
  const setCurrentTimer = (active_mode, active_color) => {
    updateExecution({...executing, active: active_mode, color: active_color});
    setTimerTime(executing);
  };

  const updateExecution = (updateSettings) => {
    setExecuting(updateSettings);
    setTimerTime(updateSettings);
  };

  const setTimerTime = (mode) => {
    switch (mode.active) {
        case 'work':
          setPomodoro(mode.work);
          break;

        case 'short':
          setPomodoro(mode.short);
          break;

        case 'long':
          setPomodoro(mode.long);
          break;
        
        default:
          setPomodoro(0);
          break;
    }
};

const children = ({ remainingTime }) => {
  if (remainingTime === 0 && sum === 0) {
    Notify();
    notify_done();
    sum++;
  }

  if (remainingTime === 0) {
    return `You are done...`;
  }

  var mm = Math.floor(remainingTime / 60);
  if (mm < 10) {
    mm = '0' + mm
  }

  var ss = remainingTime % 60;
  if (ss < 10) {
    ss = '0' + ss
  }

  return `${mm}:${ss}`;
}

const Notify = () => {
  addNotification({
      title: "Pomodoro",
      message: "Time is up! Change your position!",
      duration: 4000,
      icon: '../media/pomodoro.webp',
      native: true,
  })
}

  return (
    <SettingContext.Provider 
    value={{
      startTimer,
      pauseTimer,
      stopTimer,
      SettingsBtn,
      setCurrentTimer,
      updateExecution,
      setTimerTime,
      children,
      executing,
      pomodoro,
      startAnimate,
      sum
    }}>

        {props.children}
    </SettingContext.Provider>
  )
}
