<template>
   <div id="layout">
      <section class="section-one section-vh100">
         <slot name="header"><layout-header/></slot>  
         <slot name="one-content" />
      </section>  

      <section class="section-two section-vh100"></section>
      
      <div id="content">
         <slot/>
      </div>

      <section class="section-three section-vh100">
         <slot name="three-content" />
      </section>

      <slot name="footer"><layout-footer /></slot>    
   </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class LayoutHomeComponent extends Vue {
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

#content {
   position: absolute;
   top: 280px;
   left: 50%;
   transform: translateX(-50%);
   width: 100%;
   z-index: 1;
}

.section-vh100 {
   height: 116vh;
}

.section-one {
   height: 116vh;
   position: relative;
   background: url('/assets/img/bg/bg32.webp') no-repeat top;
   background-size: cover;
}

.section-two {
   position: relative;
   background: url('/assets/img/bg/bg33.webp') repeat center;
}

.section-two::after {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(80, 80, 80, 0.5);
}

.section-three {
   position: relative;
   background: url('/assets/img/bg/bg34.webp') repeat center;
}

</style>
