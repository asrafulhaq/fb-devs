import jwt from 'jsonwebtoken';

/**
 * Create JWT 
 */
export const createToken  = ( payload, exp ) => {

    // create new token 
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn : exp
    }); 

    return token;
}

/**
 * JST Verify 
 */

export const tokenVerify = (token) => {

    return jwt.verify(token, process.env.JWT_SECRET);

}