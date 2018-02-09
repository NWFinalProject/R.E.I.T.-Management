import React from "react";
import { Link } from 'react-router-dom';
// import "./Home.css";
// import img from "background1.jpg";
// import imgpublic from "../../../public/background2.jpg"; 


const Homepage = props =>
  <div>

     <nav class="white" role="navigation">
    <div class="nav-wrapper container">
      <a href="/homepage">
      	<img id="logo-container" class="brand-logo" src="Logo2.png"/> 
  	</a>
      <ul class="right hide-on-med-and-down">
        <li><a id="rentlink" href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=e6a6c0f3d4816&mfid=1517945926403_e6a6c0f3d4816#/checkout/openButton">Quick Rent Payment</a></li>
      </ul>

      <ul id="rentlink" class="side-nav">
        <li><a href="https://www.paypal.com/cgi-bin/webscr">Rent Payment</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>

  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
    
        <h1 class="header center teal-text text-lighten-2">R.E.I.T Management</h1>
        <div class="row center">
          <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        </div>
        <div class="row center">
          <a href="#" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">New Users</a>
        </div>
        

      </div>
    </div>
    <div class="parallax"><img src="background3.jpg" alt="Unsplashed background img 1"/></div>
  </div>


  <div class="container">
    <div class="section">

      
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            
           <a href="#" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Administrators</a>

            <p class="light">Login Help</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <a href="#" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Renters</a>
            <p class="light">Login Help</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <a href="#" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Contractors</a>
            <p class="light">Login Help</p>
          </div>
        </div>
      </div>

    </div>
  </div>


  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
          <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        </div>
      </div>
    </div>
    <div class="parallax"><img src="background3.jpg" alt="Unsplashed background img 2"/></div>
  </div>

  <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>Contact Us</h4>
          <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
      </div>

    </div>
  </div>


  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
          <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        </div>
      </div>
    </div>
    <div class="parallax"><img src="background3.jpg" alt="Unsplashed background img 3"/></div>
  </div>

  <footer class="page-footer teal">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Company Bio</h5>
          <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="https://github.com/whitaweb">Whitney Webster</a></li>
            <li><a class="white-text" href="https://github.com/pd164594">Patrick Doyle</a></li>
            <li><a class="white-text" href="https://github.com/alrodis">Alvin Rodis</a></li>
            <li><a class="white-text" href="https://github.com/dayanavanessa">Dayana Stroshine</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
     
      </div>
    </div>
  </footer>
  </div>;

  export default Homepage;