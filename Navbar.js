import React,{useState} from 'react';
import './Navbar.css';
import loginImg from "../../tdl_logo.png";
import tcpLogo from '../../tcp.jfif';
import cromaLogo from '../../croma.jpeg';
import westsideLogo from '../../westside.jpg';
import starbazarLogo from '../../starbazar.png';
import titanLogo from '../../titan.png';
import profilePic from '../../profile_pic.png';
import $ from 'jquery';

function Navbar(){
    const [click,setClick]=useState(false);
    const [dropdown,setDropdown]=useState(false);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    $(document).ready(function(){
			$(".profile .icon_wrap").click(function(){
			  $(this).parent().toggleClass("active");
			  $(".notifications").removeClass("active");
			});

			$(".notifications .icon_wrap").click(function(){
			  $(this).parent().toggleClass("active");
			   $(".profile").removeClass("active");
			});

			$(".show_all .link").click(function(){
			  $(".notifications").removeClass("active");
			  $(".popup").show();
			});

			$(".close").click(function(){
			  $(".popup").hide();
			});
		});
    return (
        <>
        <div class="navbar">
        <a href="#"><img src={loginImg} className="LogoImg"/></a>
        <a href="#" className="pimText">PIM</a>
  <a href="#home" className="bottomBorder">Dashboard</a>
  <div class="dropdown">
    <button class="dropbtn">Manage 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#" className="bottomBorder">Category 1</a>
      <a href="#" className="bottomBorder">Category 2</a>
      <a href="#" className="bottomBorder">Category 3</a>
    </div>
  </div>
  <div class="profile">
        <div class="icon_wrap">
          <img className="profilePic" src={profilePic} alt="profile_pic"/>
          <span class="name">John Alex</span>
          <i class="fas fa-chevron-down profilecolor"></i>
        </div>

        <div class="profile_dd">
          <ul class="profile_ul">
            <li class="profile_li"><a class="myaccount" href="#"><span class="picon"><i class="fas fa-user-alt"></i>
                </span>Profile</a>
            </li>
            <li><a class="address" href="#"><span><i class="fas fa-map-marker"></i></span>Address</a></li>
            <li><a class="settings" href="#"><span class="picon"><i class="fas fa-cog"></i></span>Settings</a></li>
            <li><a class="logout" href="#"><span class="picon"><i class="fas fa-sign-out-alt"></i></span>Logout</a></li>
          </ul>
        </div>
      </div>
</div>
   <p className="Sales-Order">Catalog</p> 
<div className="card" onClick="Test()">
  <div className="container">
    <p className="Display-Business-Vol">TCP</p> 
    <p className="Condition-Contracts">Last Published on<br/>10 Oct. 2020 by Mona</p> 
    <p className="Sku-Unit">50<sub className="Unit">SKUs</sub></p>
  </div>
</div>
<p className="Sales-Order-Brand">Recent Partner Catalogs</p> 
<div className="card1">
  <img src={cromaLogo}  alt="Avatar" className="Image-1"/>
<p className="Display-Business-Vol-1">Croma Retail</p>
  <div className="container">
    <p>Last Updated on 10 Oct. 2020</p> 
  </div>
   <div>
   <p className="Sku-Unit">15345<sub className="Unit">SKUs</sub></p>
</div>
</div>
<div className="card2">
  <img src={westsideLogo} alt="Avatar" className="Image-2"/>
  <p className="Display-Business-Vol-2">Westside Retail</p>
  <div className="container">
    <p>Last Updated on 10 Oct. 2020</p> 
  </div>
   <div>
   <p className="Sku-Unit">120<sub className="Unit">SKUs</sub></p>
</div>
</div>
<div className="card3">
  <img src={starbazarLogo} alt="Avatar" className="Image-2"/>
  <p className="Display-Business-Vol-2">Star Bazar</p>
  <div className="container">
    <p>Last Updated on 10 Oct. 2020</p> 
  </div>
   <div>
   <p className="Sku-Unit">200<sub className="Unit">SKUs</sub></p>

</div>
</div>
<div className="card4">
  <img src={titanLogo} alt="Avatar" className="Image-2"/>
<p className="Display-Business-Vol-2">Titan</p>
  <div className="container">
    <p>Last Updated on 10 Oct. 2020</p> 
  </div>
   <div>
   <p className="Sku-Unit">100<sub className="Unit">SKUs</sub></p>
</div>
</div>
        </>
    );
}

export default Navbar
