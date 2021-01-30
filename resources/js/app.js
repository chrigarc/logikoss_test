/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
import Buefy from 'buefy';

Vue.use(Buefy, {
    defaultIconPack: 'fas',
    defaultMonthNames: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    defaultDayNames: [
        'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa',
    ],
    defaultInputAutocomplete: 'off',
    defaultSnackbarDuration: 10000,
    defaultToastDuration: 7000,
});

import '@fortawesome/fontawesome-free/css/all.css';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);

//data-table
Vue.component('ActionButtons', () => import('./components/ActionButtons'));
Vue.component('user-table', () => import('./components/user/UserTable'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
