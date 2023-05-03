<script setup>
import BannerComponent from '../components/global/BannerComponent.vue'
import InformationComponent from '../components/about/InformationComponent.vue';
import MapsComponent from '../components/about/MapsComponent.vue';
</script>
<template>
  <div>
    <BannerComponent alt="Banner About"
      image="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    <InformationComponent />
    <MapsComponent />
  </div>
</template>
