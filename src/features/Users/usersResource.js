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
    return $http.get(url);
  }

  function verifyOTP(params) {
    var url = host + "/api/verification";
    return $http.post(url, params);
  }

  function createNewUser(params) {
    var url = host + "/api/user";
    return $http.post(url, params);
  }

  function getUserDetails(params) {
    var url = host + `/api/user?phone=%2B91${params?.phone}`;
    return $http.get(url);
  }

  function getAllTasks(params) {
    var url = host + `/api/task?phone=%2B91${params?.phone}`;
    return $http.get(url);
  }

  function createNewTask(params) {
    var url = host + "/api/task";
    return $http.post(url, params);
  }

  function updateTask(params) {
    var url = host + "/api/task";
    return $http.put(url, params);
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
