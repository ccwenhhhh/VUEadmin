<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">

      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
 .el-aside {
    background-color: rgba(20,33,52,1);
    color: #333;
    text-align: center;
    height:100vh;
  }
  .el-header{
     background-color: rgb(178, 179, 180);
  }
  .el-main{
    background-color:rgb(207, 202, 202);
    border:10px solid  #fff;
  }
</style>
