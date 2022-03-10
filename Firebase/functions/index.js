const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const serviceAccount = require("./networkclone-156e4-firebase-adminsdk-rsvgk-f380606048.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://networkclone-156e4.firebaseio.com"
});
const db = admin.firestore();


const typeDefs = gql`
    type colorOptions {
        name: String
        color: String
    }
    type model {
        boy: String
        gogus: String
        bel: String
        kalca: String
        ayak_Numarasi: String
    }
    type details {
        refNo: String
        content: [String]
        model:model
        sample_size: String
    }
    type content {
        categoryId: Int
        subCategoryId: Int
        subtitleId: Int
        id: ID!
        type: String
        name: String
        price: Float
        colorOptions: [
            colorOptions
        ]
        sizes: [String]
        details: details
    }
    type cartItemContent {
        color: String
        colorCode: String
        count: Int
        description: String
        id: Int
        price: Float
        size: String
        totalPrice: Float
    }
    type cartItem {
        content: cartItemContent
        cartImage: String
    }

    type Item {
        id: ID!
        content:content
        cartImage: String
        photos: [String]
    }

    type Cart {
        id: ID!
        items: [cartItem]
        shipping: Float
        total: Float
        discount: Float
        userId: ID!
    }

    input ItemInputContent {
        color: String
        colorCode: String
        count: Int
        description: String
        id: Int
        price: Float
        size: String
        totalPrice: Float
    }
    input itemInput {
        userId: ID!
        content: ItemInputContent
        cartImage: String
    }
    input removeItemInput {
        userId: ID!
        itemId: Int
    }

    input userInput {
        name:String!
        surname:String!
        email:String!
        gender:String!
        birthDate:String!
        phoneNumber:String!
        password:String!
    }
    type userInfo {
        name:String
        email:String
        id:ID!
    }
    type mainAdvert{
        id:ID!
        url:String!
    }
    type mainAdverts{
        mainAdverts:[mainAdvert]
    }
    input loginInput{
        email:String!
        password:String!
    }
    
    input initializeCartItemInput {
        content: ItemInputContent
        cartImage: String
        image: String
    }
    
    input initializeCartInput {
        itemInputs: [initializeCartItemInput]
        userId: ID!

    }
    
    type Query {
        items: [Item]
        getItemById(id: ID!): Item
        getItemByCategoryId(id: Int!): [Item]
        getItemBySubCategoryId(id: Int!): [Item]
        getItemBySubTitleId(subCategoryId: Int!,subTitleId:Int!): [Item]
        getItemBySearchKey(key: String!): [Item]
        getCartByUserId(userId: ID!): Cart
        getMainAdverts: mainAdverts
    }
    type Mutation {
        addToUserCart(itemInput:itemInput): Cart
        removeFromUserCart(removeItemInput:removeItemInput): Cart
        registerUser(userInput:userInput): userInfo
        loginUser(loginInput:loginInput): userInfo
        initializeCart(initializeCartInput:initializeCartInput): Cart
    }
    `;


