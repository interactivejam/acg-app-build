<template>
    <header>
      <div class="nav_sec">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <a
                class="navbar-brand text-center d-block d-sm-block d-md-block d-lg-none d-xl-none"
                href="/home"
              >
                <img src="//a.storyblok.com/f/76648/x/67b1cb5b1d/corporate-games.svg" class="w-100" alt="Corporate Games" />
              </a>
              <div class="inner d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <Search />
                <nav class="navbar navbar-expand-md navbar-light">
                   <a class="navbar-brand" href="/home">
                      <img src="//a.storyblok.com/f/76648/x/67b1cb5b1d/corporate-games.svg" alt="Corporate Games" />
                    </a>
                  <div class="collapse navbar-collapse" id="Navigation">
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="#">Corporate Games</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                      </li>

                    </ul>
                  </div>


                </nav>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
 </template>


<script>
import Search from '~/components/Search.vue';

export default {
  components: {
    Search,
  },
  props: ['blok'],
}
</script>

<style>
  .nav_sec {
    font-size: 1em;
    color: #171616;
    font-family: "helvetica47regularcondensed";
    padding: 10px 0;
  }
  .navbar img { height: 3em;}


</style>
