import React from 'react';
import {FaSun, FaLocationArrow, FaJoint, FaTwitter, FaBuilding} from "react-icons/fa";
import GithubImage from "./Images/githubImage.jpg";



function App() {
  return (
    <main>
        <div className="nav">
            <h2 className="nav__title">DevFinder</h2>
            <p className="nav__light">Light</p>
            <FaSun className={"nav__icon"} />
        </div>
        <div className="container">
            <form className={"form"}>
                <input type="search" className={"form__input"} placeholder="Search Github username"/>
                <button type={"submit"} className={"form__button"}>Search</button>
            </form>
        </div>
        <div className={"card"}>
            <div className={"card__heading"}>
                <img src={GithubImage} alt="github" className={"card__heading-image"}/>
                <div className={"card__text"}>
                    <h5 className={"card__text-title"}>Axel mwenze</h5>
                    <p className={"card__text-ref"}>@alexandreDev</p>
                    <p className={"card__text-join"}>Joined 25 jan 2018</p>
                </div>
            </div>

            <div className={"card__bio"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores deleniti dolorum eligendi</p>
            </div>
            <div className={"card__information"}>
                <div>
                    <p className={"card__information-category"}>Repos</p>
                    <p className={"card__information-number"}>8</p>
                </div>
                <div>
                    <p className={"card__information-category"}>Followers</p>
                    <p className={"card__information-number"}>3938</p>
                </div>
                <div>
                    <p className={"card__information-category"}>Following</p>
                    <p className={"card__information-number"}>9</p>
                </div>
            </div>
            <div className={"card__links"}>
                <div><FaLocationArrow  className={"card__links-icons"}/> <p className={"card__links-text"}> San Francisco</p></div>
                <div><FaJoint  className={"card__links-icons"}/> <p className={"card__links-text"}> https://github.com</p></div>
                <div><FaTwitter  className={"card__links-icons"}/> <p className={"card__links-text"}> Not Available</p></div>
                <div><FaBuilding  className={"card__links-icons"}/> <p className={"card__links-text"}> Agihub</p></div>
            </div>
        </div>
    </main>
  );
}

export default App;
