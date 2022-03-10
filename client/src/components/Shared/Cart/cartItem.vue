<template>
  <div class="d-flex justify-content-between">
    <div>
      <img
        @click="goToItemDetailPage(item.content.id)"
        class="img-fluid w-60 pointer"
        :src="item.image"
        alt
      />
    </div>
    <div class="d-flex flex-column align-items-start">
      <span class="font-small fw-bold text-start" id="title">
        {{
          item.content.description
        }}
      </span>
      <span class="font-xsmall mt-2">Adet: {{ item.content.count }}</span>
      <span class="font-xsmall mt-2">Beden: {{ item.content.size }}</span>
      <span class="font-xsmall mt-2">Renk: {{ item.content.color }}</span>
    </div>
    <div class="d-flex flex-column justify-content-between mx-3">
      <p class="fw-bold">{{ item.content.totalPrice }} ₺</p>
      <div class="align-self-end pointer" @click="removeItem(item)">
        <img src="../../../assets/images/trash.png" class="align-self-end" alt srcset />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  emits: ["removeItem"],
  data() {
    return {};
  },
  methods: {
    removeItem(item) {
       if (localStorage.getItem("user") !== null) {
                let user = JSON.parse(localStorage.getItem("user"));
                item.userId = user.id;
                this.$store.dispatch('removeFromCart', {item:item,userId:user.id});

            }
            else {
                this.$store.dispatch('removeFromCartWithoutFetch', item);
            }
    },
    goToItemDetailPage(id) {
      console.log(id);
      this.$router.push({ name: 'ItemDetailPage', params: { id: id } });
    }
  },
};
</script>

<style>
#title {
  display: inline-block;
  width: 220px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
.w-60 {
  width: 60%;
}
</style>