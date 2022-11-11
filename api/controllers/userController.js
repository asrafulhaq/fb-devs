import User from '../models/User.js';
import createError from "../utility/createError.js";
import { hashPassword, passwordVerify } from '../utility/hash.js';
import { getRandom } from '../utility/math.js';
import { sendActivationLink, sendPasswordForgotLink } from '../utility/sendMail.js';
import { createToken, tokenVerify } from '../utility/token.js';
import { isEmail } from '../utility/validate.js';



/**
 * @access public 
 * @route /api/user/register
 * @method POST 
 */
export const register = async (req, res, next) => {
    
    try {

        // get form data 
        const { first_name, sur_name, email, password, birth_date, birth_month, birth_year, gender } = req.body;

        // validation 
        if( !first_name || !sur_name || !email || !password || !gender ){
            next(createError(400, "All fields are required !"));
        } 

        if( !isEmail(email) ){
            next(createError(400, "Invalid Email Address !"));
        }

        const emailUser = await User.findOne({ email : email });

        if( emailUser ){
            next(createError(400, "Email already exists !"));
        }

        // create access token 
        let activationCode = getRandom(10000, 99999);

        // check activation code 
        const checkCode = await User.findOne({ access_token : activationCode });

        if(checkCode){
            activationCode = getRandom(10000, 99999);
        }

        // create user 
        const user = await User.create({
            first_name,
            sur_name, 
            email, 
            password : hashPassword(password), 
            birth_date, 
            birth_month, 
            birth_year,
            gender,
            access_token : activationCode
        }); 
          
        
        
        if( user ){
            
            // create activation token 
            const activationToken = createToken({ id : user._id  }, '30d');
            

            // send activation mail 
            sendActivationLink(user.email, {
                name : user.first_name +' '+ user.sur_name,
                link : `${process.env.APP_URL +':'+ process.env.PORT }/api/v1/user/activate/${activationToken}`,
                code : activationCode
            });
            
            
            // send response 
            res.status(200).json({
                message : "User created successful",
                user : user
            });

        }

        
    } catch (error) {
        next(error);
    }
   

    
}


/**
 * @access public 
 * @route /api/user/login
 * @method POST 
 */
 export const login = async (req, res, next) => {
    
    try {

        const { email, password  } = req.body;
        
        // validate form 
        if ( !email || !password ) {
            next(createError(400, "All fields are required"));
        }

        if( !isEmail(email) ){
            next(createError(400, "Invalid Email Address !"));
        }

        const loginUser = await User.findOne({ email : email });

        if( !loginUser ){
            next(createError(400, "Login user not found"));
        } else {

            if( !passwordVerify( password,  loginUser.password ) ){
                next(createError(400, "Wrong password"));
            } else {


                
                const token = createToken({ id : loginUser._id  }, '365d');

                res.status(200).cookie('authToken', token).json({
                    message : "User Login successful",
                    user : loginUser,
                    token : token 
                });

            }





        }




        
    } catch (error) {
        next(error);
    }

    
}


/**
 * @access public 
 * @route /api/user/me
 * @method GET 
 */
 export const loggedInUser = async (req, res, next) => {
    
    
    try {

        const auth_token = req.headers.authorization;

        if( !auth_token ){
            next(createError(400, "Token not found"));
        }

        if( auth_token ){

            const token = auth_token.split(' ')[1];
            const user = tokenVerify(token);

            if( !user ){
                next(createError(400, "Invalid Token"));
            }

            if( user ){
                const loggedInUser = await User.findById(user.id);

                if( !loggedInUser ) {
                    next(createError(400, "User data not match"));
                } else {

                    res.status(200).json({
                        message : "User data stable",
                        user : loggedInUser
                    });
                    
                }

            }




        }
        
        
    } catch (error) {
        next(error);
    }

    
}

/**
 * Account acivation by email
 */
export const activateAccount = async (req, res, next) => {

    try {

        // get token 
        const { token } = req.params;

        if( !token ){
            next(createError(400, 'Invalid activation url'));
        } else {

            // verify token 
            const tokenData = tokenVerify(token);

            // check token 
            if( !tokenData ){
                next(createError(400, 'Invalid Token'));
            }

            // now activate accoumnt 
            if( tokenData ){

                const account = await User.findById(tokenData.id);

                if( account.isActivate == true ){
                    next(createError(400, 'Account already activate'));
                } else {

                    await User.findByIdAndUpdate( tokenData.id,  {
                        isActivate : true,
                        access_token : ''
                    });

                    res.status(200).json({
                        message : "Account activate successful"
                    })
                }

                
            }

           



        }
        

        
    } catch (error) {
        next(error);
    }

}

/**
 * Account activate by code 
 */
export const activateAccountByCode = async (req, res, next) => {

    try {

        const { code  } = req.body;
        
        const user = await User.findOne().and([{ access_token : code }, { isActivate : false }]);

        if( !user ){
            next(createError(400, "Activation User not found"));
        }

        if( user ){
            await User.findByIdAndUpdate(user._id, {
                isActivate : true, 
                access_token : ""
            });
            res.status(200).json({
                message : "User account activation successful"
            });
        }
        
    } catch (error) {
        next(error);
    }

}


/**
 * Forgot password 
 */
export const forgotPassword = async ( req, res, next ) => {

    try {

        const { email } = req.body;
        const user = await User.findOne({ email : email });

        if( !user ){
            next(createError(404, "User not found"));
        }

        if( user ) {

            // create activation token 
            const passwordResetToken = createToken({ id : user._id  }, '30m');
            
             // create access token 
            let activationCode = getRandom(10000, 99999);

            // check activation code 
            const checkCode = await User.findOne({ access_token : activationCode });

            if(checkCode){
                activationCode = getRandom(10000, 99999);
            }

            // send activation mail 
            sendPasswordForgotLink(user.email, {
                name : user.first_name +' '+ user.sur_name,
                link : `${process.env.APP_URL +':'+ process.env.PORT }/api/v1/user/forgot-password/${passwordResetToken}`,
                code : activationCode
            });    
            
            await User.findByIdAndUpdate(user._id, {
                access_token : activationCode
            })
            
            // send response 
            res.status(200).json({
                message : "A Password reset link has sent to your email",
            });
            
        }
        
    } catch (error) {
        next(error);
    }

}

/**
 * Account acivation by email
 */
 export const passwordResetAction = async (req, res, next) => {

    try {

        // get token 
        const { token } = req.params;
        const { password } = req.body;

        if( !token ){
            next(createError(400, 'Invalid password reset url'));
        } else {

            // verify token 
            const tokenData = tokenVerify(token);

            // check token 
            if( !tokenData ){
                next(createError(400, 'Invalid Token'));
            }

            // now activate accoumnt 
            if( tokenData ){

                const user = await User.findById(tokenData.id);

                if( !user ){
                    next(createError(400, 'Invalid User Id'));
                }

                if( user ){ 

                    await User.findByIdAndUpdate(user._id, {
                        password : hashPassword(password),
                        access_token : ""
                    });

                    res.status(200).json({
                        message : "Password Changed"
                    });

                }

                
            }

           



        }
        

        
    } catch (error) {
        next(error);
    }

}