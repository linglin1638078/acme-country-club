
// Connect to express
const express = require('express');
const router = express.Router();

// Import each subroute, and use it.
const facilityRouter = require('./facilities')
router.use('/facilities', facilityRouter)

const bookingRouter = require('./bookings')
router.use('/bookings', bookingRouter)

const memberRouter = require('./members')
router.use('/members', memberRouter)

// Export
module.exports = router;