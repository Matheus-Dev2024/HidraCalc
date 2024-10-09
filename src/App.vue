<template>
  <v-app theme="light">
    <v-container class="my-5">
      <v-card elevation="5" class="px-5 py-3">
        <v-card-title>
          <h1>Calculadora de Água Diária</h1>
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

          <v-btn color="primary" type="submit">Calcular</v-btn>
        </v-form>

        <v-card v-if="resultado" class="mt-5">
          <v-card-title>Resultado:</v-card-title>
          <v-card-text>
            <p>Total de água a ser consumida: {{ resultado.totalAgua }} litros</p>
            <p>Número de copos: {{ resultado.numeroCopos }}</p>
            <p>Quantidade de ml por copo: {{ resultado.mlPorCopo }} ml</p>
            <p>Você deve beber 1 copo a cada {{ resultado.intervaloPorCopo }} horas.</p>
            <p>Horários sugeridos para beber água:</p>
            <ul>
              <li v-for="(horario, index) in resultado.horarios" :key="index">{{ horario }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
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
      if (!this.peso || !this.altura) {
        alert('Por favor, preencha o peso e a altura.');
        return;
      }

      let agua = this.peso * 35 / 1000; // Ingestão de água básica (35 ml por kg)

      agua += (this.altura > 150) ? ((this.altura - 150) * 0.02) : 0;

      // Ajustes para tipo de atividade
      agua += (this.tipoAtividade === 'Musculação' ? 0.5 : this.tipoAtividade === 'Aeróbica' ? 1 : 0);
      agua += (this.horasAtividade ? this.horasAtividade * 0.5 : 0);

      // Clima, cafeína e álcool
      if (this.clima === 'Sim') agua += 0.5;
      if (this.cafeina === 'Sim') agua += 0.5;
      if (this.alcool === 'Sim') agua += 0.5;

      // Calcular número de copos (500ml cada)
      const numeroCopos = Math.ceil((agua * 1000) / 500);
      const mlPorCopo = 500; // 500ml por copo

      // Verificar horários de acordar e dormir
      if (!this.horaAcordar || !this.horaDormir) {
        alert('Por favor, preencha as horas de acordar e dormir.');
        return;
      }

      const [horaAcordarHoras, horaAcordarMinutos] = this.horaAcordar.split(':').map(Number);
      const [horaDormirHoras, horaDormirMinutos] = this.horaDormir.split(':').map(Number);
      //
      // // Diferença total de horas
      // // const totalhoras = new Date();
      // // totalhoras.setMinutes(horaAcordarMinutos);
      // // totalhoras.setHours(horaAcordarHoras);
      // //
      // //
      // // totalhoras.setMinutes(totalhoras.getMinutes() + 60);
      //
      //
      // const horaAcorda = new Date();
      // horaAcorda.setHours(horaAcordarHoras);
      // horaAcorda.setMinutes(horaAcordarMinutos);
      //
      // const horaDome = new Date();
      // horaDome.setHours(horaDormirHoras.getHours());
      //




      const totalHoras = (horaDormirHoras + horaDormirMinutos / 60) + (horaAcordarHoras + horaAcordarMinutos / 60);
      const intervaloPorCopo = totalHoras / numeroCopos;

      // Calcular os horários para beber água
      const horarios = [];
      let horaAtual = horaAcordarHoras + horaAcordarMinutos / 60;
      for (let i = 0; i < numeroCopos; i++) {
        let horas = Math.floor(horaAtual);
        let minutos = Math.round((horaAtual % 1) * 60);
        horarios.push(`${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`);
        horaAtual += intervaloPorCopo;
      }

      // Armazenar os resultados
      this.resultado = {
        totalAgua: agua.toFixed(2),
        numeroCopos,
        mlPorCopo,
        intervaloPorCopo: intervaloPorCopo.toFixed(2),
        horarios,
      };
    },
  },
};
</script>

<style>

body {
  background-color: #8c8b8b;
}
</style>
