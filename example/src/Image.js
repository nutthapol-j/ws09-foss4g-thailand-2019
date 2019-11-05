import React, { useState, useEffect } from "react";
import coolImages from "cool-images";
import { Imagecomponent } from "ws09-foss4g-thailand-2019";

const Image = () => {
  const [state, setstate] = useState(null);

  useEffect(() => {
    const intervalRandom = setInterval(() => {
      setstate(coolImages.one());
    }, 5000);
    return () => {
      clearInterval(intervalRandom);
    };
  }, []);
  return <Imagecomponent src={state} width={500} height={300} />;
};

export default Image;
