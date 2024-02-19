import React from 'react';
import Clubfactory from '../Clubfactory';
import Footer from '../Footer';
import club from '../ecom.json';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';


export  default function Home (){
    return (
        <div>      
      <h2>Featured Products</h2>
      <div className="name">
    {club.map((element,index)=>{
      return(
       <Clubfactory key={index}
       num={element.id}
       name={element.title}
       price={element.price}
       image={element.image}
       rating={element.rating.rate}
       />
         
      )  
    })
    }
    </div>
     <hr/>
    <div className="png">
    <Footer/>
    <h2>Follow us on  </h2>
     <InstagramIcon/>
     <TwitterIcon/>
     <FacebookIcon/>
     <LinkedInIcon/>
     <YouTubeIcon/>
     <GoogleIcon/>
     </div>
    </div>
    )
}