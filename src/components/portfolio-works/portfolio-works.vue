<template>
   <div>
      <i-button-wrap class="selected-works-btn-group">
         <i-button v-for="item in worksButtons" :data-filter="item.Type" :key="item.Id" :data-type="item.Type" @click="selectTypeWork(item.Id)" class="portfolio" :class="{'active' : item.Selected}" :maxWidth="'auto'" :minHeight="'30px'">{{ item.Type }}</i-button>
      </i-button-wrap>
      
      <div class="portfolio-works grid">
         <div class="work" @mouseleave="onHideHover" @mouseenter="onShowHover" v-for="item in filterWorks" :key="item.Id" :class="{'animate' : animated}">
            <div class="hover-content" :class="{'hide' : !animated}">
               <div class="hidden-text">
                  <i-text @click="onHideHover" class="i-text-2 one selected-work ">Click for scrolling watching or...</i-text>
                  <i-link-btn class="fade-btn-link" :to="'/'">Read more</i-link-btn>
               </div>
            </div>
            <div class="work-scroll All grid-item" >
               <img :src="item.Image" alt="">
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"
import EnumTypeWorks from "./EnumTypeWorks";

import WorkButtonModel from "./WorkButtonModel";
import WorkModel from "./WorkModel"
// import $ from "jquery"
// import isotope from "isotope-layout"

@Component
export default class PortfolioWorksComponent extends Vue {

   // @Prop({ type: Array, default: () => [] as WorkModel[] }) works: WorkModel[]

   /**
      * Массив с работами в портфолио
      */
   works: WorkModel[] = []
   filterWorks: WorkModel[] = []

   /**
     * Массив кнопок для фильтра работ портфолио по типам
     */
   worksButtons: WorkButtonModel[] = []
   selectedBtn: WorkButtonModel = null

   animated: boolean = true

   off: any = null

   @Watch('filterWorks') change() {
      this.animated = true
   }

   created() {
      this.works = [
         new WorkModel(1, "/assets/img/work/work-full1.webp", EnumTypeWorks[2], false),
         new WorkModel(2, "/assets/img/work/work-full2.webp", EnumTypeWorks[2], false),
         new WorkModel(3, "/assets/img/work/work-full3.webp", EnumTypeWorks[3], false),
         new WorkModel(4, "/assets/img/work/work-full5.webp", EnumTypeWorks[4], false),
      ]
      this.filterWorks = this.works

      this.worksButtons = [
         new WorkButtonModel(1, EnumTypeWorks[1], true),
         new WorkButtonModel(2, EnumTypeWorks[2]),
         new WorkButtonModel(3, EnumTypeWorks[3]),
         new WorkButtonModel(4, EnumTypeWorks[4]),
      ]
   }

   /**
    * Показ hover-content при mouseenter 
    */
   onHideHover() {
      this.animated = false
   }

   /**
    * Скрытие hover-content при mouseleave 
    */
   onShowHover() {
      this.animated = true
   }


   /**
     * Получение кнопки с нужным типом
     */
   selectTypeWork(id: number) {
      var selected = this.worksButtons.find(el => el.Id == id)
      this.worksButtons.forEach(item => {
         item.Selected = false
      })
      selected.Selected = true
      

      this.filterWorks = this.works.filter(el => el.Type == selected.Type)
      if (selected.Type == EnumTypeWorks[1])
         this.filterWorks = this.works.filter(el => el.Type)
   }
}
</script>

<style scoped>

.portfolio-works {
   margin-top: 40px;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-auto-rows: auto;
   grid-gap: 20px;
   position: relative;
}

.work {
   width: 100%;
   max-height: 300px;
   background-size: cover;
   transition: all 0.2s ease-out;
   /* animation: fadeWorkRev 0.5s ease-out forwards; */
   box-shadow: -10px 10px 15px 0px rgba(0, 0, 0, 0.2);
   cursor: pointer;
   border-radius: 5px;
   position: relative;
   overflow: hidden;
}

.work-scroll {
   height: 100%;
   overflow: auto;
   border-radius: 5px;
}



.hover-content {
   position: absolute;
   top: 0;
   left: 0;
   opacity: 0;
   visibility: hidden;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.8);
   z-index: 1;
   transition: all 0.2s ease-out;
}

.hover-content.hide {
   opacity: 0;
   visibility: hidden;
   z-index: -1;
   transition: all 0.2s ease-out;
}

.work.animate:hover .hover-content {
   opacity: 1;
   visibility: visible;
}

.hidden-text {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 90%;
   height: 85%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   z-index: 1;
}


.hidden-text .i-text-2,
.hidden-text .fade-btn-link {
   opacity: 0;
   visibility: hidden;
}

.hidden-text .i-text-2 {
   text-align: center;
   line-height: 100%;
   width: max-content;
   max-width: 280px;
   transform: translateY(-5px);
   z-index: 1;
   transition: opacity 0.3s ease-out 0.4s, visibility 0.3s ease-out 0.4s, transform 0.3s ease-out 0.4s, color 0.2s ease-out;
}

.hidden-text .i-text-2:hover {
   color: #e5383e;
   text-decoration: underline;
}

.work:hover .hidden-text .i-text-2 {
   opacity: 1;
   visibility: visible;
   transform: translateY(0);
}


.hidden-text .fade-btn-link {
   transition: all 0.3s ease-out 0.4s;
   transform: translateY(5px);
}
.work:hover .hidden-text .fade-btn-link {
   opacity: 1;
   visibility: visible;
   transform: translateY(0);
}




.hidden-text::before,
.hidden-text::after {
   content: '';
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   transition: all 0.5s;
}

.hidden-text::before {
   border-top: 3px solid #e5383e;
   border-bottom: 3px solid #e5383e;
   transform: scale(0, 1);
}

.hidden-text::after {
   border-right: 3px solid #e5383e;
   border-left: 3px solid #e5383e;
   transform: scale(1, 0);
}

/* .projects-slides:hover .projects-slides_text {
   opacity: 1;
} */

.work:hover .hidden-text::before,
.work:hover .hidden-text::after {
   transform: scale(1, 1);
}








.work-scroll::-webkit-scrollbar { 
   width: 0; 
}

.work-scroll {
   -ms-overflow-style: none;
}

.work img {
   max-width: 100%;
   width: 100%;
   height: auto;
}


@keyframes fadeWork {
   0% { transform: scale(1); position: relative; }
   100% { transform: scale(0); position: absolute; }
}

@keyframes fadeWorkRev {
   0% { transform: scale(0); position: absolute; }
   100% { transform: scale(1); position: relative; }
}



@media all and (max-width: 960px) {
   .work { max-height: 250px; }
}

@media all and (max-width: 768px) {
   .portfolio-works { grid-template-columns: 1fr; grid-template-rows: auto; }
   .i-button-wrap { gap: 10px; }
}

@media all and (max-width: 695px) {

} 
</style>