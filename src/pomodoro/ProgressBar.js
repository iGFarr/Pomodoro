import React, {useState} from "react"
import { secondsToDuration, minutesToDuration } from "../utils/duration";
import classNames from "../utils/class-names";

function ProgressBar ({focusDurationInMinutes, breakDurationInMinutes, initialFocusDuration, initialBreakDuration, session}){
  if(session){
  return (
      <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for {session?.label === "Focusing" ? focusDurationInMinutes : breakDurationInMinutes} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={session?.label === "Focusing" ? 100 -(session?.timeRemaining/initialFocusDuration*100) : 100 -(session?.timeRemaining/initialBreakDuration*100)} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${session?.label === "Focusing" ? 100 -(session?.timeRemaining/initialFocusDuration*100) : 100 -(session?.timeRemaining/initialBreakDuration*100)}%`}} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )}
    else return <></> 
}
   
export default ProgressBar;