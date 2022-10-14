<template>
   <i-mobile-menu-wrap :show="show" @close="onCloseMenu" @changeOpenMenu="changeOpenMenu">
      <nav class="mobile-nav">
         <ul class="mobile-menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="about-us">About Us</router-link></li>
            <li><router-link to="portfolio">Portfolio</router-link></li>
            <li><router-link to="blog">Blog</router-link></li>
            <li><router-link to="contact-us">Contact Us</router-link></li>
         </ul>
      </nav>
      
   </i-mobile-menu-wrap>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"

@Component
export default class MobileMenuHomeComponent extends Vue {

   @Prop({ type: Boolean, default: false }) show: boolean  // prop - принимает значение флага меню из вне


   created() {}

   /**
    * Открытие формы getInTouch
    */
   onShowGetInTouch() {
      this.onCloseMenu()
   }

   /**
    * Закрытие мобильного меню
    */
   onCloseMenu() {
      this.$emit('close')
   }

   changeOpenMenu(show: boolean) {
      this.$emit('changeOpenMenu', show)
   }
}
</script>

<style scoped>

.mobile-menu {
   position: relative;
   z-index: 1;
}

.mobile-menu > li {
   margin-bottom: 7px;
   position: relative;
   border-radius: 28px;
   display: flex;
   justify-content: center;
}

.mobile-menu > li > a {
   padding: 10px 20px;
   font-family: 'Proxima Nova', sans-serif;
   font-size: 18px;
   font-weight: 600;
   line-height: 100%;
   color: #fdfdfd;
   display: flex;
   justify-content: center;
   width: 200px;
   text-align: center;
   position: relative;
   text-transform: uppercase;
   transition: all 0.2s ease-out;
}

.mobile-menu > li > a::after,
.mobile-menu > li > a::before {
   content: '';
   position: absolute;
   left: 0;
   top: 50%;
   transform: translateY(-50%);
   width: 0;
   height: 2px;
   background: #e5383e;
   transition: width 0.2s ease-out 0.4s, top 0.2s ease-out; 
}

.mobile-menu > li > a:hover::after,
.mobile-menu > li > a:hover::before {
   width: 100%;
   transform: translateY(0);
   transition: width 0.2s ease-out, top 0.2s ease-out 0.4s; 
}

.mobile-menu > li > a:hover::before {
   top: 100%;
}

.mobile-menu > li > a:hover::after {
   top: 0;
}




.mobile-submenu {
   padding: 15px 0 15px 0;
}

.mobile-submenu li:not(:last-child) {
   margin-bottom: 5px;
}



@media all and (max-width: 400px) {
   .mobile-menu > li > a { padding: 7px 10px; font-size: 15px; }
}
</style>