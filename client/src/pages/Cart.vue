<template>
    <section class="custom-container row custom-cart">
        <div class="col-10 offset-1 row">
            <p class="text-start p-0 ms-3 fw-bold mt-5">SEPETİM</p>
            <div class="col-8 p-0 px-3">
                <cart-page-items :items="items" />
                <hr />
                <cart-page-discounts />
            </div>

            <cart-page-total :items="items" />
        </div>
    </section>
</template>

<script>
import CartPageItems from "../components/CartPage/cartPageItems.vue";
import CartPageDiscounts from "../components/CartPage/cartPageDiscounts.vue";
import CartPageTotal from "../components/CartPage/cartPageTotal.vue";
export default {
    components: { CartPageItems, CartPageDiscounts, CartPageTotal },

    created() {
        if (localStorage.getItem("user") == null) {
        this.items = this.$store.state.cart.items;
        }
        else
        {
            let user = JSON.parse(localStorage.getItem("user"));
            console.log(user.id);

            this.$store.dispatch("fetchCart",user.id);
        }
    },
  
    computed: {
        items() {
            return this.$store.state.cart.items;
        },
    }
}
</script>

<style>
.custom-cart {
    margin-top: 150px;
}
.cart-item-color {
    border-radius: 50%;
    border: 1px solid black;
    padding: 2px 9px;
}

.triple-button {
    padding: 1px 13px !important;
    color: rgb(139, 139, 139);
}
.triple-button:hover {
    color: rgb(139, 139, 139) !important;
}
.c-black-hover:hover {
    color: black !important;
}
.p-05 {
    padding: 0.03rem !important;
}

.custom-approve-button {
    color: white;
    background-color: #1c1c1c;
    border: 0px;
    font-weight: bold;
    padding: 12px;
    transition: all 0.3s ease-in-out;
}
.custom-approve-button:hover {
    background-color: #363636;
}
.ls-1 {
    letter-spacing: -1px !important;
}
.p-12 {
    padding: 12px !important;
}
.btn-c {
    transition: all 0.2s ease-in-out;
    color: white;
}
.btn-c:hover {
    color: white;
    background-color: #363636 !important;
}
</style>