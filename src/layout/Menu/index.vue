<template>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" unique-opened :default-active="defaultActive"
    text-color="#fff" router>
    <el-sub-menu v-for="(item, index) in menuList" :index="item.id" :key="item.id">
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item @click="savePath(item_child.path)" v-for="item_child in item.children" :key="item_child.id" :index="'/' + item_child.path">
        <template #title>
        <span>{{ item_child.authName }}</span>
      </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { getMenu } from '@/api/getMenu'
import { markRaw, ref } from 'vue';
import {
  User,
  Switch,
  Menu,
  Grid,
  Histogram,
} from '@element-plus/icons-vue'

const iconList = markRaw([User, Switch, Menu, Grid, Histogram])
const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const savePath = (res:any) => {
  sessionStorage.setItem('path', `/${res}`) // 存入sessionStorage中 `/${res}` es6新增字符串拼接方法 ``反单引号 同 '/' + res
}
const menuList:any= ref([])
const getMenuList = async () => {
  menuList.value = await getMenu()
  console.log(menuList);
  
}
getMenuList()
</script>

<style scoped>

</style>