<template>
  <div>
    <gmap-map :center="center" :zoom="12">
      <gmap-marker
        v-for="item in gmarkers"
        :key="item.itemID"
        :position="item.position"
        :icon="{ url: require('../../assets/images/venue-flag-green.svg'),
        size: {width: 56, height: 56, f: 'px', b: 'px'},
        scaledSize: {width: 53, height: 53, f: 'px', b: 'px'}}"
        @click="center=item.position"
      />
      <gmap-marker
        v-for="item in rmarkers"
        :key="item.itemID"
        :position="item.position"
        :icon="{ url: require('../../assets/images/venue-flag-red.svg'), 
        size: {width: 56, height: 56, f: 'px', b: 'px'},
        scaledSize: {width: 53, height: 53, f: 'px', b: 'px'}}"
        @click="center=item.position"
      />
    </gmap-map>
    <br>
    <div class="green-markers">
      <b-row>
        <b-col cols="6" 
        style="display: flex; justify-content: start;" 
        v-for="(gmarker, index) in greenmarkers" :key="index">
       
            <span class="gspanImage"><span>{{index + 1}}</span></span>
            <!-- <a href="" class="marker-dates">{{gmarker.dates}}</a> -->
            <span class="venuename">
              <nuxt-link :to="{name: 'vic-sport-slug-mapdetails', params: { mapdetails: gmarker.dates}}" class="marker-dates">{{gmarker.dates}}</nuxt-link>
              <!-- <a v-bind:href="'/vic/sport/venue-details-maps/'+ gmarker.dates">{{gmarker.dates}}</a> -->
              <br>
              <span style="vertical-align: baseline; margin-left: 35px; margin-top: 15px">{{gmarker.itemDesc}}</span>
            </span>
        </b-col>
      </b-row>
    </div>
    <hr style="border-top: 1px dashed black;">
    <div class="red-markers">
      <b-row>
        <b-col cols="6" style="display: flex; justify-content: start; align-items: center;" 
        v-for="(rmarker, index) in redmarkers" :key="index">
           <span class="rspanImage"><span>{{index + 1}}</span></span>
           <nuxt-link :to="{name: 'vic-sport-slug-mapdetails', params: { mapdetails: rmarker.dates}}" class="marker-dates">{{rmarker.dates}}</nuxt-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

import json from '../../Data/venu.json'

export default {
  data() {
    return {
      mapdata: json.data,
      center: { lat: -37.843292, lng: 144.961767 },
      gmarkers: [],
      rmarkers: []
    };
  },

  mounted() {
    this.getGMarkers();
    this.getRMarkers();
  },

  computed: {
    greenmarkers() {
      return this.mapdata.filter(el => {
        return el.placemaker == "Green"
      })
    },

    redmarkers() {
      return this.mapdata.filter(el => {
        return el.placemaker == "Red"
      })
    }
  },

  methods: {
    getGMarkers() {
      return this.mapdata.filter(el => {
        if(el.placemaker == "Green") {
          const marker = {
            lat: el.lat,
            lng: el.lng
          };
          return this.gmarkers.push({position: marker}) 
        }
      })
    },

    getRMarkers() {
      return this.mapdata.filter(el => {
        if(el.placemaker == "Red") {
           const marker = {
          lat: el.lat,
          lng: el.lng
        };
        return this.rmarkers.push({position: marker})
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
.red-markers {
  margin-bottom: 30px;
}
.gspanImage{
  background-image: url(/_nuxt/assets/images/venue-flag-green.svg);
  background-repeat: no-repeat;
  position: absolute;
  color: white;
  /* padding: 13px; */
  width: 30px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rspanImage{
  background-image: url('../../assets/images/venue-flag-red.svg');
  background-repeat: no-repeat;
  position: absolute;
  color: white;
  /* padding: 13px; */
  width: 30px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.marker-dates {
  color: black; 
  margin-left: 35px; 
}

</style>