<template>
  <div class="Login">
    <div class="login-box">
        <h1>LOGIN</h1>
        <div class="input-box">
          <input type="text" required>
          <label for="">Username</label>
        </div>
        <div  class="input-box">
          <input type="password" required>
          <label for="">Password</label>
        </div>
        <div class="long-btn">
          <button @click="login">
              SUBMIT
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  components: {

  },
  methods:{
    login(){
      this.$router.push({path:'/home'})
    },
  }
}
</script>
<style lang="scss" scoped>
  .Login{
    height:100vh;
    width:100%;
    background:rgba(20,33,52,1);
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-box{
      width:400px;
      height:364px;
      background-color:rgba( 0,0,0,.5);
      box-shadow: 0 15px 25px 0 rgba(0,0,0,.6);
      box-sizing: border-box;
      h1{
        height:80px;
        line-height: 80px;
        letter-spacing: 2px;
        font-size: 18px;
      }
      .input-box{
        margin-top:20px;
        position: relative;
        height:45px;
        widows: 100%;
        border-bottom: 1px solid #fff;
        margin-bottom:20px ;
        input{
          width:100%;
          height:100%;
          border: none;
          outline: none;
          background: transparent;
          padding:10px 15px 0 10px;
          color:#fff;
          &:focus+label,&:valid+label{
          left:10px;
          top:0px;
          font-size: 12px;;
        }
        }
       
        label{
          position: absolute;
          left:10px;
          top:20px;
          z-index: 1;
          transition: all 0.5s ease;
          color:#03e9f4;
        }
      }
      .long-btn{
        margin-top:60px;
        button{
          letter-spacing: 2px;
          position: relative;
          background: none;
          border:1px solid transparent;
          padding:10px 20px;
          outline: transparent;
          color:#03e9f4;
          cursor: pointer;
          overflow: hidden;
          box-sizing: border-box;
          &:hover{
            background-color:#03e9f4 ;
            color:#fff;
            border-radius: 5px;;
            box-shadow: 0 0 5px 0 #03e9f4,
                       0 0 25px 0 #03e9f4 ,
                       0 0 50px 0 #03e9f4 ,
                       0 0 100px 0 #03e9f4;
          }
          
          span{
            position: absolute;
          }
          span:nth-child(1){
           width:100%;
            height:2px;
            background: -webkit-linear-gradient(left, #03e9f4,  transparent) ;
            left:-100%;
            top:0; 
            animation: line1 1s linear infinite;
          }
           span:nth-child(2){
            width:2px;
            height:100%;
            background: -webkit-linear-gradient(top, #03e9f4,  transparent) ;
            right:0;
            bottom:100%;
            animation: line2 1s 0.25s linear infinite;
           
          }
           span:nth-child(3){
            width:100%;
            height:2px;
            background: -webkit-linear-gradient(left, #03e9f4,  transparent) ;
            left:100%;
            bottom:0px;
              animation: line3 1s 0.5s linear infinite;
           
          }
           span:nth-child(4){
            width:2px;
            height:100%;
            background: -webkit-linear-gradient(top, #03e9f4,  transparent) ;
            left:0;
            bottom:-100%;
              animation: line4 1s 0.75s linear infinite;
           
          }
        }
      }
    }
  }
  @keyframes line1{
    50%,100%{
      left:100%;
    }
  }
  @keyframes line2{
    50%,100%{
      bottom:0;
    }
  }
  @keyframes line3{
    50%,100%{
     left:0;
    }
  }
  @keyframes line4{
    50%,100%{
      bottom:100%;
    }
  }
 
</style>
