import React from 'react'
import Countdown from 'react-countdown';

const CountDown=({date})=>{
    const Completionist = () => <span>Already Married!</span>;

    // Renderer callback with condition
    const renderer = ({ days,hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return (
            <div className="simply-countdown simply-countdown-one">
                <div className="simply-section simply-days-section">
                    <div>
                        <span className="simply-amount">{days}</span>
                        <span className="simply-word">days</span>
                    </div>
                </div>
                <div className="simply-section simply-hours-section">
                    <div>
                        <span className="simply-amount">{hours}</span>
                        <span className="simply-word">hour</span>
                    </div>
                </div>
                <div className="simply-section simply-minutes-section">
                    <div>
                        <span className="simply-amount">{minutes}</span>
                        <span className="simply-word">minutes</span>
                    </div>
                </div>
                <div class="simply-section simply-seconds-section">
                    <div>
                        <span class="simply-amount">{seconds}</span>
                        <span class="simply-word">seconds</span>
                    </div>
                </div>
            </div>);
      }
    };
    return <Countdown
    date={date}
    renderer={renderer}
  />
}

export default CountDown;