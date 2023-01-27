import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <>
        <div class="containercontactus">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">RajaAnna</div>
          <div class="text-two">Doddaballapura</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+0098 9893 5647</div>
          <div class="text-two">+0096 3434 5678</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">rajaanna@gmail.com</div>
          <div class="text-two">raghavendra@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your FirstName" />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your LastName"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your Email"/>
        </div>
        <div class="input-box">
        <input type="text"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='PhoneNumber'/>
        </div>
        
        
        <div class="input-box message-box">
          
        </div>
        <div class="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
    </>
  )
}


export default Contact