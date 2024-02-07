import React from "react";
import ReactDOM from "react-dom";

function Card(props) {

  console.log(props)
  return <div>

    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
}



ReactDOM.render(
  <div>
  <h1>My Contacts</h1>
  <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="avatar_img"/>
  <Card name="FF0026" img="https://assets.nierrein.guide/ui/costume/ch012012/ch012012_full.png" tel="flowers" email="kill the flowers" />
  <input id="fname" placeholder="Enter you first name" value="Daniel Zeh"/>


  </div>,
  document.getElementById("root")
);
