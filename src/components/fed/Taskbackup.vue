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
        cx: <input class="circleEntry" v-model.number="cx" :max="maxCX" :min="20" type="number">
        cy: <input class="circleEntry" v-model.number="cy" :max="maxCY" :min="25" type="number">
        radius: <input class="circleEntry" v-model.number="r" :max="maxRadius" :min="2" type="number">
        <br/><br/>

        <h5><u>Polygon</u></h5>
        points:
        <input class="polygon" v-model="points" placeholder=" Enter Points" v-on:input="submit">
    </div>

    <br/><br/>

    <svg :width="svgWidth" :height="svgHeight">
        <rect 
            :x="x" :y="y" :width="width" :height="height">
        </rect>

        <circle 
            :cx="cx" :cy="cy" :r="r">
        </circle>

        <polygon :points="points"/>
    </svg>
    </div>
</template>

<script>
  export default {
    data: () => ({
      x: 100,
      y: 50,
      width: 25,
      height: 25,
      svgWidth: 250,
      svgHeight: 250,
      cx: 20,
      cy: 100,
      r: 20,
      points: "200,10 250,190 160,210",
      errors:[]
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
      },

      maxPoints() {
          return this.svgWidth - this.points
      }
  },

    methods: {
      submit:function(e) {
        if(this.points.endsWith(",")){
          console.log("Incorrect");
        } else {
          console.log("Correct");
        }
    }
    }
  }
</script>

<style scoped>
    rect {
        fill: #660066;
    }

    circle {
        fill: #00ff00;
    }

    polygon {   
        fill: #cc00ff;
    }

    .userInputs {
        background: #ff9933;
        padding: 10px 10px 10px 10px;
        border-radius: 5px;
    }

    .polygon {
        background: #ffffff;
        width: 100%;
        text-align: center;
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