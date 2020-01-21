import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import { Table } from "react-bootstrap";
class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryNames: [],
      loading: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://restcountries.eu/rest/v2/region/africa")
      .then((response) => response.json())
      .then((json) => json.map((country) => country))
      .then((countryNames) => this.setState({ countryNames, loading: false }));
  }

  render() {
    const { countryNames } = this.state;
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Flag</th>
            <th>Native Name</th>
          </tr>
        </thead>
        {countryNames.map((x, i) => (
          <tbody>
            <tr>
              <td>
                <span key={i.name}>{x.name}</span>
              </td>
              <td>
                <span key={i.capital}>{x.capital}</span>
              </td>
              <td>
                <img
                  alt="flag"
                  key={i.flag}
                  src={x.flag}
                  style={{ width: "60px" }}
                />
              </td>
              <td>
                <span key={i.nativeName}>{x.nativeName}</span>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    );
  }
}

export default CountryList;
