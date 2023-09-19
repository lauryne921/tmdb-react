// import { Component } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Api(props) {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(props.api)
      .then((res) => res.json())
      .then((json) => {
        setItems(json.results);
        setIsLoaded(true);
      });
  }, [props.api]);

  function handleClick(item) {
    localStorage.setItem('id', item.id);
    localStorage.setItem('url', window.location.href);
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="app">
        <h1 className='title-category'>{props.title}</h1>
        <div className="wrapper-movies">
          {items && items.map((item) => (
            <Link to={`/details/${item.id}`} key={item.id} className='card-movie'>
              <div className="movie-container" onClick={() => handleClick(item)}>
                <h2 className="container-movie-title">{item.title || item.name}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.profile_path}`}
                  alt={item.title || item.name}
                  className="poster-page"
                />
                <p className="overview">{item.overview}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );    
  }
}

export default Api;


/*function Api(props) {
  const navigate = useNavigate();

  function handleClick(movieId) {
    navigate.push(`/movie/${movieId}`);
  }

  return (
    <div className="app">
      <h1>{props.title}</h1>
      <div className="wrapper-movies">
        {props.items.map((item) => (
          <div
            key={item.id}
            className="movie-container"
            onClick={() => handleClick(item.id)}
          >
            <h2 className='container-movie-title'>{item.title || item.name}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.profile_path}`}
              alt={item.title || item.name}
              className="poster"
            />
            <p className="overview">{item.overview}</p>
            <p className='vote-average'>{item.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;*/

 
/*class Api extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      }
    }
  
    componentDidMount() {
      fetch(this.props.api)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.results,
        })
      });
    }
  
    render() {
      let { isLoaded, items } = this.state;
      console.log(items);
  
      if (!isLoaded) {
        return <div>Loading...</div>
      } else {
        function handleClick() {
          console.log('it works');
        }

        return (
          <div className="app">
            <h1>{this.props.title}</h1>
            <div className="wrapper-movies">
              {items.map(item => (
                  <div key={item.id} className="movie-container" onClick={handleClick}>
                    <h2 className='container-movie-title'>{item.title || item.name}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.profile_path}`} alt={item.title || item.name} className="poster"/>
                    <p className="overview">{item.overview}</p>
                    <p className='vote-average'>{item.vote_average}</p>
                  </div>
                ))};
            </div>
          </div>
        );
      }
    }
}

export default Api;*/