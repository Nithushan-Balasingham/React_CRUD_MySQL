const requireLogin = (req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = { requireLogin };
  