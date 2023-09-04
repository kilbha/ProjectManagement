const valid_bson_id = (req: any, res: any, next: any) => {
  const bsonIDPattern = /^[0-9a-fA-F]{24}$/;
  if (!bsonIDPattern.test(req.params.id)) {
    return res.status(400).json({ message: "Provide valid Bson Id" });
  }
  next();
};

export default valid_bson_id;
