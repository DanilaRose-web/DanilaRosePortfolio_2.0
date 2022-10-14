<template>
   <p class="i-text" :style="setStyle()" @click="$emit('click')"><slot /></p>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"

@Component
export default class ITextComponent extends Vue {

   @Prop({ type: String, default: '' }) marginTop: string
   @Prop({ type: String, default: '' }) marginBottom: string
   // @Prop({ type: String, default: 'left' }) center: string

   created() { }

   setStyle(): Object {
      return {
         marginTop: this.marginTop,
         marginBottom: this.marginBottom,
         // textAlign: this.center
      }
   }

}
</script>

<style>

.i-text {
   font-family: 'Proxima Nova', sans-serif;
   font-size: 19px;
   font-weight: 400;
   line-height: 130%;
   color: #fdfdfd;
   transition: all 0.2s ease-out;
}

.i-text.cursive {
   font-family: 'Devilion', cursive;
}

.i-text.mt {
   margin-top: 15px;
}

.i-text strong {
   text-align: center;
   display: block;
   font-weight: 600;
}

.i-text.ta-right {
   text-align: right;
}

.i-text.ta-center {
   text-align: center;
}

.i-text-2 {
   font-size: 17px;
   font-weight: 500;
   line-height: 130%;
   color: #aaaaaa;
   text-transform: uppercase;
}

.i-text-2.selected-work {
   font-size: 25px;
   text-transform: none;
   color: #fdfdfd;
}

.i-text-2.red {
   color: #e5383e;
}

.i-text-2.cursive {

}

.i-text-2.mb5 {
   margin-bottom: 5px;
}

.i-text-3 {
   font-size: 17px;
   font-weight: 500;
   line-height: 140%;
   color: #aaaaaa;
}

.i-text-3.home.mt {
   margin-top: 30px;
}

.i-text-3.mb5 {
   margin-bottom: 5px;
}

.i-text-3.white {
   color: #fdfdfd;
}

.i-text-3.team-info { 
   text-align: right;
}




/* i-text-4 */
.i-text-4 {
   font-size: 16px;
   font-weight: 500;
   line-height: 110%;
   color: #aaaaaa;
}

.i-text-4.mb5 {
   margin-bottom: 5px;
}
.i-text-4.white {
   color: #fdfdfd;
}
.i-text-4.member-info {
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
}

@media all and (max-width: 1000px) {
   .i-text-3.team-info { text-align: center; }
}

@media all and (max-width: 500px) {
   .i-text-4.member-info { text-align: center; }
}
</style>