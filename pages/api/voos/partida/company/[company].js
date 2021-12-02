import { arrivalsFlightsByCompany } from '../../../../../services/voos';

export default async function company(req, res) {
  const { company } = req.query;
  console.log(company);
  const flights = await arrivalsFlightsByCompany(company);

  await res.status(200).json(flights);
}
