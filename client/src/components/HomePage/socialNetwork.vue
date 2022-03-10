<template>
  <section class="container-fluid overflow-hidden">
    <div class="d-flex flex-column justify-content-center mt-5 text-center">
    <div>
      <h3 class="fw-bolder" style="color: black">#SocialNetWork</h3>
    </div>
    <div class="mt-2 socialFont">
      <span>Stilinizle ilham vermeye hazır mısınız?</span>
    </div>
    <div class="mt-2 socialFont">
      <span
        >Siz de fotoğrafınız ile NetWork.com.tr’de yer alma şansını yakalamak
        istiyorsanız,</span
      >
    </div>
    <div class="mt-2 socialFont">
      <span
        >NetWork stilinizi #SocialNetWork hashtag’i ile @networkonline’ı mention
        ederek ve etiketleyerek paylaşın,</span
      >
    </div>
    <div class="mt-2 socialFont">
      <span>#SocialNetWork’ün parçası olun.</span>
    </div>
    <div class="mt-2 d-flex justify-content-center">
      <button
        class="custom-socialNetwork-button p-0 px-1 d-flex justify-content-start align-items-center"
        type="button"
      >
        <img src="../../assets/images/insta.jpg" class="mx-2" alt="">
        <p class="p-0 m-0">Bizi Instagram'da Takip Et</p>
      </button>
    </div>
  </div>
  <div class="mt-5">
    <Carousel  :wrap-around="true" :settings="settings" :breakpoints="breakpoints" :autoplay="3500">
      <Slide  v-for="item in socialItems" :key="item.id">
        <div class="img_wrap">
          <img
          class="pointer social-image"
          :src="item.url"
          alt=""
          id="socialImage"
        />
        <div class="img_desc d-flex justify-content-center" id="socialImageDesc">
         <i class="fab fa-instagram mt-1 mx-1"></i>
          <p class="p-0 m-0">Alışverişe başla</p>
        </div>
        
        </div>
        
      </Slide>

      <template #addons>
        <Navigation class="carousel-icon  mx-3" />
      </template>
    </Carousel>
  </div>

  <div class="mt-3">
      <button class="custom-btn p-2">
          Daha Fazla
      </button>
  </div>
  </section>

  
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  props:{
    socialItems:{
      type:Array,
      default: () => ([])
    }
  },
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 6,
        snapAlign: "start",
      }
    },

  }),
});
</script>

<style>
.socialFont {
  font-size: 18px;
  color: #182c42;
}

.custom-socialNetwork-button {
  color: rgb(82, 82, 82);
  width: 250px;
  height: 40px;
  background-color: transparent;
  border: 1px solid rgba(82, 82, 82, 0.5);
  font-weight: bold;
  font-size: 15px;
}
.custom-socialNetwork-button:hover {
  border: 1px solid black;
}
.social-image{
  transition: 0.35s all ease;
  display:block;
  width:100%;
  height:100%;
  position:relative;
  object-fit:cover;
}
.social-image:hover,.img_desc:hover{
  transform:scale(1.2);
  filter:brightness(0.5);
}
#socialImage:hover ~ #socialImageDesc{
  visibility: visible;
}

.img_wrap{
  position:relative;
  width:99.5%;
  height:300px;
  overflow: hidden;

}

.img_desc{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  font-weight:bold;
  visibility: hidden;
  opacity:0.5;
  margin-bottom: 50px;
}

.custom-btn{
  color: white;
  border: 1px solid black;
  border-radius: 2px;
  font-weight: bold;
  background-color: #333333;
  font-size:10px;
  width:100px;
  transition: 0.2s background-color ease-in;
}

.custom-btn:hover{
  background-color: black;
  
}
.carousel-icon{
  background-color:transparent !important;
  border:2px solid rgb(209, 209, 209) !important;
  color: rgb(209, 209, 209);
  opacity:0.5;
  transition:0.3s all ease;
}
.carousel-icon:hover{
  border:2px solid rgb(255, 255, 255) !important;
  color: rgb(255, 255, 255);
  opacity:1;
}
</style>