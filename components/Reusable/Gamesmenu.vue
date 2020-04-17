<template>
                <nav class="navbar navbar-expand-lg navbar-light d-none d-sm-none d-md-none d-lg-block d-xl-block">
                    <div class="collapse navbar-collapse" id="Navigation">
                      <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Organise you Team
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/vic/Brochure-Poster-Handbook">Brochure Poster Handbook</a>
                                <a class="dropdown-item" href="/vic/for-entrants">For Entrants</a>
                                <a class="dropdown-item" href="/vic/personal-insurance">Personal Insurance</a>
                                <a class="dropdown-item" href="/vic/team-lists">Team Lists</a>
                                <a class="dropdown-item" href="/vic/team-changes-requests">Team Changes Requests</a>
                                <a class="dropdown-item" href="/vic/get-a-team-marquee">Get a Team Marquee</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Sport
                            </a>
                        </li>
                        <li :key="index" v-for="(navitem, index) in $store.state.menu.main_navi">
                          <nuxt-link class="top-header__link" :to="navitem.link.cached_url">
                            {{ navitem.name }}
                          </nuxt-link>
                        </li>
                    </ul>
                </div>
              </nav>
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
    border: none;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    padding: 0px;
    margin: 0;
    background: rgba(0, 0, 0, 0.8);
    min-width: 12em;
}
.dropdown-toggle::after {
   opacity: 0.5;

}
.menu_info .navbar {
    padding: 0;
    margin: 0;
}
.menu_info .navbar-light .navbar-nav li a {
    margin: 0 40px 0 0;
    padding: 13px 0 13px 0;
    display: inline-block;
    font-family: "helvetica47regularcondensed";
    font-size: 21px;
    color: #fff;
    background: transparent;
}
.menu_info .navbar-light .navbar-nav li a.nuxt-link-active, .menu_info .navbar-light .navbar-nav li a:hover {
    color: #f7e037;
}
.nav_sec.inner_top .navbar-nav {

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


