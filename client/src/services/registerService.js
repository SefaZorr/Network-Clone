import gql from "graphql-tag";
import { gqlClient } from "../utils/graphqlClient";
export async function register(userInput) {
    
    return gqlClient.mutate({
        mutation: gql`
        mutation RegisterUser($userInput: userInput) {
          registerUser(userInput: $userInput) {
          name
          email
          id
          }
      }
      `,
        variables: {
            userInput:{
              "name": userInput.name,
              "surname": userInput.surname,
              "email": userInput.email,
              "gender": userInput.gender == 0 ? "Erkek" : "Kadın",
              "birthDate": userInput.birthDate,
              "phoneNumber": userInput.phoneNumber,
              "password": userInput.password
            }
          }
        })
   
}

export async function login(userInput) {
   
    return gqlClient.mutate({
        mutation: gql`
        mutation LoginUser($loginInput: loginInput) {
          loginUser(loginInput: $loginInput) {
            name
            email
            id
          }
        }
        `,
        variables: {
            loginInput:{
              "email": userInput.email,
              "password": userInput.password
            }
          }
        })

}


