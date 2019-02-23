import User from '../models/user';

// Just as a mongoose 
// reminder, .exec() on find
// returns a Promise instead
// of the default callback.

/**
 * create
 * ============================================================
 * Creates a user from the passed object 
 * @param {User} user the user to be created
 * @returns {Promise} the result of the create query
 */
export function create(user) {
    user = new User(user);
    return user.save();
}

/**
 * get
 * ============================================================
 * retrieves the user matching the passed id
 * @param {ObjectId} id user id to match against
 * @returns {Promise} the result of the get query
 */
export function get(id) {
    return User.findById(id).exec(); 
}

/** 
 * update
 * ============================================================
 * Updates the user with any relevant new information or characters
 * @param {User} user the updated user object
 * @returns {Promise} the result of the update query
 */
export function update(user) {
    return User.findOneAndUpdate(
        { username : user.username },   // Query for matching
        user,                           // Update Object
        {new: true}                     // Options (return the updated document)
    ).exec(); 
}

/**
 * getByUsername
 * ============================================================
 * retrieves the user matching the passed username (case insensitive)
 * @param {String} username username to match against
 * @returns {Promise} the result of the get query
 */
export function getByUsername(username) {
    return User.findOne({username}).exec(); 
}


/**
 * Export a default containing the primary methods
 */
export default {
    create,
    get,
    update,
    getByUsername
}