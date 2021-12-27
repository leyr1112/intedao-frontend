import InteIcon from "../../assets/icons/inte-nav-header.svg";
import "./notfound.scss";

export default function NotFound() {
  return (
    <div id="not-found">
      <div className="not-found-header">
        <a href="https://app.intedao.com" target="_blank">
          <img className="branding-header-icon" src={InteIcon} alt="InteDAO" />
        </a>

        <h2 style={{ textAlign: "center" }}>Page not found</h2>
      </div>
    </div>
  );
}
