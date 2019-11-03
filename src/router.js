import VueRouter from 'vue-router'

import HomePage from "./page/HomePage"
import CategoryPage from "./page/CategoryPage"
import ShopCarPage from "./page/ShopCarPage"
import PersonalPage from "./page/PersonalPage"

var router = new VueRouter({
   routes:[
       {path:"/home",component:HomePage},
       {path:"/category",component:CategoryPage},
       {path:"/shop_car",component:ShopCarPage},
       {path:"/personal",component:PersonalPage}
   ]
});

export default router