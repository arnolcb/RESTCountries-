<script setup>
import CardComponent from "@/components/CardComponent.vue";
import axios from "axios";
</script>

<script>
export default {
    components:{CardComponent},
    data(){
        return {
            data:[], // data is an array
        };
    },
    mounted(){
        axios.get('https://restcountries.com/v3.1/name/peru')
        .then(response => {
            this.data = response.data;
        })
        .catch(error => {
            console.log(error);
        })
    }
};
</script>

<template>
  <main>
  <div class="container" v-if="data.length > 0">
      <CardComponent v-for="d in data"
                     :key="d.name"
                     :name="d.name.common"
                     :officialName="d.name.official"
                     :currencies="d.currencies.PEN.name"
                     :capital="d.capital[0]"
                     :region="d.region"
                     :subregion="d.subregion"
                     :languages="d.languages"
                     :area="d.area"
                     :population="d.population"
                     :flag="d.flags.png"
                     :coatOfArms="d.coatOfArms.png"
      />
  </div>
      <div v-else>
          <p>{{$t('loading')}}...</p>
      </div>
  </main>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>