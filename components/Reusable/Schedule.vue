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
          <tr v-for="sport in sports" :key="sport.id" @click="modalShow = !modalShow">
            <td width="14%"><strong>{{ sport.SportTitle }}</strong></td>
            <td class="location" width="30%"><fa :icon="['fas', 'map']" /><span class="venuename">{{ sport.Venues[0].VenueName }}</span></td>
            <td :class="[ sport.TursdayScheduleCode ? 'yellow' : ' ' ]">
              <template v-if="sport.TursdayScheduleCode">
                <p >{{sport.TursdayScheduleCode}}</p>
              </template>
            </td>
            <td :class="[ sport.FridayScheduleCode ? 'yellow' : ' ' ]">
              <div v-if="sport.FridayScheduleCode">
                {{sport.FridayScheduleCode}}
              </div>
            </td>
            <td :class="[ sport.SaturdayScheduleCode ? 'yellow' : ' ' ]">
              <template v-if="sport.SaturdayScheduleCode">
                {{sport.SaturdayScheduleCode}}
              </template>
            </td>
            <td :class="[ sport.SundayScheduleCode ? 'yellow' : ' ' ]">
               <template v-if="sport.SundayScheduleCode">
                {{sport.SundayScheduleCode}}
              </template>
            </td>
            <td :class="[ sport.MondayScheduleCode ? 'yellow' : ' ' ]">
               <template v-if="sport.MondayScheduleCode">
                {{sport.MondayScheduleCode}}
              </template>
            </td>
             <b-modal v-model="modalShow" scrollable hide-footer hide-header size="xl" centered class="modal">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                      <div class="m_logo"><img src="https://a.storyblok.com/f/76648/x/af4013eab5/badminton.svg" alt=""></div>
                    <h2 class="mr-auto">Badminton</h2>
                    <div class="align-self-center ml-auto d-flex">
                        <ul class="md_list">
                            <li><a href="#"><i class="fa fa-info"></i> <span>Games Information</span></a></li>
                            <li><a href="#"><i class="fa fa-file"></i> <span>Download Sport Info</span> </a></li>
                            <li><a href="#"><i class="fa fa-mouse-pointer"></i> <span>Enter on GOES</span></a></li>
                            <li class="arrow"><a href="#"><i class="fa fa-angle-left"></i> </a></li>
                            <li class="arrow"><a href="#"><i class="fa fa-angle-right"></i> </a></li>
                        </ul>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                  </div>
                  
                  <div class="modal-body">
                    <b-row>
                      <b-col sm="4" v-for="contentblock in sport.ContentBlocks" :key="contentblock.id">
                        <div class="ev_block">
                                <h3>{{contentblock.BlockTitle}}</h3>
                                <div class="detail" v-html="contentblock.BlockDetails">
                                </div>
                                <!-- <div class="detail">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Singles</label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Women & Men Open & 40+</p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Doubles</label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Women, Men & Mixed Open </p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Doubles</label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Team 40+</p>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                      </b-col> 
                    </b-row>

                        <!-- <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="ev_block">
                                <h3>Events</h3>
                                <div class="detail">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Singles</label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Women & Men Open & 40+</p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Doubles</label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Women, Men & Mixed Open </p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Doubles</label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Team 40+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="ev_block">
                                <h3>DATES</h3>
                                <div class="detail">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Saturday </label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Nov 23 day & evening </p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Sunday</label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Nov 24 day Doubles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="ev_block">
                                <h3>SPORT COORDINATOR</h3>
                                <div class="detail">
                                    <p>Badminton Victoria</p>
                                </div>
                            </div>
                            
                            <div class="ev_block">
                                <h3>ENTRY FEE</h3>
                                <div class="detail">
                                    <p>$65 per participant including GST for one event If entering both Singles and Doubles add $30 including GST</p>
                                    <p>This fee includes Online Accreditation ordered at time of entry. </p>
                                </div>
                            </div>
                            
                            <div class="ev_block">
                                <h3>ENTRY DEADLINES</h3>
                                <div class="detail">
                                    <p>Guaranteed Entry Deadline October 3 Only complete Entries with payment are guaranteed </p>
                                    <p>Final Entry Deadline October 17 Entries received</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="ev_block">
                                <h3>Events</h3>
                                <div class="detail">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Singles</label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Women & Men Open & 40+</p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Doubles</label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Women, Men & Mixed Open </p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Doubles</label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Team 40+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="ev_block">
                                <h3>DATES</h3>
                                <div class="detail">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Saturday </label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Nov 23 day & evening </p>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <label>Sunday</label>
                                        </div>
                                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                            <p>Nov 24 day Doubles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="ev_block">
                                <h3>SPORT COORDINATOR</h3>
                                <div class="detail">
                                    <p>Badminton Victoria</p>
                                </div>
                            </div>
                            
                            <div class="ev_block">
                                <h3>ENTRY FEE</h3>
                                <div class="detail">
                                    <p>$65 per participant including GST for one event If entering both Singles and Doubles add $30 including GST</p>
                                    <p>This fee includes Online Accreditation ordered at time of entry. </p>
                                </div>
                            </div>
                            
                            <div class="ev_block">
                                <h3>ENTRY DEADLINES</h3>
                                <div class="detail">
                                    <p>Guaranteed Entry Deadline October 3 Only complete Entries with payment are guaranteed </p>
                                    <p>Final Entry Deadline October 17 Entries received</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div class="ev_block">
                                <h3>VENUE</h3>
                                <div class="detail detail_2">
                                    <p>Melbourne Sports & Aquatic Centre Aughtie Dr ALBERT PARK</p>
                                    <div class="map_info">
                              
                                    </div>
                                    <p>Sport Venue Control Location – Inside Badminton Hall MSAC </p>
                                    <p>Limited parking at a fee – public transport suggested Drinks, food and all facilities available</p>
                                </div>
                            </div>
                        </div> -->
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </b-modal>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
 
</div>
</template>

<script>

import sports from '~/data/SportScheduleStructureExample.json';

export default {
  data () {
  return {
    // showModal: false,
    modalShow: false,
    sports: sports.Sports
    }
  },

  components: {
  
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
    // $.getJSON('http://ilikecoding.net/membership/api/memberships', json => {
    //   this.Sports = json.data
    //   console.log(json.data)
    // })
   
  },
  computed: {
    contentblock () {
      for (let i= 0; i<sports.lenth; i++) {
        return contentblock
      }
    }
  },
  methods: {
    showModal() {
      this.$refs['bad_modal'].show()
    },
    hideModal() {
      this.$refs['bad_modal'].hide()
    },
  }
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
		max-width: 85%;
	}
	.modal-body {
		border: none;
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
	.modal-body {
		padding: 40px 60px;
	}
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
					line-height: 96px;
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
.modal [class^="col-"], .modal > [class*=" col-"] {
	padding: 0 25px;
}


</style>
