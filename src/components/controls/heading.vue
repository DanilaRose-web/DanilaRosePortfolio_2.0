<template>
   <div class="heading-wrap">
      <slot />
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"

@Component
export default class IHeadingComponent extends Vue {

   
 

}
</script>

<style>

.heading-wrap.heading-1 > * {
   font-size: 40px;
   font-weight: 600;
   line-height: 60%;
   color: #000;
}

.heading-wrap.heading-1.home-title h1 {
   max-width: 450px;
   font-family: 'Futura New', sans-serif;
   /* font-family: 'Proxima Nova', sans-serif; */
   font-size: 80px;
   font-weight: 600;
   line-height: 78%;
   color: #fdfdfd;
   text-transform: uppercase;
   text-align: center;
}

.heading-wrap.heading-1.home-title h1 strong {
   padding-top: 20px;
   font-family: 'Devilion', cursive;
   font-size: 100px;
   font-weight: 500;
   color: #fdfdfd;
   text-transform: none;
}

.heading-wrap.heading-1.cursive > * {
   margin: 40px auto;
   font-family: 'Devilion', cursive;
   font-size: 120px;
   font-weight: 500;
   color: #fdfdfd;
   text-align: center;
}

.heading-wrap.ta-right > * {
   text-align: right;
}

.heading-wrap.ta-center > * {
   text-align: center;
}


/* Section heading */
.heading-wrap.headline > * {
   margin-bottom: 30px;
   font-family: 'Proxima Nova', sans-serif;
   font-family: 'Futura New', sans-serif;
   font-family: 'Pieta', sans-serif;
   font-size: 30px;
   font-weight: 400;
   line-height: 90%;
   color: #7a787b;
   text-transform: uppercase;
   letter-spacing: 1px;
}

.heading-wrap.headline-1 > * {
   margin-bottom: 40px;
   font-family: 'Pieta', sans-serif;
   font-size: 25px;
   font-weight: 400;
   line-height: 90%;
   color: #2b2a30;
   text-transform: uppercase;
}







/* Subheading */
.subheading.cursive > * {
   font-family: 'Devilion', cursive;
   font-size: 40px;
   font-weight: 500;
   line-height: 60%;
   color: #fdfdfd;
   text-align: center;
}

.subheading.cursive.home-subheading > * {
  margin-top: 10px;
}




.heading-wrap.white > * {
   color: #fdfdfd;
}

@media all and (max-width: 1000px) {
   .heading-wrap.ta-right > * { text-align: center; }
}

@media all and (max-width: 635px) {
   .heading-wrap.heading-1.home-title h1 { font-size: calc((100vw - 400px)/(635 - 400) * (80 - 50) + 50px); max-width: 100%; }
}

@media all and (max-width: 400px) {
   .heading-wrap.heading-1.home-title h1 { font-size: calc((100vw - 320px)/(400 - 320) * (50 - 40) + 40px); max-width: 100%; }
   .heading-wrap.headline > * { font-size: calc((100vw - 280px)/(400 - 280) * (30 - 20) + 20px); }
}

@media all and (max-width: 320px) {
   .heading-wrap.heading-1.home-title h1 { font-size: calc((100vw - 280px)/(320 - 280) * (40 - 32) + 32px); max-width: 100%; }
}
</style>