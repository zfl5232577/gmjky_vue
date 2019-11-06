<template>
    <div id="app">
        <mt-header fixed :title="selected"></mt-header>

        <router-view></router-view>

        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="首页">
                <img slot="icon" v-show="selected==='首页'"
                     src="./assets/images/tab_home_selected.png">
                <img slot="icon" v-show="selected!=='首页'" src="./assets/images/tab_home_normal.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="分类">
                <img slot="icon" v-show="selected==='分类'"
                     src="./assets/images/tab_category_selected.png">
                <img slot="icon" v-show="selected!=='分类'"
                     src="./assets/images/tab_category_normal.png">
                分类
            </mt-tab-item>

            <mt-tab-item id="购物车">
                <img slot="icon" v-show="selected==='购物车'"
                     src="./assets/images/tab_shop_car_selected.png">
                <img slot="icon" v-show="selected!=='购物车'"
                     src="./assets/images/tab_shop_car_normal.png">
                购物车
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" v-show="selected==='我的'"
                     src="./assets/images/tab_personal_selected.png">
                <img slot="icon" v-show="selected!=='我的'"
                     src="./assets/images/tab_personal_normal.png">
                我的
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: '首页'
            }
        },
        watch: {
            selected: function (val) {
                switch (val) {
                    case '首页':
                        this.$router.push('/home');
                        break;
                    case '分类':
                        this.$router.push('/category');
                        break;
                    case '购物车':
                        this.$router.push('/shop_car');
                        break;
                    case '我的':
                        this.$router.push('/personal');
                        break;
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px 0;
    }

    ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .mint-header {
        padding: 20px 10px 0 10px;
        height: 60px;
    }

    .mint-tabbar {
        padding-top: 1px;
        background-color: white;
    }

    .mint-tabbar > .mint-tab-item.is-selected {
        background-color: white;
    }

    .mint-tab-item-icon > * {
        margin: auto;
        width: 80%;
        height: 80%;
    }

    .mint-tab-item-label {
        color: #afafaf;
    }

    .is-selected .mint-tab-item-label {
        color: #00a29a;
    }

</style>
