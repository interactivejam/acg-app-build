<template>
  <div v-editable="blok">
    <div class="table_info">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th colspan="2">Melbourne, 22-24 November 2020</th>
              <th width="5%">Thu<strong>21</strong></th>
              <th width="5%">Fri<strong>22</strong></th>
              <th width="5%">SAT<strong>23</strong></th>
              <th width="5%">SUN<strong>24</strong></th>
              <th width="5%">Mon<strong>25</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="sport in sports.Sports"
              :key="sport.id"
              @click="showModal(sport)"
            >
              <td width="14%">
                <strong>{{ sport.SportTitle }}</strong>
              </td>
              <td
                class="location"
                width="30%"
                v-if="sport.Venues && sport.Venues.length"
              >
                <fa :icon="['fas', 'map']" /><span class="venuename">{{
                  sport.Venues[0].VenueName
                }}</span>
              </td>
              <td :class="[sport.TursdayScheduleCode ? 'yellow' : ' ']">
                <template v-if="sport.TursdayScheduleCode">
                  <p>{{ sport.TursdayScheduleCode }}</p>
                </template>
              </td>
              <td :class="[sport.FridayScheduleCode ? 'yellow' : ' ']">
                <div v-if="sport.FridayScheduleCode">
                  {{ sport.FridayScheduleCode }}
                </div>
              </td>
              <td :class="[sport.SaturdayScheduleCode ? 'yellow' : ' ']">
                <template v-if="sport.SaturdayScheduleCode">
                  {{ sport.SaturdayScheduleCode }}
                </template>
              </td>
              <td :class="[sport.SundayScheduleCode ? 'yellow' : ' ']">
                <template v-if="sport.SundayScheduleCode">
                  {{ sport.SundayScheduleCode }}
                </template>
              </td>
              <td :class="[sport.MondayScheduleCode ? 'yellow' : ' ']">
                <template v-if="sport.MondayScheduleCode">
                  {{ sport.MondayScheduleCode }}
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal
      v-model="modalShow"
      scrollable
      hide-footer
      hide-header
      size="xl"
      centered
      class="modal"
    >
      <!-- <div class="modal-dialog modal-dialog-centered"> -->
      <div class="modal-content-1">
        <div class="modal-header">
          <div class="m_logo">
            <img
              src="https://a.storyblok.com/f/76648/x/af4013eab5/badminton.svg"
              alt=""
            />
          </div>
          <h2 class="mr-auto">Badminton</h2>
          <div class="align-self-center ml-auto d-flex">
            <ul class="md_list">
              <li>
                <a href="#"
                  ><i class="fa fa-info"></i> <span>Games Information</span></a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-file"></i>
                  <span>Download Sport Info</span>
                </a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-mouse-pointer"></i>
                  <span>Enter on GOES</span></a
                >
              </li>
              <li class="arrow">
                <a href="#"><i class="fa fa-angle-left"></i> </a>
              </li>
              <li class="arrow">
                <a href="#"><i class="fa fa-angle-right"></i> </a>
              </li>
            </ul>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              @click="hideModal()"
            >
              &times;
            </button>
          </div>
        </div>

        <div class="modal-body-1">
          <b-row>
            <b-col sm="4" v-for="content in contentBlocks" :key="content.id">
              <div class="ev_block">
                <h3>{{ content.BlockTitle }}</h3>
                <div class="detail" v-html="content.BlockDetails"></div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <!-- </div> -->
    </b-modal>
  </div>
</template>

<script>
// import sports from '~/data/SportScheduleStructureExample.json';
// const jsonUrl = '~/data/SportScheduleStructureExample.json';
import axios from "axios";
const jsonUrl =
  "https://cors-anywhere.herokuapp.com/https://acg-goes-json-uploads.s3-ap-southeast-2.amazonaws.com/vic/games-details.json";
