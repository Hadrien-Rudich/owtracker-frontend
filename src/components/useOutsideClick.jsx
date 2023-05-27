import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef(null);

  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      handleOutsideClick(event);
    };

    const handleMouseLeave = () => {
      callback();
    };

    document.addEventListener("click", handleClickOutside);
    ref.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      ref.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;
