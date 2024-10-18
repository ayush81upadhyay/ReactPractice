import { createRoot } from "react-dom/client";
import Counter from './Components/Counter.js';

const App = () => {
    return(
        <Counter />
    )
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);