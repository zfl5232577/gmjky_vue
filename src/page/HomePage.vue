<template>
    <div style="overflow: scroll">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in bannerList" :key="item.image">
                <img :src="item.image" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="gradMenu">
            <li v-for="grad in gridList" :key="grad.name">
                <router-link :to="grad.url">
                    <img :src="grad.image" style="width: 50px;height: 50px;margin-bottom: 4px">
                    <br/>
                    <span>{{grad.name}}</span>
                </router-link>
            </li>
        </ul>
        <div v-for="(category,index) in categoryProd" :key="index">
            <img class="content_head" :src="category.titleImg">
            <img class="content_head" :src="category.cardImg">
            <ul class="categoryProd">
                <li v-for="prod in category.prodList" :key="prod.goods_id">
                    <router-link to="/">
                        <span style="width:100%; float: left;color: #00a29a;margin-bottom: 10px">{{prod.cat_name}}</span>
                        <img :src="getImageUrl(prod.thumb_image)"
                             style="height: 100px;margin-top: 10px">
                        <span style="display:block;overflow: hidden;-webkit-line-clamp: 5;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;text-overflow: ellipsis;width:38%;height: 70px; float: right;color: #333333;font-size:9px;margin-bottom: 5px">{{prod.name}}</span>
                        <span style="width:38%; float: right;color: red;font-size:12px;margin-bottom: 5px">￥{{prod.price}}</span>
                        <mt-button style="float: right">立即购买>></mt-button>
                    </router-link>
                </li>
            </ul>
        </div>
        <div style="color:#999999;margin: 14px">—————全 部 商 品—————</div>
            <ul class="allProd">
                <li v-for="prod in allList" :key="prod.goods_id">
                    <router-link to="/">
                        <img :src="getImageUrl(prod.thumb_image)" style="height: 120px">
                        <span style="display:block;overflow: hidden;-webkit-line-clamp: 2;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;text-overflow: ellipsis;width:100%; float: left;color: #333333;font-size:10px;margin: 10px 0">{{prod.name}}</span>
                        <div style=" float:left;background-color: #eeeeee;height: 1px;width: 100%"></div>
                        <span style=" float: left;color: red;font-size:12px;margin-top: 10px">￥{{prod.price}}</span>
                    </router-link>
                </li>
            </ul>
    </div>
</template>

<script>
    import Utils from '../js/utils'
    export default {
        data() {
            return {
                name: "首页",
                bannerList: [],
                categoryProd: {
                    older: {
                        titleImg: require('../assets/images/home_older_title.png'),
                        cardImg: require('../assets/images/home_older_img.png'),
                        prodList: []
                    },
                    baby: {
                        titleImg: require('../assets/images/home_baby_title.png'),
                        cardImg: require('../assets/images/home_babay_img.png'),
                        prodList: []
                    },
                    women: {
                        titleImg: require('../assets/images/home_women_title.png'),
                        cardImg: require('../assets/images/home_women_img.png'),
                        prodList: []
                    },
                    man: {
                        titleImg: require('../assets/images/home_man_title.png'),
                        cardImg: require('../assets/images/home_man_img.png'),
                        prodList: []
                    }
                },
                allList:[],
                gridList: [
                    {
                        name: "抽奖",
                        image: require('../assets/images/home_choujiang.png'),
                        url: "/luck_draw"
                    },
                    {
                        name: "导购",
                        image: require('../assets/images/home_daogou.png'),
                        url: "/luck_draw"
                    },
                    {
                        name: "最新资讯",
                        image: require('../assets/images/home_news.png'),
                        url: "/luck_draw"
                    },
                    {
                        name: "国民营养师",
                        image: require('../assets/images/home_gmyys.png'),
                        url: "/luck_draw"
                    }
                ],
                pageNo:1,
                allLoader:false,
            }
        },
        methods: {
            getImageUrl(url) {
                return "http://www.gmjk.com/" + url.substring(url.indexOf("/public"))
            },
            getBanner() {
                var params = new URLSearchParams();
                params.append("method", "cerp.order.getIndexImage");
                params.append("sign", Utils.getSign(params));

                this.axios.post('/api/index.php/api', params).then((result) => {
                    console.log(result.data);
                    if ("succ" === result.data.rsp) {
                        this.bannerList = result.data.data;
                    }
                }).catch((e) => {
                    console.log(e)
                });
            },
            getHomeClassifyInfo() {
                var params = new URLSearchParams();
                params.append("method", "api.goods.classify_index");
                params.append("thumb_image_type", "m");
                params.append("sign", Utils.getSign(params));
                this.axios.post('/api/index.php/api', params).then((result) => {
                    console.log(result.data);
                    if ("succ" === result.data.rsp) {
                        this.categoryProd.older.prodList = result.data.data.content.older;
                        this.categoryProd.baby.prodList = result.data.data.content.baby;
                        this.categoryProd.women.prodList = result.data.data.content.women;
                        this.categoryProd.man.prodList = result.data.data.content.man;
                    }
                }).catch((e) => {
                    console.log(e)
                });
            },
            getAllProd(){
                var params = new URLSearchParams();
                params.append("method", "api.goods.get_list");
                params.append("thumb_image_type", "m");
                params.append("is_image", "0");
                params.append("is_detail", "0");
                params.append("page", this.pageNo.toString());
                params.append("pagesize", "12");
                params.append("sign", Utils.getSign(params));
                this.axios.post('/api/index.php/api', params).then((result) => {
                    console.log(result.data);
                    if ("succ" === result.data.rsp) {
                        this.allList = this.allList.concat(result.data.data.content.list);
                    }
                }).catch((e) => {
                    console.log(e)
                });
            }
        },
        created() {
            console.log("created");
            this.getBanner();
            this.getHomeClassifyInfo();
            this.getAllProd();
        },
        destroyed() {
            console.log("destroyed");
        }
    }
</script>

<style scoped>
    .mint-swipe {
        height: 180px;
    }

    .mint-swipe img {
        width: 100%;
        height: 100%;
    }

    .gradMenu {
        margin: 10px;
        height: 80px;
    }

    .gradMenu span {
        color: #333333;
        font-size: 13px;
    }

    .gradMenu li {
        width: 25%;
        list-style: none; /* 将默认的列表符号去掉 */
        padding: 0; /* 将默认的内边距去掉 */
        margin: 0 auto; /* 将默认的外边距去掉 */
        float: left; /* 往左浮动 */
        display: block;
    }

    .content_head {
        width: 100%;
        float: left;
    }

    .categoryProd li {
        list-style: none;
        width: 50%;
        float: left;
        background-color: white;
        padding: 16px 8px;
        border-left: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
    }

    .categoryProd img {
        float: left;
    }

    .mint-button--normal {
        background-color: #00a29a;
        color: white;
        width: 40%;
        height: 28px;
        font-size: 8px;
        padding: 6px;
    }

    .allProd {
        margin: 0 2%;
    }
    .allProd li {
        list-style: none;
        width: 46%;
        float: left;
        background-color: white;
        padding: 16px;
        margin:2%;
        box-shadow: 2px 2px 2px 2px #eeeeee;
        border-radius: 5px;
        border-left: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
    }
</style>