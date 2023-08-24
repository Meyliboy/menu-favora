import React from "react";
import Header from "../../Layouts/Header/Header";
import Main from "../../Layouts/Main/Main";

const Home = ({
  data,
  value,
  category,
  complited
}) => {
  return (
    <div>
      <Header/>
      <Main
        data={data}
        value={value}
        category={category}
      />
    </div>
  );
};

export default Home;
