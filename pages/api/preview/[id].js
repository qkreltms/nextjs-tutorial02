const handler = async (req, res) => {
  //   if (req.query.secret !== "MY_SECRET_TOKEN" || !req.query.slug) {
  //     return res.status(401).json({ message: "Invalid token" });
  //   }
  //   const data = await fetch(`https://dog.ceo/api/breed/${req.query.slug}/images/random`).then((res) => res.json());
  const { id } = req.query;
  console.log("You are in api/preview", id)
  res.setPreviewData({ id });
  res.writeHead(307, { Location: "/" });
  res.end();
};

export default handler;
