<template>
<div class="spacer">
    &nbsp;
</div>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators m-0">
      <button
      v-for="index in items.length" :key="index"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        :data-bs-slide-to="index - 1"
        class="mx-2"
        aria-current="true"
        :aria-label="Slide  + index"
        :ref="'slide_' + index"
      ></button>
      
    </div>
    <div class="carousel-inner">
      <div :ref="'item_' + item.id" data-test="carouselAdvert" class="carousel-item pointer" v-for="item in items" :key="item.id" @click="goToAllItemsPage()">
        <img
          :src="item.url"
          class="d-block w-100"
          alt="..."
        />
      </div>
     
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {

  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  mounted() {
    if (this.items.length > 0) {
      this.$refs.item_1.classList.add('active');
      this.$refs.slide_1.classList.add('active');
    }
},
  methods: {
    goToAllItemsPage() {
      this.$router.push({ name: 'CategoryItemsPage',query: { searchKey:"*" } });
    }
  },
  

};
</script>

<style>
.carousel-indicators button {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50%;
}
.spacer
{
    width: 100%;
    height: 70px;
}
</style>