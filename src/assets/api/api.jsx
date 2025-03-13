import axios from 'axios';
const API = axios.create({
  baseURL: 'https://admin.truongphucglobal.com.vn/wp-json/',
  headers: {
    'Content-Type': 'application/json',
  },
});
// lấy nội dung HOME từ wordpress
export const getDataHome = async () => {
  try {
    const response = await API.get('acf/v3/pages/78');
    return response.data.acf;
  } catch (error) {
    console.log(error);
    return [];
  }
};
// lấy danh mục dịch vụ
export const getDataService = async () => {
  try {
    const response = await API.get('wp/v2/service');
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
// show menu
export const getMenu = async () => {
  try {
    const response = await API.get('menus/v1/menus/3');
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
