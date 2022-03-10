<template>
  <section id="register">
    <form>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="text-start m-auto mt-5 w-75" id="nameArea">
          <label  class="d-block w-100 my-2 font-small custom-tlabel" for="name">AD*</label>
          <input v-model="userData.name" class="w-100 py-2 custom-tinput" type="text" name="name" id="name" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="surnameArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="surname">SOYAD*</label>
          <input v-model="userData.surname" class="w-100 py-2 custom-tinput" type="text" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="genderArea">
          <div class role="group" aria-label="Basic radio toggle button group">
            <label class="d-block w-100 my-2 font-small custom-tlabel" for="gender">CİNSİYET*</label>

            <input  v-model="userData.gender" type="radio" value="0" name="btnradio" id="btnradio1" autocomplete="off" />
            <span class="m-2 font-small">Erkek</span>
            <input v-model="userData.gender" type="radio" name="btnradio" value="1" id="btnradio2" autocomplete="off" />
            <span class="m-2 font-small">Kadın</span>
          </div>
        </div>
        <div class="d-flex flex-column align-items-start mt-4 w-75">
          <span class="font-small custom-tlabel text-uppercase">DOĞUM TARİHİ</span>
          <div class="w-100 d-flex justify-content-start" id="dateArea">
            <select v-model="birthDate.day" class="custom-sinput">
              <option disabled selected>GÜN</option>
              <option v-for="(item, index) in 30" :key="index" :value="index +1">{{index+1}}</option>
            </select>
            <select v-model="birthDate.month" class="custom-sinput mx-2">
              <option disabled selected>AY</option>
              <option v-for="(item, index) in 12" :key="index" :value="index +1">{{index+1}}</option>
              
            </select>
            <select v-model="birthDate.year" class="custom-sinput">
              <option selected>YIL</option>
              <option v-for="(item, index) in 60" :key="index" :value="index+1950">{{index+1950}}</option>
               
            </select>
          </div>
        </div>
        <div class="text-start m-auto mt-4 w-75" id="phoneNumberArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="surname">CEP TELEFONU*</label>
          <input v-model="userData.phoneNumber" class="w-100 py-2 custom-tinput" type="text" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="mailArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="surname">E-POSTA*</label>
          <input v-model="userData.email" class="w-100 py-2 custom-tinput" type="text" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="passwordArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="surname">ŞİFRE*</label>
          <input v-model="userData.password" class="w-100 py-2 custom-tinput" type="text" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="passwordRepeatArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="surname">ŞİFRE TEKRAR*</label>
          <input v-model="userData.passwordRepeat" class="w-100 py-2 custom-tinput" type="text" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="passwordRepeatArea">
          <span class="font-small custom-tlabel">
            Lütfen üye olmadan önce aydınlatma metnini okuyunuz.
            <a
              class="c-link"
              href="#"
            >Aydınlatma metnine</a> her zaman anasayfadaki
            <a
              class="c-link"
              href
            >“Kişisel Verilerinizin Korunmasına İlişkin Aydınlatma Metni”</a>
            ibaresine tıklayarak da ulaşabilirsiniz.
          </span>
        </div>
        <div class="text-start m-auto mt-4 w-75 d-flex align-items-center" id="passwordRepeatArea">
          <input class="align-self-start" type="checkbox" id="check" />
          <label for="check" class="mx-2 align-self-start remember-pass-label font-small">
            <span>
              Ay Marka’nın (Network,Divarese) kampanyalarından haberdar olmak istiyorum. Ay Marka Mağazıcılık A.Ş.’nin tarafıma ticari elektronik ileti göndermesine
              <a
                href="#"
                class="custom-orange-link"
              >burada</a>
              belirtilen izni veriyorum
            </span>
          </label>
        </div>
        <div class="text-start m-auto mt-4 w-75 d-flex align-items-center" id="passwordRepeatArea">
          <input class="align-self-start" type="checkbox" id="check" />
          <label for="check" class="mx-2 align-self-start remember-pass-label font-small">
            <span>
              <a class="custom-orange-link" href="#">Üyelik sözleşmesini</a>,
              <a
                class="custom-orange-link"
                href="#"
              >kişiselleştirilmiş pazarlamaya ilişkin açık rıza metnini</a> ve kişisel verilerimin
              <a
                class="custom-orange-link"
                href="#"
              >yurtdışına aktarılmasına ilişkin açık rıza metnini</a> okudum, onaylıyorum.
            </span>
          </label>
        </div>
        <div class="w-75 my-5">
          <button @click.prevent="register(userData)" class="custom-button w-100 p-3">ÜYE OL</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        password: "",
        passwordRepeat: "",
        gender: "",
        birthDate: "",
      },
      birthDate:{
        day:"",
        month:"",
        year:"",
      }
    }
  },
  methods: {
    register(userData) {
      if (userData.password == userData.passwordRepeat) {
        userData.birthDate = this.birthDate.day + "/" + this.birthDate.month + "/" + this.birthDate.year;
        this.$store.dispatch('registerUser',{user:userData,items:this.$store.state.cart.items});
        this.$router.push('/');
      }
      else {
        alert("Şifreler uyuşmuyor");
      }
    }
  },
}
</script>

<style>
.custom-sinput {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: small;
  letter-spacing: 1px;
  padding: 10px 16px 10px 10px;
  color: #8a8a8a;
  cursor: pointer;
}
.custom-sinput:focus {
  background-color: white;
}
.custom-sinput:hover {
  background-color: white;
}

.c-link {
  color: black;
}
.c-link:hover {
  color: black;
  text-decoration: none;
}
</style>