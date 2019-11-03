<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in bannerList" :key="item.image">
      <img :src="item.image" alt="">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
    import Utils from '../js/utils'

    export default {
        data() {
            return {
                name: "首页",
                bannerList: []
            }
        },
        methods: {
            getBanner() {
                var params = new URLSearchParams();
                params.append("method", "cerp.order.getIndexImage");
                params.append("sign", Utils.getSign(params));

                this.axios.post('/api/index.php/api', params).then((result) => {
                    console.log(result.data)
                    if ("succ" === result.data.rsp) {
                        this.bannerList = result.data.data;
                    }
                }).catch((e) => {
                    console.log(e)
                });
            }
        },
        created() {
            this.getBanner();
        }
    }
</script>

<style scoped>
  .mint-swipe {
    height: 180px;
  }
  img{
    width: 100%;
    height: 100%;
  }

</style>