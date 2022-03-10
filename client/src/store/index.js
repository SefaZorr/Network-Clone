import { createStore } from "vuex";
import { getCart, addToCart, removeFromCart, initializeCart } from "../services/cartService";
import {
  getItemsSummary,
  getItem,
  getItemsByCategoryId,
  getItemsBySubCategoryId,
  getItemsBySubtitleId,
  getItemsBySearchKey
} from "../services/itemService";
import { login, register } from "../services/registerService";

export default createStore({
  state: {
    attractiveItems: [],
    CompleteOutfit: [],
    lastViewedItems: [],
    homeItems: [],
    categoryItems: [],
    user: {},
    cart: {
      items: [],
      total: 0,
      shipping: 0,
      discount: 0,
    },
    item: null,
  },
  mutations: {
    setItemsForHome(state, items) {
      state.homeItems = items;
    },
    setItemsForAttractive(state, items) {
      state.attractiveItems = items;
    },
    setItemsForCompleteOutfit(state, items) {
      state.CompleteOutfit = items;
    },
    setItemsForLastViewed(state, items) {
      state.lastViewedItems = items;
    },
    setCart(state, cart) {
      state.cart = cart;
    },
    addToCart(state, item) {
      console.log(item);
      let cartItem = state.cart.items.find(
        (cartItem) => cartItem.content.id === item.content.id
      );
      if (cartItem) {
        cartItem.content.count++;
        cartItem.content.totalPrice =
          cartItem.content.count * cartItem.content.price;
      } else {
        state.cart.items.push(item);
      }
      state.cart.total += item.content.price;
    },
    removeFromCart(state, item) {
      let cartItem = state.cart.items.find(
        (cartItem) => cartItem.content.id === item.content.id
      );
      if (cartItem) {
        if (cartItem.content.count > 1) {
          cartItem.content.count--;
          cartItem.content.totalPrice =
            cartItem.content.count * cartItem.content.price;
        } else {
          state.cart.items.splice(state.cart.items.indexOf(cartItem), 1);
        }
        state.cart.total -= item.content.price;
      }
      if (state.cart.items.length === 0) {
        state.cart.total = 0;
        state.cart.shipping = 0;
        state.cart.discount = 0;
      }
    },
    resetCart(state) {
      state.cart.items = [];
      state.cart.total = 0;
      state.cart.discount = 0;
      state.cart.shipping = 0;
    },
    setItem(state, item) {
      state.item = item;
    },
    setItemsForCategory(state, items) {
      state.categoryItems = items;
    },
    sortCategoryItems(state, sortBy) {
      if (sortBy === "priceDesc") {
        console.log(state.categoryItems);
        state.categoryItems.sort((a, b) => a.price - b.price);
      } else if (sortBy === "priceAsc") {
        console.log(state.categoryItems);
        state.categoryItems.sort((a, b) => b.price - a.price);
      }
      else if (sortBy === "random") {
        state.categoryItems.sort(() => Math.random() - 0.5);
      }
    },
    setItemsBySearchKey(state,items){
      state.categoryItems = items;
    },
    setUser(state, user) {
      state.user = user;
    }

  },
  actions: {
    fetchItemsForHome(context) {
      getItemsSummary().then((res) => {
        let itemsFromQuery = res.data.items;
        let items = []
        itemsFromQuery.forEach((item) => {
          items.push({
            name: item.content.name,
            price: item.content.price,
            id: item.content.id,
            topPhoto: item.photos[0],
          })
        });
        context.commit("setItemsForHome", items);
      });
    },
    fetchItemsForAttractiveItems(context) {
      getItemsSummary().then((res) => {
        let itemsFromQuery = res.data.items;
        let items = []
        itemsFromQuery.forEach((item) => {
          items.push({
            name: item.content.name,
            price: item.content.price,
            id: item.content.id,
            topPhoto: item.photos[0],
          })
        });
        context.commit("setItemsForAttractive", items.sort(() => Math.random() - 0.5));
      });
    },
    fetchItemsForCompleteOutfit(context) {
      getItemsSummary().then((res) => {
        let itemsFromQuery = res.data.items;
        let items = []
        itemsFromQuery.forEach((item) => {
          items.push({
            name: item.content.name,
            price: item.content.price,
            id: item.content.id,
            topPhoto: item.photos[0],
          })
        });
        context.commit("setItemsForCompleteOutfit", items.sort(() => Math.random() - 0.5));
      });
    },
    fetchItemsForLastViewedItems(context) {
      getItemsSummary().then((res) => {
        let itemsFromQuery = res.data.items;
        let items = []
        itemsFromQuery.forEach((item) => {
          items.push({
            name: item.content.name,
            price: item.content.price,
            id: item.content.id,
            topPhoto: item.photos[0],
          })
        });
        context.commit("setItemsForLastViewed", items.sort(() => Math.random() - 0.5));
      });
    },
    fetchCart(context,userId) {
      getCart(userId).then((res) => {
        let cart = res.data.getCartByUserId|| {};
        cart.items.forEach((item) => {
          item.image = item.cartImage;
        });
        context.commit("setCart",cart );
      });
    },
    addToCart(context, {item, userId}) {
      addToCart(item,userId).then(() => {
        context.commit("addToCart", item);
      });
    },
    addToCartWithoutFetch(context, item) {
      context.commit("addToCart", item);
    },
    removeFromCart(context, {item,userId}) {
      removeFromCart(item.content.id,userId).then(() => {
        context.commit("removeFromCart", item);
      });
    },
    removeFromCartWithoutFetch(context, item) {
      context.commit("removeFromCart", item);
    },
    resetCart(context) {
      context.commit("resetCart");
    },
    fetchItem(context, id) {
      getItem(id).then((res) => {
        context.commit("setItem", res.data.getItemById);
      });
    },
    fetchItemsForCategory(context, id) {
      getItemsByCategoryId(id).then((res) => {
        let itemsFromQuery = res.data.getItemByCategoryId;
        let items = []
        itemsFromQuery.forEach((item) => {
          items.push({
            name: item.content.name,
            price: item.content.price,
            id: item.content.id,
            topPhoto: item.photos[0],
          })
        });
        context.commit("setItemsForCategory",items );
      });
    },
    fetchItemsForSubCategory(context, id) {

    getItemsBySubCategoryId(id).then((res) => {
        let itemsFromQuery = res.data.getItemBySubCategoryId;
        console.log(itemsFromQuery);
        let items = []
        itemsFromQuery.forEach((item) => {
          items.push({
            name: item.content.name,
            price: item.content.price,
            id: item.content.id,
            topPhoto: item.photos[0],
          })
        });
        context.commit("setItemsForCategory", items);
    });
    },
    fetchItemsForSubTitle(context, itemInfo) {
      getItemsBySubtitleId(itemInfo).then((res) => {
        let itemsFromQuery = res.data.getItemBySubTitleId;
        let items = []
        itemsFromQuery.forEach((item) => {
          items.push({
            name: item.content.name,
            price: item.content.price,
            id: item.content.id,
            topPhoto: item.photos[0],
          })
        });
        console.log(items);
        context.commit("setItemsForCategory", items);
      });
    },
    fetchItemsBySearchKey(context,searchKey){
      getItemsBySearchKey(searchKey).then((res)=>{
        let itemsFromQuery = res.data.getItemBySearchKey;
        let items = []
        itemsFromQuery.forEach((item) => {
          items.push({
            name: item.content.name,
            price: item.content.price,
            id: item.content.id,
            topPhoto: item.photos[0],
          })
        });
        context.commit("setItemsBySearchKey",items);
      })
    },
    registerUser(context, {user,items}) {
    register(user).then((res) => {
      let userReq = res.data.registerUser || null;
      console.log(userReq);
      if (userReq != null) {
        context.commit("setUser", res.data.registerUser);
        localStorage.setItem("user", JSON.stringify(res.data.registerUser));
        initializeCart(userReq.id,items).then((res)=>{
          console.log(res);
          let cart = res.data.initializeCart;
          cart.items.forEach((item) => {
            item.image = item.cartImage;
          });
          context.commit("setCart", cart);

        });
      }
      else{
        alert("Kullanıcı mevcut");
      }
    });
    },
    loginUser(context, {user,items}) {
      login(user).then((res) => {
        let userReq = res.data.loginUser || null;
        if (userReq != null) {
          console.log(userReq);
          context.commit("setUser", res.data.loginUser);
          localStorage.setItem("user", JSON.stringify(res.data.loginUser));
          console.log(userReq);
          initializeCart(userReq.id,items).then((res)=>{
            console.log(res);
            let cart = res.data.initializeCart;
            cart.items.forEach((item) => {
              item.image = item.cartImage;
            });
            context.commit("setCart", cart);

          });

        }
        else{
          alert("Hatalı Kullanıcı Adı veya Şifre");
        }
      });
      
    },
   
  },
  getters: {
    finalCartPrice(state) {
      return state.cart.total + state.cart.shipping - state.cart.discount;
    },
    totalCartPrice(state) {
      return state.cart.total;
    },
    discountCartPrice(state) {
      return state.cart.discount;
    },
    shippingCartPrice(state) {
      return state.cart.shipping;
    },
    cartItemsQuantity(state) {
      let quantity = 0;
      state.cart.items.forEach((item) => {
        quantity += item.content.count;
      });
      return quantity;
    },
  },
});
