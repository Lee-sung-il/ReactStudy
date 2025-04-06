import './App.css'
import Counter from "./Counter.jsx";
import Dumbo from "./Dumbo.jsx";
import ScoreKeeper from "./ScoreKeeper.jsx";
import EmojiClicker from "./EmojiClicker.jsx";

function App() {
  return (
    <>
        {/*<h1>State Demo</h1>*/}
        {/*<EmojiClicker />*/}
        {/*<Counter />*/}
        {/*<Dumbo />*/}
        <ScoreKeeper numPlayers={5} target={5}/>
    </>
  )
}

export default App
