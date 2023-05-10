import { Auth } from "aws-amplify";

export const checkIfExists = async (userName) => {
  let exist = false;
  try {
    await Auth.signIn(userName, "").then((res) => {
      return false;
    });
  } catch (error) {
    const code = error.code;
    return error;
    // switch (code) {
    //   case "UserNotFoundException":
    //     exist = false;
    //     break;
    //   case "NotAuthorizedException":
    //   case "PasswordResetRequiredException":
    //   case "UserNotConfirmedException":
    //   default:
    //     exist = true;
    //     break;
    // }
    // return exist;
  }
};
