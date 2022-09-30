const {db, Member, Facility, Booking} = require('./db');


const seed = async () => {
    await db.sync({ force: true, logging: false }); // Drops tables

    const lucy = await Member.create({
        name: 'Lucy',
    })
    
    const larry = await Member.create({
        name: 'Larry',
        sponsorId: lucy.id
    })
    

    const moe = await Member.create({
        name: 'Moe',
        sponsorId:lucy.id
    })

    const ethyl = await Member.create({
        name: 'Ethyl',
        sponsorId:moe.id
    })

    const tennis = await Facility.create({
        name:'Tennis'
    })
    
    const pingPong = await Facility.create({
        name:'Ping Pong'
    })

    const marble = await Facility.create({
        name:'Marbles'
    })
    // lucy has booked marbles twice

    await Booking.create({
        bookerId: lucy.id,
        facilityId: marble.id
    })

    await Booking.create({
        bookerId: lucy.id,
        facilityId: marble.id
    })

    await Booking.create({
        bookerId: moe.id,
        facilityId: tennis.id
    })
    
    console.log((await Member.findAll()).map(member => member.id));
    console.log((await Member.findAll()).map(member => member.sponsorId));
    console.log((await Booking.findAll()).map(booking => booking.bookerId));
   

}
seed();
// lucy sponsored moe and larry
// moe sponsored ethyl



