import axios from 'axios';

const link =
  'https://www.salvador-airport.com.br/pt-br/flights_api/flights_field_values/all?&voo_type=';

export async function VoosAPI() {
  return await axios.get(link).then((response) => {
    return response.data;
  });
}

export async function arrivalsFlightsByCompany(company) {
  let companhia = company;
  if (company == 'aireuropa') {
    companhia = 'air';
  } else if (company == 'latam') {
    companhia = 'tam';
  }

  return await axios
    .get(`arrivals${link}&company=${companhia}`)
    .then((resp) => {
      return resp.data;
    });
}

export async function departuresFlightsByCompany(company) {
  let companhia = company;
  if (company == 'aireuropa') {
    companhia = 'air';
  } else if (company == 'latam') {
    companhia = 'tam';
  }
  console.log(companhia);
  return await axios
    .get(`departures${link}&company=${companhia}`)
    .then((resp) => {
      return resp.data;
    });
}
