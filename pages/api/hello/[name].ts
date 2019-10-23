export default async (req, res) => {
  const name = req.query.name;
  res.json({ "hello": name });
};
