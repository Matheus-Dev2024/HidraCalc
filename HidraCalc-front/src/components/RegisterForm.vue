<template>
  <v-app id="body">
    <div>
      <!--    <v-img-->
      <!--      class="mx-auto my-6"-->
      <!--      max-width="228"-->
      <!--      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"-->
      <!--    ></v-img>-->

      <v-card
        class="mx-auto pa-12 pb-8 mt-16"
        elevation="11"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis d-flex ">Nome</div>

        <v-text-field
          density="compact"
          placeholder="Digite Seu Nome"
          prepend-inner-icon="mdi-email-outline"
          variant="underlined"
        ></v-text-field>


        <div class="text-subtitle-1 text-medium-emphasis d-flex ">Email</div>

        <v-text-field
          density="compact"
          placeholder="Digite Seu E-mail"
          prepend-inner-icon="mdi-email-outline"
          variant="underlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Senha
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Digite Sua Senha"
          prepend-inner-icon="mdi-lock-outline"
          variant="underlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>


        <div class="d-flex flex-row-reverse text-center mr-6 ">
          <v-sheet class="ma-2 pa-2">
            <v-btn
              @click="VoltarParaLogin"
              class="mb-8"
              color="#5C6BC0"
              size="large"
              variant="tonal"
            >
              Voltar
            </v-btn>
          </v-sheet>
          <v-sheet class="ma-2 pa-2 mr-n10">
            <v-btn
              class="mb-8 mr-7"
              color="#0091EA"
              size="large"
              variant="tonal"
            >
              Cadastrar
            </v-btn>
          </v-sheet>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  // eslint-disable-next-line vue/no-reserved-component-names,vue/multi-word-component-names
  name: 'RegisterForm',
  data(){
    return {
      visible: true,
    }
  },
  methods: {
    VoltarParaLogin() {
      this.$router.push({name: 'LoginForm'});
    }
  }
};
</script>


<style scoped>

#body {
  background-color: #76d1fc;
}


</style>
