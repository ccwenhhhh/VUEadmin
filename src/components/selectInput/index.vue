<template>
  <div class="selectInput" >
      <input type="text" readonly placeholder="请选择" @click='clickUl' :value="inputValue">
      <ul v-show="ulshow">
          <li v-for="item in  selectItem" :class="item.value===liactive?'active':''" @click="clickLi(item)" :key="item.value">{{item.label}}</li>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SelectInput',
  data(){
      return {
          ulshow:false,
          liactive:1,
          inputValue:'',
      }
  },
  props:{
      selectItem:Array
  },
  computed:{
      
  },
  methods:{
      clickUl(){
         this.ulshow=!this.ulshow; 
      },
      clickLi(item){
          this.liactive=item.value
          this.inputValue=item.label
          this.ulshow=!this.ulshow;
          this.$emit('getliItemValue',item)
      }
  },
  components: {
    
  }
}
</script>
<style scoped lang="scss">
li, ul{
list-style: none;
padding: 0;
margin: 0;
}
.selectInput{
    position: relative;
    width:140px;
    >input{
        box-sizing: border-box;
        cursor: pointer;
        outline: none;
        width:100%;
        padding: 0 10px;
        height: 30px;
        border: 1px solid #dcdfe6;
        border-radius: 3px;
        font-size: 12px;
        color: #3e3e3e;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAfElEQ…b6lHQCjsDGzEa+35K2wN3dR2Dl7jsze4SfohizcAqCfwAnQDTJ24/jcAAAAABJRU5ErkJggg==') 100px center no-repeat white;
    }
    >ul{
        transition:all 2 ease 0;
        box-sizing: border-box;
        z-index: 999;
        position: absolute;
        top: 31px;
        left: 0;
        padding: 6px 0;
        background-color: white;
        border: 1px solid #dcdfe6;
        border-radius: 3px;
        width:100%;
        max-height: 200px;
        overflow: auto;
        padding: 0 1px;
        >li{
            line-height: 30px;
            font-size: 10px;
            padding: 0 10px;
            color: #3e3e3e;
            cursor: pointer;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            border-radius: 3px;
            &:hover{
                    background-color: #f1f1f1;
            }
            &.active{
                        background-color: #1ba3e4;
                        color:#fff;
            }
        }
    }
}
</style>
