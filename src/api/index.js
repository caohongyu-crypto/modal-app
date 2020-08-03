import axios from '../axios';

var api = {
    getMessge(){
        return axios.get('/api/meituan/city/hot.json');
    },

    getList(){
        return axios.get('/api/meituan/list/goodsList.json');
    },

    getOrder(){
        return axios.get('/api/meituan/header/search.json');
    }
}

export default api;
