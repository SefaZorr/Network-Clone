<template>
  <section id="login">
      <form action="">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div id="mailArea" class="text-start m-auto mt-5 w-75">
            <label class="d-block w-100 my-2 font-small custom-tlabel fw-bold" for="mail">E-POSTA*</label>
            <input v-model="userData.email" class="w-100 py-2 custom-tinput" type="text" name="mail" id="mail">
          </div>
           <div id="passwordArea" class="m-auto text-start my-4 w-75">
            <label class="d-block w-100 font-small my-2 custom-tlabel fw-bold" for="password">ŞİFRE*</label>
            <input v-model="userData.password" class="w-100 py-2 custom-tinput" type="text" name="password" id="password">
          </div>
         
          <div id="InfoArea" class="d-flex justify-content-between mx-0 mt-3 w-75">
            <div id="rememberMeArea" class="d-flex align-items-center">
               <input type="checkbox"  id="check"/>
                <label for="check" class="mx-2 align-self-start remember-pass-label  font-small fw-bold" >Beni Hatırla</label>
            </div>
            <div id="forgetPassword">
              <a href="#" class="custom-orange-link fw-bold font-small">Şifremi Unuttum</a>
            </div>
          </div>
          <div class="w-75 my-5">
            <button @click.prevent="login(userData)" class="custom-button w-100 p-3">GİRİŞ YAP</button>
          </div>
        </div>
      </form>
  </section>
</template>

<script>
export default {
  name:"login",
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    }
  },
  methods: {
    login(userData) {
      if (userData.email != "" && userData.password != "") {
        this.$store.dispatch('loginUser',{user:userData,items:this.$store.state.cart.items});
        this.$router.push('/');
      }
    },
  },
}
</script>

<style>


.remember-pass-label{
  color: #5f545f ;
}







</style>