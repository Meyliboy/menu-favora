import Header from "../../Layouts/Header/Header";
import Main from "../../Layouts/Main/Main";
const Home = ({ data, value, category }) => {
  return (
    <div style={{ height: "auto" }}>
      <Header />
      <Main data={data} value={value} category={category} />
    </div>
  );
};

export default Home;
