import React, {useState} from "react";
import classNames from "../utils/class-names";
import { secondsToDuration, minutesToDuration } from "../utils/duration";

function ChangeInterval({focusDuration, setFocusDuration, breakDuration, setBreakDuration, focusDurationInMinutes, breakDurationInMinutes, disable}){
  
  const focusIncrease = () => {
    if(focusDuration < 60){
    setFocusDuration((currTime) => currTime + 5);}
  }
  const focusDecrease = () => {
    if(focusDuration > 5){
    setFocusDuration((currTime) => currTime - 5)};
  }
  const breakIncrease = () => {
    if(breakDuration < 15){
      setBreakDuration((currTime) => currTime + 1)
    }
  }
  const breakDecrease = () => {
    if(breakDuration > 1){
      setBreakDuration((currTime) => currTime - 1)
    }
  }
  
  return (
<div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {focusDurationInMinutes}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                disabled={!disable}
                onClick={focusDecrease}
                className="btn btn-secondary"
                data-testid="decrease-focus"
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                disabled={!disable}
                onClick={focusIncrease}
                className="btn btn-secondary"
                data-testid="increase-focus"
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {breakDurationInMinutes}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  disabled={!disable}
                  onClick={breakDecrease}
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  disabled={!disable}
                  onClick={breakIncrease}
                  className="btn btn-secondary"
                  data-testid="increase-break"
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

export default ChangeInterval;