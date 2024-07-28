import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Index from "./index.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click Me To Vist Google'
// }

const anotherElement = (
    <a href="https://www.google.com" target="_blank">Visit google</a>
)

const anotherUser = ' react and javascript'

const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com ',target: '_blank'
    },
  'click to visit google ',
    anotherElement
)

ReactDOM.createRoot(document.getElementById("root")).render( reactElement )  ;
