import { Platform } from "react-native";
import ErrorConstants from "./ErrorConstants";
import _ from "lodash";
// import * as geolib from "geolib";

const Utils = function (ErrorConstants) {
  /**
   * @ngdoc
   * @name Common.Utils#ErrorObject
   * @methodOf Common.Utils
   * @description Method to get error object.
   * @param {string} errorCode - code defined in ErrorConstants
   * @param {boolean} success - true/false
   * @returns {ErrorObject} - error object containing success/fail status, error code and error message
   */
  function ErrorObject(errorCode, success) {
    var errorObject = {};
    errorObject.success = success;
    errorObject.code = errorCode;
    errorObject.message = ErrorConstants.ErrorMessages[errorCode];
    return errorObject;
  }

  function updateErrorObject(errorObject) {
    if (errorObject) {
      if (errorObject.data) {
        errorObject = errorObject.data;
      }
      var customMsg = "";
      if (isEmpty(customMsg)) {
        if (isEmpty(errorObject.message)) {
          customMsg = errorObject.error;
        } else {
          customMsg = errorObject.message;
        }
      }
      errorObject.message = customMsg;
    } else {
      errorObject = ErrorObject(ErrorConstants.ErrorCodes.UNKNOWN_ERROR, false);
    }
    errorObject.success = false;
    return errorObject;
  }

  function isValidEmail(email) {
    var emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email) {
      return emailPattern.test(email);
    } else {
      return false;
    }
  }

  function isValidPhoneNumber(phoneNumber) {
    var digitsPattern = /^\d+$/;
    if (phoneNumber) {
      return digitsPattern.test(phoneNumber); // returns a boolean
    } else {
      return false;
    }
  }

  function isValidPassword(password) {
    if (password && password.length >= 6 && password.length <= 20) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @ngdoc
   * @name Common.Utils#instanceOf
   * @methodOf Common.Utils
   * @description Method to check whether a object is an instance of particular data type
   * @param {object} Object whose type to be validated
   * @param {constructor} Constructor to match it's type with that of object's type
   * @returns {boolean} true if object is of constructor's type, otherwise false
   */
  function instanceOf(object, constructor) {
    return object instanceof constructor;
  }

  function isEmpty(stringObj) {
    if (!stringObj || null == stringObj || "" == stringObj) {
      return true;
    } else {
      return false;
    }
  }

  function getSearchType(text) {
    let type = "name";
    if (isValidEmail(text)) {
      type = "email";
    } else if (isValidPhoneNumber(text)) {
      type = "phone_number";
    }
    return type;
  }

  function isSameDate(date1, date2) {
    if (
      date1.getDate() == date2.getDate() &&
      date1.getMonth() == date2.getMonth() &&
      date1.getYear() == date2.getYear()
    ) {
      return true;
    } else {
      return false;
    }
  }

  function convertRupeeToPaisa(rupee) {
    return Math.round(rupee * 100);
  }

  function isOfTypeString(obj) {
    if (obj && (typeof obj === "string" || obj instanceof String)) {
      return true;
    } else {
      return false;
    }
  }

  function getDateTimeDifference(date1, date2) {
    let diff = 0;
    try {
      diff = Math.abs(date1.getTime() - date2.getTime());
    } catch (error) {
      console.log("getDateTimeDifference error :>> ", error);
    }
    return diff;
  }

  function getDateTimeDifferenceInHours(date1, date2) {
    return getDateTimeDifference(date1, date2) / 1000 / 3600;
  }

  function getDateTimeDifferenceInMinutes(date1, date2) {
    return Math.floor(getDateTimeDifference(date1, date2) / 1000 / 60);
  }

  function getDateTimeDifferenceInHoursAndMinutes(date1, date2) {
    let mins = getDateTimeDifferenceInMinutes(date1, date2);
    mins = mins.toString().replace(".", ":");
    return mins;
  }

  function formateMinutesToHours(minutes) {
    let d = new Date();
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMinutes(minutes);

    let date_string = `${d.getHours() > 0 ? `${d.getHours()}h` : ``} ${
      d.getMinutes() > 0 ? `${d.getMinutes()} mins` : ``
    }`;
    return date_string;
  }

  function isInteger(num) {
    let isInt = false;

    if (!containsAlphabetsAndSpecialCharacters(num)) {
      let toInt = parseInt(num);
      isInt = Number.isInteger(toInt);
    }

    return isInt;
  }

  function containsAlphabetsAndSpecialCharacters(str) {
    const format = /[ A-Za-z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let contains = format.test(str);
    return contains;
  }

  return {
    ErrorObject: ErrorObject,
    updateErrorObject: updateErrorObject,
    isValidPassword: isValidPassword,
    isValidEmail: isValidEmail,
    isValidPhoneNumber: isValidPhoneNumber,
    isEmpty: isEmpty,
    instanceOf: instanceOf,
    getSearchType: getSearchType,
    isSameDate: isSameDate,
    convertRupeeToPaisa: convertRupeeToPaisa,
    isOfTypeString: isOfTypeString,
    getDateTimeDifference: getDateTimeDifference,
    getDateTimeDifferenceInHours: getDateTimeDifferenceInHours,
    getDateTimeDifferenceInMinutes: getDateTimeDifferenceInMinutes,
    getDateTimeDifferenceInHoursAndMinutes:
      getDateTimeDifferenceInHoursAndMinutes,
    formateMinutesToHours: formateMinutesToHours,
    isInteger: isInteger,
    containsAlphabetsAndSpecialCharacters:
      containsAlphabetsAndSpecialCharacters,
  };
};

export default Utils(ErrorConstants);
