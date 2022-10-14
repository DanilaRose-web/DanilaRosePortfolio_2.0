<template>
   <button class="i-button-wrap">
      <slot />
   </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator"

@Component
export default class IButtonWrapComponent extends Vue {


}
</script>

<style>

.i-button-wrap {
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: auto;
   align-items: center;
   grid-gap: 20px;
   width: 100%;
   background: transparent;
   position: relative;
   z-index: 1;
}

.i-button-wrap.mt {
   margin-top: 30px;
}


.i-button-wrap.selected-works-btn-group {
   grid-template-columns: repeat(4, 140px);
   justify-items: center;
   justify-content: center;
}

@media all and (max-width: 790px) {
   .i-button-wrap.selected-works-btn-group { grid-template-columns: 1fr 1fr; }
}

@media all and (max-width: 460px) {
   .i-button-wrap.selected-works-btn-group { grid-template-columns: 1fr; }
}
</style>