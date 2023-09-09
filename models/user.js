import {Schema, model, models} from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please provide an email address'],
        unique: [true, 'That email address is already in use'],
    },
    username: {
        type: String,
        required: [true, 'Please provide a username'],
        match: [/^[a-zA-Z0-9]+$/, 'Usernames may only contain letters and numbers'],
    },
    image: {
        type: String,
    },


});

const User = models.User || model('User', userSchema);

export default User;