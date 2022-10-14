<template>
   <form class="i-form">
      <slot />
   </form>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"

@Component
export default class IFormComponent extends Vue {

}
</script>

<style scoped>

.i-form {
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: auto;
   grid-gap: 20px;
}

@media all and (max-width: 500px) {
   .i-form { grid-template-columns: 1fr; }
}
</style>