<template>
   <div class="i-close menu-close" ref="closeIcon" @click="$emit('close')">
      <svg><use xlink:href="/assets/img/svg-sprite.svg#icon-close"></use></svg>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator"

@Component
export default class IClose extends Vue {

}
</script>

<style scoped>

/* close */
.i-close {
   display: flex;
   align-items: center;
   justify-content: center;
   width: 22px;
   height: 22px;
   position: absolute;
   z-index: 2;
   top: 25px;
   left: 25px;
   cursor: pointer;
}

.i-close svg {
   width: 22px;
   height: 22px;
   fill: #e5383e;
   transition: all 0.1s ease-out;
}

.i-close:hover svg {
   fill: #fdfdfd;
}

.i-close:active svg {
   transform: scale(0.8);
}
</style>