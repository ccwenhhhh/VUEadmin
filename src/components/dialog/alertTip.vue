<template>
  <div class="alertTip">
    <el-dialog title="提示" :visible.sync="showDia" @close='colseWin' width="30%" center>
      <span>{{testComputed}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="colseWin">取 消</el-button>
        <el-button type="primary" @click="ccc">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "AlertTip",
  data() {
    return {
     showDia:false,
    };
  },
  props: {
    isShow:Boolean
  },
  watch:{
    isShow(){
        this.showDia=this.isShow
    },
    showDia(){
        console.log(`监听到：${this.showDia}`)
    }  
  },
  computed:{
    testComputed(){
      return this.isShow+'000'+this.showDia
    }
  },
  methods: {
    colseWin(done){
        this.showDia=false
        this.$emit('update:isShow', this.showDia);
        console.log(this.testComputed)
         this.$store.commit('chanageToken',987654321)
    },
    aa(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(111)
        },10000)
      })
    },
    async promis(){
       console.log('000')
       let res= await this.aa()
       console.log('222')
      return res
    },
    ccc(){
     this.promis().then((res)=>{
       console.log(res)
     })
    },
  }
};
</script>