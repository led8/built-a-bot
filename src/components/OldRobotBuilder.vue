<template>
  <div class="content">
    <button v-on:click="addToCart()" class="add-to-cart">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">
          {{selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img v-bind:src="selectedRobot.head.src" title="head"/>
        <button v-on:click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="selectedRobot.leftArm.src" title="left arm"/>
        <button v-on:click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="selectedRobot.torso.src" title="left arm"/>
        <button v-on:click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="selectedRobot.rightArm.src" title="left arm"/>
        <button v-on:click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="selectedRobot.base.src" title="left arm"/>
        <button v-on:click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" v-bind:key="index">
            <td>{{robot.head.title}}</td>
            <td class="cost">{{robot.head.cost
              + robot.leftArm.cost
              + robot.rightArm.cost
              + robot.torso.cost
              + robot.base.cost}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availabledParts from '../data/parts';

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: 'RobotBuilder',
  created() { // lifecycle component go to https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
    console.log('component created');
  },
  data() {
    return {
      availabledParts,
      cart: [],
      selectHeadIndex: 0,
      selectLeftIndex: 0,
      selectRightIndex: 0,
      selectTorsoIndex: 0,
      selectBaseIndex: 0,
    };
  },
  computed: {
    selectedRobot() {
      return {
        head: availabledParts.heads[this.selectHeadIndex],
        leftArm: availabledParts.arms[this.selectLeftIndex],
        torso: availabledParts.torsos[this.selectTorsoIndex],
        rightArm: availabledParts.arms[this.selectRightIndex],
        base: availabledParts.bases[this.selectBaseIndex],
      };
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      this.cart.push(robot);
    },
    selectNextHead() {
      this.selectHeadIndex = getNextValidIndex(
        this.selectHeadIndex, availabledParts.heads.length,
      );
    },
    selectPreviousHead() {
      this.selectHeadIndex = getPreviousValidIndex(
        this.selectHeadIndex, availabledParts.heads.length,
      );
    },
    selectNextLeftArm() {
      this.selectLeftIndex = getNextValidIndex(
        this.selectLeftIndex, availabledParts.arms.length,
      );
    },
    selectPreviousLeftArm() {
      this.selectLeftIndex = getPreviousValidIndex(
        this.selectLeftIndex, availabledParts.arms.length,
      );
    },
    selectNextTorso() {
      this.selectTorsoIndex = getNextValidIndex(
        this.selectTorsoIndex, availabledParts.torsos.length,
      );
    },
    selectPreviousTorso() {
      this.selectTorsoIndex = getPreviousValidIndex(
        this.selectTorsoIndex, availabledParts.torsos.length,
      );
    },
    selectNextRightArm() {
      this.selectRightIndex = getNextValidIndex(
        this.selectRightIndex, availabledParts.arms.length,
      );
    },
    selectPreviousRightArm() {
      this.selectRightIndex = getPreviousValidIndex(
        this.selectRightIndex, availabledParts.arms.length,
      );
    },
    selectNextBase() {
      this.selectBaseIndex = getNextValidIndex(
        this.selectBaseIndex, availabledParts.bases.length,
      );
    },
    selectPreviousBase() {
      this.selectBaseIndex = getPreviousValidIndex(
        this.selectBaseIndex, availabledParts.bases.length,
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position:absolute;
  top:-75px;
  text-align:center;
  width:100%;
}
.sale {
  color:red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right:30px;
  width: 220px;
  padding:3px;
  font-size:16px;
}
td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: left;
}
</style>
