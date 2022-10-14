<template>
   <div class="team-members">
      <div class="member" v-for="item in teamMembers" :key="item.Id">
         <div class="photo"><img :src="item.Photo" :alt="item.Name"></div>
         <div class="hidden-block">
            <div class="additional">
               <i-text class="i-text-2 red mb5 ">{{ item.Name }}</i-text>
               <i-text class="i-text-4 mb5 white">{{ item.Position }}</i-text>
               <i-text class="i-text-4 mb5 member-info">{{ item.Info }}</i-text>
            </div>

            <div class="links">
               <social-widget />
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator"

import TeamMemberModel from "./TeamMemberModel"

@Component
export default class TeamMemberSComponent extends Vue {

   teamMembers: TeamMemberModel[] = []

   created() {
      this.teamMembers = [
         new TeamMemberModel(1, "Kseniya Darskaya", "/assets/img/team/member6.webp", "tester", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, laborum."),
         new TeamMemberModel(2, "Svetlana Burlak", "/assets/img/team/member7.webp", "web designer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, laborum."),
         new TeamMemberModel(3, "Julianne Hough", "/assets/img/team/member4.webp", "back-end developer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, laborum.")
      ]
   }
}
</script>

<style scoped>

.member {
   display: flex;
   align-items: center;
   cursor: pointer;
}

.member:not(:last-child) {
   margin-bottom: 30px;
}

.photo {
   display: flex;
   flex: 0 0 130px;
   max-width: 130px;
   width: 100%;
   overflow: hidden;
   border-radius: 50%;
   position: relative;
   
}

.photo::after {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(229, 56, 62, 0.2);
   opacity: 0;
   visibility: hidden;
   transition: all 0.2s ease-out;
}

.photo img {
   max-width: 100%;
   height: auto;
}



.hidden-block {
   margin-left: 30px;
   overflow: hidden;
   position: relative;
   min-height: 60px;
}

.additional {
   animation: fadeMove 0.2s ease-out forwards;
}

.links {
   position: absolute;
   left: 5px;
   top: 50%;
   margin-top: -18.5px;
   animation: fadeMoveRev 0.2s ease-out forwards;
}

.member:hover .photo::after {
   opacity: 1;
   visibility: visible;
}

.member:hover .i-text-2.name {
   color: #fdfdfd;
}

.member:hover .additional {
   animation: fadeMoveRev 0.2s ease-out forwards;
}
.member:hover .links {
   animation: fadeMove 0.2s ease-out forwards;
}


@keyframes fadeMove {
   0% { opacity: 0; visibility: hidden; transform: translateY(-100%); }
   100% { opacity: 1; visibility: visible; transform: translateY(0); }
}

@keyframes fadeMoveRev {
   0% { opacity: 1; visibility: visible; transform: translateY(0); }
   100% { opacity: 0; visibility: hidden; transform: translateY(100%); }
}


@media all and (max-width: 500px) {
   .member { flex-direction: column; }
   .hidden-block, .additional { margin-left: 0; display: flex; flex-direction: column; align-items: center; }
   .photo { margin-bottom: 30px; flex: 0 0 200px; max-width: 200px; }
   .links { display: flex; justify-content: center; width: 100%; top: 0; margin-top: 0; }
}
</style>