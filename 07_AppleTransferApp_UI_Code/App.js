import { createRoot } from "react-dom/client";
import AppleCounter from "./Components/AppleCounter";

const App = () => {
    return(
        <AppleCounter />
    )
}

const root = createRoot(document.querySelector(".root"));
root.render(<App />);