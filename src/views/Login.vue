<template>
  <v-container>
    <v-row>
      <v-img max-width="auto"
             src="../../public/Imagen05.jpg">
        <v-row>
          <v-card class="mx-auto" width="1100px">
            <v-card-text>
              <p class="text-h4 text--primary" align="center">Log In</p>
            </v-card-text>
          </v-card>
        </v-row>

        <v-row>
          <v-card class="mx-auto" height="500px" width="700px">
            <v-card-text>
              <img alt="Vue logo" src="../../public/Logo_UTaxi.png" height="100px" align="center">
              <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
              >
                <v-checkbox
                    v-model="checkbox1"
                    :label="`Driver`"
                ></v-checkbox>

                <v-checkbox
                    v-model="checkbox2"
                    :label="`Student`"
                ></v-checkbox>

                <v-text-field
                    v-model="user"
                    :counter="25"
                    :rules="userRules"
                    label="User"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    required
                ></v-text-field>

                <v-btn depressed color="primary" href='/toolbarhome'>Log In</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-row>
      </v-img>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    valid: true,
    user: '',
    userRules: [
      v => !!v || 'User is required',
      v => (v && v.length <= 25) || 'User must be less than 25 characters',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    select: null,
    checkbox: false,
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style scoped>

</style>