<template>
     <div class="container-fluid p-0 mt-5 border border-1">
                    <div class="col-12 row p-0 m-0">
                        <button
                            class="col-4 text-uppercase m-0 py-2 border-0 px-0 border-end fw-bold ls-1 text-start px-4"
                        >İNDİRİM KUPONU</button>
                        <button
                            class="col-4 text-uppercase m-0 py-2 border-0 px-0 border-end bg-c-gray fw-bold ls-1 text-start px-4"
                        >
                            <img
                                class="pe-2"
                                src="https://www.network.com.tr/Areas/TemplateV2/Assets/dist/img/hopi-icon.svg"
                            />
                            HOPİ
                        </button>
                        <button
                            class="col-4 text-uppercase m-0 py-2 border-0 fw-bold ls-1 text-start px-4"
                        >SİPARİŞ TAKİBİ</button>
                    </div>
                    <!-- HOPİ -->
                    <div class="col-12 row p-2 py-4 m-0" v-if="false">
                        <div class="col-9 text-start">
                            <div class="mb-3">
                                <img
                                    src="https://www.network.com.tr/Areas/TemplateV2/Assets/dist/img/hopi-logo.png"
                                    width="55"
                                />
                            </div>
                            <div class="w-100">
                                <p class="font-little-small w-100">
                                    <span class="fw-bold">Hopi</span>’n varsa, kampanyalardan yararlanmak ve
                                    <span
                                        class="fw-bold"
                                    >Paracık</span>’larınla alışveriş yapmak için aşağıya
                                    <span
                                        class="fw-bold"
                                    >Hopi QR Kodunu</span> gir.
                                </p>
                            </div>
                            <div class="px-2 mb-3">
                                <form class="row">
                                    <div class="col-8 p-0 m-0 rounded-0">
                                        <label for="inputPassword2" class="visually-hidden">Password</label>
                                        <input
                                            type="password"
                                            class="form-control rounded-0 p-12 w-100"
                                            id="inputPassword2"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div class="col-4 p-0 m-0 rounded-0">
                                        <button
                                            type="submit"
                                            class="btn bg-black btn-c rounded-0 p-12 w-100"
                                        >DEVAM</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <p class="font-little-small">
                                    Hopi'n yok mu?
                                    <a class="fw-bold c-black" href="#">Hemen tıkla</a>, Hopi'nle tanış.
                                </p>
                            </div>
                        </div>
                        <div class="col-3">
                            <img
                                class="img-fluid"
                                width="120"
                                src="https://www.network.com.tr/Areas/TemplateV2/Assets/dist/img/hopi-app-iphone-x.png"
                            />
                        </div>
                        <hr class="mt-3 mb-4" />
                        <div>
                            <p class="text-start font-little-small">
                                Alışverişin app’i
                                <span class="fw-bold">Hopi</span>; zevklerini, alışveriş alışkanlıklarını öğrenir ve istediğin ürünlere kolayca ulaşmanı sağlar. Hiçbir yerde olmayan kampanyalarıyla alışverişlerinde sana
                                <span class="fw-bold">Paracık kazandırır</span>.
                            </p>
                        </div>
                    </div>
                    <!-- İNDİRİM -->
                    <div class="col-12" v-if="false">
                        <div class="col-6 m-4">
                            <form class="row">
                                    <div class="col-8 p-0 m-0 rounded-0">
                                        <label for="inputPassword2" class="visually-hidden">Password</label>
                                        <input
                                            type="password"
                                            class="form-control rounded-0 p-12 w-100"
                                            id="inputPassword2"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div class="col-4 p-0 m-0 rounded-0">
                                        <button
                                            type="submit"
                                            class="btn bg-black btn-c rounded-0 p-12 w-100"
                                        >EKLE</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                    <!-- gift -->
                    <div class="col-12 px-4">
                           <div class="col-12">
                               <p class="font-little-small my-4 mx-3 text-start">
                               Gift Card ile ödemenizin tamamını ya da bir kısmını ödeyebilirsiniz. Kart numaranızı aşağıdaki alana girerek kullanabilirsiniz.
                           </p>
                           </div>
                           <div class="col-8 ps-4 mb-5">
                               <form class="row">
                                    <div class="col-8 p-0 m-0 rounded-0">
                                        <label for="inputPassword2" class="visually-hidden">Password</label>
                                        <input
                                            type="password"
                                            class="form-control rounded-0 p-12 w-100"
                                            id="inputPassword2"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div class="col-4 p-0 m-0 rounded-0">
                                        <button
                                            type="submit"
                                            class="btn bg-black btn-c rounded-0 p-12 w-100"
                                        >KULLAN</button>
                                    </div>
                                </form>
                           </div>
                    </div>
                </div>
        
    
</template>

<script>
export default {
    
}

</script>