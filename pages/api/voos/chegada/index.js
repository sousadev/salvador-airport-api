import axios from 'axios';
import { VoosAPI } from '../../../../services/voos';

export default async function voos(req, res) {
  const flights = await VoosAPI();

  await res.status(200).json(flights);
}
