import './App.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo.jsx';
import FormDemo from "./FormDemo.jsx";
import Navbar from './Navbar.jsx';
import {Component} from "react";


function App() {
  return (
    <div>
      {/*  <Button variant="contained" onClick={() => alert('HI!')}>*/}
      {/*    Contained*/}
      {/*  </Button>*/}
      {/*  <Button variant="text">Contained</Button>*/}
      {/*  <Button variant="outlined">Contained</Button>*/}
      {/*  <Button color="success" variant="contained" onClick={() => alert('HI!')}>*/}
      {/*    Contained*/}
      {/*  </Button>*/}
      {/*  <Button*/}
      {/*    color="secondary"*/}
      {/*    variant="contained"*/}
      {/*    onClick={() => alert('HI!')}*/}
      {/*  >*/}
      {/*    Contained*/}
      {/*  </Button>*/}
      {/*  <IconButton color="secondary" aria-label="add an alarm">*/}
      {/*    <AlarmIcon />*/}
      {/*  </IconButton>*/}
      {/*<RatingDemo />*/}
      <Navbar />
      <FormDemo />
    </div>
  );
}

export default App;
