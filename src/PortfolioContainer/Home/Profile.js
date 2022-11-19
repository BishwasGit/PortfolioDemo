import React from 'react'
import Typical from 'react-typical';
import Button from '@mui/material/Button';
import './Profile.css';


export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>

            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href=''><i className="fa-brands fa-facebook"></i></a>
                    <a href=''><i className="fa-brands fa-tiktok"></i></a>
                    <a href=''><i className="fa-brands fa-twitter"></i></a>
                    <a href=''><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href=''><i classBame="fa-brands fa-youtube"></i></a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {""}
                        Hello, I'M <span className='highlighted-text'>Bishwas</span>
                    </span>
                </div>

            <div className='profile-details-role'>
                <span className='primray-text'>
                    {""}
                    <h1>
                        {""}
                         <Typical 
                         loop={Infinity}
                         steps={[
                            "ㄍㄟˉ, I'M Bishwas  👋",
                            1000,
                            "Full Stack Developer 🤑",
                            1000,
                            "Learning MERN Stack 💯",
                            1000,
                            "REACT Dev 📴",
                            1000,
                            "Front-End / Back-End 💻",
                            1000,
                         ]}
                         />
                    </h1>
                </span>
                <span className='profile-role-tagline'>
                     Familer with both Front-End as well as Back-End
                </span>
            </div>

                <div className='profile-options'>
                    <Button variant="outlined" className="btn"> 
                    {""}
                    Connect with Me {""}
                    </Button>
                    <a href="Resume.pdf" download="Bishwas Resume.pdf">
                    <button class="btn waves-effect waves-light indigo darken-4" type="submit" name="action">Get My Resume
                     <i class="material-icons right">send</i>
                     </button>
                    </a>
                </div>
            </div>
                    
                    <div className="profile-picture">
                        <div className='profile-picture-background'>

                        </div>
                    </div>

        </div>
    </div>
  )
}
