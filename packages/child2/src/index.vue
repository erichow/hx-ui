<template>
  <div class="child">
    <h2 :style="{ color: color }">
      我是子组件2
      <button @click="handleClick">调用父组件下放的方法修改props</button>
    </h2>
    <h5>{{ msg2 }}</h5>
  </div>
</template>
<script>
import bus from '../../utils/bus'
export default {
  name: 'child',
  data() {
    return {
      color: 'blue',
    }
  },
  props: {
    msg2: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null,
    },
  },
  methods: {
    handleClick() {
      this.$emit('changeMsg2', '属性被修改了!')
      // this.$parent.changeMsg('属性被修改了!!!')
    },
  },
  mounted() {
    bus.$on('changeColor', (color) => {
      this.color = color
    })
  },
}
</script>
<style scoped="css">
.child {
  border: 1px solid blue;
}
</style>
