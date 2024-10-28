<template>
  <v-app theme="light">
    <v-container class="my-5">
      <v-btn color="light-blue-lighten-1" @click="irParaCalc">Ir para Calculo</v-btn>
      <v-card elevation="5" class="px-5 py-3" color="grey-lighten-3">
        <v-card-title>
          <h1>Fatores que Afetam o Cálculo de Consumo de Água</h1>
        </v-card-title>

          <v-expansion-panels class="mt-1">
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-row no-gutters>
                  <v-col class="d-flex justify-start" cols="4">
                   1. Peso Corporal
                  </v-col>
                  <v-col
                    class="text--secondary"
                    cols="8"
                  >
                  </v-col>
                </v-row>
              </v-expansion-panel-title>
              <v-expansion-panel-text>

                <v-card>
                  <v-card-text>
                    <p>O peso corporal é um dos principais fatores que determina a quantidade de água que uma pessoa deve consumir diariamente. A regra geral é consumir 35 ml de água por kg de peso.</p>
                    <p><strong>Cálculo:</strong> Água recomendada (ml) = Peso (kg) × 35</p>

                    <v-img
                      src="https://img.freepik.com/free-photo/healthy-lifestyle-sustained-home_23-2149362428.jpg?t=st=1728484259~exp=1728487859~hmac=17141e135266747bfb1a8d1abc34eaa6e7483d0f6074fb225bbb232c3f47b884&w=400"
                      alt="Peso Corporal"
                      aspect-ratio="16/9"
                      max-width="100%"
                      height="200">
                    </v-img>

                    <p>A hidratação adequada é crucial para o funcionamento do corpo. A água ajuda na regulação da temperatura, transporte de nutrientes e na eliminação de toxinas. Além disso, a desidratação pode levar a problemas como fadiga, dor de cabeça e redução da performance física.</p>
                    <p>O ideal é distribuir a ingestão de água ao longo do dia, e não apenas beber grandes quantidades de uma só vez. É importante lembrar que a ingestão de alimentos ricos em água, como frutas e vegetais, também conta para a hidratação total.</p>
                    <p>Se você está tentando perder peso, mantenha-se atento à sua hidratação. A desidratação pode afetar seu metabolismo e a eficiência dos exercícios, fazendo com que você sinta mais fome e reduza a intensidade dos treinos.</p>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

        <v-expansion-panels class="mt-2">
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row no-gutters>
                <v-col class="d-flex justify-start" cols="4">
                  2. Atividade Física
                </v-col>
                <v-col
                  class="text--secondary"
                  cols="8"
                >
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>

              <v-card>
                <v-card-text>
                  <p>A prática de atividades físicas aumenta a perda de líquidos pelo suor, o que requer uma maior ingestão de água. A quantidade de água necessária pode variar conforme a intensidade e duração da atividade.</p>
                  <p><strong>Cálculo:</strong> Adicione 500 ml para musculação ou 1 litro para exercícios aeróbicos por sessão de atividade.</p>

                  <v-img
                    src="https://img.freepik.com/free-photo/young-man-sportswear-exercise-class-gym_1150-12372.jpg?t=st=1728484435~exp=1728488035~hmac=1264614b9f34cfeb857ebb4f62df6c1ce2f30b605915fa4f484249788901c0bd&w=400"
                    alt="Atividade Física"
                    aspect-ratio="16/9"
                    max-width="100%"
                    height="200">
                  </v-img>

                  <p>Durante o exercício, é fundamental reabastecer os líquidos perdidos. A água não só ajuda a manter a temperatura corporal, mas também melhora o desempenho durante a atividade física. A falta de hidratação pode resultar em cãibras, fadiga precoce e diminuição do foco.</p>
                  <p>A recomendação é começar a beber água antes de sentir sede, pois a sede é um sinal de que o corpo já pode estar desidratado. Considere a possibilidade de usar bebidas isotônicas durante atividades mais longas para repor eletrólitos.</p>
                  <p>Lembre-se de que cada pessoa é única e as necessidades de hidratação podem variar. Monitore a cor da urina como um indicador de hidratação: urina clara geralmente indica boa hidratação, enquanto urina escura pode sinalizar desidratação.</p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels class="mt-2">
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row no-gutters>
                <v-col class="d-flex justify-start" cols="4">
                  3. Clima
                </v-col>
                <v-col
                  class="text--secondary"
                  cols="8"
                >
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>

              <v-card>
                <v-card-text>
                  <p>Ambientes quentes e úmidos podem aumentar a necessidade de água devido à transpiração. A umidade do ar também pode impactar a forma como o corpo se resfria.</p>
                  <p><strong>Cálculo:</strong> Se você estiver em clima quente, adicione 500 ml à sua ingestão diária para compensar a perda de líquidos.</p>

                  <v-img
                    src="https://img.freepik.com/free-photo/closeup-shot-thermometer-beach-sand_181624-12367.jpg?t=st=1728485149~exp=1728488749~hmac=3005cb697371e735cf3ed5d64b6399f5452892a6a1349b93f20e6ee015dd9c13&w=400"
                    alt="Clima Quente"
                    aspect-ratio="16/9"
                    max-width="100%"
                    height="200"
                  ></v-img>

                  <p>
                    Nos dias quentes, o corpo precisa de mais água para manter a temperatura adequada, especialmente se você estiver ativo. O suor é uma das maneiras que o corpo utiliza para resfriar-se, mas isso pode levar à desidratação se não for compensado com a ingestão de água.
                  </p>
                  <p>
                    Além do calor, o vento também pode aumentar a evaporação do suor, levando a uma maior perda de líquidos sem que você perceba. Portanto, é essencial aumentar a ingestão de água em dias ensolarados e quentes.
                  </p>
                  <p>
                    Não se esqueça de se hidratar mesmo em climas frios. Embora a necessidade de água possa ser menor, o ar frio e seco pode desidratar o corpo sem que você perceba. Fique atento à sua ingestão de líquidos durante todo o ano.
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels class="mt-2">
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-row no-gutters>
                <v-col class="d-flex justify-start" cols="4">
                  4. Consumo de Cafeína e Álcool
                </v-col>
                <v-col
                  class="text--secondary"
                  cols="8"
                >
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>

              <v-card>
                <v-card-text>
                  <p>A cafeína e o álcool são diuréticos, ou seja, aumentam a produção de urina, levando à desidratação. O consumo excessivo dessas substâncias pode reduzir sua hidratação total.</p>
                  <p><strong>Cálculo:</strong> Para cada bebida alcoólica ou cafeinada, adicione 500 ml à ingestão recomendada.</p>

                  <div class="d-flex mt-2 mb-2">
                    <v-img
                      src="https://img.freepik.com/free-photo/close-up-hands-barista-make-latte-coffee-art-paint_1150-12161.jpg?t=st=1728484921~exp=1728488521~hmac=ffd26ec28c5fb9dc03bb2d394b224ad3b9bd6dd3f5db393105ae6a078dee4180&w=400"
                      alt="Cafeína"
                      aspect-ratio="16/9"
                      max-width="100%"
                      height="200"
                    ></v-img>
                    <v-img
                      src="https://img.freepik.com/free-photo/crop-man-with-beer-leaning-table_23-2147897180.jpg?t=st=1728484970~exp=1728488570~hmac=82cb03d96c397045559869f07f35a30099ebc6d6ec5c81666a3787c23bda77a0&w=400"
                      alt="Álcool"
                      aspect-ratio="16/9"
                      max-width="100%"
                      height="200"
                    ></v-img>
                  </div>

                  <p>
                    A moderação é a chave. Enquanto uma xícara de café pode não causar desidratação significativa, o excesso de cafeína ou álcool pode levar a efeitos colaterais indesejados. Alternar bebidas diuréticas com água é uma boa prática para evitar problemas de hidratação.
                  </p>
                  <p>
                    Além disso, o consumo de álcool deve ser feito com cuidado, pois a desidratação pode agravar os efeitos de uma ressaca. Para cada bebida, é aconselhável beber um copo de água entre as bebidas alcoólicas.
                  </p>
                  <p>
                    Em resumo, a conscientização sobre o que você consome e como isso afeta seu corpo pode ajudar a manter uma boa hidratação e saúde geral. Sempre que possível, escolha água como sua principal fonte de hidratação.
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Explicacao',
  data () {
    return {}
  },
  methods: {
    irParaCalc() {
      this.$router.push({name: 'Calc'});
    }
  }

}
</script>

<style scoped>

</style>
