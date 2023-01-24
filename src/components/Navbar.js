import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
    
        return () => {
            window.removeEventListener('scroll', transitionNavbar);
        }
    }, []);

    return (
        <div className={`navbar ${show && 'navbar_black'}`}>
            <div className='navbar_contents'>
                <img 
                    onClick={() => {
                        navigate('/');
                    }}
                    className='navbar_logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                    alt='Netflix Logo' 
                />
                <img 
                    onClick={() => {
                        navigate('/profile');
                    }}
                    className='navbar_avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                    alt='Avatar' 
                />
            </div>
        </div>
    );
}
