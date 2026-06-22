const getProfile = async (req, res) => {
  res.json({
    success: true,
    message: "user profile",
    data: req.user
  })
};

export { getProfile };
