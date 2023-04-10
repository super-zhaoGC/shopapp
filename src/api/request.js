//引入axios
import axios from 'axios'

//引入进度条
import nProgress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"

//创建axios实例进行封装
const request = axios.create({
  //配置对象
  //设置基础路径，发送请求的时候，路径当中出翔api
  baseURL: '/api',
  //超时5s
  timeOut: 5000
})


//请求拦截器：在发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config) => {
  //进度条开始
  nProgress.start()
  //config配置对象，里面有一个重要的属性，headers请求头
  return config
})

//相应拦截器：
request.interceptors.response.use((res) => {
  //进度条结束
  nProgress.done()
  //成功的回调函数，服务器响应返回数据，响应拦截器可以检测到，可以做一些事情
  return res.data
}, (error) => {
  //响应失败的回调函数
  return Promise.reject(new Error('fail'))
})

//导出封装的request
export default request