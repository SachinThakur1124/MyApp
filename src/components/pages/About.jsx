import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import Footer from '../Footer';


export default function About () {
    return(
        <div className="About">
            <Footer/>
            <h1>About November Couture</h1>
             <p>Welcome to November Couture, where fashion meets individuality. We are not just a clothing brand; we are a statement. Embracing the spirit of November, a month of transformation and a prelude to the festive season, our brand stands for elegance, innovation, and a celebration of personal style.</p>
             
             <h2>Our Vision</h2>
              <p>At November Couture, we believe that fashion is a powerful form of self-expression. Our vision is to empower individuals to embrace their unique identities through carefully curated collections that blend modern trends with timeless sophistication. We aspire to be more than just a clothing brand; we aim to be a source of inspiration, encouraging our customers to embrace their authenticity with confidence.</p> 
              
              <h2>Distinctive Style</h2>
              <p>November Couture is synonymous with distinctive style that effortlessly combines comfort and chic. Our collections are carefully curated to reflect the latest fashion trends while maintaining a unique touch that sets us apart. Whether you are looking for the perfect ensemble for a special occasion or a wardrobe staple for everyday elegance, we have something for every style and taste.</p>
        
               <h2>Join the November Experience</h2>
               <p>November Couture is not just a brand; it's an experience. Join us on a journey where fashion is a celebration of individuality, and every piece tells a unique story. Whether you are exploring our online store or visiting our physical locations, we invite you to immerse yourself in the world of November Couture and discover the perfect expression of your style.

Thank you for choosing November Couture - where every day is a fashion statement, and every season is an opportunity for reinvention.

Elevate your style with November Couture - Your Fashion, Your Statement.</p>

<div className="png">
    <h2>Follow us on  </h2>
  <InstagramIcon/>
  <TwitterIcon/>
  <FacebookIcon/>
  <LinkedInIcon/>
  <YouTubeIcon/>
  <GoogleIcon/>
  </div>

  <h1 style={{color:'blue'}}>Have a Nice Day</h1>
        </div>
    )
}