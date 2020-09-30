<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="addCount">add</button>
    <div>data:{{ count }}</div>
    <div>{{ dataInfo.msg }}</div>
    <div>{{ dataInfo.age }}</div>
    <div>compunted:{{ compuntedCount }}</div>
    <div>watch:{{ message }}</div>
    <button @click="navTo('/about')">跳转about页</button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import {
  ref,
  reactive,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  getCurrentInstance,
} from "vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  //setup 取代 beforecreate 和 created
  setup() {
    // 不能通过this访问Vue实例，需要通过 getCurrentInstance() 获取当前组件实例，其中 ctx 来获取上下文环境
    const { ctx } = getCurrentInstance();
    console.info(ctx.$router);

    // data
    let count = ref(0);
    let message = ref("初始");
    let data = reactive({
      dataInfo: {
        msg: "hellow toyo",
        age: 18,
      },
    });

    // computed
    let compuntedCount = computed({
      get() {
        return count.value + 10;
      },
      set() {},
    });

    // lifecycle - 挂载后
    onMounted(() => {
      console.info("onMounted");
    });

    // lifecycle - 销毁前
    onBeforeUnmount(() => {
      console.info("onBeforeUnmount");
    });

    // lifecycle - 销毁后
    onUnmounted(() => {
      console.info("onUnmounted");
    });

    // methods
    const addCount = () => count.value++;
    const navTo = path => ctx.$path(path);

    // watch(监听的值<函数形式return出值>，值改变后触发的函数)
    watch(
      () => count.value,
      (newVal, oldVal) => message.value = `count值发生改变->${newVal}`
    );

    // data,computed,methods 需要 return 出
    return {
      count,
      message,
      ...data,
      compuntedCount,
      addCount,
      navTo,
    };
  },
};
</script>
