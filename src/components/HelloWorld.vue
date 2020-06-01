<template>
  <div class="hello">
    <el-button type="primary" @click="dialogVisible=true">编辑</el-button>
    <AlertTip :isShow.sync="dialogVisible" @func="getMsgFormSon"></AlertTip>
    <div>{{count1}}</div>
    <el-button type="primary" @click="changeToken">改变state的值</el-button>
    <div style='line-height:40px;height:40px;display:flex;align-item:center'>
      <svg-icon iconClass="user" className="user" />用户
    </div>
    <SelectInput :selectItem='selectItem' @getliItemValue="getvalue"></SelectInput>
  </div>
</template>

<script>
import AlertTip from './dialog/alertTip.vue' ;
import SelectInput from '@/components/selectInput/index.vue'
import service from "@/tools/request";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      value: true,
       dialogVisible: false,
       count:this.$store.getters.gettoken,
       selectItem:[
              {value:1,label:'全部1'},
              {value:2,label:'全部2'},
              {value:3,label:'全部3'},
              {value:4,label:'全部4'},
              {value:5,label:'全部5'},
          ]
    }
  },
  computed:{
    count1(){
      return this.$store.getters.gettoken
    }
  },
  methods: {
    getMsgFormSon(data){
     this.dialogVisible=data
     console.log(data)
    },
    changeToken(){
      this.$store.commit('chanageToken',123456)
      console.log(this.$store.getters.gettoken)
      this.$store.dispatch('ajaxchanagetoken',8888)
    },
    getvalue(data){
      console.log(data)
    }  
  },
  beforeMount(){
    let data={}
    service.request({
        method: "get",
        url: "/users/json",
        data
    })
    service.get('/users/json').then((res)=>{
      console.log(res)
    })
  },
  components: {
    AlertTip,
    SelectInput
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.user{
  font-size: 15px !important;
  color:red;
  display: inline-block;
  width:40px;
  height:40px;
}
</style>
