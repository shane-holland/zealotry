import mongoose from 'mongoose';
import { validateCharacter } from './validate';


let Character;
try {
    // Check to see if the schema has already been instantiated
    Character = mongoose.model('Character');
} catch (error) {
    const characterSchema = new mongoose.Schema({
        name: { 
            type: String, 
            unique: true,
            validate: [{ validator: validateCharacter, msg: 'Invalid name' }],
        },
        class: {
            type: String      
        },
        pos : {
            type: Map,
            of: Number
        },
        move : {
            type: Map,
            of: Boolean
        },
        dir: {
            type: String
        },
        speed: {
            type: Number
        },
        user_id : {
            type: mongoose.Schema.ObjectId
        }
    }, { timestamps: true });
    Character = mongoose.model('Character', characterSchema);
}
export default Character;