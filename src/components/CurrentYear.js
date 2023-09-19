import React from "react";
import Api from "../Api";

function CurrentYear() {
    return <Api api='https://api.themoviedb.org/3/discover/movie?primary_release_year=2023&sort_by=vote_average&sort_by=popularity.desc&api_key=4a54ab11d3721dac3c7f819587e24e14' title='Movies out this year' />
}

export default CurrentYear;