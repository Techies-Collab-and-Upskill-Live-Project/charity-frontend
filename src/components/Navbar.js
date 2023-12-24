import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assest/logo.png";
import arrowdown from "../assest/svg/chevron-down.svg"

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    // <Navbar
    //   expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
    //   <Container>
    //     <Navbar.Brand href="/" className="d-flex" style={{margintop: "10px"}}>
    //       <img src={logo} className="img-fluid logo desktop-icon" alt="brand" />

    //     </Navbar.Brand>
    //     <Navbar.Toggle
    //       aria-controls="responsive-navbar-nav"
    //       onClick={() => {
    //         updateExpanded(expand ? false : "expanded");
    //       }}
    //     >
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="responsive-navbar-nav" >
    //       <Nav className="ms-auto" defaultActiveKey="#home" style={{ flexbasis: "10% !important" }}>
    //         <Nav.Item>
    //           <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
    //             <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/about"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <AiOutlineUser style={{ marginBottom: "2px" }} /> About-Me
    //           </Nav.Link>
    //         </Nav.Item>


    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/project"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <AiOutlineFundProjectionScreen
    //               style={{ marginBottom: "2px" }}
    //             />{" "}
    //             My Projects
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/resume"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <CgFileDocument style={{ marginBottom: "2px" }} /> My Resume
    //           </Nav.Link>
    //         </Nav.Item>



    //         <Nav.Item className="fork-btn">
    //           <Button
    //             href="https://github.com/Favourlisticc"
    //             target="_blank"
    //             className="fork-btn-inner"
    //           >
    //             <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
    //             <AiFillStar style={{ fontSize: "1.1em" }} />
    //           </Button>
    //         </Nav.Item>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <div className="flex mt-5">
      <div className="flex-none w-10 h-14 ml-10">
        <a href="/"><img src={logo}  alt="Logo" /></a>
      </div>

      <div className="flex-initial w-68 ml-96">
        <a href="/" className="font-medium">Explore</a>
        <a href="/" className="ml-10 font-medium">Link 2  </a>
        <a href="/" className="ml-10 font-medium">Contact Us</a>
      </div>

      <div className="flex flex-initial w-10 ml-60">
        <button className="border-2 border-teal-600 rounded-md mr-1 p-2 text-teal-600 px-5 font-medium">Login</button>
        <button className="bg-teal-600 border-2 border-teal-600 rounded-md min-w-max ml-5 px-5 font-medium text-white text-base">Start a Campaign</button>
      </div>
    </div>
  );
}

export default NavBar;
