import { departuresFlightsByCompany } from '../../../../../services/voos';

export default async function company(req, res) {
  const { company } = req.query;

  const flights = await departuresFlightsByCompany(company);

  await res.status(200).json(flights);
}
