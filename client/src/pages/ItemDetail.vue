<template>
    <section v-if="item != null" class="header-margin custom-container">
        <app-breadcrumb />
        <div class="row">
            <div class="col-8 text-center">
                <item-detail-photo-list :photoList="item.photos" />
            </div>
            <div class="col-4 text-center">
                <item-detail-content :itemDetails="item" />
            </div>
        </div>
    </section>
    <item-carousel
        :itemCarouselsettings="itemCarouselSettings"
        :title="'İlginizi Çekebilecek Ürünler'"
        :items="attractiveItems"
    />
    <item-carousel :itemCarouselsettings="itemCarouselSettings" :title="'Görünümü Tamamla'" :items="CompleteOutfit" />
    <item-carousel :itemCarouselsettings="itemCarouselSettings" :title="'Son Gezilenler'" :items="lastViewedItems" />
</template>

<script>
import AppBreadcrumb from "../components/Shared/appBreadcrumb.vue";
import ItemDetailPhotoList from "../components/ItemDetailPage/ItemDetailPhotoList.vue";
import ItemDetailContent from "../components/ItemDetailPage/ItemDetailContent.vue";
import ItemCarousel from "../components/HomePage/itemCarousel.vue";
export default {
    components: { AppBreadcrumb, ItemDetailPhotoList, ItemDetailContent, ItemCarousel },

    created() {
    this.$store.dispatch("fetchItemsForAttractiveItems");
    this.$store.dispatch("fetchItemsForCompleteOutfit");
    this.$store.dispatch("fetchItemsForLastViewedItems");
    this.$store.dispatch("fetchItem", this.$route.params.id);
    },
    data() {
        return {
         
            itemCarouselSettings: {
                itemWidth: "21rem",
                mobile: 2,
                tablet: 3,
                desktop: 4,
                buttonVisible: false
            },

        }
    },
    computed:{
        attractiveItems(){
            return this.$store.state.attractiveItems;
        },
        lastViewedItems(){
            return this.$store.state.lastViewedItems;
        },
        CompleteOutfit(){
            return this.$store.state.CompleteOutfit;
        },
        item(){
            console.log(this.$store.state.item);
            console.log(this.$store.state.item.content);
            console.log(this.$store.state.item.photos);
            return this.$store.state.item;
        }
    }
    
}
</script>

<style>
.header-margin {
    margin-top: 180px;
}
</style>