<template>
   <div class="social-widget">
      <a href=""><svg><use xlink:href="/assets/img/svg-sprite.svg#icon-instagram"></use></svg></a>
      <a href=""><svg><use xlink:href="/assets/img/svg-sprite.svg#icon-behance"></use></svg></a>
      <a href=""><svg><use xlink:href="/assets/img/svg-sprite.svg#icon-vk"></use></svg></a>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator"

@Component
export default class ISocialWidgetComponent extends Vue {

}
</script>

<style scoped>

.social-widget {
   display: flex;
   align-items: center;
}

.social-widget a {
   margin: 0 -3px;
   display: flex;
   width: 37px;
   height: 37px;
}

.social-widget svg {
   fill: #fdfdfd;
   width: 37px;
   height: 37px;
   transition: all 0.2s ease-out;
}

.social-widget a:hover svg {
   fill: #e5383e;
}
</style>