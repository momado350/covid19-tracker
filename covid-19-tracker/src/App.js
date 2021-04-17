
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core"

function App() {
  return (
    <div className="App">
      <h1> COVID-19 TRACKER</h1>
      {/* using material ui to create a dropdwon list*/}
      <FormControl className="app__dropdown">
        <Select variant="outlined"
        value="abc"
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value=""></MenuItem>
          <MenuItem value=""></MenuItem>
          <MenuItem value=""></MenuItem>

        </Select>

      </FormControl>

      {/* Header */}
      {/* Tilte + Select input dropdown field */}

      {/* infoBox */}
      {/* infoBox */}
      {/* infoBox */}


      {/* Table */}
      {/* Graph*/}

      {/* Map */}

      
    </div>
  );
}

export default App;
