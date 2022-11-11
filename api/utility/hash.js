import bcrypt from 'bcryptjs';

/**
 * Create a Hash Password 
 */
export const hashPassword = (password) => {

    // slat gen 
    const salt = bcrypt.genSaltSync(12);
    const hashpass = bcrypt.hashSync(password, salt);
    return hashpass;

}

/**
 * Password match
 */
 export const passwordVerify = (password, hash ) => {

   return bcrypt.compareSync(password, hash);

}