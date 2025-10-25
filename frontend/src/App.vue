<script setup>
import { RouterView } from 'vue-router';
import 'bootstrap';
import $ from 'jquery';

function show_loader() {
  $('.loader').css('display', 'flex');
}

function hide_loader() {
  $('.loader').css('display', 'none');
}

// Initialize - hide by default
$(document).ready(function() {
  show_loader();
  setTimeout(hide_loader);
});
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
body{
  overflow: hidden;
}
</style>
