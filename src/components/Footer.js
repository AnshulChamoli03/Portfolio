import React, { useContext } from "react";
import { LanguageContext } from "../App";

function Footer({ sharedBasicInfo }) {
  const { language } = useContext(LanguageContext);

  let networks = sharedBasicInfo && sharedBasicInfo.social
    ? sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      })
    : [];

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>
      </div>
    </footer>
  );
}

export default Footer;
