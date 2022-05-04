<template>
  <p>Template View</p>
  <templatecomponent />
</template>
<script>
//import section
import templatecomponent from '../components/_templatecomponent.vue'

//export section
export default {
  name : 'tmpview',
  components : {
    templatecomponent,
  },
  data() {
    return {

    }
  },
  methods : {

  },
}
</script>
<style>
</style>