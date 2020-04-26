<template>
<div>
 <b-navbar type="dark" class="navbar-light navbar-nav">
    <b-navbar-nav class="nav"> 
      <b-nav-item-dropdown text="Organise You Team" class="m-2 navbar-dropdown">
        <!-- <b-dropdown-item href="/vic/Brochure-Poster-Handbook">Brochure Poster Handbook</b-dropdown-item>
        <b-dropdown-item href="/vic/for-entrants">For Entrants</b-dropdown-item>
        <b-dropdown-item href="/vic/personal-insurance">Personal Insurance</b-dropdown-item>
        <b-dropdown-item href="/vic/team-lists">Team Lists</b-dropdown-item>
        <b-dropdown-item href="/vic/team-changes-requests">Team Changes Requests</b-dropdown-item> -->
        <b-dropdown-item href="#">Sub page1</b-dropdown-item>
        <b-dropdown-item href="#">Sub page2</b-dropdown-item>
      </b-nav-item-dropdown>      
      <b-nav-item-dropdown text="Sport" class="m-2">
        <b-dropdown-item href="#">Sub page1</b-dropdown-item>
        <b-dropdown-item href="#">Sub page2</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  
    <b-nav-item :key="index" v-for="(navitem, index) in $store.state.menu.main_navi">
      <nuxt-link class="top-header__link navbar-light navbar-nav" :to="navitem.link.cached_url">
        {{ navitem.name }}
      </nuxt-link>
    </b-nav-item>
  </b-navbar>
</div>
</template>

<script>
export default {

};
</script>
<style scoped>
  .menu_info {
    margin: 0;
    padding: 0;
    background: #3f3f40;
    position: relative;
    top: -57px;
}
.menu_info .dropdown-menu {
    border-radius: 0;
    /* border: none; */
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    padding: 0px;
    margin: 0;
    background: rgba(0, 0, 0, 0.8);
    min-width: 12em;
}
.navbar-dropdown {
  color: rgba(255, 255, 255) !important;
}
.dropdown-toggle::after {
   /* opacity: 0.5; */

}
.menu_info .navbar {
    padding: 0;
    margin: 0;
}
.menu_info .navbar-light .navbar-nav {
    margin: 0 40px 0 0;
    padding: 13px 0 13px 0;
    /* display: inline-block;  */
    font-family: "helvetica47regularcondensed";
    font-size: 21px;
    color: #fff !important;
    background: transparent;
}
.menu_info .navbar-light .navbar-nav .nuxt-link-active, .menu_info .navbar-light .navbar-nav li a:hover {
    color: #f7e037;
}
.nav_sec .navbar-light .navbar-nav li {
    margin: 0 20px 0 0;
}
.nav_sec .navbar-light .navbar-nav .nav-link {
    margin: 0;
    padding: 0;
    font-size: 18px;
    color: #171616;
}
.navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0.1);
}

.nav_sec.inner_top .navbar-brand {
    margin-top: 20px;
}

</style>


