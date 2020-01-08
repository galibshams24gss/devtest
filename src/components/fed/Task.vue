<template>
  <div class="container">

    <br/><br/>

    <div class="userInputs">
        <span>Draw SVG</span>
        <br/>
        <textarea id="textarea" v-model="commands" rows="4" placeholder=" Multiple Commands" @keyup.enter="onEnter" @input="draw"></textarea>
        <br/>
        <svg :width="svgWidth" :height="svgHeight">
          <rect v-if="commands.indexOf(rectCommand) !== -1"
            :x="rectOptions.x" :y="rectOptions.y" :width="rectOptions.width" :height="rectOptions.height">
          </rect>
          <circle v-if="commands.indexOf(circleCommand) !== -1"
              :cx="circleOptions.cx" :cy="circleOptions.cy" :r="circleOptions.r">
          </circle>
          <polygon v-if="commands.indexOf(polygonCommand) !== -1" :points="polygonOptions.points"/>
        </svg>
    </div>

    <br/><br/>

    </div>
</template>

<script>
  export default {
    data: () => ({
      msg: '',
      commands: '',
      rectCommand: 'R',
      circleCommand: 'C',
      polygonCommand: 'P',
      svgWidth: 250,
      svgHeight: 250,
      errors:[]
    }),

  mounted () {
    console.log('Web App Loaded...')
  },

  beforeDestroy () {
    console.log('Mount Listener Off')
  },

  computed: {
      rectOptions() {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
      },

      circleOptions() {
            return {
                cx: 0,
                cy: 0,
                r: 0
            }
      },

      polygonOptions() {
            return {
                points: null
            }
      },

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
    },

    draw:function(e) {
        if(this.commands.indexOf(this.rectCommand) !== -1){
          const splitString = this.commands.split('  ');
          this.rectOptions.x = parseInt(splitString[1],10);
          this.rectOptions.y = parseInt(splitString[2],10);
          this.rectOptions.width = parseInt(splitString[3],10);
          this.rectOptions.height = parseInt(splitString[4],10);

            if(splitString.indexOf(this.circleCommand) === -1){
            this.circleOptions.cx = parseInt(splitString[5],10);
            this.circleOptions.cy = parseInt(splitString[6],10);
            this.circleOptions.r = parseInt(splitString[7],10);
            } 
            
            if(splitString.indexOf(this.polygonCommand) === -1){
            this.polygonOptions.points = splitString[8];
            }
        }
        else {
          console.log("NA");
        }
    },

    onEnter: function() {
       this.msg = 'enter pressed';
    }

    }
  }
</script>

<style scoped>
    textarea {
      background: #ffffff;
    }

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