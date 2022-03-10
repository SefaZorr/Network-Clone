<template>
    <div class="mt-header custom-container row">
        <div class="custom-sticky d-flex justify-content-between bg-white">
            <app-breadcrumb class="my-3" />
            <div class="d-flex justify-content-start align-items-center">
                <p class="font-little-small py-0 my-0 mx-5">
                    {{ items.length }}/
                    <span class="fw-bold">{{ items.length }} Ürün</span>
                </p>
                <img
                    v-if="itemCountPerRow.three"
                    @click="threeItem()"
                    class="align-self-center pointer"
                    src="../assets/images/threeitemactive.png"
                    width="30"
                    height="30"
                    alt
                />
                <img
                    v-if="!itemCountPerRow.three"
                    @click="threeItem()"
                    class="align-self-center pointer"
                    src="../assets/images/threeitem.png"
                    width="30"
                    height="30"
                    alt
                />
                <img
                    v-if="!itemCountPerRow.four"
                    @click="fourItem()"
                    class="align-self-center pointer"
                    src="../assets/images/fouritem.png"
                    width="30"
                    height="30"
                    alt
                />
                <img
                    v-if="itemCountPerRow.four"
                    @click="fourItem()"
                    class="align-self-center pointer"
                    src="../assets/images/fouritemactive.png"
                    width="30"
                    height="30"
                    alt
                />
                <!-- editor prefers -->
                <div class="dropdown mx-2">
                    <button
                        class="btn btn-secondary dropdown-toggle menu-custom font-little-small"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >Sıralama</button>
                    <ul
                        class="dropdown-menu font-little-small rounded-0"
                        aria-labelledby="dropdownMenuButton1"
                    >
                        <li @click="SortItems('priceDesc')">
                            <a class="dropdown-item py-2 pointer">Fiyata göre artan</a>
                        </li>
                        <li @click="SortItems('priceAsc')">
                            <a class="dropdown-item py-2 pointer">Fiyata göre azalan</a>
                        </li>
                        <li @click="SortItems('random')">
                            <a class="dropdown-item py-2 pointer">Editör Sıralaması</a>
                        </li>
                        <li @click="SortItems('random')">
                            <a class="dropdown-item py-2 pointer">İndirim Oranına Göre</a>
                        </li>
                    </ul>
                </div>
                <!-- editor prefers end -->
                <!-- editor prefers -->
                <div class="dropdown mx-2">
                    <button
                        class="btn btn-secondary dropdown-toggle menu-custom2 font-little-small"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >Filtreler</button>
                </div>
                <!-- editor prefers end -->
            </div>
        </div>
        {{ item }}
        <item
            :class="{ 'col-4': itemCountPerRow.three, 'col-3': itemCountPerRow.four }"
            v-for="item in items"
            :key="item.id"
            :item="item"
            @click="goToItemPage(item.id)"
        />
    </div>
</template>


<script>
import Item from "../components/Shared/appItems/item.vue";
import AppBreadcrumb from "../components/Shared/appBreadcrumb.vue";
export default {
    created() {
        this.$store.dispatch("fetchItemsForHome");
        console.log(this.$route.query);
        this.changeData();


    },
    data() {
        return {
            itemCountPerRow: {
                three: true,
                four: false
            },
        }
    },

    methods: {
        threeItem() {
            this.itemCountPerRow.three = true;
            this.itemCountPerRow.four = false;
        },
        fourItem() {
            this.itemCountPerRow.three = false;
            this.itemCountPerRow.four = true;
        },
        goToItemPage(id) {
            this.$store.dispatch('fetchItem', id);
            this.$router.push({ name: 'ItemDetailPage', params: { id: id } });
        },
        changeData() {
            let query = this.$route.query;
            if (query.contentId !== undefined) {
                this.$store.dispatch('fetchItemsForSubTitle', { subCategoryId: query.subCategoryId, contentId: query.contentId });
            }
            else if (query.categoryId !== undefined) {
                this.$store.dispatch('fetchItemsForCategory', query.categoryId);
            }
            else if (query.subCategoryId !== undefined) {
                this.$store.dispatch('fetchItemsForSubCategory', query.subCategoryId);
            }
            else if (query.searchKey !== undefined){
                console.log(query.searchKey);
                this.$store.dispatch('fetchItemsBySearchKey',query.searchKey);
            }
        },
        SortItems(orderBy) {
            this.$store.commit('sortCategoryItems', orderBy);
        }
    },
    computed: {
        items() {
            return this.$store.state.categoryItems;
        }
    },
    components: { Item, AppBreadcrumb }
}

</script>

<style>
.menu-custom {
    background-color: white !important;
    border-radius: 0px !important;
    color: black !important;
    padding-left: 35px !important;
    padding-right: 40px !important;
    border: 1px solid #e6e6e6 !important;
    text-align: center !important;
    vertical-align: text-top !important;
    padding-top: 5px !important;
    padding-bottom: 1px !important;
    outline: none !important;
    box-shadow: none !important;
    transition: all 0.3s ease-in-out;
}
.menu-custom:hover {
    border-color: black !important;
}
.menu-custom:focus {
    outline: none !important;
    box-shadow: none !important;
}
.menu-custom::after {
    content: none !important;
}
.menu-custom::before {
    content: url(../assets/images/az.png) !important;
    vertical-align: -25%;
    padding: 5px !important;
}
.custom-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 132.5px;
}
.mt-header {
    margin-top: 140px;
}
.menu-custom2 {
    background-color: white !important;
    border-radius: 0px !important;
    color: black !important;
    padding-left: 10px !important;
    padding-right: 15px !important;
    border: 1px solid #e6e6e6 !important;
    text-align: center !important;
    vertical-align: text-top !important;
    padding-top: 5px !important;
    padding-bottom: 1px !important;
    outline: none !important;
    box-shadow: none !important;
    transition: all 0.3s ease-in-out;
}
.menu-custom2:hover {
    border-color: black !important;
}
.menu-custom2:focus {
    outline: none !important;
    box-shadow: none !important;
}
.menu-custom2::after {
    content: none !important;
}
.menu-custom2::before {
    content: url(../assets/images/filter.png) !important;
    vertical-align: -30%;
    padding: 5px !important;
}
</style>