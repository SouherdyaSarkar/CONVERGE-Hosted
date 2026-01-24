import { useEffect, useState } from "react";

const useDeviceHeight = (threshold = 700) => {
  const [isTooSmall, setIsTooSmall] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      setIsTooSmall(window.innerHeight < threshold);
    };

    checkHeight(); // initial check
    window.addEventListener("resize", checkHeight);

    return () => window.removeEventListener("resize", checkHeight);
  }, [threshold]);

  return isTooSmall;
};

export default useDeviceHeight;
