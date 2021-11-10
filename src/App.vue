<template>
   <div class="app-imc" >
      <h1>Cálculo IMC</h1>
      <h2>Digite altura e peso para calcular o IMC</h2>
      <span class="p-float-label">
         <InputText id="input-weight" type="text" v-model="weight" v-bind:disabled="imc"/>
         <label for="input-weight">Peso</label>
      </span>
      <span class="p-float-label">
         <InputText id="input-height" type="text" v-model="height" v-bind:disabled="imc" />
         <label for="input-height">Altura</label>
      </span>
      <Button label="Calcular" @click="calculate" />
       <Button label="Limpar" @click="clear"/>
   </div>

   <div class="container" v-if="imc">
      <h3>Seu IMC: {{imc}}</h3>
      <h4>Classificação {{classification}} </h4>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            // propriedades onde os calculos serão imprimidos na tela 
            weight: null,
            height: null,
            imc: null,
            classification: ''
         }
      },
      methods: {
         calculate() {
            this.imc = (this.weight / (this.height * this.height)).toFixed(2)
            if (this.imc < 18.5) {
               this.classification = 'Magreza'
            }else if (this.imc >= 18.5 && this.imc < 25) {
               this.classification = 'Normal'
            }else if (this.imc >= 25 && this.imc < 30) {
               this.classification = 'Sobrepeso'
            }else if (this.imc >= 30 && this.imc < 40) {
               this.classification = 'Obesidade'
            }else if (this.imc >= 40) {
               this.classification = 'Obesidade Grave'
            }
         },
// função onde as propridades executarão o botão de limpar a tela
         clear() {
            this.weight = null
            this.height = null
            this.imc = null
            this.result = ''
            this.classification = ''
         }
      }
   }
</script>