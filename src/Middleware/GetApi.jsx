import { useEffect, useState } from "react";

export const GetApi = () => {
  const [data, setData] = useState("");
  
  useEffect(() => {
    fetch("https://api.favvora-urgench.uz/site/menu/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  return (
    <div>
    </div>
  );
};

