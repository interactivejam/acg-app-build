<template>
<div v-editable="blok">
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

</template>

<script>

import data from '~/data/SportScheduleStructureExample.json';
import Modal from "../Modal/Modal";

export default {
  data () {
  return {
    showModal: false,
    sports: [],
    }
  },

  components: {
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
