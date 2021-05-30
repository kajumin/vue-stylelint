<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
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
  created() {
    console.log('created')
    var str2 = '456'
    console.log(str2)
    var arr = [1, 2, 3]
     arr = arr.map(item => ({ id: item }))
    console.log(arr)
  }
}
</script>

<style scoped lang="scss">
.box1 {
  color: #ffffff;
  background-color: #009966;
}
</style>
