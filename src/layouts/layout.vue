<script setup>
import Navigation from '@/components/Navigation.vue';
import footer from '@/components/footer.vue';
</script>
<template lang="">
  <div class="quicksand-font"> 

    <Navigation />
    <slot></slot>
    <Footer />
  </div>
  </template>

<style lang="">

</style>