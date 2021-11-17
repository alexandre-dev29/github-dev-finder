import React, { useState } from "react";
import { FaSun, FaJoint, FaTwitter, FaBuilding, FaBlog } from "react-icons/fa";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";
import { ProfileInformation } from "./Model/ProfileInformation";

function App() {
  const [userInput, setUserInput] = useState("");
  const [spinnerEnable, setSpinnerEnable] = useState(false);
  const [userProfile, setUserProfile] = useState(new ProfileInformation());
  const [errorVisible, setErrorVisible] = useState("hidden");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSpinnerEnable(true);
    axios
      .get(`https://api.github.com/users/${userInput}`)
      .then((response) => {
        const {
          avatar_url,
          bio,
          followers,
          following,
          login,
          name,
          company,
          twitter_username,
          created_at,
          location,
          public_repos,
          blog,
          html_url,
        } = response.data;

        const newProfile = new ProfileInformation();
        newProfile.bio = bio ?? "No Biography";
        newProfile.following = following;
        newProfile.followers = followers;
        newProfile.imageUrl = avatar_url;
        newProfile.userName = `@${login}`;
        newProfile.completeName = name;
        newProfile.organisation = company ?? "No Company";
        newProfile.twitterAccount = twitter_username ?? "No Account";
        newProfile.dateJoined = created_at;
        newProfile.location = location ?? "No Location";
        newProfile.repository = public_repos;
        newProfile.website = blog ?? "No Website";
        newProfile.url = html_url;

        setUserProfile(newProfile);
        setSpinnerEnable(false);
        setErrorVisible("hidden");
      })
      .catch((error) => {
        setSpinnerEnable(false);
        setErrorVisible("shown");
        console.log(error);
      });
  };

  const inputChanges = (e: any) => {
    setUserInput(e.target.value);
  };

  return (
    <main>
      <div className={"spinnerControl"}>
        <SpinnerCircular
          enabled={spinnerEnable}
          size={100}
          color={"rgb(0, 121, 254)"}
          secondaryColor={"rgb(255, 255, 255)"}
        />
      </div>
      <div className="nav">
        <h2 className="nav__title">DevFinder</h2>
        <p className="nav__light">Light</p>
        <FaSun className={"nav__icon"} />
      </div>
      <div className="container">
        <form className={"form"} onSubmit={handleSubmit}>
          <input
            type="search"
            className={"form__input"}
            onChange={inputChanges}
            placeholder="Search Github username"
          />
          <button type={"submit"} className={"form__button"}>
            Search
          </button>
        </form>
      </div>
      <div className={"card"}>
        <div className={"card__heading"}>
          <img
            src={userProfile.imageUrl}
            alt="github"
            className={"card__heading-image"}
          />
          <div className={"card__text"}>
            <h5 className={"card__text-title"}>{userProfile.completeName}</h5>
            <a
              href={userProfile.url}
              target="_blank"
              rel="noreferrer"
              className={"card__text-ref"}
            >
              {userProfile.userName}
            </a>
            <p className={"card__text-join"}>{userProfile.dateJoined}</p>
          </div>
        </div>

        <div className={"card__bio"}>
          <p>{userProfile.bio}</p>
        </div>
        <div className={"card__information"}>
          <div>
            <p className={"card__information-category"}>Repos</p>
            <p className={"card__information-number"}>
              {userProfile.repository}
            </p>
          </div>
          <div>
            <p className={"card__information-category"}>Followers</p>
            <p className={"card__information-number"}>
              {userProfile.followers}
            </p>
          </div>
          <div>
            <p className={"card__information-category"}>Following</p>
            <p className={"card__information-number"}>
              {userProfile.following}
            </p>
          </div>
        </div>
        <div className={"card__links"}>
          <div>
            <FaBlog className={"card__links-icons"} />{" "}
            <a href={userProfile.website} className={"card__links-text"}>
              {" "}
              {userProfile.website}
            </a>
          </div>
          <div>
            <FaJoint className={"card__links-icons"} />{" "}
            <p className={"card__links-text"}> {userProfile.location}</p>
          </div>
          <div>
            <FaTwitter className={"card__links-icons"} />{" "}
            <p className={"card__links-text"}> {userProfile.twitterAccount}</p>
          </div>
          <div>
            <FaBuilding className={"card__links-icons"} />{" "}
            <p className={"card__links-text"}> {userProfile.organisation}</p>
          </div>
        </div>
      </div>
      <p className={`error_description ${errorVisible}`}>
        This profile doesn't exist
      </p>
    </main>
  );
}

export default App;
