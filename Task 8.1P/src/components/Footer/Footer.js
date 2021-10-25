import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footrow">
          {/* Column1 */}
          <div className="footcol">
            <h4>NEWSLETTER SIGN</h4>
            <h1 className="list-unstyled">
              <input type="text" name="name" />
              <input type="submit" value="Subscribe" />
            </h1>
          </div>
          {/* Column2 */}
          <div className="footcol">
            <h4>CONNECT US</h4>
            <ui className="list-unstyled">
              <li>FACEBOOK</li>
              <li>INSTAGRAM</li>
              <li>TWITTER</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="footrow">
          <p className="footcol-sm">
            &copy;{new Date().getFullYear()} IService | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;