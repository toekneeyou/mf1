import React from "react";

const App = (props) => {
  const buttonClick = () => {
    const onClick = props.onClick;
    if (onClick) {
      onClick();
    } else {
      console.log("button is clicked");
    }
  };
  return <div style={{ padding: "50px 12px", display: "flex" }}>I'm from a different APP</div>;
};

export default App;
