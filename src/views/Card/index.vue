<template>
  <div class="card">
      <div class="card-container">
          <div class="card-outsize"> 
              <div class="card-outsize-container">
                <div class="card-front">
                    <div class="card-front-img">
                        <img class="img" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1975305000,1223676718&fm=11&gp=0.jpg" alt="">
                    </div>
                    <div class="card-front-text">
                        VIEW ME
                    </div>
              </div>
              <div class="card-back"> 
                    <video class="video" autoplay muted loop>
                        <source src="http://157.148.73.240/youku/657246885c53171439f8722ae/03000801005EBE3EAD47846003E880B59CF133-F867-483E-9064-F90F1AC64FAB.mp4?sid=159067257600010001124_00_B55bb33477f45e5812cd536fc1a14c4ef&sign=b3b21a013624090ebca22347e6a021e7&ctype=50&ali_redirect_domain=vali.cp31.ott.cibntv.net&ali_redirect_ex_ftag=047e2a817dddaf3cf09b29078ccb67da25eb292dd1027e61&ali_redirect_ex_tmining_ts=1590672605&ali_redirect_ex_tmining_expire=3600&ali_redirect_ex_hot=11"> 
                    </video>
              </div>
              </div>
          </div>
          <div class="card-insise">
              <div class="card-insise-container">
                  <h1>For urban lovers</h1>
                  <p>For urban loversFor urban loversFor urban loversFor urban loversFor urban lovers</p>
                <div>View deals</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Card',
  components: {
   
  }
}
</script>
<style lang="scss" scoped>
    .card{
        width:100%;
        height:100vh;
        background: rgba(20,33,52,1);
        display: flex;
        justify-content: center;
        align-items: center;
        .card-container{
            width:300px;
            height:300px;
            position: relative;
            transition: all 1s ease;
            .img{
                width:100%;
                height:100%;
            }
            .card-front-text{
                height:60px;
                font-weight: 800;
                display: flex;
                justify-content: center;
                align-items: center;
                background:rgba( 0,0,0,1);
                font-size: 20px;
                color:pink;
            }
            .card-outsize{
                z-index:100;
            }
            .card-insise{
                z-index:99;
            }
            .card-outsize,.card-insise{
                position: absolute;
                right:0;
                width:300px;
                height:300px;
            }
            .card-outsize-container{
                width:100%;
                height:100%;
                transform-style: preserve-3d;
                transform-origin:left ;
                transition:all 1s ease ;
            }
            .card-front,.card-back{
                position: absolute;
                right:0;
                width:300px;
                height:300px;
                background:rgba( 0,0,0,1);
            }
            .card-front-img{
                height:240px;
                width:100%;
                clip-path: polygon(0 0,100% 0,100% 90%,57% 90%,50% 100%,43% 90%,0 90%);
            }
            .card-back{
                transform:rotateY(180deg) ;
            }
            .video{
                width:100%;
                height:100%;
                object-fit: cover;
                clip-path: polygon(0 0, 100% 0,90% 50%,100% 100%,0 100%);
            }
            &:hover .card-outsize-container{
                transform:rotateY(-180deg);
            }
            &:hover{
                width:600px;
            }  

            .card-insise-container{
                color:#fff;
                width:100%;
                height:100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                background:rgba( 0,0,0,1);

                div{
                    padding:10px 0;
                    border:1px solid #fff;
                    border-radius: 5px;
                    width:160px;

                }
            }
        }
    }
</style>

