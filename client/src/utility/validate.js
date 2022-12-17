/**
 * Email Validate
 */
export const isEmail = (email) => {
  return /^[^\.-/][a-z0-9-_\.]{1,}@[a-z0-9-]{1,}\.[a-z\.]{2,}$/.test(email);
};

/**
 * Email Validate
 */
export const isMobile = (mobile) => {
  return /^(01|8801|\+8801)[0-9]{9}$/.test(mobile);
};

/**
 * Email Validate
 */
export const isString = (data) => {
  return /^[a-z@\.]{1,}$/.test(data);
};

/**
 * Email Validate
 */
export const isNumber = (number) => {
  return /^[0-9\+]{1,}$/.test(number);
};
