import { Component } from "react";
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

class _Footer extends Component{
    render(){
        return(
            
            <div className="home" style={{background:'#05101c' , width:'100%' , height:'550px'}}>
            
            <div className="container">
                <div className="row">


                <div className="col-lg-4">
                  <ul style={{listStyleType:'none' ,fontSize:'20px' ,lineHeight:'2.8' ,color:'rgb(193 193 193)',marginTop:'50px'}}>
                  <li style={{color:'green' ,border:'none', marginBottom:'20px'}}><h3>SaLim Shop</h3></li>
                <li> <a className="text-info" href="#"> <FaMapMarkerAlt/> 23 Salim street at minia</a></li>
                <li> <a className="text-info" href="#"> <FaPhone/> 08684254254</a></li>
                <li> <a className="text-info" href="#"><FaEnvelope/> salim@gmail.com</a></li>
                 </ul>
            </div>

            
            <div className="col-lg-4">
                  <ul style={{listStyleType:'none' ,fontSize:'20px' ,lineHeight:'2.2' ,color:'rgb(193 193 193)',marginTop:'50px'}}>
                  <li style={{color:"green", border:'none', marginBottom:'20px'}}><h3>Products</h3></li>
                
                <li> <a className="text-info" href="#">Sport Wear</a></li>
                <li> <a className="text-info" href="#">Men's Shoes</a></li>
                <li> <a className="text-info" href="#">Women's Shoes</a></li>
                <li> <a className="text-info" href="#">Popular Dress</a></li>
                <li> <a className="text-info" href="#">Sport Shoes</a></li>
                 </ul>
            </div>

            <div className="col-lg-4 ">
                  <ul style={{listStyleType:'none' ,fontSize:'20px' ,lineHeight:'2.2' ,color:'rgb(193 193 193)',marginTop:'50px'}}>
                  <li style={{color:"green",border:'none', marginBottom:'20px'}}><h3>Further Info</h3></li>
                <li> <a className="text-info" href="#">Home</a></li>
                <li> <a className="text-info" href="#">About Us</a></li>
                <li> <a className="text-info" href="#">Shop Locations</a></li>
                <li> <a className="text-info" href="#">FAQS</a></li>
                <li> <a className="text-info" href="#">Contact</a></li>
                 </ul>
            
            </div>
            <hr/>
            
            
            <div className="icons p-5"  style={{color:'white'}}>
            <hr/>
                <a href="#"> <FaFacebook style={{marginRight:'20px'}}/></a>
                <a href="#"><FaInstagram  style={{marginRight:'20px'}}/></a>
                <a href="#"><FaTwitter  style={{marginRight:'20px'}}/></a>
                <a href="#"><FaLinkedin  style={{marginRight:'20px'}}/></a>
            </div>

            <div className="sub p-5">
            <hr/>
                <input type="text" style={{background:'black' , border :'1px solid white' ,float:'right',position:'absolute' , left:'670px' , width:'250px' , height:'40px'}} className="text-light" placeholder="Email Address"></input>
                <button className="btn btn-success mx-4"  style={{width:'100px' , height:'40px',float:'right',position:'absolute' , left:'900px'}}>Subscribe</button>
            </div>

            </div>
            </div>
            </div>  
        );
    }
}
export default _Footer;
