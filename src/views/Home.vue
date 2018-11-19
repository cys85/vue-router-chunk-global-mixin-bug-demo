<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator';
import myMixin from './myMixin';
@Component
export default class Home extends Mixins(myMixin) {}
</script>
