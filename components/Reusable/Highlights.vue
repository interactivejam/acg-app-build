<template>
  
    <a href="#" class="date_block">
        <figure>
            <img :src="blok.Icon" alt>
        </figure>
        <h3><fa class="icon" :icon="['fas', 'angle-right']" />{{blok.Name}}</h3>
    </a>
   
</template>

<script>
export default {
  props: ["blok"]
};
</script>
<style scoped>
.date_info {
    margin: 0;
    padding: 5px 0 0 0;
}
.date_block {
    margin: 0 0 10px 0;
    padding: 25px 30px;
    background: #f6f5f5;
    display: block;
}
.date_block:hover {
    background: #ed1c24;
}
.date_block:hover .icon {
    color: #fff;
}
.date_block figure {
    width: 140px;
    height: 40px;
}
.date_block figure {
    margin: 0 0 15px 0;
    padding: 0;
}
.date_block h3 {
    margin: 0;
    padding: 0 0 0 20px;
    font-size: 16px;
    color: #171616;
    position: relative;
    clear: both;
    -webkit-transition: all .6s ease-in-out;
    -moz-transition: all .6s ease-in-out;
    -o-transition: all .6s ease-in-out;
    -ms-transition: all .6s ease-in-out;
    transition: all .6s ease-in-out;
    outline: none !important;
    font-family: "helvetica47lightcondensed";
}
.date_block:hover h3 {
    color: #fff;
}

.date_block:hover i {
    color: #fff;
}
.icon {
    font-size: 21px;
    color: #171616;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: all .6s ease-in-out;
    -moz-transition: all .6s ease-in-out;
    -o-transition: all .6s ease-in-out;
    -ms-transition: all .6s ease-in-out;
    transition: all .6s ease-in-out;
}


@media (max-width: 1599px) {
    .date_block h3 {
    font-size: 20px;
    }
}

@media (max-width: 1599px) {
     .date_block {
    height: auto;
}
}

@media (max-width: 1599px){
 .date_block {
    padding: 20px 20px;
    position: relative;
    height: 100%;
}
}

</style>
