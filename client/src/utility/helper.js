import { isEmail, isMobile } from "./validate.js";

// Hide Email or Mobile
export const hideMobileEmail = (data) => {
  if (isEmail(data)) {
    let com = data.split("@")[1];
    let mail = data.split("@")[0];

    const first = mail.substr(0, 1);
    const last = mail.substr(-1, 1);

    return `${first} ************** ${last}@${com}`;
  }

  if (isMobile(data)) {
    const first = data.substr(0, 3);
    const last = data.substr(-2);

    return `${first} ****** ${last}`;
  }
};
