const Bcrypt = require('bcrypt');
const Signup = require('../models/user')
const Config = require('../config')
const Common = require('../utils/common')
const ValidatorUtil = require('../utils/validation');

//SIGNUP
exports.signup = async (req, res, next) => {
	try {

        //console.log(req.body);
        ValidatorUtil.catchValidation(req);

		const  { first_name, last_name, email, birth_date, street, street_number, city, country, password } = req.body;
		
        //let _id = mongoose.Types.ObjectId(); // Generating new MongoDB _ID
        const pswrd_hash = await Bcrypt.hash(password, Config.PASSWORD_HASH_SAIL)
        const token = Common.generateRandomString(32);

        let user = {};
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.birth_date = birth_date;
        user.street = street;
        user.street_number = street_number;
        user.city = city;
        user.country = country;
        user.password = pswrd_hash;
        user.token = token;

        let userModel = new Signup(user);
        await userModel.save();
        res.json(userModel);
        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
             next(err);
        };
};


/*
// It can be used in case of storing device information
function accessTokenBody(req, body) {
    var access_token_body = {
        device_type: {
            value: req.body.device_type || 0,
            is_device_type: 1,
            required: 1
        },
        device_id: {
            value: req.body.device_id || null
        },
        device_token: {
            value: req.body.device_token || null
        }
        
    };

    return _.extend(body, access_token_body);
};
*/