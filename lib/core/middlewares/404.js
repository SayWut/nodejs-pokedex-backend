module.exports = (req, res) => {
  res.status(404).json({
    success: false,
    status: "Page does not exist",
  });
};
