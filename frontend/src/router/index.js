import { createRouter, createWebHistory } from "vue-router";
import CryptoJS from "crypto-js";

const routes = []


const encryption_key = process.env.VUE_APP_ENCRYPTION_KEY;

export function set_token(token) {
  var encrypted_token = CryptoJS.AES.encrypt(token, encryption_key).toString();
  localStorage.setItem("encrypted_token", encrypted_token);
}

export function get_token() {
  var encrypted_token = localStorage.getItem("encrypted_token");

  if (encrypted_token) {
    var decrypted_token = CryptoJS.AES.decrypt(
      encrypted_token,
      encryption_key
    );

    return decrypted_token.toString(CryptoJS.enc.Utf8);
  }

  return null;
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  var token = localStorage.getItem("encrypted_token");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (token) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export function clear_token() {
  localStorage.removeItem("encrypted_token");
}

export function set_user_details(user_details) {
  var role = user_details.role;
  var user_id = user_details.user_id;
  var last_name = user_details.last_name;
  var first_name = user_details.first_name;

  localStorage.setItem("role", role);
  localStorage.setItem("user_id", user_id);
  localStorage.setItem("last_name", last_name);
  localStorage.setItem("first_name", first_name);
}

export function get_user_details() {
  var role = localStorage.getItem("role");
  var user_id = localStorage.getItem("user_id");
  var last_name = localStorage.getItem("last_name");
  var first_name = localStorage.getItem("first_name");

  var user_details = {
    role: role,
    user_id: user_id,
    last_name: last_name,
    first_name: first_name,
  };

  return user_details;
}

export default router;
