//axios

import axios from "axios";
import store from "../store"
export const http = axios.create({ 
    timeout: 7000, 
    baseURL: "/api" 
});
//响应拦截器
 //**//不知道为啥会出错，显示这不是一个function//** 
// http.interceptors.response((res => {
//     return res;
// })
//请求拦截器
http.interceptors.request.use((config)=>{
    //先获取token
    const token = store.state.token;
    if(token){
        //请求头
        //登陆之后跳转到photo
        config.headers.authorization = "Bearer" + token;
        return config;
        //**刷新之后会出现401 */
        //**要走登录页面才可以从新登陆所以不能刷新 */
        //**所以将token存在本地---->store/index.js mutations */
    }
})
