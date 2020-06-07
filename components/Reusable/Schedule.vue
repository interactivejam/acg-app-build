<template>
<div v-editable="blok">
  <header>
    <div class="nav_sec top_part inner_top">
      <div class="container-fluid">
          <div class="col-12">
            <a class="navbar-brand text-center d-block d-sm-block d-md-block d-lg-none d-xl-none" v-for="global in global" :key="global.id"
              :href="global.content.URL">
              <img :src="global.content.footer_logo"
                alt="Corporate Games" />
            </a>
            <div class="inner d-none d-sm-none d-md-none d-lg-block d-xl-block">
              <Search />
              <nav class="navbar navbar-expand-md navbar-light">
                <a class="navbar-brand" v-for="global in global" :key="global.id"
                :href="global.content.URL">
                <img :src="global.content.footer_logo"
                    alt="Corporate Games" />
                <div class="date">{{ global.content.Dates }}<span>•</span>{{ global.content.Location }}<span>•</span>{{ global.content.Year }}</div>
                </a>
                <div class="collapse navbar-collapse" id="Navigation">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="/Contact Us">Contact</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/">Corporate Games</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
      </div>
    </div>
  </header>
  <!--Section-->
  <section>
    <!--Inner Banner -->
    <div class="inner_banner">
      <div class="container-fluid">
        <div class="col-md-4 ml-md-auto" v-for="global in global" :key="global.id">
          <!-- <P>{{ get_bannerimage }}</P> -->
          <img :src="get_bannerimage.filename" alt="Corporate Games"  class="align-self-end" />
        </div>
      </div>
    </div>
    <!-- Menu Sec -->
    <div class="menu_info">
      <div class="container col-c-xl-12">
        <Gamesmenu v-bind:blok="blok"/>
      </div>
    </div>
  </section>
  <div class="container part_sec">
    <div class="row">
      <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <h1 class="title">{{ blok.Title }}</h1>
          <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component"></component>

          <div class="table_info">
              <div class="table-responsive">
                 <table class="table">
                    <thead>
                      <tr>
                        <th colspan="3">22-24 November 2020</th>
                        <th width="5%">Thu<strong>21</strong></th>
                        <th width="5%">Fri<strong>22</strong></th>
                        <th width="5%">SAT<strong>23</strong></th>
                        <th width="5%">SUN<strong>24</strong></th>
                        <th width="5%">Mon<strong>25</strong></th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr v-for="sport in sports">
                        <td width="14%"><strong>{{ SportTitle }}.svg</strong></td>
                        <td width="14%"><strong>{{ SportTitle }}</strong></td>
                        <td class="location"><i class="fa fa-map"></i> {{ venues }}</td>
                        <td>
                          <template if="ThursdayScheduleCode">
                            time
                          </template>
                        </td>
                        <td>
                          <template if="FridayScheduleCode">
                            time
                          </template>
                        </td>
                        <td>
                          <template if="SaturdayScheduleCode">
                            time
                          </template>
                        </td>
                        <td>
                          <template if="SundayScheduleCode">
                            time
                          </template>
                        </td>
                        <td>
                          <template if="MondayScheduleCode">
                            time
                          </template>
                        </td>
                    </tr>
                 </tbody>
              </table>

      </div>
      <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">

          <div class="rem_info" v-for="global in global" :key="global.id">
            <div class="" v-if="importDate_blok">
              <div v-for="dates in global.content.important_dates" :key="dates.id">
                <Importantdates v-bind:blok="dates"/>
              </div>
            </div>
             <div class="date_info" v-if="highlights_blok">
                <div class="d-flex flex-wrap justify-content-between align-items-stretch">
                  <div class="highlight" v-for="highlights in global.content.highlights" :key="highlights.id">
                    <Highlights v-bind:blok="highlights"/>
                  </div>
                </div>
              </div>
            <div class="sponsor" v-if="sponsor_blok">
                <h2>Corporate Games Supporter</h2>
                  <div class="d-flex flex-wrap justify-content-between align-items-stretch">
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
import data from '~/data/SportScheduleStructureExample.json';
import Modal from "../Modal/Modal";

export default {
  data () {
  return {
    global: [],
    showModal: false,
    sports: [],
    }
  },

  components: {
    Search,
    Gamesmenu,
    Global,
    Importantdates,
    Highlights,
    Supporter,
    Modal
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
    openModal: function () {
      this.showModal = true;
    }

  },
  computed: {

  }
};
</script>

<style scoped>
.table_info {
  margin: 0;
  padding: 0;

  .table {
    margin: 0;
    padding: 0;

    thead th {
      margin: 0;
      padding: 15px 10px 10px 10px;
      border: none;
      font-size: 21px;
      color: #fff;
      text-transform: uppercase;
      font-weight: 400;
      vertical-align: middle;
      background: #fff;
      border-right: 1px solid #fff;

      strong {
        font-size: 28px;
        font-family: "helvetica47boldcondensed";
        display: block;
        line-height: 24px;
      }

      &:nth-child(1) {
        font-size: 28px;
        color: #171616;
        text-transform: none;
      }

      &:nth-child(2) {
        background: #f26065;
        text-align: center;
        border-radius: 30px 0 0 0;
      }

      &:nth-child(3) {
        background: #f03e45;
        text-align: center;
      }

      &:nth-child(4) {
        background: #ed1c24;
        text-align: center;
      }
    }

    tbody {
      td {
        margin: 0;
        padding: 20px 30px;
        border: none;
        vertical-align: middle;
        font-size: 16px;
        color: #171616;
        border-bottom: 2px solid #fff;
        cursor: pointer;

        strong {
          font-size: 21px;
          color: #ed1c24;
          font-family: "helvetica47regularcondensed";
        }

        &.yellow {
          background: #ffe800;
        }

        &:nth-child(3) {
          border-right: 1px solid #fff;
          border-left: 1px solid #fff;
          padding: 15px;
        }

        &:nth-child(4) {
          padding: 15px;
        }
      }

      i {
        margin-right: 5px;
      }
    }
  }

  thead tr:first-child {
    background: none !important;
  }

  tr {
    &:nth-child(even) {
      background: #ebe8e8;
    }

    &:nth-child(odd) {
      background: #f6f5f5;
    }

    &:hover {
      background: #ffe800;
    }
  }
}

</style>
