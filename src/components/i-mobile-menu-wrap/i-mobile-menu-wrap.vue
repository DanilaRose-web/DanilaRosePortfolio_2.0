<template>
   <div class="i-mobile-menu-wrap" :class="{'show' : innerShow}">
      <div class="i-mobile-menu" :class="{'show' : innerShow}">
         <div class="content" @click="removeHiddenOnBody">
            
            <slot />
         
            <i-close @close="close" />
         </div>
      </div>
   
      <div class="overlay menu-overlay" ref="menuOverlay" :class="{'show' : innerShow}"></div>
   </div>
</template>

<script lang="ts">

import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"

@Component
export default class IMobileMenuComponent extends Vue {

   @Prop({ type: Boolean, default: false }) show: boolean  // prop - принимает значение флага меню из вне

   innerShow: boolean = false  // флаг отображение меню (местный)

   @Watch('show') change() {
      this.innerShow = this.show
      this.$emit('changeOpenMenu', this.innerShow)

      let bodyOverflowHidden = document.querySelector('body')
      
      if (this.innerShow) 
         bodyOverflowHidden.classList.add('hidden')
         else bodyOverflowHidden.classList.remove('hidden')
   }

   created() {
      this.innerShow = this.show
   }

   mounted() {
      document.addEventListener('click', this.closeMenu)
      document.body.addEventListener('keydown', this.closeMenu)
   }
   
   destroyed() {
      document.removeEventListener('click', this.closeMenu)
      document.body.removeEventListener('keydown', this.closeMenu)
   }

   /**
    * Закрытие мобильного меню
    */
   closeMenu(event: any) {
      if (event.target == this.$refs.menuOverlay || event.keyCode == 27) 
         this.close()
   }

   close() {
      this.innerShow = false
      this.$emit('close', this.innerShow)
   }

   removeHiddenOnBody() {
      let bodyOverflowHidden = document.querySelector('body')
      bodyOverflowHidden.classList.remove('hidden')
   }
 
}
</script>

<style scoped>

.i-mobile-menu-wrap {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   opacity: 0;
   visibility: hidden;
   z-index: 3;
   transition: all 0.2s ease-out 0.3s;
}

.i-mobile-menu-wrap.show {
   opacity: 1;
   visibility: visible;
   transition: all 0.2s ease-out;
}





/* 
 * если нужно отцентровать контент в меню по центру, то flex НЕ ИСИСПОЛЬЗОВАТЬ, только grid у элемента .mobile-menu
*/

.i-mobile-menu {
   padding: 40px 15px;
   position: fixed;
   right: -400px;
   top: 0;
   max-width: 400px;
   width: 100%;
   height: 100%;
   /* background: #2b2a30; */
   background: url('/assets/img/bg/bg24.webp') no-repeat center;
   background-size: cover;
   overflow-y: auto;
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr;
   z-index: 3;
   box-shadow: -5px 0px 40px 20px rgb(0, 0, 0, 0.4);
   transition: all 0.5s cubic-bezier(.16,.68,.18,1);
}

.i-mobile-menu::after {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.4);
}

.i-mobile-menu.show {
   right: 0;
   transition: all 0.5s cubic-bezier(.16,.68,.18,1) 0.2s;
   /* animation: showMenu 0.5s cubic-bezier(.16,.68,.18,1) 0.5s forwards; */
}

@keyframes showMenu {
   0% { right: -400px; }
   100% { right: 0 }
}

.content {
   align-self: center;
}





/* overlay */
.overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(229, 56, 62, 0.2);
   /* background: rgba(0, 0, 0, 0.2); */
   z-index: 2;
   opacity: 0;
   visibility: hidden;
   transition: all 0.3s ease-out;
}

.overlay.show {
   opacity: 1;
   visibility: visible;
}
</style>