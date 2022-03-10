<template>
    <div class="col-4 p-0 d-flex flex-column justify-content-start align-items-start row" >
                <div
                    class="col-10 offset-1 py-3 border border-1 px-0"
                    style="background-color: #f8f8f8;"
                >
                    <p class="fw-bold px-3 text-start">SİPARİŞ ÖZETİ</p>
                    <hr class="w-100 p-0 m-0" />
                    <div class="px-3 py-3 w-100">
                        <div class="d-flex justify-content-between">
                            <p class>Toplam Tutar( KDV Dahil )</p>
                            <p class="fw-bold">{{totalPrice}} ₺</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class>Etiket İndirimi</p>
                            <p class="fw-bold">{{discount}} ₺</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class>Kargo Ücreti</p>
                            <p class="fw-bold">{{shipping}} ₺</p>
                        </div>
                        <hr />
                        <div data-test="totalCartPrice" class="d-flex justify-content-between">
                            <p class="fw-bold">Ödenecek Tutar </p>
                            <p class="fw-bold">{{lastPrice}}₺</p>
                        </div>

                        <input
                            type="button"
                            value="SEPETİ ONAYLA"
                            class="custom-approve-button w-100"
                        />
                    </div>
                </div>
            </div>
        
    
</template>

<script>
export default{
    
    computed:{
        totalPrice(){
            return this.$store.getters.totalCartPrice;
        },
        discount(){
            return this.$store.getters.discountCartPrice;
        },
        shipping(){
            return this.$store.getters.shippingCartPrice;
        },
        lastPrice(){
            
            return this.$store.getters.finalCartPrice;
            
        }
    }
}
</script>