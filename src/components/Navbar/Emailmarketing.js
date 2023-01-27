import React from 'react';
import emarketingimage from '../../assets/icons/emailcamp.jpg';
import emarketing from '../../assets/icons/emailcamphand.jpg';

import './emarketing.css'

const Emailmarketing = () => {
  return (
    <>
    
      <div className="left-main">
        <img src={emarketingimage} className="icon-position" alt="Nature" width="160" height="180"  ></img>
        <p class="centered" >Email Marketing Campaign Management - The Key to Email Success </p>       
      </div>


      <div className="firstbody">
          <h2 className="bodytext">Email Campaign</h2>
          <p className="firstp">Done correctly email campaigns are an effective way of targeting your audience and driving traffic to your website.</p>

          <p className='secondp'>For all our email campaigns we work closely with our graphic designers to create a message template that matches your business branding. We then add your logo and any other key product or service images. When the template is done, we add text and images to your message through a bespoke content management system, and it’s ready to send.</p>

          <p className='thirdp'>You can make our email templates work for you in many ways: to advertise end-of season sales, discounts, new products or special offers. You can also use them as newsletters, keeping customers up to date with your views on current events, changes in regulations or about how to access your services.</p>
          <p className='fourthp'>If you’ve never managed an email campaign before, don’t worry. We will give you full training and advice on how to construct the most effective message for all email programmes – and beat the dreaded spam filters! If you don’t have the time to do the campaign yourself, we can construct and send messages on your behalf, with your mailing lists, at the agreed time.</p>
          <p className='fifthp'>At the end of every campaign you will receive detailed data on key aspects of the promotion, including the number of messages sent and how many were opened. Unlike traditional mailshots which disappear from your radar as soon as the postman puts it through a customer’s door, our tracking software will allow to monitor – and act on – how your message is being received.</p>
         
      </div>

      <div className='left-hand-plan'>
        <img src={emarketing} className="two-position" alt = "hand" width="160" height="180"  ></img>
        <p class="centered-content" >Talk to us about your next project</p>       
        <button class="btn">Get in Touch</button>
      </div>






      <div className='boxcolor'>
        <h1 className='boxfirstheader'>We regularly send out tips and guidance notes. Join our Mailing List and get our "Better Site Playbook"</h1>
        <div className = "inputfield">
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <button class="button button3">SUBSCRIBER</button> 

        </div> 




        
      {/* <div className='secondborderform'>
        <form className='userdatreturn (
    <>
      <div className="left-main">
        <img src={emarketingimage} className="icon-position" alt="Nature" width="160" height="180"  ></img>
        <p class="centered" >Email Marketing Campaign Management - The Key to Email Success </p>       
      </div>


      <div className="firstbody">
          <h2 className="bodytext">Profit from your email subscribers through email campaign management</h2>
          <p className="firstp">Done correctly email campaigns are an effective way of targeting your audience and driving traffic to your website.</p>

          <p className='secondp'>For all our email campaigns we work closely with our graphic designers to create a message template that matches your business branding. We then add your logo and any other key product or service images. When the template is done, we add text and images to your message through a bespoke content management system, and it’s ready to send.</p>

          <p className='thirdp'>You can make our email templates work for you in many ways: to advertise end-of season sales, discounts, new products or special offers. You can also use them as newsletters, keeping customers up to date with your views on current events, changes in regulations or about how to access your services.</p>
          <p className='fourthp'>If you’ve never managed an email campaign before, don’t worry. We will give you full training and advice on how to construct the most effective message for all email programmes – and beat the dreaded spam filters! If you don’t have the time to do the campaign yourself, we can construct and send messages on your behalf, with your mailing lists, at the agreed time.</p>
          <p className='fifthp'>At the end of every campaign you will receive detailed data on key aspects of the promotion, including the number of messages sent and how many were opened. Unlike traditional mailshots which disappear from your radar as soon as the postman puts it through a customer’s door, our tracking software will allow to monitor – and act on – how your message is being received.</p>
         
      </div>

      <div className='left-hand-plan'>
        <img src={emarketing} className="two-position" alt = "hand" width="160" height="180"  ></img>
        <p class="centered-content" >Talk to us about your next project</p>       
        <button class="btn">Get in Touch</button>
      </div>






          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        
          <input type="submit" value="Submit"/>
        </form>
       
      </div>            */}

{/* 
     <div className='footerbgcol'>
      <div className= "bottommostSection">
        <div>
          <div className='middleblock'>
            <div className='leftblock'>
              <div className='quicklinks'>
                <div className='heading'>quicklinks</div>
                <ul>
                  <li className = "firstli">
                    <ul>
                      <li>
                        <a href title="Home" style={{color:"white"}}>Home</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Home</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Why Inspire</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>About</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Portfolio</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Insights</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Terms and Conditions</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Privacy & Data Policy</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Vulnerability Disclosure Policy</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Sitemap</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>The Digital Scotland Voucher</a>
                      </li>

                      <li>
                        <a href="#" style={{color:"white"}}>Scheme</a>
                      </li>

                      <li>
                        <a href="#" style={{color:"white"}}>Contact Us</a>
                      </li>
                    </ul>
                  </li>
                  <li className='secondli'>
                    <ul>
                      <li>
                        <a href title="Home" style={{color:"white"}}>Our Process</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Accreditations, Partnerships,</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Alliances & Memberships</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Developer SOS</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Visit Us</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>Testimonials</a>
                      </li>
                      <li>
                        <a href="#" style={{color:"white"}}>GDPR</a>
                      </li>

                      <li>
                        <a href="#" style={{color:"white"}}>IPW Landing Page</a>
                      </li>

                      <li>
                        <a href="#" style={{color:"white"}}>Dental Websites</a>
                      </li>

                      <li>
                        <a href="#" style={{color:"white"}}>Scottish Enterprise - Digital</a>
                      </li>

                      <li>
                        <a href="#" style={{color:"white"}}>Development Loan Scheme</a>
                      </li>

                      <li>
                        <a href="#" style={{color:"white"}}>Start Digital</a>
                      </li>

                      <li>
                        <a href="#" style={{color:"white"}}>Digital Boost 2022</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


     
        <div className="footertext">

          
          <h3>We are here to help you, so if you'd like an informal no
          obligation chat, then please let us know</h3>


            <div className='footerinput'>
              <form action="">
                <textarea id="footercontactform-message" name="FooterContactForm[message]" placeholder="Message"></textarea>


                <select name="cars" id="cars">
                  <option value="select">yes</option>
                  <option value="saab">No</option>                
                </select>


                <input type="text" id="fname" name="fname" placeholder='firstName' /><br/>
            
                <input type="text" id="lname" name="lname" placeholder='LastName'/><br />

                <input type="text" id="fname" name="fname"  placeholder='Email'/><br/>
            
                <input type="text" id="lname" name="lname" placeholder='phoneNumber'/><br />
                <p className='footerpara'>To comply with data protection regulations (2018), we are unable to store and use your information unless you give us your permission. Please select Yes to allow this. <span style={{ color: 'orange' }}>View our data protection policy for details</span>.</p> 

            
            


                <button class = "footerbutton">Send</button>
              </form> 
          </div>

          <div className='callus'>
            <h2 className='callusnumber'>CALL US</h2>
            <div className='leftcallus'> 010101010  </div>
          </div>

          <div className='connectingicons'>
            <h2 className='connectingiconsname'>CONNECT WITH US</h2>
            <div className='connectingiconssymbol'>
              <img src={firsticon} alt="icon"/>
              <img src={second} alt="icon"/>
              <img src={third} alt="icon"/>
              <img src={fourth} alt="icon"/>
              <img src={fifty} alt="icon"/>
              
            </div>
          </div>

          

          </div>
          

        </div> */}
      </div>     
      
    </>
  );
};
  
export default Emailmarketing;