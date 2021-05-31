<template>
  <div class="parent">
    <h1>我是父组件</h1>
    <child :msg="msg" @changeMsg="changeMsg" ref="child" />
    <child2 :msg2="msg2" @changeMsg2="changeMsg2" ref="child2" />
  </div>
</template>
<script>
import Child from '../../child'
import Child2 from '../../child2'
export default {
  name: 'parent',
  data() {
    return {
      msg: '我是从父组件传递过来的属性',
      msg2: '我是从父组件传递过来的属性',
    }
  },
  components: {
    Child,
    Child2,
  },
  methods: {
    changeMsg(msg) {
      this.msg = msg
    },
    changeMsg2(msg2) {
      this.msg2 = msg2
    },
  },
  mounted() {
    // this.$refs.child.handleClick()
  },
}
</script>
<style scoped="css">
.parent {
  border: 1px solid red;
}
</style>
