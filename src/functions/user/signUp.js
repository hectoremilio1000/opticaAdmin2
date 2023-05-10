import { Auth } from "aws-amplify"

export const signUp = async ({userName, email, nombres, phoneNumber, profile, address, groupName}) => {
    await Auth.signUp({
        username: userName,
        password: Math.random().toString(36).slice(2, 10),
        attributes: {
          email,
          name: nombres,
          phone_number: phoneNumber,
          profile,
          address
        },
        clientMetadata:{
          groupName
        }
      })
}