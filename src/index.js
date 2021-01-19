import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  console.log("object")
  return(
    <div>
      <p>Hello World</p>      
    </div>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"))