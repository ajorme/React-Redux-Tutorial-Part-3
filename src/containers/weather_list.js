import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    let temps = _.map(cityData.list.map(item => item.main.temp), (item) => (9.5) * (item - 273) + 32)
    const pressures = cityData.list.map(item => item.main.pressure);
    const humidities = cityData.list.map(item => item.main.humidity);
    const { lon, lat } = cityData.city.coord;
    console.log(temps);

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>;
        <td>
          <Chart  data={temps} color="red" unit="F"/>
        </td>
        <td>
          <Chart  data={pressures} color="green" unit="hPA"/>
        </td>
        <td>
          <Chart  data={humidities} color="blue" unit="%"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>tempature (F)</th>
            <th>pressure (hPa)</th>
            <th>humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps( { weather } ){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
