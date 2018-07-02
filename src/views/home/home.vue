<template>
  <div class="home">123123</div>
</template>

<script>
// import dialog from '../../components/dialog/dialog.vue';
  export default {
    name:'home',
    data() {
      return {}
    },    
    created () {
            this.$toast({
                message: '名字不为空',
                position: 'center',
                duration: 2000
            });
    }
  };
</script>