<template>
  <div>
    <b-nav class="navbar navbar-expand-lg navbar-light d-none d-sm-none d-md-none d-lg-block d-xl-block">
      <div class="collapse navbar-collapse" id="Navigation">
          <div class="nav-item">
            <b-nav-item-dropdown id="my-nav-dropdown" text="Organise Your Team" toggle-class="nav-link-custom" right>
              <b-dropdown-item
                v-for="item in get_organiseSlug"
                :key="item.id"
                :to="{ path: item.real_path}"
              >{{ item.name }}</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <div class="nav-item dropdown">
            <b-nav-item-dropdown id="my-nav-dropdown" text="Sport" toggle-class="nav-link-custom" right>
              <b-dropdown-item
                v-for="item in get_sportSlug"
                :key="item.id"
                :to="{ path: item.real_path}" 
              >{{ item.name }}</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <div class="nav-item">
            <b-nav-item class="nav-link" v-for="slug in get_Slug" :key="slug.id" :to="slug.real_path">
            {{ slug.name }}
            </b-nav-item>
          </div>
      </div>
    </b-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      story: { content: [] },
      links: [],
    };
  },
  props: ["blok"],

  mounted() {
    this.$storyapi
    .get("cdn/links", {
      starts_with: `vic/`,
      cv: this.$store.state.cacheVersion
    })
    .then((res) => {
      this.links = res.data.links
      console.log("links", this.links)
    })
    .catch(res => {
      console.error("Failed to load resource", res);
    });

    this.$storybridge.on(["input", "published", "change"], event => {
      if (event.action == "input") {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else {
        window.location.reload();
      }
    });
  },

  computed: {
    get_Slug: function() {
      var arraylinks = Object.values(this.links).filter(function (el) {
        return el.published === true &&
         el.name === "FAQ" || el.name ==="Results" || el.name === "Games Award";
      });
      return arraylinks
    },

    get_organiseSlug: function() {
      var arraylinks = Object.values(this.links).filter(function (el) {
        return el.published === true &&
        el.real_path.includes("organise-your-team/") === true;
      });
      return arraylinks;
    },

    get_sportSlug: function() {
      var arraylinks = Object.values(this.links).filter(function (el) {
        return el.published === true &&
        el.real_path.includes("sport/") === true;
      });
      return arraylinks;
    }
  },
};
</script>
<style scoped>
/* .menu_info {
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.4);
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
} */

/* .dropdown-toggle::after { */
  /* opacity: 0.5; */
/* } */
/* .menu_info .navbar {
  padding: 0;
  margin: 0;
} */
/* .menu_info .navbar-light .navbar-nav {
  margin: 0 40px 0 0;
  padding: 13px 0 13px 0;
  display: inline-block; 
  font-family: "helvetica47regularcondensed";
  font-size: 21px;
  color: #fff !important;
  background: transparent;
} */
.menu_info .navbar-light .navbar-nav .nuxt-link-active,
.menu_info .navbar-light .navbar-nav li a:hover {
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
a:hover{
  color: #f7e037;
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
}

.nav_sec.inner_top .navbar-brand {
  margin-top: 20px;
}

#my-nav-dropdown > text {
  color: #fff;
}

#my-nav-dropdown a:hover, #my-nav-dropdown a:active {
  color: #f7e037;
}
</style>


