import gql from "graphql-tag";
import { gqlClient } from "../utils/graphqlClient";

export async function getMainAdverts() {
    
  return gqlClient.query({
      query: gql`
      query GetMainAdverts {
        getMainAdverts {
          mainAdverts {
            id
            url
          }
        }
      }
      `
  })
}