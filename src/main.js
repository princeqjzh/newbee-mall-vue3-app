import { createApp } from 'vue'
import { ActionBar, ActionBarIcon, ActionBarButton, Divider, Popup, Overlay, Loading, Dialog, ContactCard, Form, AddressEdit, AddressList, Field, CellGroup, Cell, SwipeCell, Icon, Stepper, Card, Checkbox, CheckboxGroup, Button, Swipe, SwipeItem, PullRefresh, List, Tab, Tabs, SubmitBar, Toast, Skeleton } from 'vant'
import App from './App.vue'
import store from './store'
import router from './router'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'; // 全局引入样式
import ClientMonitor from 'skywalking-client-js';
import Vue from 'vue'

const app = createApp(App) // 创建实例

// 全局过滤器
app.config.globalProperties.$filters = {
    prefix (url) {
        if (url && url.startsWith('http')) {
            return url
        } else {
            url = `http://localhost:28019${url}`
            return url
        }
    }
}

app.use(ActionBarButton)
    .use(ActionBarIcon)
    .use(ActionBar)
    .use(Divider)
    .use(Popup)
    .use(Overlay)
    .use(Loading)
    .use(Dialog)
    .use(Toast)
    .use(ContactCard)
    .use(Form)
    .use(AddressEdit)
    .use(AddressList)
    .use(Field)
    .use(CellGroup)
    .use(Cell)
    .use(SwipeCell)
    .use(Icon)
    .use(Stepper)
    .use(Card)
    .use(Button)
    .use(Swipe)
    .use(SwipeItem)
    .use(PullRefresh)
    .use(List)
    .use(Tab)
    .use(Tabs)
    .use(SubmitBar)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Skeleton)

app.use(router)
app.use(store)

app.mount('#app')


ClientMonitor.register({
    service: 'mall-vue3',//应用名称	
    serviceVersion: '2.0.1',//应用版本号
    traceSDKInternal: true,//追踪sdk
    pagePath: location.href,//当前路由地址
    useFmp: true,
    app: App,
    vue: Vue, //vue实例
});


router.beforeEach(() => {//我选择在beforeEach中上报，其实在afterEach也可以。
    //路由上报到skywalking
    ClientMonitor.setPerformance({
        pagePath: location.href,//当前路由地址。
        useFmp: true,
        app: App,
        vue: Vue,
    });//因为有些参数已经在ClientMonitor.register中注册过了所以不用填加了。
});

// Vue 报错上报到skywalking。
Vue.config.errorHandler = (error) => {
    console.error(error);
    reportFrameErrors(error);
}

//监听ajax报错
window.addEventListener('error', error => {
    console.log("error--->", error)
    reportFrameErrors(error);
}, true);

//上报错误信息方法
function reportFrameErrors (error) {
    ClientMonitor.reportFrameErrors({
        service: '',//应用名称  
        serviceVersion: '2.0.1',//应用版本号
        pagePath: location.href,
        vue: Vue,
    }, error);
}