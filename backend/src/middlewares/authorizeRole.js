const authorizeRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    next();
  };
};

export default authorizeRole;
