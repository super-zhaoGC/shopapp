import request from "./request";

export const reqCategoryList = () => {
  return request({
    url: "/product/getBaseCategoryList",
    method: 'get'
  })
}