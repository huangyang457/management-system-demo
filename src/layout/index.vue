<template>
  <el-container class="app-wrapper">
    <el-aside width="200px" class="sidebar-container">
      <Menu />
    </el-aside>
    <div class="container">
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </div>
    <!-- ----- -->
    <!-- <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main><RouterView /></el-main>
    </el-container>
  </div> -->
  <!-- ------- -->
  </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
</script>

<style lang="scss" scoped>
@import 'element-plus/dist/index.css';
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;

  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}

::v-deep .el-header {
  padding: 0;
}
</style>
