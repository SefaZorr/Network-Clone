<template>
    <header class="fixed-top bg-white">
        <div class="m-0 p-0">
            <div>
                <header-top id="header-top" />
                <hr class="m-2 my-2 mx-0 custom-hr"/>
                <header-menu/>
                <hr class="m-2 my-0 mx-0 custom-hr"/>
               
            </div>
              
        </div>
    </header>
</template>

<script>
import HeaderMenu from './headerMenu.vue';
import HeaderTop from './headerTop.vue';

export default {
    components:{
    HeaderMenu,
    HeaderTop
},
   
}
</script>

<style>
.black-color {
    color: black;
}
.bg-white{
    background-color:white ;
}

.fs-7 {
    font-size: small;
    letter-spacing: 1px;
}
.menu-link{
    transition: 0.1s all ease-in-out;
    border-bottom: 3px solid white;

}
.menu-link:hover{
    border-bottom: 3px solid black;
    color: black;
}
/* search */
.custom-hr{
    color: #adadad;
}



.form {
    position: relative
}

.form .fa-search {
    position: absolute;
    top: 40%;
    left: 20px;
    color: #9ca3af
}

.form-input {
    height: 125%;
    text-indent: 33px;
    border-radius: 0px !important;
}

.form-input:focus {
    box-shadow: none !important;
    border: black 1px solid !important;
    outline: none !important;
}
</style>