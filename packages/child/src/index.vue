<template>
  <div class="child">
    <h2>
      我是子组件
      <button @click="handleClick">调用父组件下放的方法修改props</button>
      <button @click="handleBus">通过事件总线改变子组件2的颜色</button>
    </h2>
    <h5>{{ msg }}</h5>
  </div>
</template>
<script>
import bus from '../../utils/bus'
export default {
  name: 'child',
  data() {
    return {}
  },
  props: {
    msg: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
  },
  methods: {
    handleClick() {
      this.$emit('changeMsg', '属性被修改了!')
      // this.$parent.changeMsg('属性被修改了!!!')
    },
    handleBus() {
      bus.$emit('changeColor', 'red')
    },
  },
}
</script>
<style scoped="css">
.child {
  border: 1px solid blue;
}
</style>
