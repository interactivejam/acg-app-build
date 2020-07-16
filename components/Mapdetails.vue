<template>
<div v-editable="blok">
  <div class="container part_sec">
    <div class="row">
      <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
        <h1>{{selectedmarker[0].dates}} - {{selectedmarker[0].itemDesc}}</h1>
        <p>{{selectedmarker[0].itemDesc}}</p>
        <div><span class="note">Dates</span><span>{{selectedmarker[0].dates_n}}</span></div>
        <hr style="height: 1px; background-color: #ccc; border: none; margin:0">
        <span class="note">Venue Control</span><span>{{selectedmarker[0].venueControl}}</span>
        <hr style="height: 1px; background-color: #ccc; border: none; margin:1px">
        <span class="note">Notes</span><span>{{selectedmarker[0].Notes}}</span><br>
        <gmap-map :center="markerposition" :zoom="12" style="width: 100%; height: 500px; margin: 30px 0;">
          <gmap-marker
            :position="markerposition"
            :icon="{ url: require('../assets/images/venue-flag-red.svg'),
            size: {width: 56, height: 56, f: 'px', b: 'px'},
            scaledSize: {width: 53, height: 53, f: 'px', b: 'px'}}"
          />
        </gmap-map>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
        <div class="rem_info" v-for="global in global" :key="global.id">
          <div class="" v-if="importDate_blok">
            <div v-for="dates in global.content.important_dates" :key="dates.id">
              <Importantdates v-bind:blok="dates"/>
            </div>
          </div>
            <div class="date_info" v-if="highlights_blok">
              <div class="d-flex flex-wrap justify-content-between align-items-stretch">
                  <div class="highlights" v-for="highlights in global.content.highlights" :key="highlights.id">
                    <Highlights v-bind:blok="highlights"/>
                  </div>
                </div>
            </div>
          <div class="sponsor" v-if="sponsor_blok">
            <h2>Corporate Games Supporter</h2>
              <div class="d-flex flex-column">
                <div class="flex-fill align-items-stretch" v-for="sponsor in global.content.sponsor" :key="sponsor.id">
                  <Supporter v-bind:blok="sponsor"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Search from '~/components/Search.vue';
import Gamesmenu from '~/components/Reusable/Gamesmenu.vue';
import Global from '~/components/Global/global.vue';
import Importantdates from '~/components/Reusable/Importantdates.vue';
import Highlights from '~/components/Reusable/Highlights.vue';
import Supporter from '~/components/Reusable/Supporter.vue';
import Schedule from '~/components/Reusable/Schedule.vue';
import Map from '~/components/Reusable/Map.vue';
// import func from '../vue-temp/vue-editor-bridge';
import json from '../Data/venu.json'

export default {
  data () {
  return {
      global: [],
      faq: [],
      category: [],
      mapdata: json.data,
    }
  },

  components: {
    Search,
    Gamesmenu,
    Global,
    Importantdates,
    Highlights,
    Supporter,
    Schedule,
    Map
  },

  props: ['blok'],

  mounted() {
    this.$storyapi.get('cdn/stories', {
      starts_with: 'global/vic-corporate-games',
      cv: this.$store.state.cacheVersion
    })
    .then((res) => {
      this.global = res.data.stories
    })
    .catch((res) => {
      console.error('Failed to load resource', res)
    })

    this.$storyapi.get
    ('cdn/stories',
      {
        starts_with: 'faq/',
        is_startpage: '0',
        cv: this.$store.state.cacheVersion
      }
    )
    .then((res) => {
      this.faq = res.data.stories
    })
    .catch((res) => {
      console.error('Failed to load resource', res)
    })

    this.$storyapi.get('cdn/stories', {
      starts_with: 'category/',
      cv: this.$store.state.cacheVersion
    })
    .then((res) => {
      this.category = res.data.stories
    })
    .catch((res) => {
      console.error('Failed to load resource', res)
    })
  },
  computed: {
    importDate_blok: function() {
      var date_temp = this.blok.body[3].reference;
      return date_temp.includes('important_date')
    },
    highlights_blok: function() {
      var highlights_temp = this.blok.body[3].reference;
      return highlights_temp.includes('highlights')
    },
    sponsor_blok: function() {
      var sponor_temp = this.blok.body[3].reference;
      return sponor_temp.includes('sponor')
    },
    selectedmarker() {
      let markerid = Object.keys(this.$route.query)[0];
      console.log("markerid", markerid)
      return this.mapdata.filter(el => {
        if(el.itemID == markerid)
        return el
      })
    },
    markerposition() {
      let marker = {
        lat: this.selectedmarker[0].lat,
        lng: this.selectedmarker[0].lng
      };
      return marker;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/vicnav.scss";
@import "../assets/scss/elements/colors.scss";
@import "../assets/scss/components/games_following.scss";

.date_info [class^="col-"]:nth-child(odd), .date_info > [class*=" col-"]:nth-child(odd) {
    padding: 5px 5px 5px 15px;
    height: 100%;
}
.date_info [class^="col-"]:nth-child(even), .date_info > [class*=" col-"]:nth-child(even) {
    padding: 5px 15px 5px 5px;
    height: 100%;
}

h1.title {
  margin-bottom: 0.75em;
  padding-bottom: 0.75em;
  border-bottom: 2px solid #f6f5f5;
}
h4.title {
  margin-bottom: 0.25em;
  padding-bottom: 0.5em;
  padding-top: 0em;
  border-bottom: 2px solid #ffffff;
}
.part_sec {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0;
  li {
  list-style: disc;
  opacity: 0.75;
  margin-left: 1em;}
}
.rem_info {
    margin: 0;
    padding: 0;
}
.date {
  font-family: 'MYRIADPRO-CONDIT', sans-serif;
  letter-spacing: 0.15em;
  color:#3f3f40;
  margin: 1.5em 0 1em 1em;
  opacity: 1;
  font-size: 0.85em;
}
.date span {
  padding: 0 0.5em;
}
.sponsor {
    margin: 0 0 5px 0;
    padding: 30px 30px 15px 30px;
    background: #f6f5f5;
}
.highlights {
  width: 100%;
}

.note {
  color: gray;
  font-size: 14px;
  width: 100px;
  margin-bottom: 5px;
  display: inline-block
}

.place-detail {
  display: flex;
  justify-content: space-between;
}

</style>
