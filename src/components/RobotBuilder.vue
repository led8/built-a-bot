<template>
  <div class="content">
    <button v-on:click="addToCart()" class="add-to-cart">Add to Cart</button>
    <div class="top-row">
        <div class="robot-name">
          {{selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
      <PartSelector
        v-bind:parts="availabledParts.heads"
        position="top"
        v-on:partSelected="part => selectedRobot.head=part"/>
      <!-- </div> -->
    </div>
    <div class="middle-row">
      <PartSelector
        v-bind:parts="availabledParts.arms"
        position="left"
        v-on:partSelected="part => selectedRobot.leftArm=part"/>
      <PartSelector
        v-bind:parts="availabledParts.torsos"
        position="center"
        v-on:partSelected="part => selectedRobot.torso=part"/>
      <PartSelector
        v-bind:parts="availabledParts.arms"
        position="right"
        v-on:partSelected="part => selectedRobot.rightArm=part"/>
    </div>
    <div class="bottom-row">
      <PartSelector
        v-bind:parts="availabledParts.bases"
        position="bottom"
        v-on:partSelected="part => selectedRobot.base=part"/>
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
            <td class="cost">{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availabledParts from '../data/parts';
import PartSelector from './PartSelector.vue';

export default {
  name: 'RobotBuilder',
  components: { PartSelector },
  created() { // lifecycle component go to https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
    console.log('component created');
  },
  data() {
    return {
      availabledParts,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
      },
    };
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost
      + robot.leftArm.cost
      + robot.rightArm.cost
      + robot.torso.cost
      + robot.base.cost;
      this.cart.push({ ...robot, ...{ cost } });
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
.robot-name {
  position:absolute;
  top:-75px;
  text-align:center;
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
