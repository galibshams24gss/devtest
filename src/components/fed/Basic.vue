<template>
  <div class="container">

    <div class="userInputs">
        <h5><u>Rectangle</u></h5> 
        x: <input class="rectEntry" v-model.number="x" :max="maxX" :min="0" type="number">
        y: <input class="rectEntry" v-model.number="y" :max="maxY" :min="0" type="number">
        width: <input class="rectEntry" v-model.number="width" :max="maxWidth" :min="10" type="number">
        height: <input class="rectEntry" v-model.number="height" :max="maxHeight" :min="10" type="number">
        <br/><br/>

        <h5><u>Circle</u></h5>
        cx: <input class="circleEntry" v-model.number="cx" :max="maxCX" :min="0" type="number">
        cy: <input class="circleEntry" v-model.number="cy" :max="maxCY" :min="0" type="number">
        radius: <input class="circleEntry" v-model.number="r" :max="maxRadius" :min="0" type="number">
    </div>

    <br/><br/>
    <svg :width="svgWidth" :height="svgHeight">
        <rect 
            :x="x" :y="y" :width="width" :height="height">
        </rect>

        <circle 
            :cx="cx" :cy="cy" :r="r">
        </circle>
    </svg>
  </div>
</template>

<script>
  export default {
    data: () => ({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      svgWidth: 250,
      svgHeight: 250,
      cx: 100,
      cy: 100,
      r: 20
    }),

  mounted () {
    console.log('Web App Loaded...')
  },

  beforeDestroy () {
    console.log('Mount Listener Off')
  },

  computed: {
      maxX() {
          return this.svgWidth - this.width
      },

      maxY() {
          return this.svgHeight - this.height
      },

      maxWidth() {
          return this.svgWidth - this.x
      },

      maxHeight() {
          return this.svgHeight - this.y
      },

      maxCX() {
          return this.svgWidth - this.width
      },

      maxCY() {
          return this.svgHeight - this.height
      },

      maxRadius() {
          return this.svgWidth - this.r
      }
  },

    methods: {}
  }
</script>

<style scoped>
    rect {
        fill: green;
    }

    circle {
        fill: aqua;
    }

    .userInputs {
        background: #ff9933;
        padding: 10px 10px 10px 10px;
        border-radius: 5px;
    }

    .rectEntry {
      background: #ffffff;
      border-radius: 5px;
      width: auto;
      text-align: center;
    }

    .circleEntry {
      background: #ffffff;
      border-radius: 5px;
      width: auto;
      text-align: center;
    }
</style>