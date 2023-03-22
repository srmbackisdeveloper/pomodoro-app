import React, { useContext } from 'react'
import { SettingContext } from '../context/SettingsContext';

export default function Modes() {
    const { executing, setCurrentTimer, pauseTimer } = useContext(SettingContext);


  return (
    <div className="modes">
        <ul>
            <li>
                <button className={executing.active === 'work' ? 'active-mode' : ''} onClick={() => {setCurrentTimer('work', 'rgb(235,109,109)'); pauseTimer()}}>Work</button>
            </li>
            <li>
                <button className={executing.active === 'short' ? 'active-mode' : ''} onClick={() => {setCurrentTimer('short', 'seagreen'); pauseTimer()}}>Short break</button>
            </li>
            <li>
                <button className={executing.active === 'long' ? 'active-mode' : ''} onClick={() => {setCurrentTimer('long', 'steelblue'); pauseTimer()}}>Long break</button>
            </li>
        </ul>
    </div>
  )
}
