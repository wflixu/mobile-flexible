<template>
  <div class="home">
    <banner />
    <grid />
    <block />
    <list />
  </div>
</template>

<script>
import Banner from '@/components/Banner';
import Grid from '@/components/Grid';
import Block from '@/components/Block';
import List from '@/components/List';

export default {
  name: 'Home',
  components: {
    Banner,
    Grid,
    Block,
    List
  }
};
</script>

<style>

</style>
