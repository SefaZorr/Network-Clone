<template>
    <div class="container-fluid">
            <div class="row">
                <div class="col-4 row border p-0 m-0">
                    <div class="col-8 py-4 text-start offset-3 d-flex flex-column">
                        <div class="mb-4">
                            <img class="my-2" :src="logo.url" :style="{ width: logo.width }" alt />
                            <p
                                class="mt-2 footer-text w-75 text-start"
                            >NetWork, “zamansız moda” anlayışıyla Türkiye’de adı özgünlük ve kaliteyle bütünleşen bir marka olmaktan gurur duyuyor. Devamını oku</p>
                        </div>
                        <div class="mb-5">
                            <h5 class="footer-title">Müşteri Hizmetleri</h5>
                            <a class="fw-bold text-decoration-none c-black pointer">444 3 662</a>
                        </div>
                        <div class="mb-5">
                            <h5>Bizi takip edin:</h5>
                            <div class="d-flex justify-content-start">
                                <i class="fab fa-instagram fa-lg mr-5"></i>
                                <i class="fab fa-facebook-square fa-lg mr-5"></i>

                                <i class="fab fa-twitter fa-lg mr-5"></i>
                                <i class="fab fa-youtube fa-lg mr-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-8 border pt-5 pl-5 pb-5 m-0 row">
                    <div class="col-2 offset-1 d-flex flex-column justify-content-between">
                        <h5 class="text-start">Müşteri Hizmetleri</h5>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Kurumsal Satış</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Sıkça Sorulan Sorular</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >NetWork Netpoints Card</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >İşlem Rehberi</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Hopi Hakkında</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Mağazadan Teslim</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >İletişim</a>
                    </div>
                    <div class="col-2 d-flex flex-column justify-content-between">
                        <h5 class="text-start">Müşteri Hizmetleri</h5>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Hakkımızda</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >About Network</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >2021-22 Sonbahar/Kış Kataloğu</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Mağazalar</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Kariyer Fırsatları</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Bilgi Toplumu Hizmetleri</a>
                    </div>
                    <div class="col-2 d-flex flex-column justify-content-between">
                        <h5 class="text-start">Müşteri Hizmetleri</h5>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Teslimat ve İade Bilgileri</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Kullanım Şartları</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >KVKK Aydınlatma Metni</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Çerez Politikası</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >İptal ve İade Şartları</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Mesafeli Satış Sözleşmesi</a>
                    </div>
                    <div class="col-3 d-flex flex-column justify-content-between">
                        <h5 class="text-start">Müşteri Hizmetleri</h5>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >11.11 Kampanyası</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Black Friday</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Yılbaşı</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Sevgililer Günü</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Anneler Günü</a>
                        <a
                            class="text-decoration-none text-start c-gray small-font"
                            href="#"
                        >Babalar Günü</a>
                    </div>
                    <div class="col-2 offset-1"></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            logo: { id: 0, url: 'https://www.network.com.tr/assets/v2/img/Network.jpg', width: '140px' }
        }
    },
}
</script>