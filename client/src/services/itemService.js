import {
  gql
} from "@apollo/client";
import { gqlClient } from "../utils/graphqlClient";

export async function getItem(id) {
  return gqlClient.query({
    query: gql`
    query GetItemById($id: ID!) {
      getItemById(id: $id) {
        id
        cartImage
        photos
        content {
          categoryId
          subCategoryId
          subtitleId
          id
          type
          name
          price
          colorOptions {
            name
            color
          }
          sizes
          details {
            refNo
            content
            model {
              kalca
              bel
              gogus
              boy
              ayak_Numarasi
            }
            sample_size
          }
        }
      }
    }
  `,
  variables:{
    id
  }
  })
 
    
}

// export async function getItem(id) {
//   return appAxios.get(`items/${id}`);
// }

export async function getItemsSummary() {

  return gqlClient.query({
    query: gql`
    query{
      items {
        id
        content
        {
          name
          price
          id
          
        }
        photos
        
      }
    }
  `,
  })
  
}

export async function getItemsByCategoryId(id) {
  
  return gqlClient.query({
    query: gql`
    query{
      getItemByCategoryId(id:${id}){
        content{
          id
          name
          price
        }
        photos
      }
    }
  `
  })

  
}

export async function getItemsBySubCategoryId(id) {
  
  return gqlClient.query({
    query: gql`
    query{
      getItemBySubCategoryId(id:${id}){
        content{
          id
          name
          price
        }
        photos
      }
    }
    `
  })

}

export async function getItemsBySubtitleId(itemInfo) {
  
  return gqlClient.query({
    query: gql`
    query{
      getItemBySubTitleId(subTitleId:${itemInfo.contentId},subCategoryId:${itemInfo.subCategoryId}){
        content{
          id
          name
          price
        }
        photos
      }
    }
    `
  })
  
  
}

export async function getItemsBySearchKey(key) {
 
  return gqlClient.query({
    query: gql`
    query GetItemBySearchKey($key: String!) {
      getItemBySearchKey(key: $key) {
        content{
          id
          name
          price
        }
        photos
      }
    }
    `,
    variables:{
      key
    }
  })
  
}

