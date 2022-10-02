const express = require('express');
const  Sequelize  = require('sequelize');
const router = new express.Router();

// Import database & Models
const {db, Member, Facility, Booking } = require('../db')
// GET localhost:3000/api/facilities
// Returns all facilities with their respective bookings.
router.get('/', async (req, res, next) => {
    try {
        // Tennis Object, Marble obj
        const facilities = await Facility.findAll({
            include: {
                model: Booking
            }
        });

        

       
        //console.log(Object.keys(Facility.prototype));
        /*const array_facilities = facilities.map(facility => {
            return facility.bookings
        })
        
        const currentBookings = array_facilities.map(booking => {
            return booking.bookerId;
        }).join(', ');*/
            
        res.send(facilities)
    }
    catch(err){
        next(err)
    }
})

module.exports = router;