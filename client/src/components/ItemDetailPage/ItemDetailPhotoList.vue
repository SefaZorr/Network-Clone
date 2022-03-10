<template>
    <div class="row">
        <div class="col-6 mt-3" v-for="(item, index) in photoList" :key="index">
           <img class="img-fluid" :src="item" alt="">
        </div>
        
    </div>
</template>

<script>
export default {
    props:['photoList']
}
</script>

<style>
</style>