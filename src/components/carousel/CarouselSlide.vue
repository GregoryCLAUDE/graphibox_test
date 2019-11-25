<template>
  <transition name="slide-right">
    <div v-show="visible" >
      Index: {{index}}
      Visible ? {{visible}}
      <slot></slot>
    </div>
  </transition>
</template>

<script type="text/javascript">
export default{
  name: 'carouselSlide',
  data () {
    return {
      index: 0
    }
  },
  computed: {
    visible () {
      return this.index === this.$parent.index
    }
  }
}
</script>

<style media="screen">
  .slide-enter-active{

    animation: slideIn 5s;

  }

  .slide-exit-active{

    animation: slideOut 5s;
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes slideIn {
    from { transform: translateX(100%);}
    to {transform: translateX(0%);}
  }

  @keyframes slideOut {
    from { transform: translateX(0%);}
    to {transform: translateX(-100%);}
  }
</style>
