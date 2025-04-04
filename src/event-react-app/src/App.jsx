import './App.css'
import Clicker from "./Clicker.jsx";
import Form from "./Form.jsx";

function App() {
  return (
    <div>
        {/*<Form />*/}
        <Clicker message="HI!!!!" buttonText="Please Click Me"/>
        <Clicker message="Please Stop Clicking Me1" buttonText="do not click"/>
    </div>
  )
}

export default App
