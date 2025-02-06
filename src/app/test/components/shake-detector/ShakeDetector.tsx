import React, { useEffect, useState } from 'react';

const ShakeDetector = () => {
  const [x, setX] = useState<number | null>(0);

  useEffect(() => {
    window.addEventListener('devicemotion', (event) => {
      if (event.accelerationIncludingGravity) {
        const x = event.accelerationIncludingGravity.x;
        setX(x);
      }

      // Do something awesome.
    });
  }, []);

  return <div>aaaaaaaaaaaaaaaaa{x}</div>;
};

export default ShakeDetector;
