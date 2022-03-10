<template>
  <!-- Modal -->
  <div
    class="modal animate__animated animate__fadeIn"
    id="cartModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog m-0 modal-dialog-custom">
      <div id="modal-custom" class="modal-content mt-0 modal-custom rounded-0">
        <div class="modal-header no-border h-10 mr-5">
          <div class="d-flex align-items-center w-100 h-100">
            <img src="../../../assets/images/cart.png" class="mx-2" alt="" srcset="">
            <h5 class="ls-1 mt-2">Sepetim</h5>
            <button
              ref="close"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div class="modal-body r-0">
          <div
            v-if="items.length > 0"
            class="d-flex flex-column h-100 justify-content-between"
          >
            <div>
              <cart-item
                v-for="(item, index) in items"
                :key="index"
                :item="item"
                class="mt-2 "
                id="cart-item"
              />
            </div>
            <cart-button/>
          </div>
          <blank-cart v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlankCart from "./blankCart.vue";
import CartItem from "./cartItem.vue";
import CartButton from "./cartButton.vue";

export default {
  components: {
    BlankCart,
    CartItem,
    CartButton
  },
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
  
  
  computed:{
     
      items() {
            return this.$store.state.cart.items;
        },
  }
};
</script>

<style>
.modal-custom {
  height: 100vh !important;
  width: 27vw !important;
}
.h-10 {
  height: 10% !important;
}
.modal-dialog-custom {
  position: fixed !important;
  right: 0 !important;
}
.animate__animated.animate__fadeIn {
  --animate-duration: 0.5s;
}
.mr-5 {
  margin-right: 30px !important;
}
.ls-2 {
  letter-spacing: 1px;
}
.no-border {
  border: 0 !important;
}

/* login lazım */
.favorites__loginText {
  font-family: TTNormsPro-Medium;
  font-size: 18px;
  margin-top: 50px;
}
.c-black {
  color: black;
}
.black-button {
  background-color: black;
  color: white;
  width: 275px;
  height: 45px;
  border-radius: 0px;
  border: 0;
}
.white-button {
  background-color: white;
  color: black;
  width: 275px;
  border: 1px solid black;
  height: 45px;
  border-radius: 0px;
}

.custom-button-cart {
  color: white;
  background-color: black;
  border: 0px;
  letter-spacing: 2px;
  font-weight: bold;
  transition: 0.3s all ease;
  padding-top: 15px;
  padding-bottom: 15px;
}
.mr-5{
  margin-right: 5px;
}
</style>