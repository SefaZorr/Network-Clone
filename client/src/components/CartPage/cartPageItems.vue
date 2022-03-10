<template>
<div class="d-flex justify-content-around">
                    <span class="fw-bold font-little-small p-2">Ürün Adı</span>
                    <span class="fw-bold font-little-small p-2">Adet</span>
                    <span class="fw-bold font-little-small p-2 me-4">Fiyat</span>
                </div>
                <div class="d-flex justify-content-between p-0 mt-3"  v-for="item in items" :key="item.content.id">
                    <div>
                        <img
                            @click="goToItemDetailPage(item.content.id)"
                            class="img-fluid m-0 border border-1 border-gray-light p-05 pointer"
                            :src="item.image"
                        />
                    </div>
                    <div class="flex-grow-1 d-flex row">
                        <div class="col-4 text-start mx-2">
                            <p class="fw-bold font-title mt-1">{{item.content.description}}</p>
                            <p class="font-little-small mt-1 c-gray">
                                Renk:
                                <span
                                    class="w-50 h-50 cart-item-color mx-1 pointer"
                                    :style="{backgroundColor: item.content.colorCode}"
                                ></span>
                                <span class="c-black">{{item.content.color}}</span>
                            </p>
                            <p class="font-little-small mt-1 c-gray">
                                Beden:
                                <span class="fw-bold">{{item.content.size}}</span>
                            </p>
                        </div>
                        <div class="col-3 mx-4 my-1">
                            <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button
                                    @click="removeItem(item)"
                                    type="button"
                                    class="btn bg-white rounded-0 border border-1 triple-button fs-4"
                                >-</button>
                                <button
                                    data-test="item-count"
                                    type="button"
                                    class="btn bg-white rounded-0 context-menu fw-bold border border-top-1 border-bottom-1 triple-button c-black c-black-hover"
                                >{{item.content.count}}</button>
                                <button
                                    @click="addItem(item)"
                                    type="button"
                                    class="btn bg-white rounded-0 border border-1 triple-button fs-4"
                                >+</button>
                            </div>
                        </div>
                        <div class="col-2 offset-1 fw-bold">{{item.content.totalPrice}} ₺</div>
                        <div class="d-flex justify-content-start">
                            <div class="d-flex justify-content-around align-items-center">
                                <img
                                    src="../../assets/images/gift.png"
                                    width="25"
                                    class="ms-3 me-1 pointer"
                                />
                                <p
                                    class="p-0 m-0 pointer c-black align-self-center text-decoration-underline pointer"
                                >Hediye paketi istiyorum</p>
                            </div>
                            <div class="d-flex justify-content-around align-items-center p-0">
                                <img
                                    src="../../assets/images/heart2.png"
                                    width="25"
                                    class="ms-5 me-1 pointer"
                                />
                                <p
                                    class="p-0 m-0 pointer c-black align-self-center text-decoration-underline pointer"
                                >Favori</p>
                            </div>
                        </div>
                    </div>
                    <div @click="removeItem(item)">
                        <img src="../../assets/images/trash2.png" width="25" class="pointer" />
                    </div>
                </div>
        

</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
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
        addItem(item) {
            if(localStorage.getItem("user") !== null) {
                    let user = JSON.parse(localStorage.getItem("user"));
                    item.userId = user.id;
                    this.$store.dispatch("addToCart", {item: item, userId : user.id});
                }
                else {
                    this.$store.dispatch("addToCartWithoutFetch", item);
                }
        },
        goToItemDetailPage(id)
        {
            console.log(id);
            this.$router.push({ name: 'ItemDetailPage',params: { id: id } });
        }
    },
}
</script>