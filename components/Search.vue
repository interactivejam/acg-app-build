<template>
  <form class="searchbox m-0 col-md-4" :class="{'searchbox-open': isOpen}" id="searchbox" style="transform: translate(0px, 50%);">
    <input
      type="search"
      placeholder="Search......"
      name="search"
      class="searchbox-input"
      id="searchbox-input"
      required
      ref="inputbox"
      v-on:blur="handleBlur"
      v-on:keyup.enter="handleKeyup($event.target.value)"
    />
    <input type="submit"  class="searchbox-submit d-none" id="searchbox-submit" value="GO" />
    <span v-on:click="openSearchBox"  class="searchbox-icon" id="searchbox-icon">
      <fa :icon="['fas', 'search']" />
    </span>
  </form>
</template>
<script>
import Vue from 'vue';
export default {
  data() {
    return {
      isOpen: false,
      searchlinks: []
    };
  },

  mounted () {
    this.$storyapi
    .get("cdn/links", {
      // starts_with: `vic/`,
      cv: this.$store.state.cacheVersion
    })
    .then((res) => {
      this.searchlinks = res.data.links
      console.log("links", this.searchlinks)
    })
    .catch(res => {
      console.error("Failed to load resource", res);
    });
  }, 

  methods: {
    openSearchBox() {
      if (this.isOpen === false) {
        this.isOpen = true;
        this.$refs.inputbox.focus();
      } else {
        this.isOpen = false;
        this.$refs.inputbox.blur();
      }
    },
    handleBlur() {
      this.$refs.inputbox.blur();
      this.isOpen = false;
    },
    handleKeyup(value) {
      var arraylinks = Object.values(this.searchlinks).filter(function (el) {
        return el.name.toLowerCase() === value.toLowerCase() && el.published == true
      });
      console.log("arraus", arraylinks)
      alert("arrays")
      var searchsrc = arraylinks.find(function(el) { 
        return el.name.toLowerCase() === value.toLowerCase(); 
      });    
      console.log("slug", searchsrc)
      alert(searchsrc.real_path)
      location.href = searchsrc.real_path;      
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/elements/colors.scss";

.searchbox {
  position: relative;
  min-width: 2.813em;
  width: 0%;
  height: 2.813em;
  float: right;
  overflow: hidden;
  -webkit-transition: width 0.3s;
  -moz-transition: width 0.3s;
  -ms-transition: width 0.3s;
  -o-transition: width 0.3s;
  transition: width 0.3s;
  border-radius: 50px;
  top: -.85em;
}

.searchbox {
  .searchbox-input {
    top: 0;
    right: 0;
    border: 0;
    background: $gray-300;
    width: 100%;
    height: 2.813em;
    margin: 0;
    padding: 0px 3.438em 0px 20px;
    font-size: $font16;
    color: $dblack;
    border-radius: 50px;
  }
}
.searchbox {
  .searchbox-input {
    &::-webkit-input-placeholder {
      color: $dblack;
    }
  }
}
.searchbox {
  .searchbox-icon,
  .searchbox-submit {
   width: 45px;
    height: 45px;
    display: block;
    position: absolute;
    top: 0;
    font-size: 18px;
    right: 0;
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    line-height: 43px;
    text-align: center;
    cursor: pointer;
    color: #171616;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    -webkit-transition: all .6s ease-in-out;
    -moz-transition: all .6s ease-in-out;
    -o-transition: all .6s ease-in-out;
    -ms-transition: all .6s ease-in-out;
    transition: all .6s ease-in-out;
  }
}
.searchbox {
  &.searchbox-open {
    width: 20%;
  }
}
.searchbox {
  &:hover {
    .searchbox-icon {
      background-color: $red;
      color: $white;
    }
  }
}
.search_box {
  margin: 0;
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.search_box {
  .searchbox {
    float: left;
    margin: 0;
  }
}
.search_box {
  .searchbox-open {
    width: 30%;
  }
}
.search_box {
  .nav_sec {
    padding: 0;
  }
}

$breakpoint-tablet: 600px;
@media (max-width: $breakpoint-tablet) {
  .search_box {
    .searchbox-open {
      width: 50%;
    }
  }
}

.searchbox .searchbox-input {
    top: 0;
    right: 0;
    border: 0;
    outline: 0;
    background: transparent;
    width: 100%;
    height: 45px;
    margin: 0;
    padding: 0px 55px 0px 20px;
    font-size: 16px;
    color: #171616;
    border-radius: 50px;
}
.searchbox.searchbox-open .searchbox-input {
    background: #ffffff;
    }
#searchbox{
  background: rgba(255,255,255,0.5);
}
#searchbox.searchbox-open {
  background: rgba(255,255,255,1);
}
</style>
