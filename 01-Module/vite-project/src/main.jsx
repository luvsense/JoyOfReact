import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/styles.css";

//// Old way:
// const element = React.createElement(
//   'p',
//   {
//     id: 'hello',
//   },
//   'Hello World!'
// );

// New way:

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
