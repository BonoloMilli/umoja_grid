// filepath: c:\Users\rivon\Desktop\frontend\frontend\src\main.js
import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

const app = createApp(App)
// Import IziToast
import 'izitoast/dist/css/iziToast.min.css'
import iziToast from 'izitoast'
app.config.globalProperties.$toast = iziToast;

// Popper.js is a Bootstrap dependency
import 'bootstrap';


// Bootstrap JS + CSS (v4)
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import Font Awesome
import "@fortawesome/fontawesome-free/css/all.css";

// Import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Import custom CSS
import './assets/css/custom.css';

// Import DataTables
import "datatables.net-dt/css/dataTables.dataTables.css";

$(document).ajaxComplete(function(event, xhr) {
  if (xhr.status == 401) {
    router.push("/");
  }
});

createApp(App).use(router).mount('#app');'#app';