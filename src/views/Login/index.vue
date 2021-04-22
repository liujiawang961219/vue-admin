<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          v-for="(item, index) in menuTab"
          :class="btnData == index ? 'current' : ''"
          :key="index"
          @click="btn(index)"
        >
          {{ item.txt }}
        </li>
        <!-- <li>注册</li> -->
      </ul>
      <!-- 表单 start -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-from"
        size='medium'
      >
        <el-form-item prop="username" class="item-from">
          <label>用户</label>
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="item-from">
          <label>密码</label>
          <el-input
            type="text"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
         <el-form-item prop="passwords" v-if="registerShow" class="item-from">
          <label>重复密码</label>
          <el-input
            type="text"
            v-model="ruleForm.passwords"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item  prop="code" class="item-from">
          <label>验证码</label>
          <el-row :gutter="11">
            <el-col :span="16">
              <el-input v-model.number="ruleForm.code"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="success" class="block">获取验证码</el-button>
            </el-col>
          </el-row>
          
        </el-form-item>
        <el-form-item >
          <el-button type="danger" class="block btn-sty"
           @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {scripscript,validateEmail} from '../../utils/validate.js'
export default {
  name: "Login",
  components: {},
  data() {
    var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }else{
          callback();
        }
      };
      var validateUsername = (rule, value, callback) => {
        // var reg = /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if(validateEmail(value)){
          callback(new Error('用户名格式有误'));
        } else{
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        // 过滤后的数据
        this.ruleForm.password = scripscript(value)
        if (value === '') {
          callback(new Error('请输入密码'));
        }else {
          callback();
        }
      };
      var validatePasswords = (rule, value, callback) => {
        // 过滤后的数据
        
        this.ruleForm.passwords = scripscript(value)
        // 如果模块值为 login 直接通过
        if(this.registerShow == false){callback();}
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(this.ruleForm.password != '' && value != this.ruleForm.password){
          callback(new Error('两次密码输入不一致'));
        }else {
          callback();
        }
      };
    return {
      menuTab: [{ txt: "登录" }, { txt: "注册" }],
      btnData: 0,
      registerShow:false,
      ruleForm: {
          username: '',
          password: '',
          passwords:'',
          code: ''
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          passwords: [
            { validator: validatePasswords, trigger: 'blur' }
          ],
          code: [
            { validator: checkCode, trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
    btn(index) {
      this.btnData = index;
      if(index== 0){
        this.registerShow = false
      }else{
        this.registerShow = true
      }
    },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    // scripscript(s){
    //   var pattern = new RegExp("[`~!@#$%^&*(){};:【】！@#￥%……&*（）“‘”’、？?*]")
    //   var rs = ''
    //   for(var i = 0;i<s.length;i++){
    //     rs = rs + s.substr(i,1).replace(pattern,'')
    //   }
    //   return rs
    // }
  },
};
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  background: #344a5f;
  position: relative;
}
.login-wrap {
  width: 330px;
  // height: 50px;
  // background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background: rgba(0, 0, 0, 0.1);
  }
}
.login-from{
  margin-top: 29px;
  label{
    display: block;
    color: #fff;
    font-size: 14px;
    margin-bottom: 3px;
  }
  .item-from{
    margin-bottom: 13px;
  }
  .block{
    width: 100%;
    display: block;
    
  }
  .btn-sty{
    margin-top: 13px;
  }
}
</style>
