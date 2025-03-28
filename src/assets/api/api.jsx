import axios from 'axios';
const API = axios.create({
  baseURL: 'https://admin.truongphucglobal.com.vn/wp-json/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// lấy contact form CF7

export const formDataEncoded = async () => {
  const response = await API.get('contact-form-7/v1/contact-forms/');
  return response.data;
};
// lấy các địa điểm thu mua kén
export const getLocation = async () => {
  try {
    const response = await API.get('wp/v2/dia_diem');
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
//lấy nội dung bài viết
export const getDataPost = async () => {
  try {
    const response = await API.get('wp/v2/posts');
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
// lấy chi tiết bài viết
export const getDetailPost = async (id) => {
  try {
    const response = await API.get(`wp/v2/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
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
// lấy chi tiết dịch vụ
export const getDataServiceDetails = async (id) => {
  try {
    const response = await API.get(`wp/v2/service/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
// export data Intro
export const getDataIntro = async () => {
  try {
    const response = await API.get('acf/v3/pages/2');
    return response.data.acf;
  } catch (error) {
    console.log(error);
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
//show footer
export const getFooter = async () => {
  try {
    const response = await API.get('menus/v1/menus/9');
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
