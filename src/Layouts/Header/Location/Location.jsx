import { NavLink } from "react-router-dom"
import logo from '../../../Assets/img/logo.png'

const Location = ({sizeCart}) => {
  return (
    <div
        style={{
          marginBottom: "18px",
          display: " flex",
          justifyContent: "space-between",
        }}
      >
        <a href="https://favvora-urgench.uz/">
          <img width={100} src={logo} alt="logo" />
        </a>
        <NavLink to={'/wishlist'}>
          <div className="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              font-size="24"
            >
              <path
                fill="currentColor"
                d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Zm0-2.7q2.4-2.15 3.95-3.688t2.45-2.674q.9-1.138 1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.688T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025q.9 1.137 2.45 2.675T12 18.3Zm0-6.825Z"
              ></path>
            </svg>
            {sizeCart > 0 ? <div className="cart-count">{sizeCart}</div> : '' }
            
          </div>
        </NavLink>
      </div>
  )
}

export default Location