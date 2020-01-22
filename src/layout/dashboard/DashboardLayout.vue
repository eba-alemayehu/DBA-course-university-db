<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel"/>
        <sidebar-link to="/stats" name="Students" icon="ti-user"/>
        <sidebar-link to="/billing-list" name="Billing" icon="ti-money"/>
        <sidebar-link to="/Class" name="Class" icon="ti-book"/>
        <sidebar-link to="/Buildings" name="Buildings" icon="ti-home"/>
        <!-- <sidebar-link to="/maps" name="Map" icon="ti-map"/>
        <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/> -->
      </template>
      <!-- <mobile-menu>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-panel"></i>
            <p>Stats</p>
          </a>
        </li>
        <drop-down class="nav-item"
                   title="5 Notifications"
                   title-classes="nav-link"
                   icon="ti-bell">
          <a class="dropdown-item">Notification eba</a>
          <a class="dropdown-item">Notification alemayehu</a>
          <a class="dropdown-item">Notification 3</a>
          <a class="dropdown-item">Notification 4</a>
          <a class="dropdown-item">Another notification</a>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-settings"></i>
            <p>Eba</p>
          </a>
        </li>
        <li class="divider"></li>
      </mobile-menu> -->
    </side-bar>
    <div class="main-panel">
      <!-- <top-navbar></top-navbar> -->
      <!-- <h1>Hello wold</h1> -->
      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import $ from "jquery"; 
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  beforeCreate: function () {
    $("document").ready(function(){
      $(".simple-text").text = "Group 2 DBA"
    }); 

  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
