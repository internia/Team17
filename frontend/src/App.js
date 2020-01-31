import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// These are for page navigation, components change depending page..
import { Home } from './Home';
//import { Hospitals } from './Hospitals';
import { Procedures } from './Procedures';
import { About } from './About';
import { NoMatch } from './NoMatch';

// These are for each UI component
import { Version } from './components/Version';
import { ColorLayout } from './components/ColorLayout';
import { NavigationBar } from './components/NavigationBar';
import { HomepageSearch } from './components/HomepageSearch';
import { LowerLayout } from './components/LowerLayout';
import { Footer } from './components/Footer';

import ProcedureList from './components/ProcedureList';
import HospitalsMap from './components/HospitalsMap'
import { HospitalsSelection } from './components/HospitalsSelection';
import SearchBar from './components/SearchBar';



// fetch('https://api.urbelis.dev/procedure', {mode: 'no-cors', method: 'GET'})
//   .then((response) => {
//     // return response.json();
//     return response.text();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//   });

var locations = new Array(
	["Dundee", { lat: 56.462002, lng: -2.970700 }],
	["Dunde1", { lat: 57.462002, lng: -2.970700 }],
	["Dunde2", { lat: 58.462002, lng: -2.970700 }],
	["Dunde3", { lat: 59.462002, lng: -2.970700 }],
	["Dunde4", { lat: 60.462002, lng: -2.970700 }],
)

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      procedures: [],
      query: ''
    }
  }

  componentDidMount() {
    fetch('https://api.urbelis.dev/procedures?query=' + this.state.query, {
      mode: 'cors',
      method: 'GET',
      headers:{
        'Access-Control-Allow-Origin':'*'
      },},).then(response => {
      if (response.ok) {
        response.json().then(json => {
          console.log(json)
          this.setState({ procedures: json });
        });
      }
    });
  }
  
  render(){
    return(

      <React.Fragment>

          {/* Header Area - Essentially the Navbar and color gradient components*/}
          <ColorLayout>
            <NavigationBar>
            </NavigationBar>
            <Router>
              <Switch>
                {/* This is for the homepage city picture and heading text 'smarter healthcare etc' */}
                {/* <Route path = "PAGE-NAME" component = {"NAME-OF-COMPONENT,NAME-OF-COMPONENT-2, etc etc"}/> */}
                <Route exact path = "/" component = {Home}/>
              </Switch>
            </Router>
          </ColorLayout>

          {/* Version Bar -- The little grey bar just underneath the header */}
          <Version>
          </Version>

          {/* Main page area, put your components in here <3 - LowerLayout is just a react container to keep things neat */}
          {/* <Route path = "PAGE-NAME(Page you want component to appear on)" component = {"NAME-OF-COMPONENT,NAME-OF-COMPONENT-2, etc etc"}/> */}
          <LowerLayout>
            <Router>
            <Switch>
              <Route exact path = "/" component = {HomepageSearch}/>
              <Route path = "/about" component = {About}/>
              <Route path = "/hospitals" component = {HospitalsSelection}/>
              <Route path = "/procedures" component = {SearchBar}/>
            </Switch>
            </Router>
          </LowerLayout>

          {/* Its kinda obvious what this bit  does..*/}
        <Footer>
        </Footer>

      </React.Fragment>

    );
  }
}

export default App;