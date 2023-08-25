import { useContext } from "react";
import { Context } from "../../Context/Contex";



const Pagination = ({postPerPage}) => {

    const {data,setCurrentPage} = useContext(Context)
        let totalPosts = data.length
        // console.log(postsPerPage);
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    
    pages.push(i);
  }
  return (
    <div style={{width: '1005', height: '60px'}}>
      {pages.map((page, index) => (
        <button key={index} className="btn__pagination" onClick={() => setCurrentPage(page)}>{page}</button>
      ))}
    </div>
  );
};

export default Pagination;
