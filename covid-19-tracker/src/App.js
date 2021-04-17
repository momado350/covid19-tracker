import React, { useState } from "react";
import './App.css';
import { MenuItem, FormControl, Select } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([])
  // state lets you write a variable in react
  useEffect(() => {
    // the code inside here will run once when the component loads and not again!
    const getCountriesData = async () => {
      // async -> sends a request, wait for it, then do something with it!
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country, // united states, united kingdom
            value: country.countryInfo.iso2 // usa, uk
          }
        ))
      })
    }

  }, []);
  // useEffect runs a piece of code based on a given condition
  return (
    <div className="App">
      <div className="app__header">
      <h1> COVID-19 TRACKER</h1>
      {/* using material ui to create a dropdwon list*/}
      <FormControl className="app__dropdown">
        <Select variant="outlined"
        value="abc"
        >
          <MenuItem value="">Worldwide</MenuItem>
          <MenuItem value="">option one</MenuItem>
          <MenuItem value="">option two</MenuItem>
          <MenuItem value="">option three</MenuItem>

        </Select>

      </FormControl>

      </div>

      

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
