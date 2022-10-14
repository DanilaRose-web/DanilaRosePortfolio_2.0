<template>
   <div class="i-textarea">
      <div class="label" v-if="hasLabel">
         <label :for="name" id="label">{{ label }}</label>
      </div>

      <div class="textarea">
         <div class="textarea-animate" tabindex="0" :class="{'error' : showValidation}">
            <textarea 
               :ref="'textarea'+name"
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
export default class ITextareaComponent extends Vue {

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
    * Валидация textarea
    */
   isValid(): boolean {
      if (this.required && (this.innerValue === undefined || this.innerValue === "" || this.innerValue === null)) {
         this.error = 'Это обязательное поле'
         return false;
      } else if (this.regex && !new RegExp(this.regex).test(this.innerValue + "")) {
         this.error = 'Проверьте ка еще раз'
         return false;
      } else if ((this.maxlength || this.minlength) && (this.innerValue.length != this.maxlength || this.innerValue.length != this.minlength)) {
         this.error = 'Количество символов не больше 10 000'
         return false;
      } else {
         this.error = ''
         return true
      }
   }

   /**
    * Проверка валидации textarea
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

.i-textarea,
.textarea {
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

.textarea-animate {
   position: relative;
}

.textarea-animate::after {
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

.textarea-animate:focus:after,
.textarea-animate:focus-within:after {
   width: 100%;
}


textarea {
   padding: 7px 7px 7px 15px;
   display: flex;
   align-items: center;
   min-height: 100px;
   width: 100%;
   background: #7a787b;
   font-size: 16px;
   font-weight: 500;
   color: #fdfdfd;
   transition: all 0.2s ease-out;
}

.textarea-animate.error::after {
   width: 100%;
   background: #B10444;
}

.textarea-animate.error textarea {
   background: #FACDD4;
}



.textarea-animate.error ::-webkit-textarea-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.textarea-animate.error :-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.textarea-animate.error ::-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.textarea-animate.error :-ms-textarea-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.textarea-animate.error ::-ms-textarea-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.textarea-animate.error ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #B10444;
}
.textarea-animate.error :-ms-textarea-placeholder { /* Internet Explorer 10-11 */
   color: #B10444;
}
.textarea-animate.error ::-ms-textarea-placeholder { /* Microsoft Edge */
   color: #B10444;
}





/* placeholder в разных состояниях */
::-webkit-textarea-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
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
:-ms-textarea-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: #fdfdfd;
   font-weight: 500;
   font-family: 'Futura New';
   text-transform: uppercase;
   /* font-style: italic; */
   /* opacity: 0.5; */
}
::-ms-textarea-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
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
:-ms-textarea-placeholder { /* Internet Explorer 10-11 */
   color: #fdfdfd;
   font-weight: 500;
   font-family: 'Futura New';
   text-transform: uppercase;
   /* font-style: italic; */
   /* opacity: 0.5; */
}
::-ms-textarea-placeholder { /* Microsoft Edge */
   color: #fdfdfd;
   font-weight: 500;
   font-family: 'Futura New';
   text-transform: uppercase;
   /* font-style: italic; */
   /* opacity: 0.2b2a30 */
}
</style>