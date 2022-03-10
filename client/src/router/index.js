import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name:"HomePage",
        path:"/",
        component:() =>import("@/pages/Home")
    },
    {
        name:"FavouritesPage",
        path:"/favourites",
        component:() =>import("@/pages/Favourites")
    },
    {
        name:"RegisterPage",
        path:"/register",
        component:() => import("@/pages/Register")
    },
    {
        name:"ItemDetailPage",
        path:"/itemdetail/:id",
        component:()=> import("@/pages/ItemDetail")
    },
    {
        name:"CartPage",
        path:"/cart",
        component:()=> import("@/pages/Cart")
    },
    {
        name:"CategoryItemsPage",
        path:"/category",
        component:()=> import("@/pages/CategoryItems"),
    },
    {
        name:"AllItemsPage",
        path:"/allitems",
        component:()=> import("@/pages/AllItems")
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});
router.beforeEach((to,from,next)=>{
    if(to.name == "RegisterPage" && localStorage.getItem("user") != null){
        next({name:"HomePage"});
    }
    else next()
})
router.afterEach(() =>{
    window.scrollTo({behavior:"smooth",top:0});
})
export default router;
