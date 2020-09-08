import React, { Component } from 'react';
import SimpleMap from './simple_map';
import FlatList from './flat_list';
import flats from '../../data/flats';
// import ReactDOM from 'react-dom';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: null
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  render() {
    const { selectedFlat } = this.state;
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} selectFlat={this.selectFlat} />
        </div>
        <div className="map-container">
          <SimpleMap flat={selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
