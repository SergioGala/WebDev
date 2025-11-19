import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 1200) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkWidth(); // ejecutar al montar

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
