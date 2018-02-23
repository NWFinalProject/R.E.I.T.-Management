import React from "react";
import { Link } from 'react-router-dom';
// import "./Home.css";
// import img from "background1.jpg";
// import imgpublic from "../../../public/background2.jpg"; 


const Homepage = props =>
  <div>

     <nav class="white" role="navigation">
    <div class="nav-wrapper container">
      <a href="/">
      	<img id="logo-container" class="brand-logo" src="Logo2.png"/> 
  	</a>
      <ul class="right hide-on-med-and-down">
        <li><a id="rentlink" href="#">Login</a></li>
      </ul>

      <ul id="rentlink" class="side-nav">
        <li><a href="#">Login</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>

  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container-title">
    
      {/*<h1 class="header center teal-text text-lighten-2">R.E.I.T Management</h1>*/}
      <svg viewBox="0 0 1280 720" style={{marginTop:"0px"}}>
        <text text-anchor="middle" x="50%" y="0%">
        <tspan x="50%" dy="0.8em">R.E.I.T.</tspan>
        <tspan x="50%" dy="0.8em">Management</tspan>

        </text>
      </svg>
        <div class="row center">
        </div>
        <div class="row center" style={{position:"relative", top:"304px"}}>
         <Link to="/signup" id="download-button" className="btn-large waves-effect waves-light teal lighten-1" > 
          New Users
         </Link>
        </div>
        

      </div>
    </div>
    <div style={{opacity: '0.5'}}class="parallax"><img src="background3.jpg" alt="Unsplashed background img 1"/></div>
  </div>


  <div class="container">
    <div class="section">

      
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            
          <Link to="/admin"> <a id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Administrators</a></Link>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <Link to="/renter"><a id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Renters</a></Link>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <Link to="/contractor"><a id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Contractors</a></Link>
          </div>
        </div>
      </div>

    </div>
  </div>


  <div style={{opacity: '0.8'}} class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
        </div>
      </div>
    </div>
    <div style={{opacity: '0.8'}} class="parallax"><img src="background3.jpg" alt="Unsplashed background img 2"/></div>
  </div>

  <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>Contact Us</h4>
        <div class="container">
      <div class="row">
        <div class="col l12 s12">
          <p class="grey-text text-lighten-10">We are a team of college students working on this project like it's our full time job. Any amount of support would help continue development on this project and is greatly appreciated.</p>
                  <ul>
            <img style={{width:"50px"}} id="github-container" class="github-logo" src="https://visualpharm.com/assets/624/Github-595b40b85ba036ed117dc155.svg"/> 
            <li><a id="githublink" href="https://github.com/whitaweb">Whitney Webster</a></li>
            <li><a id="githublink" href="https://github.com/pd164594">Patrick Doyle</a></li>
            <li><a id="githublink" href="https://github.com/alrodis">Alvin Rodis</a></li>
            <li><a id="githublink" href="https://github.com/dayanavanessa">Dayana Stroshine</a></li>
          </ul>

        </div>

      </div>
    </div>
        </div>
      </div>

    </div>
  </div>


  <div style={{opacity: '0.8'}} class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
        </div>
      </div>
    </div>
    <div style={{opacity: '0.8'}} class="parallax"><img src="background3.jpg" alt="Unsplashed background img 3"/></div>
  </div>

  <footer class="page-footer teal">

    <div class="footer-copyright">
      <div class="container">
     
      </div>
    </div>
  </footer>
  </div>;

  export default Homepage;