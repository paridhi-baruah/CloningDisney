import React from 'react'
import home from '../Components/Images/icons8-home.svg';
import searchIcon from '../Components/Images/search-icon.svg';
import WatchIcon from '../Components/Images/watchlist-icon.svg';
import origIcon from '../Components/Images/original-icon.svg';
import movieIcon from '../Components/Images/movie-icon.svg';
import seriesIcon from '../Components/Images/series-icon.svg';
import logo from './Images/logo.svg';
import { useState } from 'react';
const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  return (
    <div>
      <div className={`sidebar ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="sidepane">
        <img src={logo} alt="disney/logo" />
      </div>
        <ul>
          <li><img src={home} alt="home" /><span>Home</span></li>
          <li><img src={searchIcon} alt="home" /><span>Search</span></li>
          <li><img src={WatchIcon} alt="home" /><span>Watch</span></li>
          <li><img src={origIcon} alt="home" /><span>Originals</span></li>
          <li><img src={movieIcon} alt="home" /><span>Movie</span></li>
          <li><img src={seriesIcon} alt="home" /><span>Series</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
