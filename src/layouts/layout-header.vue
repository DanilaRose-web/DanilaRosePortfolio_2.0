<template>    
    <header>
        <i-container :display="'flex'" :justify="'space-between'">
            <nav class="header-menu">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="about-us">About Us</router-link></li>
                    <li><router-link to="portfolio">Portfolio</router-link></li>
                    <li><router-link to="blog">Blog</router-link></li>
                    <li><router-link to="contact-us">Contact Us</router-link></li>
                </ul>
            </nav>

            <nav class="additional-block">
                <social-widget />
                <i-mobile-menu-icon @click="onOpenMenu" />
            </nav>

            <mobile-menu :show="openMenu" @close="closeMenu" @changeOpenMenu="closeMenu" />
        </i-container>
    </header>
</template>

<script lang="ts">

import Vue from "vue";
import { Component } from 'vue-property-decorator'

@Component
export default  class HeaderComponent extends Vue {

    openMenu: boolean = false // открытие мобильного меню


    /**
     * Открытие мобильного меню
     */
    onOpenMenu() {
        this.openMenu = !this.openMenu
    }

    closeMenu(show: boolean) {
        this.openMenu = show
    }

}
    
</script>

<style lang="css" scoped>

header {
    position: relative;
    z-index: 3;
}

.additional-block {
    display: flex;
    align-items: center;
    gap: 20px;
}

/* меню */
.header-menu {
    margin-right: 15px;
}

.header-menu > ul {
    display: flex;
    align-items: center;
}

.header-menu > ul > li {
    position: relative;
}

.header-menu > ul > li a {
    padding: 50px 15px 30px 15px;
    font-family: 'Proxima Nova', sans-serif;
    /* font-family: 'Futura New', sans-serif; */
    font-size: 19px;
    font-weight: 500;
    line-height: 100%;
    color: #fdfdfd;
    position: relative;
    display: flex;
    text-transform: uppercase;
    transition: all 0.1s ease-out;
}

.header-menu > ul > li a::after {
    content: '';
    position: absolute;
    left: 0;
    top: 59%;
    width: 0;
    height: 1px;
    background: #e5383e;
    z-index: 0;
    transition: width 0.3s ease-out 0.1s, background-color 0.3s ease-out;
}

.header-menu > ul > li a:hover,
.header-menu > ul > li a.router-link-active {
    background: #e5383e;
    transition-delay: 0.3s;
}

.header-menu > ul > li a:active {
    transform: scale(0.95);
}

.header-menu > ul > li a:hover::after,
.header-menu > ul > li a.router-link-active::after {
    width: 100%;
    background: #fdfdfd;
    transition: width 0.3s ease-out, background-color 0s ease-out 0.3s;
}



@media all and (max-width: 800px) {
    .header-menu > ul > li a { font-size: 16px; }
}

@media all and (max-width: 740px) {
    header { padding: 10px 0; }
    .header-menu { display: none; }
    .additional-block { width: 100%; justify-content: space-between; }
}

</style>