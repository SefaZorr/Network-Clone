<template>
    <div
        class="dropdown-content pt-5 pb-3 animate__animated animate__fadeIn text-start"
        style="left:0;"
    >
        <div class="custom-container row">
            <div class="col-2" v-for="(item, index) in subtitles" :key="index">
                <p
                    class="fw-bold pointer subItemLink"
                    @click="goToItemsPageWithCategoryId(item.id)"
                >{{ item.name }}</p>
                <p
                    class="subItemLink font-title"
                    @click="goToItemsPageWithSubCategoryId(item.id,subItem.id)"
                    v-for="(subItem) in item.content"
                    :key="subItem.id"
                >{{ subItem.name }}</p>
            </div>

            <div class="col-2">
                <img v-if="photo != undefined" class="img-fluid" :src="photo" alt />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ["subtitles", "photo"],
    methods: {
        goToItemsPageWithCategoryId(id) {
            this.$router.push({ name: "CategoryItemsPage", query: { subCategoryId: id }, params: { id: id } });
        },
        goToItemsPageWithSubCategoryId(subCategoryId,subtitleid) {
            this.$router.push({ name: "CategoryItemsPage", query: { contentId: subtitleid,subCategoryId:subCategoryId }});

        }
    },
}
</script>

<style>
.subItemLink {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
.subItemLink:hover {
    color: #a5a5a5;
}
</style>