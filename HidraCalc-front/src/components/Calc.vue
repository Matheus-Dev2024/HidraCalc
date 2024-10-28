<template>
  <v-app theme="light">
    <v-container class="my-5">
      <v-card elevation="5" class="px-5 py-3">
        <v-card-title>
          <div>
            <v-sheet class="d-flex mb-6">
              <v-sheet class="ma-2 pa-2 me-auto">
                <h1>Calculadora de Água Diária</h1>
              </v-sheet>

              <v-sheet class="ma-6 pa-2">
                <v-btn color="light-blue-lighten-1" @click="irParaExplicacao">Ir para Explicação</v-btn>
              </v-sheet>
            </v-sheet>
          </div>
        </v-card-title>

        <v-form v-model="valid" @submit.prevent="calcularAgua">
          <v-text-field
            label="Peso Corporal (kg)"
            v-model="peso"
            :rules="[v => !!v || 'Peso é obrigatório']"
            required
          ></v-text-field>

          <v-text-field
            label="Altura (cm)"
            v-model="altura"
            :rules="[v => !!v || 'Altura é obrigatória']"
            required
          ></v-text-field>

          <v-text-field
            label="Idade (anos)"
            v-model="idade"
            :rules="[v => !!v || 'Idade é obrigatória']"
            required
          ></v-text-field>

          <v-select
            label="Sexo"
            v-model="sexo"
            :items="['Masculino', 'Feminino']"
            :rules="[v => !!v || 'Sexo é obrigatório']"
            required
          ></v-select>

          <v-select
            label="Tipo de Atividade Física"
            v-model="tipoAtividade"
            :items="['Nenhuma', 'Musculação', 'Aeróbica']"
            :rules="[v => !!v || 'Tipo de atividade é obrigatório']"
            required
          ></v-select>

          <v-text-field
            label="Horas de Atividade Física por Dia"
            v-model="horasAtividade"
            type="number"
            required
          ></v-text-field>

          <v-select
            label="Clima Quente ou Úmido?"
            v-model="clima"
            :items="['Sim', 'Não']"
            required
          ></v-select>

          <v-select
            label="Consome Cafeína?"
            v-model="cafeina"
            :items="['Sim', 'Não']"
            required
          ></v-select>

          <v-select
            label="Consome Álcool?"
            v-model="alcool"
            :items="['Sim', 'Não']"
            required
          ></v-select>

          <v-text-field
            label="Hora que Acordou"
            v-model="horaAcordar"
            type="time"
            required
          ></v-text-field>

          <v-text-field
            label="Hora que Vai Dormir"
            v-model="horaDormir"
            type="time"
            required
          ></v-text-field>

          <v-btn color="primary" @click="calcularAgua">Calcular</v-btn>
        </v-form>

        <v-card v-if="resultado" class="container mt-5">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                v-bind="props"
                :color="isHovering ? 'primary' : undefined"
                title="Resultado:"
              >
                <p>Total de água a ser consumida: {{ resultado.totalAgua }} litros</p>
                <p>Número de copos: {{ resultado.numeroCopos }}</p>
                <p>Quantidade de ml por copo: {{ resultado.mlPorCopo }} ml</p>
                <p>Você deve beber 1 copo a cada {{ resultado.intervaloPorCopo }} horas.</p>
                <p>Horários sugeridos para beber água:</p>
                <ul>
                  <li v-for="(horario, index) in resultado.horarios" :key="index">{{ horario }}</li>
                </ul>
              </v-card>
            </template>
          </v-hover>
        </v-card>
      </v-card>
    </v-container>
  </v-app>
</template>


<script>
import axios from 'axios';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Calc',
  data() {
    return {
      valid: false,
      peso: null,
      altura: null,
      idade: null,
      sexo: null,
      tipoAtividade: null,
      horasAtividade: 0,
      clima: null,
      cafeina: null,
      alcool: null,
      horaAcordar: null,
      horaDormir: null,
      resultado: null,
    };
  },
  methods: {
    calcularAgua() {
      if (!this.peso || !this.altura || !this.horaAcordar || !this.horaDormir) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      axios.post('http://localhost:8003/api/calcular-agua', {
        peso: this.peso,
        altura: this.altura,
        tipoAtividade: this.tipoAtividade,
        horasAtividade: this.horasAtividade,
        clima: this.clima,
        cafeina: this.cafeina,
        alcool: this.alcool,
        horaAcordar: this.horaAcordar,
        horaDormir: this.horaDormir
      }).then(response => {
        this.resultado = response.data;
      }).catch(error => {
        console.error(error);
        alert('Ocorreu um erro ao calcular a ingestão de água.');
      });
    },
    irParaExplicacao() {
      this.$router.push({ name: 'Explicacao' });
    }
  }
};
</script>

<style>
body {
  background-color: #8c8b8b;
}
</style>
