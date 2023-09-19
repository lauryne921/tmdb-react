import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Trending</Link>
                    </li>
                    <li>
                        <Link to='/now-playing'>Now Playing</Link>
                    </li>
                    <li>
                        <Link to='/top-rated'>Top Rated</Link>
                    </li>
                    <li>
                        <Link to='/last-year'>2022</Link>
                    </li>
                    <li>
                        <Link to='/current-year'>2023</Link>
                    </li>
                    <li>
                        <Link to='/series'>Series</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;