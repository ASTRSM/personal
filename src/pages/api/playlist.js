import playlist from '@/helpers/playlist'

export default async function handler(req, res) {
  const data = await playlist();
  res.status(200).json(data);
}