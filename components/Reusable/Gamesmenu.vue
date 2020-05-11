<template>
  <div>
    <b-nav class="navbar navbar-expand-lg navbar-light d-none d-sm-none d-md-none d-lg-block d-xl-block">
      <div class="collapse navbar-collapse" id="Navigation">
            <b-nav-item-dropdown id="my-nav-dropdown" text="Organise Your Team" toggle-class="nav-link">
              <b-dropdown-item
                v-for="item in get_organiseSlug"
                :key="item.id"
                :to="{ path: item.real_path}"
              >{{ item.name }}</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown id="my-nav-dropdown" text="Sport" toggle-class="nav-link">
              <b-dropdown-item
                v-for="item in get_sportSlug"
                :key="item.id"
                :to="{ path: item.real_path}"
              >{{ item.name }}</b-dropdown-item>
            </b-nav-item-dropdown>
          <div class="row">
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
         el.name === "FAQ" || el.name ==="Results" || el.name === "Games Awards";
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
<style>

li.nav-item .nav-link {
  display: block;
    padding: 0 1.25rem 0 0;
     font-size: 21px;
  color: #ffffff;
  font-family: "helvetica47regularcondensed";
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

.dropdown-toggle::after {
    opacity: 0.5;
}

.dropdown-menu.dropdown-menu.show {
  border-radius: 0;
  border: none;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  padding: 0px;
  margin: 0;
  background: rgba(0, 0, 0, 0.9);
  min-width: 12em;
  left: -30px !important;
}
.dropdown-menu.dropdown-menu.show .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.75rem 1.5rem;
    clear: both;
    font-weight: 400;
    font-size: 18px;
  color: #ffffff;
  font-family: "helvetica47regularcondensed";
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
.dropdown-menu.dropdown-menu.show .dropdown-item:hover, .dropdown-menu.dropdown-menu.show .dropdown-item:active {
  background-color: #f7e037;
  color:#171616 !important;
}


</style>


