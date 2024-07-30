import React, { useState, useEffect } from "react";
import "./Counter.css";

function CountNumber({ target, speed = 20 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // Flag to track component mounting state

    const updateCount = () => {
      const inc = target / speed;

      if (count < target && isMounted) {
        // Check if component is still mounted
        setCount(Math.floor(inc + count));
        setTimeout(updateCount, 15);
      } else if (isMounted) {
        // Ensure target is reached
        setCount(target);
      }
    };

    updateCount(); // Start the animation immediately

    return () => {
      isMounted = false; // Cleanup: set flag to false on unmount
    };
  }, [target, speed, count]);

  return <div className="count">{count}</div>;
}

const Counter = () => {
  return (
    <>
      <div className="counter-container">
        <div className="counter">
          <h4 className="count">
            <CountNumber target={1254} speed={30} />
          </h4>
          <p>New Visitors Every Week</p>
        </div>
        <div className="counter">
          <h4 className="count">
            <CountNumber target={1254} speed={30} />
          </h4>
          <p>New Visitors Every Week</p>
        </div>
        <div className="counter">
          <h4 className="count">
            <CountNumber target={1254} speed={30} />
          </h4>
          <p>New Visitors Every Week</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
