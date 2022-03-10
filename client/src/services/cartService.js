    

    export async function getCart(userId) {
        console.log(typeof userId);
        let query = `
        query GetCartByUserId {
            getCartByUserId(userId:"${userId.toString()}") {
              id
              items {
                content {
                  colorCode
                  color
                  count
                  description
                  id
                  price
                  size
                  totalPrice
                }
                cartImage
              }
            discount
            shipping
            total
        }
          }
      `
          console.log("sa cnm");
        return fetch('https://us-central1-networkclone2.cloudfunctions.net/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query,
            })
            })
            .then(r => r.json())
            .then(r =>{ console.log(r); return r})
    }
    export async function initializeCart(userId,items)
    {
        let query = `
        mutation($initializeCartInput: initializeCartInput) {
            initializeCart(initializeCartInput: $initializeCartInput) {
              discount
              id
              shipping
              total
              userId
              items {
                cartImage
                content {
                  color
                  colorCode
                  count
                  description
                  id
                  price
                  size
                  totalPrice
                }
              }
            }
          }
        `
        items.forEach(item => {
            item.content.id = parseInt(item.content.id);
            item.content.price = parseInt(item.content.price);
            item.content.totalPrice = parseInt(item.content.totalPrice);
            item.content.count = parseInt(item.content.count);
            item.cartImage = item.image;
        });

        return fetch('https://us-central1-networkclone2.cloudfunctions.net/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { 
            "initializeCartInput": {
                "itemInputs": items,
                "userId": userId
              }
         },
      })
    })
      .then(r => r.json())
    }
    
    export async function addToCart(item,userId) {
      let query = `
      mutation Mutation($itemInput: itemInput) {
        addToUserCart(itemInput: $itemInput) {
          id
          items {
            content {
              colorCode
              color
              count
              description
              id
              price
              size
              totalPrice
            }
            cartImage
          }
          shipping
          total
          discount
          userId
        }
      }
    `
        console.log("sa cnm");
      return fetch('https://us-central1-networkclone2.cloudfunctions.net/graphql', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query,
              variables:{
                  "itemInput": {
                    "userId": userId,
                    "cartImage": item.image,
                    "content": {
                      "count": parseInt(item.content.count),
                      "colorCode": item.content.colorCode,
                      "color": item.content.color,
                      "description": item.content.description,
                      "id": parseInt(item.content.id),
                      "price": parseInt(item.content.price),
                      "size": item.content.size,
                      "totalPrice": parseInt(item.content.totalPrice),
                      "name": item.content.name
                    },
                  }
                  
              }
          })
          })
          .then(r => r.json())
          .then(r =>{ console.log(r); return r})
    }

    export async function removeFromCart(itemId,userId) {
      let query = `
      mutation RemoveFromUserCart($removeItemInput: removeItemInput) {
        removeFromUserCart(removeItemInput: $removeItemInput) {
          id
          items {
            content {
              colorCode
              color
              description
              count
              id
              price
              size
              totalPrice
            }
            cartImage
          }
          shipping
          total
          discount
          userId
        }
      }
    `
        console.log("sa cnm");
      return fetch('https://us-central1-networkclone2.cloudfunctions.net/graphql', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query,
              variables:{
                "removeItemInput": {
                  "userId": userId,
                  "itemId": parseInt(itemId)
                }
              }
          })
          })
          .then(r => r.json())
          .then(r =>{ console.log(r); return r})
    }
