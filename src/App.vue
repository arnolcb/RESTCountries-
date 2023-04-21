<script setup>
import { RouterLink, RouterView } from 'vue-router'
//importamos los componentes
import HeaderComponent from "@/components/header.vue";
import FooterComponent from "@/components/footer.vue";
</script>

<template>
    <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>