import HomeImage from "../assets/home.svg";
import AboutImage from "../assets/about.svg";
import MateImage from "../assets/mate.svg";
import APIImage from "../assets/api.svg";
import SearchImage from "../assets/search.svg";

export default function Icons(props) {
  if (props.style == "home") {
    return <img className="icon" src={HomeImage} />;
  }
  if (props.style == "about") {
    return <img className="icon" src={AboutImage} />;
  } else if (props.style == "mate") {
    return <img className="icon" src={MateImage} />;
  } else if (props.style == "api") {
    return <img className="icon" src={APIImage} />;
  } else if (props.style == "search") {
    return <img className="icon" src={SearchImage} />;
  } else {
    return <div>No icon style found!</div>;
  }
}
