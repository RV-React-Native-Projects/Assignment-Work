import Utils from "../../common/Utils";
import ErrorConstants from "../../common/ErrorConstants";
import usersResource from "./usersResource";

const UserManager = function (usersResource, Utils, ErrorConstants) {
  function sendOTP(params, successCallback, errorCallback) {
    if (Utils.isValidPhoneNumber(params.coupon_code)) {
      var error = Utils.ErrorObject(
        ErrorConstants.ErrorCodes.INVALID_PHONE_NUMBER,
        false
      );
      errorCallback(error);
    } else {
      usersResource.sendOTP(params).then(
        function (otpResponse) {
          successCallback(otpResponse);
        },
        function (error) {
          error = Utils.updateErrorObject(error);
          errorCallback(error);
        }
      );
    }
  }

  function verifyOTP(params, successCallback, errorCallback) {
    usersResource.verifyOTP(params).then(
      function (otpResponse) {
        successCallback(otpResponse);
      },
      function (error) {
        error = Utils.updateErrorObject(error);
        errorCallback(error);
      }
    );
  }

  function createNewUser(params, successCallback, errorCallback) {
    usersResource.createNewUser(params).then(
      function (otpResponse) {
        successCallback(otpResponse);
      },
      function (error) {
        error = Utils.updateErrorObject(error);
        errorCallback(error);
      }
    );
  }

  function getUserDetails(params, successCallback, errorCallback) {
    usersResource.getUserDetails(params).then(
      function (otpResponse) {
        successCallback(otpResponse);
      },
      function (error) {
        error = Utils.updateErrorObject(error);
        errorCallback(error);
      }
    );
  }

  function getAllTasks(params, successCallback, errorCallback) {
    usersResource.getAllTasks(params).then(
      function (otpResponse) {
        successCallback(otpResponse);
      },
      function (error) {
        error = Utils.updateErrorObject(error);
        errorCallback(error);
      }
    );
  }

  function createNewTask(params, successCallback, errorCallback) {
    usersResource.createNewTask(params).then(
      function (otpResponse) {
        successCallback(otpResponse);
      },
      function (error) {
        error = Utils.updateErrorObject(error);
        errorCallback(error);
      }
    );
  }

  function updateTask(params, successCallback, errorCallback) {
    usersResource.updateTask(params).then(
      function (otpResponse) {
        successCallback(otpResponse);
      },
      function (error) {
        error = Utils.updateErrorObject(error);
        errorCallback(error);
      }
    );
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

export default UserManager(usersResource, Utils, ErrorConstants);
