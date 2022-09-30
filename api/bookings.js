const express = require("express");
const router = express.Router();

// Import database & Models
const { db, Member, Facility, Booking } = require("../db");

// GET localhost:3000/api/bookings
router.get("/", async (req, res, next) => {
	const bookings = await Booking.findAll({
		include: [Facility, {
            model: Member,
            as: 'booker'
        }],
	});

	
	// lucy has booked marbles twice
	// moe has booked tennis
	const strs = bookings.map((booking) => {
        console.log(booking.dataValues)
		return `${booking.booker.name} has a
         booking at ${booking.facility.name}`;
	});

	res.send(strs);
});

module.exports = router;
