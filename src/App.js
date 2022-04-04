import React from 'react';
import './App.css';
import Calender from './components/calender/calender.component'
import TestJSONData from './test/recipie.json'


class App extends React.Component {
  constructor() {
    super()

    this.getData = this.getData.bind(this)

  }
  getData() {
    const data = TestJSONData
    return data
  }

  render() {
    return (
      <div className="App">
        <Calender data={this.getData}/>
      </div>
    );
  }
}

export default App;
