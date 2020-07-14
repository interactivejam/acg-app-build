<template>
    <header>
      <div class="nav_sec">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">

              <div class="inner d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <Search />
                <nav class="navbar navbar-expand-md navbar-light">

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
  header {
    position: absolute;
    width: 100%;
    z-index: 999;
  }
  .nav_sec {
    font-size: 1em;

    font-family: "helvetica47regularcondensed";
    padding: 10px 0;
    margin-top: 1em;
  }
 #searchbox {
  top: -2em;
 }


</style>


