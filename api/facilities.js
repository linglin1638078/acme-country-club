const express = require('express');
const router = new express.Router();

// Import database & Models
const {db, Member, Facility, Booking } = require('../db')
// GET localhost:3000/api/facilities
// Returns all facilities with their respective bookings.
router.get('/', async (req, res, next) => {
    try {
        // Tennis Object, Marble obj
        const facilities = await Facility.findAll(
            {
                include: [Booking]
            }
        );
        console.log(facilities);

        res.send(facilities)
    }
    catch(err){
        next(err)
    }
})

module.exports = router;