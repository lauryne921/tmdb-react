import React, { useState, useEffect } from 'react';
import './movieDetails.css';

function MovieDetails({ match }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('id');
    const urlPage = localStorage.getItem('url');
    let type; 

    if (urlPage.includes('series')) {
        type = 'tv';
    } else {
        type = 'movie'
    }

    fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=4a54ab11d3721dac3c7f819587e24e14`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError('Une erreur s\'est produite lors du chargement des détails du film.');
        setIsLoading(false);
      });
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  function convertMinutesToHours(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  }

  function calculatePercentage(averageRating) {
    const percentage = Math.floor(averageRating * 10);
    return percentage;
  }

  function formatNumberWithCommas(number) {
    return `$${number.toLocaleString('en-US')}`;
  }

  const url = localStorage.getItem('url');

  return (
    <div className='details-container'>
        <a href={url}><button className='back-button'>Go Back</button></a>
        <div className="grid-container">
            <div className='left-column'>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                    className='poster'
                />
            </div>
            <div className='right-column'>
                <h1>{movieDetails.title || movieDetails.name}</h1>
                <div className='top-info'>
                    <p className='release-date'>{movieDetails.release_date || movieDetails.first_air_date}</p>
                    <div className='wrapper-genre'>
                        {movieDetails.genres.map((genre) => (
                            <div key={genre.id} className='container-genre'>
                                <p className='genre'>{genre.name || ''}</p>
                            </div>
                        ))}
                    </div>
                    <div className='runtime-site-link'>
                        <p className='runtime'>{convertMinutesToHours(movieDetails.runtime || '')}</p>
                        <a href={movieDetails.homepage || ''} target='_blank' rel="noreferrer" className='movie-link'>{movieDetails.title || movieDetails.name} website</a>
                    </div>
                </div>
                <div className='wrapper-note'>
                    <div className='container-note'>
                        <p className='bold'>{calculatePercentage(movieDetails.vote_average)}%</p>
                    </div>
                    <p className='bold'>Note</p>
                </div>
                <p className='tagline'>{movieDetails.tagline || ''}</p>
                <p className='overview'>{movieDetails.overview}</p>
                <div className='container-numbers'>
                    <div className='budget number'>
                        <p className='bold'>Budget :</p>
                        <p>{formatNumberWithCommas(movieDetails.budget || 'undefined')}</p>
                    </div>
                    <div className='revenue number'>
                        <p className='bold'>Revenue :</p>
                        <p>{formatNumberWithCommas(movieDetails.revenue || 'undefined')}</p>
                    </div>
                    <div className='benefice number'>
                        <p className='bold'>Bénéfice :</p>
                        <p>{formatNumberWithCommas(movieDetails.revenue - movieDetails.budget || 'undefined')}</p>
                    </div>
                </div>
                <div>
                    <p className='bold'>Production Companies :</p>
                    {movieDetails.production_companies.map((company) => (
                        <div key={company.id}>
                            <p>{company.name} ({company.origin_country})</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default MovieDetails;
