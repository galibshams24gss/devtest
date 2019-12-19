<template>
  <v-app>
    <v-layout row wrap align-center>
      <v-flex xs12 id="prlx">
    <v-layout
      align-center
      column
    >
      <main>
            <router-view></router-view>
      </main>
    </v-layout>
  </v-flex>
  </v-layout>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      isSafari : !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),
      isFirefox : navigator.userAgent.indexOf("Firefox"),
      iOS : /iPad|iPhone|iPod|Mac/.test(navigator.userAgent) && !window.MSStream,
    }
  },

  methods: {
        deviceBrowserDetect(){
            if(this.iOS) {
                console.log("iOS")
            } else if(this.isSafari && this.iOS){
                console.log("Safari & iOS")
            } else if(!this.isSafari && this.iOS){
                console.log("Non-Safari & iOS")
            } else if(!this.iOS){
                console.log("Non-iOS")
            } else {
                console("Else condition implemented")
            }
        }
  },

  mounted(){
        this.deviceBrowserDetect();
  },

  name: 'App',
}
</script>

<style scoped>
html { 
  overflow-y: auto;
}

#prlx{
  overflow-y: auto;
  height: 100%;
  min-height: 100% !important;
}
</style>