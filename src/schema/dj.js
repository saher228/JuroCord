import { Schema, model } from 'mongoose';

let Dj = new Schema({
    Guild : {
        type: String,
        required: true
    },
    Roles : {
        type: Array,
        default: null
    }, 
    Mode: {
        type: Boolean,
        default: false
    },
})
export default model('dj', Dj);