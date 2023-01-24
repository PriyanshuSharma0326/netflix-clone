import React, { useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import ProfileScreen from './pages/ProfileScreen';

import { auth } from './lib/config/firebase';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

export default function App() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                //Logged In
                console.log(userAuth);
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                }));
            }
            else {
                //Logged Out
                dispatch(logout());
            }
        });

        return unsubscribe;
    }, [dispatch]);

    return (
        <div className="app">
            <Router>
                {!user ? (
                    <LoginScreen />
                ) :
                <Routes>
                    <Route path='/profile' element={<ProfileScreen />} />
                    <Route path='/' element={<HomeScreen />} />
                </Routes>}
            </Router>
        </div>
    );
}
