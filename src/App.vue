<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div>
      <div>中国1111</div>
      <span>广州增城</span>
    </div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app {
  color: red;
}
.app2 {
  color: #096;
}
</style>
