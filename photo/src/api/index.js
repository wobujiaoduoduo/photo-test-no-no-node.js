//涉及到和后端交互的接口
//单一职责
import { http } from "../utils/http";
export function apiLogin({username, password}) {
    //login--post
    return http.post("/login", {
        username,
        password,
    }).then((res)=>{
        console.log(res);
        //是否请求成功
    }).catch(err=>{
        console.log('err', err)
    })

}

//获取图片信息
export function apiGetPhotos(){
    return http.get("/getPhotos")

}
//上传图片接口
export function apiUpoad(file,{onUploadProgress}){
    const formData = new FormData();
    formData.append("img", file)
    return http.post("/upload",formData,{
        onUploadProgress
    })
}