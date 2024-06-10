const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);
// Apis private khi có token thì mới có thể gọi Apis.
router.use('/auth', authRoutes);
// Apis public không cần token đều có thể gọi được Apis.
router.use('/user', userRoutes);

module.exports = router;
