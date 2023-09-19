import React from 'react';
import Api from "../Api";

function Series() {
    return <Api api='https://api.themoviedb.org/3/tv/top_rated?api_key=4a54ab11d3721dac3c7f819587e24e14' title='Top rated series' />
}

export default Series;