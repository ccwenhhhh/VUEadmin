<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'SvgIcon',
  data(){
      return {

      }
  },
  methods:{

  },
  props:{
        // 分页
        iconClass: {
            type: String,  // 定义接收的值类型
            default: ''
        },
        className : {
            type: String,
            default: ''
        }
    },
  computed:{
      iconName(){
          return `#icon-${this.iconClass}`
      },
      svgClass(){
           if(this.className) {
                return `svg-icon ${this.className}`
            }else{
                return `svg-icon`
            }
      }
  }
}
</script>
<style lang="scss" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
}
</style>