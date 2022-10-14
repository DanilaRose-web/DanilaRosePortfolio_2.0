<template>
  <layout-home>  
    <template slot="one-content">
      <heading class="heading-1 cursive"><div>Danila Rose</div></heading>
    </template>



    <i-container>
      <div class="content">
        <div class="section-gradient">

          <!-- О нас -->
          <section class="about-me section-padding">
            <div class="about-content">
              <heading class="heading-1 home-title"><h1>I am front-end</h1></heading>
              <heading class="subheading cursive home-subheading"><h3>I Make Wonderful Things</h3></heading>
              <i-text :marginTop="'30px'"><strong>Lorem ipsum dolor, sit amet</strong>  consectetur adipisicing elit. Voluptatibus unde quam suscipit optio? Sunt saepe ullam fugiat illum architecto ad quia laborum mollitia dignissimos? Eveniet ea temporibus debitis, alias nam pariatur doloremque quos optio quas nobis, illum cum quaerat sunt dolores provident itaque vero cumque eaque consequatur iure ducimus quod?</i-text>
              
              <i-button class="center">Read More</i-button>
            </div>
          </section>

          <!-- Команда -->
          <section class="our-team section-padding">
            <div class="row team-row">
              <div class="col team-col text-col">
                <div class="item end">
                  <heading class="headline ta-right"><h2>Creative and Professional</h2></heading>
                  <i-text class="i-text-3 team-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus impedit eos laboriosam reprehenderit porro nihil modi fugiat excepturi nulla dolor eligendi reiciendis id quasi alias deleniti quaerat, dignissimos expedita, dolores architecto velit totam. Corrupti hic possimus in quaerat eaque.</i-text>
                  <i-text class="i-text-3 team-info home mt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, id. Fuga numquam, officiis sunt cum id natus deserunt delectus voluptates!</i-text>
                  <i-button>Read More</i-button>
                </div>
              </div>

              <div class="col team-col members-col">
                <div class="item start">
                  <heading class="headline "><h2>Our Team</h2></heading>
                  <team-members />
                </div>
              </div>
            </div>
          </section>

          <!--Портфолио -->
          <section class="section-portfolio section-padding">
            <div class="ellipse-light"></div>

            <div class="portfolio-content">
              <heading class="headline-1 ta-center"><h2>Selected Work</h2></heading>
              <portfolio-works></portfolio-works>
            </div>

            <div class="ellipse-dark">Danila <strong>Rose</strong></div>
          </section>

          
        </div>
      </div>

      <!-- Get In Touch -->
      <section class="section-get-in-touch">
        <heading class="headline-1 ta-center white"><h2>Get In Touch</h2></heading>
      
        <get-in-touch-form />
      </section>
    </i-container>
 
  </layout-home>
</template>  

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

import EnumTypeWorks from "@components/portfolio-works/EnumTypeWorks";
import WorkModel from "@components/portfolio-works/WorkModel";
import WorkButtonModel from "@components/portfolio-works/WorkButtonModel"

@Component
export default class PageHomeComponent extends Vue {

  created() {}
  
  
  
}
</script>

<style scoped>


.content {
  width: 100%;
  min-height: 500px;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: -10px 10px 20px 6px rgba(0, 0, 0, 0.4), 0px 0px 3px 2px rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
}

.section-padding {
  padding: 0 60px;
}

.about-me {
  padding-top: 80px;
  padding-bottom: 240px;
  background: linear-gradient(0deg, #2B2A30 0%, rgba(43, 42, 48, 0.9) 20%, rgba(43, 42, 48, 0.4) 40%, rgba(43, 42, 48, 0) 100%);
}

.about-content {
  max-width: 450px; 
}




/* our-team */
.our-team {
  padding-top: 0;
  padding-bottom: 150px;
  background: #2b2a30;
}

.team-row {
  margin: 0 -50px;
}

.team-col {
  padding: 0 60px;
}

.team-col.text-col {
  flex: 0 0 445px;
  max-width: 445px;
}

.team-col.members-col {
  flex: 0 0 60%;
  max-width: 60%;
}

.item {
  display: flex;
  flex-direction: column;
}

.item.end {
  align-items: flex-end;
}

.item.start {
  align-items: flex-start;
}



/* portfolio */
.section-portfolio {
  padding-top: 80px;
  padding-bottom: 150px;
  position: relative;
  background: url('/assets/img/bg/bg33.webp') repeat center;
}

.section-portfolio::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(43, 42, 48, 0.2);
}

.ellipse-light {
  position: absolute;
  left: 50%;
  top: -52.5px;
  transform: translateX(-50%);
  width: 105px;
  height: 105px;
  border-radius: 50%;
  background: url('/assets/img/bg/bg33.webp') repeat center;
  background-size: contain;
  overflow: hidden;
  z-index: 1;
}

.ellipse-light::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(43, 42, 48, 0.2);
}

.ellipse-dark {
  position: absolute;
  left: 50%;
  bottom: -52.5px;
  transform: translateX(-50%);
  width: 105px;
  height: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: url('/assets/img/bg/bg34.webp') repeat center;
  background-size: contain;
  overflow: hidden;
  z-index: 1;
  font-family: 'Devilion', sans-serif;
  font-size: 38px;
  line-height: 70%;
  color: #e5383e;
  text-align: center;
  box-shadow: inset -10px 10px 20px 6px rgba(0, 0, 0, 0.4), inset 0px 0px 3px 2px rgba(255, 255, 255, 0.4);
}

.ellipse-dark strong {
  color: #fdfdfd;
}





.portfolio-content {
  position: relative;
  z-index: 1;
}




/* section-get-in-touch */
.section-get-in-touch {
  padding-top: 150px;
  padding-bottom: 150px;
  position: relative;
}



@media all and (max-width: 1180px) {
  .team-row { flex-wrap: nowrap; }
}

@media all and (max-width: 1050px) {
  .team-row { margin: 0 -40px; }
  .team-col { padding: 0 40px; }
  .team-col.text-col { flex: 0 0 40%; max-width: 40%; }
}

@media all and (max-width: 1000px) {
  .team-row { margin: 0 -15px; flex-wrap: wrap; }
  .team-col { padding: 0 15px; }
  .team-col.text-col, .team-col.members-col { flex: 0 0 100%; max-width: 100%; }
  .team-col.text-col { margin-bottom: 80px; }
  .item.end, .item.start { align-items: center; }
}

@media all and (max-width: 800px) {
  .about-content { margin: 0 auto; }
}

@media all and (max-width: 550px) {
  .section-padding { padding: 80px 30px 240px 30px; }
  .about-me { padding-bottom: 100px; }
}

@media all and (max-width: 350px) {
  .section-padding { padding: 80px 15px 100px 15px; }
}
</style>