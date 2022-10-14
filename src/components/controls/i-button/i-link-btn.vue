<template>
   <router-link :to="to" class="i-button" :style="setStyle()" @click="$emit('click')">
      <span><slot /></span>
   </router-link>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

@Component
export default class ILinkBtnComponent extends Vue {

   @Prop({ type: String, default: '100%' }) width: string;
   @Prop({ type: String, default: '140px' }) maxWidth: string;
   @Prop({ type: String, default: '' }) minWidth: string;
   @Prop({ type: String, default: '40px' }) minHeight: string;
   @Prop({ type: String, default: '' }) borderRadius: string;
   @Prop({ type: String, default: '' }) to: string

   setStyle(): Object {
      return {
         width: this.width,
         maxWidth: this.maxWidth,
         minWidth: this.minWidth,
         minHeight: this.minHeight,
         borderRadius: this.borderRadius
      }
   }

}
</script>

<style>

.i-button {
   padding: 7px 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid #e5383e;
   font-size: 14px;
   font-weight: 500;
   color: #fdfdfd;
   background: transparent;
   text-transform: uppercase;
   text-align: center;
   position: relative;
   overflow: hidden;
   z-index: 1;
   transition: all 0.2s ease-out;
}

.i-button span {
   position: relative;
   z-index: 1;
}

.i-button::after {
   content: '';
   position: absolute;
   top: 0;
   width: 100%;
   height: 100%;
   background: #e5383e;
   animation: moveAfterRev 0.2s ease-out forwards;
   z-index: 0;
}

.i-button:hover {
   border: 1px solid #e5383e;
}

.i-button:hover::after {
   animation: moveAfter 0.2s ease-out forwards;
}



/* center */
.i-button.center {
   margin: 30px auto 0 auto;
}

.i-button.portfolio {
   margin-top: 0;
   border: 1px solid #2b2a30;
   /* font-weight: 600; */
   border-radius: 5px;
   color: #2b2a30;
}

.i-button.portfolio:hover {
   color: #fdfdfd;
}

.i-button.portfolio::after {
   background: #2b2a30;
   animation: moveAfter 0.2s ease-out forwards;
}

.i-button.portfolio:hover::after {
   animation: moveAfterRev 0.2s ease-out forwards;
}









@keyframes moveAfter {
   0% { left: 0; }
   100% { left: 100%; }
}

@keyframes moveAfterRev {
   0% { left: -100%; }
   100% { left: 0; }
}

</style>