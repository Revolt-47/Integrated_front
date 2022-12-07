import axios from "axios";

const URL = "http://localhost:3000";

//Add Branch
export const addBranch = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log(`Erroe while calling add branch api `, error);
  }
};
//Display all Branch
export const getBranches = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log(`Error while calling get branches api `, error);
  }
};
//Display get Branch by id
export const getBranch = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log(`Error while calling getBranch api `, error);
  }
};
//Edit Branch
export const editBranch = async (data, id) => {
  // let url = `${URL}/${id}`;
  // console.log(url);
  try {
    return await axios.put(`${URL}/${id}`, data);
  } catch (error) {
    console.log(data);
    console.log(`Erroe while calling Edit branch api `, error);
  }
};
//Delete Branch
export const deleteBranch = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    // console.log(data);
    console.log(`Erroe while calling Delete branch api `, error);
  }
};
