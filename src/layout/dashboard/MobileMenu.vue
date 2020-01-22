<template>
  <ul class="nav navbar-nav nav-mobile-menu">
    <slot></slot>
  </ul>
</template>
<script>
export default {};
import $ from "jquery"; 
$(".wrapper .sidebar[data-background-color='black'] .logo").text = "Group 2 DBA"

</script>
<style>

  .wrapper .sidebar[data-background-color="black"] .logo {
    display: none;
  }
</style>
