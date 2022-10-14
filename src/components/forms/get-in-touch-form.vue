<template>
   <div class="get-in-touch-form">
      <i-form>
         <div class="grid-item">
            <i-input 
               ref="name"
               v-model="name"
               :name="'name'"
               :placeholder="'Name'"
               :required="true"
               :regex="nameRegex"
            />
         </div>

         <div class="grid-item">
            <i-input 
               ref="email"
               v-model="email"
               :name="'email'"
               :placeholder="'Email'"
               :required="true"
               :regex="emailRegex"
            />
         </div>

         <div class="grid-item column-width100">
            <i-input 
               ref="phone"
               v-model="phone"
               :name="'phone'"
               :placeholder="'Phone'"
               :required="true"
               :regex="phoneRegex"
            />
         </div>

         <div class="grid-item column-width100">
            <i-textarea 
               ref="message"
               v-model="message"
               :name="'message'"
               :placeholder="'Message'"
               :required="true"
               :maxLength="10000"
            />
         </div>
         
         <div class="grid-item center column-width100">
            <i-button @click="validation" class="center">Submit</i-button>
         </div>
      </i-form>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator"

@Component
export default class GetInTouchForm extends Vue {

   /**
    * Input
    */
   name: string = ''
   email: string = ''
   phone: string = ''
   message: string = ''

   /**
    * Регулярки
    */
   nameRegex: RegExp = /^[A-zА-я\s^_][^0-9\_]([A-zА-я\s^_]+)+$/; //'[\\w\s]+';  // имя
   phoneRegex: RegExp = /^(\s*)?(\+)?([- _():+]?\d[- _():+]?){8,14}(\s*)?$/;  // телефон
   emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // email 
   GetRef: any;


   /**
    * Валидация формы
    */
   validation() {
      if (
         (this.GetRef('name') && !this.GetRef('name').checkValidation()) &&
         (this.GetRef('email') && !this.GetRef('email').checkValidation()) &&
         (this.GetRef('phone') && !this.GetRef('phone').checkValidation()) &&
         (this.GetRef('message') && !this.GetRef('message').checkValidation())
      ) {} 
      else if (
         (this.GetRef('name') && !this.GetRef('name').checkValidation()) ||
         (this.GetRef('email') && !this.GetRef('email').checkValidation()) ||
         (this.GetRef('phone') && !this.GetRef('phone').checkValidation()) ||
         (this.GetRef('message') && !this.GetRef('message').checkValidation())
      ) {}
      else { 
         console.log('Get In Touch send');
      }
   }

}
</script>

<style scoped>

.get-in-touch-form {
   margin: 0 auto;
   max-width: 700px;
}

.column-width100 {
   grid-column: 1/3;
}

@media all and (max-width: 500px) {
   .column-width100 { grid-column: 1/2; }
}
</style>