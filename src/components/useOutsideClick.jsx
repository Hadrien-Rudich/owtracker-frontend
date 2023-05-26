import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef(null);

  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return ref;
};

export default useOutsideClick;
