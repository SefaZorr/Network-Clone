<template>
    <div class="d-flex flex-column justify-content-start align-items-start mt-3 ">
        <h5 class="font-small">{{ itemDetails.content.type }}</h5>
        <h4 class="fw-bold">{{ itemDetails.content.name }}</h4>
        <p class="fw-bold">{{ itemDetails.content.price }} TL</p>
        <div class="d-flex ">
            <div class="d-flex justify-content-start h-50 align-items-center">
            <span
                @mouseover="changeCurrentOver(item.name)"
                @click="getCurrentColorObject(item)"
                class="w-100 item-color mx-1 pointer"
                :class="{'active-color': item.name === currentColorObject.name}"
                v-for="(item, index) in itemDetails.content.colorOptions"
                :style="{ backgroundColor: item.color }"
                :key="index"
            ></span>
           
        </div>
         <span class="mx-2 font-small align-self-center">{{ currentColor }}</span>
        </div>
        
        <div id="body_size" class="w-100 mt-5">
            <div class="d-flex justify-content-between align-item-center">
                <p class="font-small fw-bold">Beden Seçimi: <span v-if="!sizeIsChosen" style="color: rgb(236, 0, 0);">Beden seçiniz</span> </p>
                <p class="font-xsmall fw-bold pointer">Beden Tablosu</p>
            </div>
            <hr class="mt-0" />
            <div id="size_list" class="d-flex justify-content-between mx-3">
                <span
                    class="fw-bold font-small pointer custom-body-size"
                    :class="{'bg-black': item === currentSize,'c-white': item === currentSize}"
                    v-for="(item, index) in itemDetails.content.sizes"
                    :key="index"
                    @click="changeCurrentSize(item)"
                >{{ item }}</span>
            </div>
            <hr />
        </div>
        <div id="cart-add" class="align-self-stretch row align-items-center mt-4">
            <button @click="addToCart()"  :data-bs-toggle="modalName"
                    :data-bs-target="cartName" class="custom-button-cart mx-2 col-9">SEPETE EKLE</button>
            <div class="col-1 mx-2 ">
                <img src="../../assets/images/heart2.png" class="pointer heart-custom" alt="">
            </div>
        </div>
        <div class="w-100 mt-5">
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div>
                    <h3 id="panelsStayOpen-headingOne">
                        <button
                            class="accordion-button bg-transparent fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseOne"
                        >Ürün Detayı</button>
                    </h3>
                    <div
                        id="panelsStayOpen-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div class="accordion-body text-start">
                            <p class="font-small fw-bold">Ref. No: {{ itemDetails.content.details.refNo }}</p>
                            <ul>
                                <li
                                    class="mb-3 c-gray"
                                    v-for="(item, index) in itemDetails.content.details.content"
                                    :key="index"
                                >{{ item }}</li>
                            </ul>
                            <p class="c-gray">
                                Manken Bilgileri :
                                 Boy: {{itemDetails.content.details.model.boy}} / Göğüs: {{itemDetails.content.details.model.gogus}} / Bel: {{itemDetails.content.details.model.bel}} / Kalça: {{itemDetails.content.details.model.kalca}} / Ayak Numarası: {{itemDetails.content.details.model.ayak_Numarası}}
                                  
                                 
                            </p>
                            <p class="c-gray">
                                Numune Bedeni:{{itemDetails.content.details.sample_size}}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-0" />
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div>
                    <h3 id="panelsStayOpen-headingOne">
                        <button
                            class="accordion-button bg-transparent fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne2"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseOne"
                        >İade ve Teslimat</button>
                    </h3>
                    <div
                        id="panelsStayOpen-collapseOne2"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div class="accordion-body text-start">
                            <p
                                class="font-small c-gray"
                            >Ürünleriniz stok durumuna göre siparişiniz onaylandığında tedarik edilmekte ve sonrasında kargoya verilmektedir. Siparişinizin onaylanabilmesi için satın almış olduğunuz ürünlerin ücretinin kredi karti ile ödenmesi gerekmektedir. Onaylanan siparişler 2-7 iş günü içerisinde kargoya teslim edilecektir.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-0">
        </div>
        <div id="socialMedia" class="w-100 row mt-5">
            <div class="col-4 fw-bold">
                <p>Ürünü Paylaş:</p>
            </div>
            <div class="col-8 d-flex justify-content-start">
               <i class="fas fa-link mx-2 pointer"></i>
                <i class="fab fa-whatsapp mx-2 pointer"></i>
                <i class="fas fa-envelope mx-2 pointer"></i>
                <i class="fab fa-facebook-f mx-2 pointer"></i>
                <i class="fab fa-twitter mx-2 pointer" ></i>
                <i class="fab fa-pinterest mx-2 pointer"></i>
            </div>
        </div>
    </div>
</template>


<script>
import { convertItemToCartObject } from "../../Helpers/helperFunctions";

export default {
    props: [
        "itemDetails"
    ],
    data() {
        return {
            currentColor: this.itemDetails.content.colorOptions[0].name,
            currentSize: "None",
            currentColorObject: this.itemDetails.content.colorOptions[0],
            sizeIsChosen: true,
            modalName: "",
            cartName: "",
        }
    },
    methods: {
        changeCurrentOver(color) {
            this.currentColor = color;
        },
        getCurrentColorObject(colorObj) {
            console.log(colorObj);
            this.currentColorObject = colorObj;
        },
        changeCurrentSize(name) {
            this.currentSize = name;
            this.modalName = "modal";
            this.cartName = "#cartModal";
            this.sizeIsChosen = true;

        },
        addToCart() {
            if(this.currentSize === "None") {
                this.sizeIsChosen = false;
            }
            else{
                let cartItem = Object.assign({}, this.itemDetails);
                cartItem.chosenColor = this.currentColorObject.name;
                cartItem.chosenColorCode = this.currentColorObject.color;
                cartItem.chosenSize = this.currentSize;
                cartItem = convertItemToCartObject(cartItem);
                if(localStorage.getItem("user") !== null) {
                    let user = JSON.parse(localStorage.getItem("user"));
                    cartItem.userId = user.id;
                    this.$store.dispatch("addToCart", {item: cartItem, userId : user.id});
                }
                else {
                    this.$store.dispatch("addToCartWithoutFetch", cartItem);
                }

            }
        }
    },
}


</script>

<style>

.custom-button-cart {
    color: white;
    background-color: #1c1c1c;
    border: 0px;
    letter-spacing: 2px;
    font-weight: bold;
    transition: 0.3s all ease;
    padding-top: 15px;
    padding-bottom: 15px;
}
.custom-button-cart:hover {
    background-color: #555555;
}
.accordion-button {
    color: black !important;
    border-top: 1px solid rgb(223, 223, 223) !important;
    outline: none !important;
    box-shadow: none !important;
    border: none;
}
.accordion-button:focus {
    outline: none !important;
    box-shadow: none;
}
.accordion-button:active {
    outline: none !important;
    box-shadow: none;
}
.accordion-button:not(.collapsed)::after {
    background-image: none;
    content: "+";
    transform: none;
}
.accordion-button::after {
    background-image: none;
    content: "-";
    font-size: 25px;
    object-fit: cover;
    transform: none;
    color: rgb(158, 158, 158);
}

.c-gray {
    color: gray;
}
.custom-body-size{
    transition: all 00.3s ease;
    padding: 8px 12px;
}
.custom-body-size:hover{
color: gray;
}
.c-white{
    color: white;
}
.heart-custom{
    width: 2rem;
}
.active-color{
    border: #272727 solid 2px !important;
}
</style>