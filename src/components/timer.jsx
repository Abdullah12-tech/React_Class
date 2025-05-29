import React from 'react'
import { useState,useEffect,useRef } from 'react'
const Timer = () => {
    const [time,setTime] = useState(0);
    const timerRef = useRef(null);
    const [showStart, setShowStart] = useState(true);
    const [showPause, setShowPause] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [showReset, setShowReset] = useState(false);
    const startCount = ()=>{
        setShowStart(false);
        setShowReset(true);
        setShowPause(true);
        if (!timerRef.current) {
            timerRef.current = setInterval(()=>{
                setTime((prev)=> prev + 1);
            },1000)
        }
    }
    const pauseCount = ()=>{
        setShowPause(false);
        setShowResume(true);
        clearInterval(timerRef.current);
        timerRef.current = null;
    }
    const resumeCount = ()=>{
        setShowResume(false);
        setShowPause(true);
        if (!timerRef.current) {
            timerRef.current = setInterval(()=>{
                setTime((prev)=> prev + 1);
            },1000)
        }
    }

    const resetCount = () =>{
        setShowStart(true);
        setShowPause(false);
        setShowResume(false);
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTime(0);
    }
  return (
    <>
        <div className='w-screen p-7 py-14 flex md:flex-col justify-between items-center bg-gray-900 h-screen'>
            <h3 className='text-center text-2xl font-bold'>Timer</h3>
            <div className='flex rounded-full bg-white p-2 w-40 h-40 justify-center items-center'>
                <div className='flex justify-center bg-black z-50 w-full h-full rounded-full items-center'>
                    <h1 className='flex items-center gap-3'>{time}</h1>
                </div>
            </div>
            <div className='w-full flex justify-center gap-32 items-center'>
                {/* <div id='stopBtn' className='hidden flex rounded-full items-center bg-red-700 font-bold text-xl justify-center bg-black w-24 h-24'>
                    Stop
                </div> */}
                {showStart && (<div id='startBtn' onClick={startCount} className='flex cursor-pointer rounded-full bg-blue-700 items-center font-bold text-xl justify-center bg-black w-24 h-24'>
                    Start
                </div>)}
                {showPause && (<div id='pauseBtn' onClick={pauseCount} className=' flex cursor-pointer rounded-full bg-blue-700 items-center font-bold text-xl justify-center bg-black w-24 h-24'>
                    Pause
                </div>)}
                {showResume && (<div id='resumeBtn' onClick={resumeCount} className=' flex cursor-pointer rounded-full bg-blue-700 items-center font-bold text-xl justify-center bg-black w-24 h-24'>
                    Resume
                </div>)}
                {showReset && (
                    <div id='resetBtn' onClick={resetCount} className=' flex rounded-full cursor-pointer bg-red-700 items-center font-bold text-xl justify-center bg-black w-24 h-24'>
                    Reset
                </div>
            )}
            </div>
        </div>
    </>
  )
}

export default Timer