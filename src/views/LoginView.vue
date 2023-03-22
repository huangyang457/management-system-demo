<template>
  <div class="login_bg">
    <div class="login">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="账号" prop="username" style="margin-left: 10px;">
          <el-input v-model="ruleForm.username" class="width200"/>
        </el-form-item>
        <el-form-item label="密码" prop="password" class="margin_top10">
          <!-- autocomplete="off"禁用记录表单信息 -->
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
            show-password
            class="width200"
          />
        </el-form-item>
        <el-form-item style="margin-left: 34px; margin-top: 20px;">
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
  <script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import store from "@/store";

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  username: 'admin',
  password: '123456'
});

const rules = reactive({
  username: [
    {
      required: true,
      message: "账号不能为空",
      trigger: "blur", //trigger: "blur"失去焦点时触发
    },
    { min: 3, max: 18, message: "长度必须在3-18之间", trigger: "blur" },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
    { min: 3, max: 18, message: "长度必须在3-18之间", trigger: "blur" },
  ],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      store.dispatch('app/login', ruleForm)
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
  

<style lang="less" scoped>
// * {
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// }
.login_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("./img/bg.jpg") no-repeat;
  background-size: cover;
  .login {
    display: flex;
    justify-self: center;
    align-items: center;
    width: 400px;
    height: 220px;
    margin: 200px auto;
    padding-right: 25px;
    padding-top: 20px;
    background-image: linear-gradient(
      to right top,
      rgba(250, 144, 144, 0),
      rgb(244, 223, 223)
    );
    border-radius: 20px;
    opacity: 0.8;
    /deep/ .el-form-item__label::before {
      content: none !important;
    }
  }
}
.margin_top10{
  margin: 10px;
}
.width200{
  width: 200px;
}
</style>