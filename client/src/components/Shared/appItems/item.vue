<template>
 <div>
  <img :src="item.topPhoto" class="card-img-top custom-card-img my-2 pointer" :class="{'custom-card-hover':itemSettings.isHover}" alt="...">
  <div class="text-start row mb-5 pointer" >
    <h5 :style="{color:itemSettings.color , fontSize:itemSettings.fontSize}" :class="itemSettings.col +' '+itemSettings.color" class="card-title">{{item.name}}</h5>
    <p :class="itemSettings.col +' '+ itemSettings.textLocation" class="card-text">{{item.price}} ₺</p>
  </div>
</div>
</template>

<script>
export default {
    props:{
      item:{
        type:Object,
        default:() =>({
          id:0,
          url:"",
          title:"",
          price:""
        })
      },
      itemSettings:{
        type:Object,
        default:()=>({
          col:"col-12",
          textLocation:"",
          color:"#a7a7a7",
          isHover:false,
          fontSize:"14px"
        })
      }
    },
    data(){

    }
}
</script>

<style>
.custom-card-img{
    border: 1px solid rgba(167, 167, 167, 0.4);
}
.card-title{
    margin-top: 12px;
    font-weight: bold;
    color: rgba(167, 167, 167, 1);
}
.card-text{
    font-weight: bold;
}

.custom-card-hover:hover{
  border: 1px solid black;
  transition: 0.9s all ease;
}
</style>