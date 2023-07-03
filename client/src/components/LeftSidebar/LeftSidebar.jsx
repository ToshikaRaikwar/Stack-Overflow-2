import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";
import chatbot from "../../assessts/chatbot.png"
import shop from "../../shop/chatbot.png"
import social-media from "../../assessts/social-media.png"

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  return (
    <div
      className="left-sidebar"
      style={slideIn ? slideInStyle : slideOutStyle}
    >
      <nav className="side-nav">
        <button onClick={() => handleSlideIn()} className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
            >
              <img src={Globe} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Tags</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Users</p>
            </NavLink>
            <NavLink to="https://6497311cce5f6e0617761084--chic-gumption-a6267f.netlify.app/" className="side-nav-links" activeClassName="active" style={{ paddingLeft: "40px" }}>
           <img src={shop} alt="shop" width="30px" height="30px" />
            <p style={{ paddingLeft: "10px" }}>Buy</p>
            </NavLink>
            <NavLink to="https://main--chimerical-yeot-4abf22.netlify.app/" className="side-nav-links" activeClassName="active" style={{ paddingLeft: "40px" }}>
           <img src={chatbot} alt="chatbot" width="30px" height="30px" />
            <p style={{ paddingLeft: "10px" }}>ChatBot</p>
            </NavLink>
            <NavLink to="https://instagram-clone-pearl-seven.vercel.app/signup" className="side-nav-links" activeClassName="active" style={{ paddingLeft: "40px" }}>
           <img src={social-media} alt="social-media" width="30px" height="30px" />
            <p style={{ paddingLeft: "10px" }}>Social Media</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
