<template>
    <div>
        <div class="container my-1" id="menu">
            <nav class="d-flex justify-content-around px-5 mx-5">
                <a
                    v-for="category in categories"
                    :key="category.id"
                    class="black-color fs-6 p-0 pb-1 text-decoration-none menu-link dropdown"
                    href="#"
                    @click="goToItemsPage(category.id)"
                    @mouseover="showSubMenu(category)"
                >
                    <span class="fs-7">{{ category.name }}</span>
                </a>
                <header-submenu
                    v-if="subtitles.length > 0"
                    :subtitles="subtitles"
                    :photo="currentCategoryPhoto"
                />
            </nav>
        </div>
    </div>
</template>

<script>
import HeaderSubmenu from "./headerSubmenu.vue";
export default {
    components: { HeaderSubmenu },

    data() {
        return {
            logo: { id: 0, url: "https://www.network.com.tr/assets/v2/img/Network.jpg", width: "220px" },
            categories: [
                {
                    id: 0, name: "YENI GELENLER",
                    subtitles: [],
                    categoryPhoto: undefined
                },
                {
                    id: 1, name: "KADIN",
                    subtitles: [
                        {   
                            id:0,
                            name: "Üst Giyim",
                            content: [
                                { id: 1, name: "Kazak" },
                                { id: 2, name: "Hırka" },
                                { id: 3, name: "Ceket" },
                                { id: 4, name: "Sweatshirt" },
                                { id: 5, name: "Elbise" },
                                { id: 6, name: "Gömlek" },
                                { id: 7, name: "Bluz" },
                                { id: 8, name: "T-Shirt" },
                                { id: 9, name: "Tulum" },
                                { id: 10, name: "Yelek" },
                                { id: 11, name: "Plaj Giyim" },
                            ],
                        },
                        {
                            id:1,
                            name: "Alt Giyim",
                            content: [
                                { id: 1, name: "Pantolon" },
                                { id: 2, name: "Denim Pantolon" },
                                { id: 3, name: "Casual Pantolon" },
                                { id: 4, name: "Etek" },
                                { id: 5, name: "Tayt" },
                                { id: 6, name: "Eşofman" },
                                { id: 7, name: "Şort" },
                            ],
                        },
                        {
                            id:2,
                            name: "Dış Giyim",
                            content: [
                                { id: 1, name: "Mont" },
                                { id: 2, name: "Pardösü" },
                                { id: 3, name: "Deri Mont" },
                                { id: 4, name: "Kaban" },
                                { id: 5, name: "Manto" },
                            ],
                        },
                        {
                            id:3,
                            name: "Ayakkabı",
                            content: [
                                { id: 1, name: "Bot" },
                                { id: 2, name: "Çizme" },
                                { id: 3, name: "Sneaker" },
                                { id: 4, name: "Ayakkabı" },
                                { id: 5, name: "Stiletto" },
                                { id: 6, name: "Babet" },
                                { id: 7, name: "Espadril" },
                                { id: 8, name: "Sandalet" },
                                { id: 9, name: "Terlik" },
                            ],
                        },
                        {
                            id:4,
                            name: "Aksesuar",
                            content: [
                                { id: 1, name: "Çanta" },
                                { id: 2, name: "Cüzdan" },
                                { id: 3, name: "El Çantası" },
                                { id: 4, name: "Atkı-Bere-Eldiven" },
                                { id: 5, name: "Kemer" },
                                { id: 6, name: "Takı" },
                                { id: 7, name: "Valiz" },
                                { id: 8, name: "Çorap" },
                            ],
                        }],
                    categoryPhoto: "https://img-network.mncdn.com/categoryimages/KADIN_2021092913005438342.jpg"
                },
                {
                    id: 2,
                    name: "ERKEK", subtitles: [
                        {
                            id:5,
                            name: "Üst Giyim",
                            content: [
                                { id: 1, name: "Kazak" },
                                { id: 2, name: "Hırka" },
                                { id: 3, name: "Gömlek" },
                                { id: 4, name: "Sweatshirt" },
                                { id: 5, name: "Yelek" },
                                { id: 6, name: "Polo Yaka T-shirt" },
                                { id: 7, name: "T-Shirt" },
                                { id: 8, name: "Ceket" },
                                { id: 9, name: "Takım Elbise" },
                                { id: 10, name: "Smokin Takım Elbise" },
                            ],
                        },
                        {
                            id:6,
                            name: "Alt Giyim",
                            content: [
                                { id: 1, name: "Pantolon" },
                                { id: 2, name: "Denim Pantolon" },
                                { id: 3, name: "Casual Pantolon" },
                                { id: 4, name: "Şort" },
                                { id: 5, name: "Eşofman" },
                                { id: 6, name: "Play Giyim" },
                            ],
                        },
                        {
                            id:7,
                            name: "Dış Giyim",
                            content: [
                                { id: 1, name: "Palto" },
                                { id: 2, name: "Mont" },
                                { id: 3, name: "Deri Mont" },
                                { id: 4, name: "Kaban" },
                                { id: 4, name: "Pardösü" },
                            ],
                        },
                        {
                            id:8,
                            name: "Ayakkabı",
                            content: [
                                { id: 1, name: "Bot" },
                                { id: 2, name: "Ayakkabı" },
                                { id: 3, name: "Sneaker" },
                                { id: 4, name: "Loafer" },
                            ],
                        },
                        {
                            id:9,
                            name: "Aksesuar",
                            content: [
                                { id: 1, name: "Çanta-Cüzdan" },
                                { id: 2, name: "Kravat-Papyon" },
                                { id: 3, name: "Mendil" },
                                { id: 4, name: "Valiz" },
                                { id: 5, name: "Aksesuar" },
                                { id: 6, name: "Atkı-Bere-Eldiven" },
                                { id: 7, name: "Çorap" },
                                { id: 8, name: "Anahtarlık" },
                            ],
                        }],
                    categoryPhoto: "https://img-network.mncdn.com/categoryimages/ERKEK_2021092913013454444.jpg",
                },

                {
                    id: 3, name: "LOOKBOOK",
                    subtitles: [],
                    categoryPhoto: undefined
                },
                {
                    id: 4, name: "YILBAŞI",
                    subtitles: [],
                    categoryPhoto: undefined

                },
                {
                    id: 5, name: "OUTLET",
                    subtitles: [{
                        id:10,
                        name: "Erkek",
                        content:[
                            {id:1,name:"Giyim"},
                            {id:2,name:"Ayakkabı"},
                            {id:3,name:"Aksesuar"},
                        ]
                    },
                    {
                        id:11,
                        name: "Kadın",
                        content:[
                            {id:1,name:"Giyim"},
                            {id:2,name:"Ayakkabı"},
                            {id:3,name:"Aksesuar"},
                        ]
                    }],
                    categoryPhoto: undefined
                },
            ],
            subtitles: [],
            currentCategoryPhoto: undefined
        };
    },
    methods: {
        showSubMenu(category) {
            this.subtitles = category.subtitles;
            this.currentCategoryPhoto = category.categoryPhoto;

        },
        goToItemsPage(id){
            this.$router.push({ name: "CategoryItemsPage", query: { categoryId: id }, params: { id: id } });
        }
    },

}
</script>

<style>
.black-color {
    color: black;
}
.bg-white {
    background-color: white;
}

.fs-7 {
    font-size: small;
    letter-spacing: 1px;
}
.menu-link {
    transition: 0.1s all ease-in-out;
    border-bottom: 3px solid white;
}
.menu-link:hover {
    border-bottom: 3px solid black;
    color: black;
}
</style>