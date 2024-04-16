import React from "react";
import "./style.css";
import { contactConfig } from "../../content_option";

export const SideBarMail = (params) => {
  return (
    <div className="stick_email">
      <ul>
        {contactConfig.YOUR_EMAIL && (
          <li>
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              <span id="mail">prathmeshvairale17@gmail.com</span>
            </a>
          </li>
        )}
      </ul>
      <p>Mail Me</p>
    </div>
  );
};
