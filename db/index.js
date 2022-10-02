const Sequelize = require("sequelize");
//const db = new Sequelize("postgres://localhost:5432/seq_intro");//our connection with database//databse name will be seq_intro

const DB_URL =
	process.env.DB_URL || "postgres://localhost:5432/acme-country-club-db";
const db = new Sequelize(DB_URL);

// const UUID = Sequelize.DataTypes.UUID;
// const UUIDV4 = ;

const Member = db.define("member", {
	name: {
		type: Sequelize.STRING(20),
		unique: true,
	},
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4,
	},
});

const Facility = db.define("facility", {
	name: {
		type: Sequelize.STRING(20),
		unique: true,
	},
	id: {
		type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
	},
});

const Booking = db.define("booking", {
	id: {
		type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
	},
});

// A member has one other member as a sponsor.
// A member can have many other members sponsored by them.
Member.belongsTo(Member,{as:'sponsor', foreignKey:'sponsorId'});//memberId ---> sponserId
Member.hasMany(Member, {as: 'sponsees', foreignKey:'sponsorId' });

// A booking has one member as the booker.
// A member can have many bookings.
Member.hasMany(Booking);
Booking.belongsTo(Member, { as: 'booker' });//memberId-->bookerId

// A booking has one facility.
// A facility can have many bookings.
Facility.hasMany(Booking);
Booking.belongsTo(Facility);//facilityId

module.exports = { db, Member, Booking, Facility };
