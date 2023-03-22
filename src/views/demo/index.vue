<template>
  <div>
    <div
      v-for="(item, index) in data"
      :key="index"
      style="display: flex; justify-content: center"
    >
      <span
        v-for="item2 in item"
        :key="item2.id"
        style="padding: 5px"
        :style="{ color: item2.isBuy === true ? 'red' : 'black' }"
        >{{ item2.id }}</span
      >
    </div>
    <div style="display: flex; justify-content: center; margin-top: 20px">
      <el-button type="primary" @click="buy">购票</el-button>
      <el-input
        placeholder="购买多少张"
        v-model="num"
        style="width: 100px"
      ></el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { data: [], num: 0, flatData: [] };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      var j = 0;
      for (let i = 0; i < 10; i++) {
        for (let i2 = 0; i2 < 10 + i * 2; i2++) {
          this.data[i] = this.data[i] || [];
          this.data[i].push({ isBuy: false, id: j++ });
          this.flatData.push(this.data[i][i2]);
        }
      }
      console.log();
      this.data.reverse();
    },
    buy() {
      for (let i = 0; i < this.num; i++) {
        var randId = this.RandId();
        var index = this.flatData.findIndex((item) => item.id === randId);
        this.flatData[index].isBuy = true;
      }
      console.log(
        "剩余数量",
        this.flatData.filter((item) => item.isBuy === false)
      );
    },
    RandId() {
      var arr = this.flatData.filter((item) => item.isBuy === false);
      var id = arr[Math.floor(Math.random() * arr.length)].id;
      return id;
    },
  },
};
</script>
<style></style>