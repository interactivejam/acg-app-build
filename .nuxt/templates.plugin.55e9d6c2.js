import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faAngleRight as fortawesomefreesolidsvgicons_faAngleRight } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faAngleRight)

    import  { faSearch as fortawesomefreesolidsvgicons_faSearch } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faSearch)

    import  { fas as fortawesomefreesolidsvgicons_fas } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_fas)

    import  { fab as fortawesomefreebrandssvgicons_fab } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_fab)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
Vue.component('fa-layers-text', FontAwesomeLayersText)
