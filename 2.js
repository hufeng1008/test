/*
 * @Author: your name
 * @Date: 2021-08-10 10:44:28
 * @LastEditTime: 2021-08-31 15:16:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kgsports-lottery\src\common\http\index.ts
 */
import BaseService from "@kgsport/base-api";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";
// 获取Url参数（token, apiUrl）
export const GetRequest = (name: string) => {
    const reg = new RegExp(name + "=([^&]*)(&|$)", "i");
    const r = window.location.href.substr(1).match(reg);
    if (r != null) {
        localStorage.setItem(name, decodeURIComponent(r[1]));
        return decodeURIComponent(r[1]);
    }
    return null;
};
const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : GetRequest("token");
const apiUrl = localStorage.getItem("apiUrl")
    ? localStorage.getItem("apiUrl")
    : GetRequest("apiUrl");
export class ApiService extends BaseService {
    constructor() {
        super({
            baseURL: apiUrl || "http://new.wzapp111.com/",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    }
    public InterceptorsRequest(config: AxiosRequestConfig) {
        if (config.method === "post") {
            const params = config.data;
            if (typeof params === "object") {
                config.data = qs.stringify(params, { allowDots: true });
            }
        }
        config.headers.client = "1";
        config.headers.locale = "zh";
        config.headers.lotToken =
        "ZXhwPTE3YmExYTMwMzNmJm5lbT1UZXN0MDAxJnBybz10ZzpqYnR5JnJlZj0xN2JiNmUxM2ViZiZyb2w9MCZzaWc9ZjkxMTVhMGYzZTU3ZTA0ZTg2Y2RjMjQxN2NjNGExOWY=";
    }
    public InterceptorsResponse(config: AxiosResponse) {
        // console.warn(config, "InterceptorsResponse");
    }
}
export const Http = new ApiService();
