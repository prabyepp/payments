
import React from 'react'
import { useState, useEffect } from 'react';

import './timer.style.scss'

export interface TimerProps{
    initialMinutes?:number,
    initialHours?:number,
    initialSeconds:number
}


const TimerItem=(props:{time:number})=>{
    const time=props.time;

    return <div className='timer__items'>
        <div className="timer__item">
            {Math.floor(time/10)}
        </div>
        <div className='timer__item'>
            {time%10}
        </div>
    </div>

}

const TimerSeparator=()=>{
  return  <div className='timer__separator'>
           :
    </div>
}

const Timer = (props:TimerProps) => {
    
    const {initialMinutes = 0,initialSeconds = 0,initialHours=0} = props;
    const [ hours, setHours ] = useState(initialHours);
    const [ minutes, setMinutes ] = useState(initialMinutes);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(()=>{
    const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if(hours===0)
                    clearInterval(myInterval)
                    else
                    {
                        setHours(hours-1);
                        setMinutes(59);
                        setSeconds(59);
                    }
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return <div className='timer'>
        {
            props.initialHours && (<>
            <TimerItem time={hours} />
            <TimerSeparator/></>
            )
        }
        <TimerItem time={minutes} />
        <TimerSeparator/>
        <TimerItem time={seconds} />
    </div>

}
export default Timer