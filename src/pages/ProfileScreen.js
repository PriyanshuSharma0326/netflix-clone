import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { selectUser } from '../features/userSlice';
import '../styles/ProfileScreen.css';
import { auth } from '../lib/config/firebase';
import { useNavigate } from 'react-router-dom';
import PlansScreen from '../components/PlansScreen';

export default function ProfileSreen() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    return (
        <div className='profileScreen'>
            <Navbar />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen_info'>
                    <img 
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                        alt='' 
                    />
                    <div className='profileScreen_details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen_plans'>
                            <h3>Plans</h3>
                            <PlansScreen />
                            <button 
                                className='profileScreen_signOutButton' 
                                onClick={() => {
                                    auth.signOut();
                                    navigate('/');
                                }}
                            >
                            Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
