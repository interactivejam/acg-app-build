<template>
  <footer class="bottom-footer">
  <div class="footer_detail">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-7 col-lg-5 col-md-5 col-sm-12">
                <h3>Join the Community</h3>
                <a href="#" class="fb_link"><fa :icon="['fab', 'facebook-f']"/></a>
                <a href="#" class="game_btn">Contact Corporate Games</a>
            </div>

            <div class="col-xl-5 col-lg-7 col-md-7 col-sm-12">
                <h3>Corporate Games</h3>
                <ul class="ft_list">
                    <li v-for="global in global" :key="global.id">
                      <a :href="global.content.URL">
                      <img v-if="global.content.footer_logo"
                      :src="global.content.footer_logo"
                      alt="global.name" /></a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="copyright">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    © {{ new Date().getFullYear() }} Corporate Games
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <ul class="privacy_link">
                        <li><a href="/terms-conditions">Terms &amp; Conditions.</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

  </footer>
</template>

<script>

export default {
  data () {
    return {
      global: []
    }
  },
  props: ['blok'],
  mounted() {
     this.$storyapi.get('cdn/stories', {
        starts_with: 'global/',
        is_startpage: '0',
        cv: this.$store.state.cacheVersion
      })
      .then((res) => {
        this.global = res.data.stories
      })
      .catch((res) => {
        console.error('Failed to load resource', res)
      })
  }
}
</script>

<style lang="scss">

@import "../assets/scss/elements/colors.scss";

footer{ margin:0px; padding:0px; position:absolute; bottom:0; left:0; right:0; margin-top: -300px;}

.footer_detail{ margin:0; padding:1.250em 0 0 0; background:#454545;}
.footer_detail {
  h3{ margin:25px 0 1.250em 0; padding:0; font-size:1.125em; color:$white;}
}
.footer_detail {
  .fb_link{ width:2.750em; height:2.750em; display:inline-block; background:#4f63ce; text-align:center; line-height:2.750em; font-size:1.125em; color:$white; border-radius:50%; margin:0 0.625em 0 0; padding:0;}
}
.footer_detail {
  .fb_link{
    &:hover{ background:$red; color:$white;}
  }
}
.game_btn{ margin:0; padding:0.625em 1.875em; display:inline-block; border:1px solid #979797; border-radius:1.875em; font-size:0.875em; color:$white;}
.game_btn{
  &:hover{ background:$red; border-color:$red; color:$white;}
}

ul{
  &.ft_list{ display:flex; justify-content: space-between;}
}
ul{
  &.ft_list {
    li{ width: 30%;}
    & li:last-child { margin:0}
  }
}
ul{
  &.ft_list {
    li {
      a{ margin:0; padding:0;}
      img { width: 100%;}
    }
  }
}

.copyright{ margin:0; padding:2.500em 0 1.250em 0; font-size:0.875em; color:$gray-500;}
ul{
  &.privacy_link{ margin:0; padding:0; text-align:right;}
}
ul{
  &.privacy_link {
    li{ margin:0 0 0 1.250em; padding:0; display:inline-block; font-size:0.875em; color:$gray-500;}
  }
}
ul{
  &.privacy_link {
    li {
      a{ color:$gray-500;}
    }
  }
}
ul{
  &.privacy_link {
    li {
      a{
        &:hover{ color:$red;}
      }
    }
  }
}


</style>
