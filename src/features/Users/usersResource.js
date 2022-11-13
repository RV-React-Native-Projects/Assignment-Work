import $http from "../../global/http";
const host = "http://13.234.232.253";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MjE4MjcxMywianRpIjoiYTM3NTg2ZGUtOTMxYS00MzRkLThhNjAtZTVkMDAyYzU3ZGU1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Iis5MTk0Nzk3ODk2MTgiLCJuYmYiOjE2NjIxODI3MTN9.CN-iEgEplJfqZzwdPChBPoXqfEZEQya5rpNssw1S0jE";

const usersResource = function ($http) {
  function sendOTP(params) {
    var url =
      host +
      "/api/verification" +
      `?phone=%2B91${params?.phone}&signature=${params?.signature || "xyz"}`;
    console.log("URL==>", url);
    console.log("params==>", params);
    return $http.get(url, params);
  }

  function verifyOTP(params) {
    var url = host + "/api/verification";
    console.log("URL==>", url);
    console.log("params==>", params);
    return $http.post(url, params);
  }

  function createNewUser(params) {
    var headers = {
      "Content-Type": "application/json",
    };
    if (params?.token) {
      headers.Authorization = `Bearer ${params?.token}`;
    }
    var url = host + "/api/user";
    console.log("URL==>", url);
    console.log("params==>", params);
    return $http.post(url, params, headers);
  }

  function getUserDetails(params) {
    var headers = {
      "Content-Type": "application/json",
    };
    if (params?.token) {
      headers.Authorization = `Bearer ${params?.token}`;
    }
    var url = host + `/api/user?phone=${params?.phone}`;
    console.log("URL==>", url);
    console.log("params==>", params);
    return $http.get(url, params, headers);
  }

  function getAllTasks(params) {
    var headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    var url = host + `/api/task?phone=${params?.phone}`;
    console.log("URL==>", url);
    console.log("params==>", params);
    return $http.get(url, params, headers);
  }

  function createNewTask(params) {
    var headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    var url = host + "/api/task";
    console.log("URL==>", url);
    console.log("params==>", params);
    return $http.post(url, params, headers);
  }

  function updateTask(params) {
    var headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    var url = host + "/api/task";
    console.log("URL==>", url);
    console.log("params==>", params);
    return $http.put(url, params, headers);
  }

  return {
    sendOTP: sendOTP,
    verifyOTP: verifyOTP,
    createNewUser: createNewUser,
    getUserDetails: getUserDetails,
    getAllTasks: getAllTasks,
    createNewTask: createNewTask,
    updateTask: updateTask,
  };
};

export default usersResource($http);
