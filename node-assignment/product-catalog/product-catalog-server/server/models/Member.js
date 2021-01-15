const mongoose = require( 'mongoose' );

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "member"
    }
});

const Member = mongoose.model( 'Member', MemberSchema );

module.exports = {
    model: Member,
    schema: MemberSchema
};