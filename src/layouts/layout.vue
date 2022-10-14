<template>
  <div id="layout">
    <slot name="header"><layout-header/></slot>  
    
    <div id="content">
      <slot/>
    </div>

    <slot name="footer"><layout-footer /></slot>    
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class LayoutComponent extends Vue {
  //name: "layout"
  constructor() {
    super();
    console.log("LayoutComponent created");
  }
}
</script>

<style scoped>

#layout {
  width: 100%;
  height: 100%;
}

</style>
