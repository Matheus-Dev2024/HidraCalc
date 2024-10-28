<template>
  <v-app id="body">
    <div>
      <v-card
        class="mx-auto pa-12 pb-8 mt-16"
        elevation="11"
        max-width="448"
        rounded="lg"
      >
        <!-- Logo -->
<!--        <v-img-->
<!--          :src="imagem"-->
<!--          max-width="150"-->
<!--          class="mx-auto mb-6"-->
<!--        ></v-img>-->

        <div id="email" class="text-subtitle-1 text-medium-emphasis d-flex">Email</div>

        <v-text-field
          v-model="email"
          color="white"
          density="compact"
          placeholder="E-mail"
          prepend-inner-icon="mdi-email-outline"
          variant="underlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Senha
        </div>

        <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Digite sua senha"
          prepend-inner-icon="mdi-lock-outline"
          variant="underlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <div class="d-flex flex-sm-row-reverse mr-n4 mb-3 mt-n5">
          <v-btn
            variant="plain"
            class="text-caption text-decoration-none text-blue hover:text-blue-dark"
          >
            Esqueceu a senha de login?
          </v-btn>
        </div>

        <v-card class="mb-12" color="surface-variant" variant="tonal">
          <v-card-text class="text-medium-emphasis text-caption">
            Aviso: Após 3 tentativas de login consecutivas sem sucesso, sua conta será temporariamente bloqueada por três horas. Se você precisar fazer login agora, também pode clicar em 'Esqueceu a senha de login?' abaixo para redefinir a senha de login.
          </v-card-text>
        </v-card>

        <v-btn @click="login" color="#2962FF" class=" mb-8" size="large" variant="tonal" block>
          Log In
        </v-btn>

        <v-card-text class="text-center">
          <div class=" rounded shadow ">
            <v-btn
              @click="irParaRegister"
              class="shadow-lg mt-1 mb-1"
              color="#00B0FF"
              variant="tonal"
              density="compact"
            >
              Inscreva-se agora <v-icon icon="mdi-chevron-right"></v-icon>
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import imagem from '@/assets/LogoHidraCalc.jpg'; // Certifique-se de que o caminho está correto
import axios from 'axios';
import Cookie from 'js-cookie'

export default {
  name: 'LoginForm',
  data() {
    return {
      visible: true,
      imagem: imagem,
      email: '',
      password: '',
    };
  },
  methods: {
    irParaRegister() {
      this.$router.push({name: 'RegisterForm'});
    },

    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      axios.post('http://localhost:8003/api/login', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
        .then(response => {
          Cookie.set('token', response.data.token);
          console.log(response.data);  // A resposta já vem no formato JSON
        })
        .catch(error => {
          console.error('Erro ao fazer login:', error);
        });
    }
  }
};
</script>

<style scoped>
#body {
  background-color: #76d1fc;
}
</style>
