<template>
  <section id="orderFollow">
    <form>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="text-start m-auto mt-5 w-75" id="mailArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="mail">E-POSTA*</label>
          <input class="w-100 py-2 custom-tinput" type="text" name="mail" id="mail">
        </div>
        <div class="text-start m-auto mt-4 w-75" id="orderCodeArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="orderCode">SİPARİŞ KODU*</label>
          <input class="w-100 py-2 custom-tinput" type="text" name="orderCode" id="orderCode">
        </div>
        <div class="w-75 my-3">
          <button class="custom-button w-100 p-3">SİPARİSİMİ GETİR</button>
        </div>
        <div class="text-start w-75">
          <hr class="mt-2 mb-4 w-100"/>
         
        </div>
        <div class="text-start w-75">
          <span class="w-100 font-small">Üye girişi yaparak da siparişlerinizi kolaylıkla takip edebilirsiniz.</span>
          </div>
        <div class="w-75 my-3">
          <button class="custom-white-button w-100 p-2">OTURUM AÇ</button>
        </div>
      </div>
    </form>
  </section>
  
</template>

<script>
export default {

}
</script>

<style>
  .custom-white-button {
  color:black;
  background-color:white;
  border: 1px solid black;
  letter-spacing: -1px;
  font-weight: bold;
}
.custom-white-button:hover {
  background-color: #ff5d5d;
  color: white;
  border: 1px solid #ff5d5d;
  transition: 0.15s color ease-in;
}
.lh-1{
  line-height: 0px;
}
</style>