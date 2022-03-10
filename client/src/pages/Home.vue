<template>
    <advert-carousel v-if="carouselImages.length > 0" :items="carouselImages"/>
    <item-carousel  :title="'Sizin İçin Seçtiklerimiz'" :items="items"/>
    <multi-grid-advert/>
    <social-network :socialItems='socialItems'/>
</template>


<script>
import AdvertCarousel from "../components/HomePage/advertCarousel.vue";
import MultiGridAdvert from "../components/HomePage/multiGridAdvert.vue";
import SocialNetwork from "../components/HomePage/socialNetwork.vue";
import ItemCarousel from "../components/HomePage/itemCarousel.vue";
import { getMainAdverts } from "../services/advertService";

export default {
    components: {
        AdvertCarousel,
        MultiGridAdvert,
        SocialNetwork,
        ItemCarousel
    },
    created() {
        this.$store.dispatch('fetchItemsForHome');
         getMainAdverts().then(response => {
            console.log(response.data.getMainAdverts.mainAdverts);
            console.log(this.carouselImages);

            this.carouselImages = response.data.getMainAdverts.mainAdverts;
            console.log(this.carouselImages);
           
        });
    },
    data() {
        return {
            carouselImages:[
                
            ],
            
            socialItems:[
                {id:1,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211208_lSfTOLtnUFsn.jpg'},
                {id:2,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_dRLIMe7LIeTA.jpg'},
                {id:3,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211122_AxtYvX7jXyT4.jpg'},
                {id:4,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211007_FlyS3wAyd4TZ.jpg'},
                {id:5,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_28YOpSK9lmec.jpg'},
                {id:6,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_dRLIMe7LIeTA.jpg'},
                {id:7,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211005_wL3zKipu6dF1.jpg'},
                {id:8,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_28YOpSK9lmec.jpg'},
                {id:9,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211005_wL3zKipu6dF1.jpg'},
                {id:10,url:'https://buysocial.s3.eu-west-1.amazonaws.com/images/513/20211020_28YOpSK9lmec.jpg'}
            ]
        }
    },
    computed:{
        items(){
            return this.$store.state.homeItems;
        }
    }
}

</script>
