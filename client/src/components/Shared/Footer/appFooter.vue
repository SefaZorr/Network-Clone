<template>
    <footer id="shortInfo" class="wrapper">
        <footer-top/>
        <footer-content/>
        <footer-copyright/>
    </footer>
</template>

<script>

import FooterTop from './footerTop.vue'
import FooterContent from './footerContent.vue'
import FooterCopyright from './footerCopyright.vue'
export default {
   
    components:{
        FooterTop,
        FooterContent,
        FooterCopyright
    }
}
</script>

<style>
.c-black {
    color: black;
}
.w-10 {
    width: 10%;
}
.c-gray {
    color: #626262;
}
.small-font {
    font-size: small;
}

.c-black:hover {
    color: black !important;
}
.pointer {
    cursor: pointer;
}
.footer-text {
    color: #626262;
    font-family: FreightMicroPro-Book;
    font-size: 14px;
    line-height: 20px;
}
.footer-title {
    font-family: TTNormsPro-Medium;
    font-size: 22px;
    line-height: 22px;
    margin: 0px 0px 10px;
}
.mr-5 {
    margin-right: 30px;
}
.ml-0 {
    margin-left: 0px !important;
}
.pl-5 {
    padding-left: 35px !important;
}
</style>