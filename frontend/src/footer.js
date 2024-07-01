import React from "react";
import "./App.css";

function Footer() {
  return (
    <footer
      className="Footer"
      style={{ display: "flex", bottom: 0, width: "100%", height: "150px" }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5>Sara Medojević</h5>
        <h5>Slavko Sošić</h5>
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h6>Potato leaves disease</h6>
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            color="purple"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 20 20"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
          milossosic516@gmail.com
        </h5>
        <h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            color="purple"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 20 20"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
          nikoladzankic@.com
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
