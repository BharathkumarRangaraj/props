import React from "react";
import ReactDOM from "react-dom";
import "./Contact.js";

import "./App.css";
import Contact from "./Contact.js";

function App() {
  return (
    <div className="contacts">
      <Contact
        img="./dog1.jpg"
        name="Mr.Jega"
        phone="(222) 3455-234"
        email="mr.wilsaker@dognap.woww"
      />
      <Contact
        img="./dog2.jpg"
        name="Mr.Indhra kumar"
        phone="(222) 3455-234"
        email="mr.wilsaker@dognap.woww"
      />
      <Contact
        img="./dog3.jpg"
        name="Mr.Bharath"
        phone="(222) 3455-234"
        email="mr.wilsaker@dognap.woww"
      />
      <Contact
        img="./dog4.jpg"
        name="Mr.gopi"
        phone="(222) 3455-234"
        email="mr.wilsaker@dognap.woww"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
