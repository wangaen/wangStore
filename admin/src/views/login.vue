<script lang="ts" setup>
import { ElMessage, ElLoading } from 'element-plus/es';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const loginForm = reactive({
  username: '',
  password: '',
});

const router = useRouter();
const toLogin = () => {
  const { username, password } = loginForm;
  if (username === 'system' && password === 'admin') {
    ElMessage.success('登录成功');
    const loadingFull = ElLoading.service({
      lock: true,
      text: '正在进行初始化...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    });
    setTimeout(() => {
      router.push('/home');
      loadingFull.close();
      ElMessage.closeAll();
    }, 800);
    return;
  }
  ElMessage.error('用户名或密码错误');
};
</script>

<template>
  <div class="login_bg">
    <div class="login_pane">
      <h1>智能密码分发管控系统登录</h1>
      <div class="form_model">
        <el-form :model="loginForm" ref="formRef" label-width="0px">
          <el-form-item label="" prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
              size="large"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              v-model="loginForm.password"
              placeholder="请输入密码"
              @keypress.enter="toLogin"
              size="large"
              show-password
            ></el-input>
          </el-form-item>
          <el-button
            type="primary"
            @click="toLogin"
            size="large"
            class="login_button"
            >登录</el-button
          >
        </el-form>
      </div>
      <hr />
      <div class="copyright">版权所有：©2016-2021 广州南科信息科技有限公司</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login_bg {
  width: 100%;
  height: 100vh;
  background-color: #142841;
  position: relative;
  overflow: hidden;
  .login_pane {
    position: absolute;
    width: 390px;
    height: 383px;
    top: 50%;
    left: 50%;
    transform: translate(10%, -70%);
    background: #ffffff;
    border-radius: 5px;
    padding: 30px;
    h1 {
      font-size: 22px;
      line-height: 60px;
      text-align: center;
    }
    .form_model {
      font-size: 14px;
      :deep(.el-form-item__label) {
        &:before {
          display: none !important;
        }
      }
      .verify {
        img {
          width: 100%;
          height: 36px;
          cursor: pointer;
          border: 1px solid #999;
        }
      }
      :deep(.verify + .el-form-item__error) {
        position: relative;
        top: -10px;
      }
      .login_button {
        width: 100%;
      }
    }
    hr {
      margin: 20px 0;
    }
    .copyright {
      color: rgb(131, 130, 130);
      line-height: 18px;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
