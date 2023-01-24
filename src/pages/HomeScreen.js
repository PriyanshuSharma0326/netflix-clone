import React from 'react';
import '../styles/HomeScreen.css';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import requests from '../services/Requests';
import Row from '../components/Row';

export default function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Navbar />

            <Banner />

            <Row
                title='NETFLIX ORIGINALS'
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title='Trending Now'
                fetchURL={requests.fetchTrending}
            />
            <Row
                title='Top Rated'
                fetchURL={requests.fetchTopRated}
            />
            <Row
                title='Action Movies'
                fetchURL={requests.fetchActionMovies}
            />
            <Row
                title='Comedy Movies'
                fetchURL={requests.fetchComedyMovies}
            />
            <Row
                title='Horror Movies'
                fetchURL={requests.fetchHorrorMovies}
            />
            <Row
                title='Romance Movies'
                fetchURL={requests.fetchRomanceMovies}
            />
            <Row
                title='Documentaries'
                fetchURL={requests.fetchDocumentaries}
            />
        </div>
    );
}
