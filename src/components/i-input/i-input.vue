<template>
   <div class="i-input">
      <div class="label" v-if="hasLabel">
         <label :for="name" id="label">{{ label }}</label>
      </div>

      <div class="input">
         <div class="input-animate" tabindex="0" :class="{'error' : showValidation}">
            <input 
               :ref="'input'+name"
               :type="type"
               :value="value"
               @input="onInput($event.target.value)"
               :name="name"
               :id="name"
               :placeholder="placeholder"
               :regex="regex"
               :minLength="minLength"
               :maxLength="maxLength"
            />
         </div>
         <slot />
      </div>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"
 
@Component
export default class IInputComponent extends Vue {

   @Prop({ default: '', required: true }) value: string | number;
   @Prop({ type: String, default: '', required: false }) label: string; 
   @Prop({ type: String, default: 'text', required: false }) type: string; 
   @Prop({ type: String, default: '', required: true }) name: string;
   @Prop({ type: String, default: '', required: false }) placeholder: string;
   @Prop({ type: Number, default: null, required: false }) maxLength: number;
   @Prop({ type: Number, default: null, required: false }) minLength: number;
   @Prop({ type: Boolean, default: false, required: false }) required: boolean;
   @Prop({ type: Boolean, default: false, required: false }) showError: boolean;
   @Prop({ type: Boolean, default: false, required: false }) hasLabel: boolean;
   @Prop({ type: Boolean, default: false, required: false }) darkTheme: boolean;
   @Prop({ type: RegExp, default: undefined, required: false, }) regex?: RegExp;

   innerValue: string | number;  
   showValidation: boolean = false
   error: string = ''

   /**  
    * Регулярки (здесь находятся чисто для спарвки, чтобы не потерять, 
    * использоваться они будут непосредственно в местах использования компонента)
    */
   nameRegex: RegExp = /^[A-zА-я\s^_][^0-9\_]([A-zА-я\s^_]+)+$/; //'[\\w\s]+';  // имя
   phoneRegex: RegExp = /^(\s*)?(\+)?([- _():+]?\d[- _():+]?){8,14}(\s*)?$/;  // телефон
   emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // email 
   numberRegex: RegExp = /^[0-9]+$/ // только числа
   nameRegexLat: RegExp = /^\w+[^0-9\s\_]([- _]\w+)*$/ // имя на литинском  

   /**
    * Отслеживание изменений value
    */
   @Watch('value') changeValue() {
      this.$emit('changeValue', this.value) // emit при изменении value
      this.innerValue = this.value; // переопределение value
      this.checkValidation(); // проверка валидации
   }


   created() {
      this.innerValue = this.value; // переопределение value
   }


   /**
    * Валидация input
    */
   isValid(): boolean {
      if (this.required && (this.innerValue === undefined || this.innerValue === "" || this.innerValue === null)) {
         this.error = 'Это обязательное поле'
         return false;
      } else if (this.regex && !new RegExp(this.regex).test(this.innerValue + "")) {
         this.error = 'Проверьте ка еще раз'
         return false;
      } else if ((this.maxlength || this.minlength) && (this.innerValue.length != this.maxlength || this.innerValue.length != this.minlength)) {
         this.error = 'Проверьте количество символов'
         return false;
      } else if (this.name == 'month' && this.innerValue > 12) {
         this.error = 'Сверьте ка месяц'
         return false
      } else if (this.name == 'password' && this.innerValue.length < 8) {
         this.error = 'Пароль должен быть не менее 8 символов'
         return false
      }
      else {
         this.error = ''
         return true
      }
   }

   /**
    * Проверка валидации input
    */
   checkValidation(): boolean {
      if (this.isValid()) this.showValidation = false;
         else this.showValidation = true;
      this.$emit('valid', this.showValidation)
      return !this.showValidation
   }

  
   /**
    * Переопределение value при вводе (событие input)
    */
   onInput(newValue: string) {
      this.innerValue = newValue;
      this.$emit("input", this.innerValue);
      this.checkValidation();
   }

   /**
    * Действия при нажатии "Enter"
    */
   onEnter() {
      this.$emit('enter');
   }   

}
</script>

<style scoped>

.i-input,
.input {
   position: relative;
}

label {
   font-size: 13px;
   font-weight: 500;
   color: #121B23;
   transition: all 0.2s ease-out;
}

label.label-inside {
   position: absolute;
   top: 50%;
   left: 10px;
   transform: translateY(-50%);
}

.input-animate {
   position: relative;
}

.input-animate::after {
   content: '';
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);
   width: 0;
   height: 3px;
   background: #fdfdfd;
   transition: all 0.3s ease-out;
}

.input-animate:focus:after,
.input-animate:focus-within:after {
   width: 100%;
}


input {
   padding: 7px 7px 7px 15px;
   display: flex;
   align-items: center;
   height: 40px;
   width: 100%;
   background: #7a787b;
   font-size: 16px;
   font-weight: 500;
   color: #fdfdfd;
   transition: all 0.2s ease-out;
}

.input-animate.error::after {
   width: 100%;
   background: #B10444;
}

.input-animate.error input {
   background: #FACDD4;
}



.input-animate.error ::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.input-animate.error :-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.input-animate.error ::-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.input-animate.error :-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.input-animate.error ::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.input-animate.error ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.input-animate.error :-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: #B10444;
}
.input-animate.error ::-ms-input-placeholder { /* Microsoft Edge */
   color: #B10444;
}





/* placeholder в разных состояниях */
::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #fdfdfd;
   font-weight: 500;
   font-family: 'Futura New';
   text-transform: uppercase;
   /* font-style: italic; */
   /* opacity: 0.5; */
}
:-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #fdfdfd;
   font-weight: 500;
   font-family: 'Futura New';
   text-transform: uppercase;
   /* font-style: italic; */
   /* opacity: 0.5; */
}
::-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #fdfdfd;
   font-weight: 500;
   font-family: 'Futura New';
   text-transform: uppercase;
   /* font-style: italic; */
   /* opacity: 0.5; */
}
:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #fdfdfd;
   font-weight: 500;
   font-family: 'Futura New';
   text-transform: uppercase;
   /* font-style: italic; */
   /* opacity: 0.5; */
}
::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #fdfdfd;
   font-weight: 500;
   font-family: 'Futura New';
   text-transform: uppercase;
   /* font-style: italic; */
   /* opacity: 0.5; */
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #fdfdfd;
   font-weight: 500;
   font-family: 'Futura New';
   text-transform: uppercase;
   /* font-style: italic; */
   /* opacity: 0.5; */
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: #fdfdfd;
   font-weight: 500;
   font-family: 'Futura New';
   text-transform: uppercase;
   /* font-style: italic; */
   /* opacity: 0.5; */
}
::-ms-input-placeholder { /* Microsoft Edge */
   color: #fdfdfd;
   font-weight: 500;
   font-family: 'Futura New';
   text-transform: uppercase;
   /* font-style: italic; */
   /* opacity: 0.2b2a30 */
}
</style>