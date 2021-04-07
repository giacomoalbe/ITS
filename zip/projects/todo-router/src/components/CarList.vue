<template>
  <div>
    <h1>Lista Macchine da Sogno</h1>
    <h4>Che sono chiaramente una fregatura</h4>
    <h5>Ho {{ macchine.length }} macchine!</h5>
    <div>
      <div :pavan="index" :key="index" v-for="(macchina, index) in macchine">
        {{ index }} {{ macchina.modello }}
        <img :src="macchina.img" alt="" width="100" height="100" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CarList",
  components: {},
  props: {},
  data() {
    return {
      macchine: [
        {
          img:
            "https://storage.edidomus.it/ListinoAuto/FOTO_A_16_9_640/00050124.JPG",
          modello: "Corsa",
          trazione: "anteriore",
          cilindrata: 1400,
          capienzaSerbatoio: 40,
          potenza: {
            cv: 74,
            kw: 55
          },
          neoPatentato: true,
          peso: 1400,
          stelleNCAP: 4,
          consumi: {
            urbano: 14,
            extraUrbano: 17,
            misto: 15
          },
          alzacristalliElettici: 4,
          optionals: [
            "Cerchi in lega",
            "Frenata assistita",
            "Apple Car Play",
            "Hill Climb Assist",
            "3 EBD",
            "Pacchetto Racing",
            "Kit Fumatori",
            "Sedili Riscaldabili",
            "Clima automatico",
            "Impianto Bose 150W",
            "Retrocamera",
            "Fari Xeno",
            "Sensori di Parcheggio",
            "ABS",
            "Start & Stop Bosch",
            "Cancello FAAC",
            "Doppia Chiave",
            "Bagagliaio Intelligente"
          ],
          prezzo: 6990,
          prezzoIvato: 27500
        }
      ]
    };
  },
  mounted() {
    console.log("Montato il componente CarList");
  },
  methods: {}
};
</script>
<style></style>
