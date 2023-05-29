import { useEffect, useRef } from 'react';

const useOutsideClick = (callback, eventTypes) => {
  const ref = useRef(null);

  // This function checks if a click event occurred outside the ref element
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      // If the click occurred outside the ref element, invoke the callback
      callback();
    }
  };

  useEffect(() => {
    // This function handles the click event outside the ref element
    const handleOutsideClick = (event) => {
      handleClickOutside(event);
    };

    // Add event listeners for the specified event types
    eventTypes.forEach((eventType) => {
      document.addEventListener(eventType, handleOutsideClick);
      ref?.current?.addEventListener(eventType, callback);
    });

    // Cleanup function that runs when the component unmounts or when the dependency array changes
    return () => {
      // Remove event listeners for the specified event types
      eventTypes.forEach((eventType) => {
        document.removeEventListener(eventType, handleOutsideClick);
        ref?.current?.removeEventListener(eventType, callback);
      });
    };
  }, [callback, eventTypes]);

  return ref;
};

export default useOutsideClick;
