let apiUrl = "http://localhost:3000";


function getData(path) {
  return axios.get(`${apiUrl}/${path}`);
}

function postData(path , data){
  return axios.post(`${apiUrl}/${path}`, data)
}