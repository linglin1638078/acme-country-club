const express = require('express');
const  Sequelize  = require('sequelize');
const router = new express.Router();

// Import database & Models
const {db, Member, Facility, Booking } = require('../db')

//GET /api/members - returns all members with their sponsor and any members they have sponsored.
router.get('/', async(req, res, next) => {
    try {
        const allMembers = await Member.findAll({
           include: {
                model: Member,
                as: 'sponsor'
            }, 
            include: {
                model: Member,
                as: 'sponsees'
            }

        })
        res.send(allMembers)
    }
    catch (err) {
        next(err)
    }
})



module.exports = router;