export default {
  data() {
    return {
      modalShow: false,
      sports: {},
      contentBlocks: [],
    };
  },

  components: {},

  props: ["blok"],

  async mounted() {
    await this.loadSports();
    this.$storyapi
      .get("cdn/stories", {
        starts_with: "global/vic-corporate-games",
        cv: this.$store.state.cacheVersion,
      })
      .then((res) => {
        this.global = res.data.stories;
      })
      .catch((res) => {
        console.error("Failed to load resource", res);
      });
    // $.getJSON('http://ilikecoding.net/membership/api/memberships', json => {
    //   this.Sports = json.data
    //   console.log(json.data)
    // })
  },
  computed: {
    contentblock() {
      for (let i = 0; i < sports.length; i++) {
        return contentblock;
      }
    },
  },
  methods: {
    showModal(sport) {
      console.log("here");
      this.modalShow = true;
      this.contentBlocks = sport.ContentBlocks;
    },
    hideModal() {
      this.modalShow = false;
    },
    async loadSports() {
      try {
        const { data } = await axios.get(jsonUrl);
        console.log("data", data);
        this.sports = data;
      } catch (error) {
        console.log("error while fetching sports data", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
      &:nth-child(5) {
        background: #ed1c24;
        text-align: center;
      }
      &:nth-child(6) {
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

        .venuename {
          margin-left: 10px !important;
        }

        strong {
          font-size: 21px;
          color: #ed1c24;
          font-family: "helvetica47regularcondensed";
        }

        &.yellow {
          background: #ffe800 !important;
        }

        &:nth-child(3) {
          border-right: 1px solid #fff;
          border-left: 1px solid #fff;
          padding: 15px;
        }
        &:nth-child(4) {
          border-right: 1px solid #fff;
          border-left: 1px solid #fff;
          padding: 15px;
        }
        &:nth-child(5) {
          border-right: 1px solid #fff;
          border-left: 1px solid #fff;
          padding: 15px;
        }

        &:nth-child(6) {
          border-right: 1px solid #fff;
          border-left: 1px solid #fff;
          padding: 15px;
        }
        &:nth-child(6) {
          border-right: 1px solid #fff;
          border-left: 1px solid #fff;
          padding: 15px;
        }
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

.modal {
  .modal-dialog {
    max-width: 100%;
    margin: 0;
  }
  .modal-body-1 {
    border: none;
    padding: 30px;
    border-radius: 30px;
  }
  .modal-header {
    margin: 0;
    padding: 0;
    background: #f6f5f5;
    border-radius: 30px 30px 0 0;
    border: none;
    display: flex;
    .m_logo {
      width: 100px;
      height: 100px;
      margin: 0 30px 0 0;
      padding: 0;
      display: inline-block;
      background: #ed1c24;
      border-radius: 30px 0 30px 0;
      text-align: center;
      line-height: 100px;
    }
    h2 {
      margin: 0;
      padding: 0;
      font-size: 24px;
      color: #171616;
      display: inline-block;
      align-self: center;
    }
  }
  .close {
    float: none;
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 100px;
    display: inline-block;
  }
  // .modal-body {
  // 	padding: 40px 60px;
  // }
  .ev_block {
    margin: 0 0 10px 0;
    padding: 0;
    h3 {
      margin: 0;
      padding: 8px 25px;
      background: #f6f5f5;
      font-size: 16px;
      color: #171616;
      text-transform: uppercase;
    }
    .detail {
      margin: 0;
      padding: 20px 25px;
      font-size: 14px;
      color: #171616;
      label {
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #171616;
        font-weight: 500;
      }
    }
  }
  .map_info {
    margin: 15px 0;
    padding: 0;
    line-height: 0;
  }
  .row {
    margin: 0 -25px;
  }
}
ul {
  &.md_list {
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: "helvetica47regularcondensed";
    display: flex;
    li {
      margin: 0 0 0 2px;
      padding: 0;
      a {
        margin: 0;
        padding: 26px 15px;
        display: inline-block;
        background: #c9c8c8;
        font-size: 18px;
        color: #171616;
        i {
          display: block;
          margin-bottom: 5px;
        }
        &:hover {
          background: #ed1c24;
          color: #fff;
        }
      }
      &.arrow {
        a {
          line-height: 86px;
          padding: 3px 40px;
          i {
            display: inline-block;
          }
        }
      }
    }
  }
}
.ev_block {
  .detail {
    p {
      margin: 0;
      padding: 0;
      font-size: 14px;
      color: #171616;
    }
    &.detail_2 {
      padding: 20px 0;
      p {
        font-size: 16px;
      }
    }
  }
}
.modal [class^="col-"],
.modal > [class*=" col-"] {
  padding: 0 25px;
}
</style>
