import './App.css'
import Clicker from "./Clicker.jsx";
import Form from "./Form.jsx";
import Counter from "./Counter.jsx";
import Toggler from "./Toggler.jsx";
import TogglerCounter from "./TogglerCounter.jsx";
import ColorBox from "./ColorBox.jsx";
import ColorBoxGrid from "./ColorBoxGrid.jsx";

const colors = [
    "#E53935",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
];

function App() {
  return (
    <div>
        <ColorBoxGrid colors={colors} />
        {/*<ColorBox colors={colors} />*/}
        {/*<TogglerCounter />*/}
        {/*<Toggler />*/}
        {/*<Counter />*/}
        {/*<Form />*/}
        {/*<Clicker message="HI!!!!" buttonText="Please Click Me"/>*/}
        {/*<Clicker message="Please Stop Clicking Me1" buttonText="do not click"/>*/}
    </div>
  )
}

export default App
