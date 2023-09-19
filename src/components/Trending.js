import React from "react";
import Api from "../Api";

function Trending() {
    return <Api api='https://api.themoviedb.org/3/trending/all/day?api_key=4a54ab11d3721dac3c7f819587e24e14' title='Movies Trending today' />
}

export default Trending;