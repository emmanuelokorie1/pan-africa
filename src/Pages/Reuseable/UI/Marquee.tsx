import React, { useEffect, useRef } from 'react';

interface customProps {
    images: any;
    speed: any;
}

const Marquee: React.FC<customProps> = ({ images, speed }) => {
  const marqueeRef = useRef(null);
  const firstElementRef = useRef(null);

  useEffect(() => {
    const parentElement = marqueeRef.current;
    const firstElement = firstElementRef.current;
    const clone = parentElement.innerHTML;
    let i = 0;

    parentElement.insertAdjacentHTML('beforeend', clone);
    parentElement.insertAdjacentHTML('beforeend', clone);

    const interval = setInterval(() => {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i += speed;
    }, 10); // Set the interval for smoother animation

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="marquee" ref={marqueeRef}>
      <div ref={firstElementRef}>
        {images.map((image, index) => (
          <img src={image} alt={`logo-${index}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;

