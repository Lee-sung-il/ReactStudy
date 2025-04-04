import './App.css'
import Chicken from "./Chicken.jsx";
import Greeter from "./Greeter.jsx";
import Die from "./Die.jsx";
import ListPicker from "./ListPicker.jsx";
import DoubleDice from "./DoubleDice.jsx";
import Heading from "./Heading.jsx";
import ColorList from "./ColorList.jsx";
import Slots from "./Slots.jsx";


function App() {

    return (
        <div>
            <Slots val1="🍒" val2="🍒" val3="🍒" />
            <Slots val1="🍒" val2="🍌" val3="🍒" />
            {/*<Heading color="magenta" text="welcome!" fontSize="20px"/>*/}
            {/*<Heading color="teal" text="blah" fontSize="48px"/>*/}
            {/*<DoubleDice/>*/}
            {/*<DoubleDice/>*/}
            {/*<DoubleDice/>*/}
            {/*<ColorList colors={['red', 'pink', 'purple', 'teal']}/>*/}
            {/*<ColorList colors={['olive', 'orangered', 'slategrey']}/>*/}
            {/*<ListPicker values={[1,2,3]}/>
            <ListPicker values={['a','b','c']}/>*/}
            {/*<Greeter person="Bill" from="Colt"/>*/}
            {/*<Greeter person="Ted"/>*/}
            {/*<Greeter from="Elton" />*/}
            {/*<Die numSide={20}/>*/}
            {/*<Die/>*/}
            {/*<Die numSide={10}/>*/}

        </div>
    )
}

export default App
