<template>
  <v-container>
    <v-container>
      <h1>Login</h1>
      <v-img v-bind:src="require(`../../../src/assets/user.png`) " max-width="200px" alt="user image" class="mx-auto mt-10"></v-img>
    </v-container>
    <v-container>
      <h2>Welcome Black</h2>
      <v-form ref="form" v-model="form.isValid">
        <p :class="wrongEmailorPassword ? 'd-block' : 'd-none'">Wrong Email or Password</p>
        <v-text-field v-model="form.email" label="Email" :rules="[rules.required, rules.email]" outlined></v-text-field>
        <v-text-field v-model="form.password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required]" :type="showPassword ? 'text' : 'password'" name="input-password" label="Password" outlined @click:append="showPassword = !showPassword"></v-text-field>
        <div><v-btn color="primary" :disabled="!this.form.isValid" @click="login()">Login</v-btn></div>
      </v-form>
    </v-container>
  </v-container>
</template>

<script>
import ClientsService from '../../core/clients-service';
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      form: {
        email: "",
        password: "",
        isValid: false
      },
      rules: {
        required: v => !!v || 'Required',
        email: v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'Invalid e-mail.'
        }
      },
      wrongEmailorPassword: false,
    }
  },
  methods: {
    submit() {
      this.form = { email: "", password: ""};
    },
    async login() {
      let noLogin = true;

      await ClientsService.getByEmailAndPassword(this.form.email, this.form.password)
          .then(response => {
            if (response.data.length !== 0) {
              localStorage.setItem('userId', response.data[0].id.toString());
              noLogin = false;
              this.$router.push("/Client");
            }
          })
          .catch(e => {
            console.log(e);
          })
      if(noLogin) {
        this.wrongEmailorPassword = true;
      }
      else {
        this.submit();
      }
    }
  }
}
</script>

<style scoped>

</style>