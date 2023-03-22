import React, { useContext, useState } from 'react';
import { SettingContext } from '../context/SettingsContext';
import Notification, { notify_times_diff} from './Notification';

export default function SetPomodoro() {
    const { updateExecution } = useContext(SettingContext);

    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        long: 15,
        active: 'work',
        color: 'rgb(235,109,109)'
    });

    const handleChange = (event) => {
        const {name, value} = event.target

        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                });
                break;
            
            case 'short':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                });
                break;

            case 'long':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                });
                break;

            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTimer.work === newTimer.short || newTimer.work ===newTimer.long || newTimer.short === newTimer.long) {
            notify_times_diff();
        } else if (newTimer.work === 0 || newTimer.short === 0 || newTimer.long === 0) {
            notify_times_diff();
        } else {
            updateExecution(newTimer);
            // console.log(newTimer);
        }
    };
    
    return (
    <div className='setpomodoro'>
        <form autoComplete="off">
            <div className='labels'>
                <label>Work Time</label>
                <label>Short Time</label>
                <label>Long Time</label>
            </div>
            
            <div>
                <input id='work' name='work' onChange={handleChange} value={!isNaN(newTimer.work) ? newTimer.work : 0}/>
                <input id='short' name='short' onChange={handleChange} value={!isNaN(newTimer.short) ? newTimer.short : 0}/>
                <input id='long' name='long' onChange={handleChange} value={!isNaN(newTimer.long) ? newTimer.long : 0}/>
            </div>

            <button className='new-timer-btn' onClick={ handleSubmit }>Set New Timer</button>
            <Notification />
        </form>
    </div>
  )
}
