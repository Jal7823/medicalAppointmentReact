import axios from "axios";

const urlBase = "http://localhost:8000";

export const getAllData = async (endpoint) => {
  try {
    const data = await axios.get(`${urlBase}/${endpoint}/`);
    return data;
  } catch (e) {
    console.error(`Error in request from ⚠ => ${e}`);
  }
};

export const getOneData = async (endpoint, id) => {
  try {
    const data = await axios.get(`${urlBase}/${endpoint}/${id}/`);
    return data;
  } catch (e) {
    console.error(`Error in request from ⚠ => ${e}`);
  }
};

export const createItem = async (endpoint, data,token) => {

  //you need send the endpoint and data
  try {
    const newItem = await axios.post(`${urlBase}/${endpoint}/`, data,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
    return newItem;
  } catch (e) {
    console.error(`Error in request from ⚠ => ${e}`);
  }
};