const resolvers = {
    Query: {
        items: () => {
            return db.collection("items").get().then(snapshot => {
                return snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        content : {
                            ...doc.data().content
                        },
                        cartImage: doc.data().cartImage,
                        photos: doc.data().photos
                    }
                })
            })

        },
        getMainAdverts: () => {
            return db.collection("mainAdverts").get().then(snapshot => {
                let adverts = [];
                snapshot.docs.forEach(doc => {
                    adverts.push({
                        id: doc.id,
                        url: doc.data().url
                    })
                })
                return {
                    mainAdverts: adverts
                }
            })

        },
        getItemById: async (_, args) => {
            let item = {};
            let snapshot = await db.collection("items").get()
            for(let i = 0; i < snapshot.docs.length; i++) {
                if(snapshot.docs[i].data().content.id == args.id) {
                    item = {
                        id: snapshot.docs[i].id,
                        content : {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    return item;
                }
            }
            return null;

        },
        getItemByCategoryId: async (_, args) => {
            let items = [];
            let snapshot = await db.collection("items").get()
            for(let i = 0; i < snapshot.docs.length; i++) {
                if(snapshot.docs[i].data().content.categoryId == args.id) {
                    let item = {
                        id: snapshot.docs[i].id,
                        content : {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    items.push(item);
                }
            }
            return items;

        },
        getItemBySubCategoryId: async (_, args) => {
            let items = [];
            let snapshot = await db.collection("items").get()
            for(let i = 0; i < snapshot.docs.length; i++) {
                if(snapshot.docs[i].data().content.subCategoryId == args.id) {
                    let item = {
                        id: snapshot.docs[i].id,
                        content : {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    items.push(item);
                }
            }
            return items;

        },
        getItemBySubTitleId: async (_, args) => {
            let items = [];
            console.log(args.subTitleId);
            let snapshot = await db.collection("items").get()
            for(let i = 0; i < snapshot.docs.length; i++) {
                if(snapshot.docs[i].data().content.subtitleId == args.subTitleId && snapshot.docs[i].data().content.subCategoryId == args.subCategoryId) {
                    let item = {
                        id: snapshot.docs[i].id,
                        content : {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    items.push(item);
                }
            }
            return items;

        },
        getItemBySearchKey: async (_, args) => {
            let items = [];
            let snapshot = await db.collection("items").get()
            if (args.key === "*") {
                     snapshot.docs.forEach(doc => {
                        let item = 
                            {
                                id: doc.id,
                                content : {
                                    ...doc.data().content
                                },
                                cartImage: doc.data().cartImage,
                                photos: doc.data().photos
                            }
                        items.push(item);
                    })
                items = items.sort(()=>Math.random()-0.5);
                
                return items;
            }
            for(let i = 0; i < snapshot.docs.length; i++) {
                if(snapshot.docs[i].data().content.name.toLowerCase().includes(args.key.toLowerCase())
                 || snapshot.docs[i].data().content.price.toString().includes(args.key.toLowerCase())
                    || snapshot.docs[i].data().content.type.toLowerCase().includes(args.key.toLowerCase())
                 ) {
                    let item = {
                        id: snapshot.docs[i].id,
                        content : {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    items.push(item);
                }
            }
            return items;

        },
        getCartByUserId: async (_, args) => {
            console.log(args);
            let userId = args.userId;
            let cart = {};
            let snapshot = await db.collection("carts").where("userId", "==", userId).get()
            console.log(snapshot.docs[0].data());
            if(snapshot.docs[0].data().items.length > 0) {
                console.log("aloooo");
                cart = {
                    id: snapshot.docs[0].id,
                    items: snapshot.docs[0].data().items,
                    shipping: snapshot.docs[0].data().shipping,
                    total: snapshot.docs[0].data().total,
                    discount: snapshot.docs[0].data().discount,
                    userId: snapshot.docs[0].data().userId
                }
                return cart;
            }
            else
            {
                return null;
            }
        }

},
    Mutation: {
        addToUserCart: async (_, {itemInput}) => {
            console.log(itemInput);
            let indexOf = -1;
            let snapshot = await db.collection("carts").where("userId", "==", itemInput.userId).get()
            let found = snapshot.docs[0].data().items.find((item,index) => {
                if(item.content.id == itemInput.content.id) {
                    indexOf = index;
                    return true
                }
            })
            if(found != null) {
                console.log(found);
                found.content.count += 1;
                found.content.totalPrice = found.content.count * found.content.price;
                let items = snapshot.docs[0].data().items;
                items[indexOf] = found;
                snapshot.docs[0].ref.update({
                    items: items,
                    total: snapshot.docs[0].data().total + found.content.price
                })
            }
            else {
                let item = {
                    content: itemInput.content,
                    cartImage: itemInput.cartImage,
                }
                let items = snapshot.docs[0].data().items;
                items.push(item);

                snapshot.docs[0].ref.update({
                    items: items,
                    total: snapshot.docs[0].data().total + item.content.price
            })
        }

        return {
            id: snapshot.docs[0].id,
            ...snapshot.docs[0].data()
        }
        },
        removeFromUserCart: async (_, {removeItemInput}) => {
            let snapshot = await db.collection("carts").where("userId", "==", removeItemInput.userId).get()
            let data = snapshot.docs[0].data();
            let index = data.items.findIndex(item => item.content.id == removeItemInput.itemId);
            console.log(index);
            console.log(removeItemInput);
            if(data.items[index].content.count > 1) {
                data.items[index].content.count -= 1;
                data.items[index].content.totalPrice = data.items[index].content.count * data.items[index].content.price;
                data.total -= data.items[index].content.price;
            }
            else {
                data.total -= data.items[index].content.price;
                data.items =  data.items.filter(item => item.content.id != removeItemInput.itemId);
                console.log(data.items);

            }
            console.log(data.items.length);
            snapshot.docs[0].ref.update({
                items: data.items,
                total: data.total
            })
            return {
                id: snapshot.docs[0].id,
                ...(await db.collection("carts").doc(snapshot.docs[0].id).get()).data()
            }

        },
        registerUser: async (_, {userInput}) => {
            let snapshot = await db.collection("users").where("email", "==", userInput.email).get()
            if(snapshot.empty) {
                let user = {
                    ...userInput
                }
                let registeredUser = await db.collection("users").add(user);
                return {
                    name: user.name,
                    email: user.email,
                    id: registeredUser.id
                }
            }
            else {
                return null;
            }
        },
        loginUser: async (_, {loginInput}) => {
            let snapshot = await db.collection("users").where("email", "==", loginInput.email).get()
            if(!snapshot.empty && snapshot.docs[0].data().password == loginInput.password) {
                let user = {
                    ...snapshot.docs[0].data(),
                    id: snapshot.docs[0].id
                }
                return user;
            }
            else {
                return null;
            }
        },
        initializeCart: async (_, {initializeCartInput}) => {
            console.log(initializeCartInput.userId);
            let snapshot = await db.collection("carts").where("userId", "==", initializeCartInput.userId).get()
            console.log(snapshot.empty);
            console.log(initializeCartInput.itemInputs);
            if(snapshot.empty && initializeCartInput.itemInputs != null) {
                let total = 0
                 initializeCartInput.itemInputs.forEach(item => {
                     total += item.content.price * item.content.count;
                     })

                let cart = {
                    userId: initializeCartInput.userId,
                    items: initializeCartInput.itemInputs || [],
                    total: total,
                    shipping:  30,
                    discount:  0
                }
                let registeredCart = await db.collection("carts").add(cart);
                return {
                    id: registeredCart.id,
                    ...(await db.collection("carts").doc(registeredCart.id).get()).data()
                }
            }
            else if(!snapshot.empty && initializeCartInput.itemInputs != null) {
                console.log("girdukkk");
                let total = 0;
                let items = snapshot.docs[0].data().items;
                initializeCartInput.itemInputs.forEach(item => {
                    let index = items.findIndex(itemInCart => itemInCart.content.id == item.content.id);
                    if(index != -1) {
                        items[index].content.count += item.content.count;
                        items[index].content.totalPrice = items[index].content.count * items[index].content.price;
                    }
                    else {
                        items.push(item);
                    }
                    
                })
                
                console.log(items);
                items.forEach(item => {
                    total += item.content.price * item.content.count;
                    })
                let result = await snapshot.docs[0].ref.update({
                    items: items,
                    total: total,
                    shipping:  30,
                    discount:  0
                })
                console.log(result);
                return {
                    id: snapshot.docs[0].id,
                    ...(await db.collection("carts").doc(snapshot.docs[0].id).get()).data()
                }
            }
            else if (snapshot.empty && initializeCartInput.itemInputs == null) {
                db.collection("carts").add({
                    userId: initializeCartInput.userId,
                    items: [],
                    total: 0,
                    shipping:  30,
                    discount:  0
                })
                return null;
            }
            return null
        }

    }
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.start().then( ()=>{server.applyMiddleware({ app, path: "/", cors: true });});


exports.graphql = functions.https.onRequest(app);