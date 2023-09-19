import React from 'react';
import Api from '../Api';

function NowPlaying() {
    return <Api api='https://api.themoviedb.org/3/movie/now_playing?api_key=4a54ab11d3721dac3c7f819587e24e14' title='Now Playing' />
}

export default NowPlaying