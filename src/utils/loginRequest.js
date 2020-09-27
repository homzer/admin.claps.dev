import axios from 'axios';

const loginService = axios.create({
    // api的url地址
    // baseURL: 'https://admin-api.claps.dev/',
    baseURL: 'http://localhost:7003/',
    // 持续时间2分钟
    timeout: 1000 * 120,
    // token验证请求的有效性
});

export default loginService
