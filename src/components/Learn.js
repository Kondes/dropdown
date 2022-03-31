import React, { useState } from "react";
import styles from "./Learn.module.css";

function Learn() {
  const [isActive, setIsActive] = useState(false);
  const [isActiveSecond, setIsAactiveSecond] = useState(false);
  return (
    <div>
      <div onClick={(e) => setIsActive(!isActive)}>
        <button>push</button>
      </div>
      <div>
        {isActive && (
          <div>
            <p onClick={(e) => setIsAactiveSecond(!isActiveSecond)}> one</p>
            {isActiveSecond && (
              <div>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            )}
            <p>two</p>
            <p>three</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Learn;
