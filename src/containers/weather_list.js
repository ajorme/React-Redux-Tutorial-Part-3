import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(item => item.main.temp);
    const pressures = cityData.list.map(item => item.main.pressure);
    const humidities = cityData.list.map(item => item.main.humidity);
    console.log(temps);

    return (
      <tr key={name}>
        <td>{name}</td>;
        <td>
          <Chart  data={temps} color="red"/>
        </td>
        <td>
          <Chart  data={pressures} color="green"/>
        </td>
        <td>
          <Chart  data={humidities} color="blue"/>
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
            <th>tempature</th>
            <th>pressure</th>
            <th>humidity</th>
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
