<template>
   <div class="heading-wrap" v-html="titleHTML">{{ title }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"

@Component
export default class HeadingComponent extends Vue {

   @Prop({ type: Boolean, default: false }) h1: boolean;
   @Prop({ type: Boolean, default: false }) h2: boolean;
   @Prop({ type: Boolean, default: false }) h3: boolean;
   @Prop({ type: Boolean, default: false }) h4: boolean;
   @Prop({ type: Boolean, default: false }) h5: boolean;
   @Prop({ type: Boolean, default: false }) h6: boolean;
   @Prop({ type: String, default: '' }) title: string;

   titleHTML: string = ''

   created() {
      this.generateHTML()
   }

   
   /**
    * Изменение HTML-тега заголовка
    */
   generateHTML() {
      if (this.h1) 
         this.titleHTML =  `<h1>${this.title}</h1>`
      else if (this.h2) 
         this.titleHTML =  `<h2>${this.title}</h2>`
      else if (this.h3) 
         this.titleHTML =  `<h3>${this.title}</h3>`
      else if (this.h4) 
         this.titleHTML =  `<h4>${this.title}</h4>`
      else if (this.h5) 
         this.titleHTML =  `<h5>${this.title}</h5>`
      else if (this.h6) 
         this.titleHTML =  `<h6>${this.title}</h6>`
   }

}
</script>

<style>

.heading-wrap.heading-1 > * {
   font-size: 40px;
   font-weight: 600;
   line-height: 60%;
   color: #000;
}
</style>