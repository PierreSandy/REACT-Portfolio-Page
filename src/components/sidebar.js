import React from 'react'
import Instagram from '../Assets/instagram.png'
import Github from '../Assets/github.png'
import Linkedin from '../Assets/linkedin.png'
import PersonalPhoto from '../Assets/personalphoto.png'
import Pin from '../Assets/pin.png'
import ResumePdf from '../Assets/resume15.pdf'


const Sidebar = () => {
  // email handler//
  const handleEmailMe = () => {
    window.open('mailto:pdesand6@gmail.com')
  }
  return(

    <div className='sidebar-content'>
      <img src={PersonalPhoto} alt='avatar' className='sidebar-avatar' />
      <div className='sidebar-name'>Pierre <span>Sandy</span></div>
      <div className='sidebar-title'>Full Stack Engineer</div>

      <a>
        <div className='sidebar-item-resume'>
          
        </div>
      </a>

      <figure className='sidebar-social-icons'>
        <a href=''><img src={Linkedin} alt='linkedin' className='sidebar-icon' /></a>
        <a href=''><img src={Instagram} alt='instagram' className='sidebar-icon'/></a>
        <a href=''><img src={Github} alt='github' className='sidebar-icon'/></a>
      </figure>

      <div className='contact'>
        <div className='sidebar-item'>
          
        </div>
          <div className='sidebar-location'> 
          <img src={Pin} className='sidebar-icon-location'/>Auckland, New Zealand</div>

          {/* input email - currenlty blank */}
          <div className='sidebar-item'>pdesand6@gmail.com</div>
          {/* input phone number -currently blank */}
          <div className='sidebar-item'>+64 027 559 3074</div>
      </div>
      <div className='sidebar-item-email'onClick={handleEmailMe}>Email Me</div>

      <a href={ResumePdf} download='resume15.pdf'>
      <div className='sidebar-item-email'>Download CV</div>

      </a>
    </div>
  )

};

export default Sidebar;