<template>
  <div
    class="custom-container d-flex flex-column justify-content-between align-items-center"
  >
    <div class="my-3">
      <i class="fa fa-shopping-bag fa-3x"></i>
    </div>
    <div class="mb-4 ">
      <span class="c-black favorites__loginText">Sepetiniz Henüz Boş</span>
    </div>
    <div class="mb-3 mt-3">
      <router-link to="/favourites">
        <button style="width: 275px" type="button" class="black-button" data-bs-dismiss="modal">
          Favorilerize göz atın
        </button>
      </router-link>
    </div>
    <div>
      <button type="button" class="white-button" data-bs-dismiss="modal">Alışverişe devam edin</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
