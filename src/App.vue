<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div>
      <div
        class="box1 box2 box3"
        data-set="box1-set1"
        data-name="box1-name"
        data-type="box1-type"
      >
        中国1111
      </div>
      <span>广州增城</span>
    </div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <div><a href="#">按钮</a></div>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: 'bang',
      arr: [
        {
          id: 1,
          name: 'bang'
        }
      ]
    }
  },
  components: {
    HelloWorld
  },
  created() {
    console.log('created')
    var str2 = '456'
    console.log(str2)
    console.log('created2')
  }
}
</script>

<style scoped lang="scss">
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  a {
    color: #ffffff;
    background-color: #ffffff;

    &::after {
      content: 'a';//伪元素
    }
  }

  div {
    box-sizing: border-box;
  }
}
</style>
