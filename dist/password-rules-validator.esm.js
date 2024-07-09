import React, { useMemo, useEffect } from 'react';

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}

var _excluded = ["className", "style", "rules", "value", "valueAgain", "minLength", "maxLength", "rtl", "onChange", "specialCharsRegex", "messages"];
var PasswordRulesValidator = function PasswordRulesValidator(_ref) {
  var className = _ref.className,
    style = _ref.style,
    rules = _ref.rules,
    value = _ref.value,
    valueAgain = _ref.valueAgain,
    minLength = _ref.minLength,
    maxLength = _ref.maxLength,
    rtl = _ref.rtl,
    onChange = _ref.onChange,
    _ref$specialCharsRege = _ref.specialCharsRegex,
    specialCharsRegex = _ref$specialCharsRege === void 0 ? /[~`¿¡!#$%\^&*€£@+÷=\-\[\]\\';,/{}\(\)|\\":<>\?\.\_]/g : _ref$specialCharsRege,
    _ref$messages = _ref.messages,
    messages = _ref$messages === void 0 ? {} : _ref$messages,
    remainingProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  var ruleDefinitions = {
    minLength: {
      valid: value.length >= (minLength || 100),
      message: messages.minLength || "Password has at least " + minLength + " characters."
    },
    specialChar: {
      valid: specialCharsRegex.test(value),
      message: messages.specialChar || "Password has special characters."
    },
    number: {
      valid: /\d/g.test(value),
      message: messages.number || "Password has a number."
    },
    noSpaces: {
      valid: !value.includes(" "),
      message: messages.noSpaces || "Password has spaces."
    },
    capital: {
      valid: function () {
        var i = 0;
        if (value.length === 0) {
          return false;
        }
        while (i < value.length) {
          var character = value.charAt(i);
          if (character == character.toLowerCase()) ; else if (character == character.toUpperCase()) {
            return true;
          }
          i++;
        }
        return false;
      }(),
      message: messages.capital || "Password has a capital letter."
    },
    match: {
      valid: value.length > 0 && value === valueAgain,
      message: messages.match || "Passwords match."
    },
    lowercase: {
      valid: function () {
        var i = 0;
        if (value.length === 0) {
          return false;
        }
        while (i < value.length) {
          var character = value.charAt(i);
          if (character == character.toUpperCase()) ; else if (character == character.toLowerCase()) {
            return true;
          }
          i++;
        }
        return false;
      }(),
      message: messages.lowercase || "Password has a lowercase letter."
    },
    letter: {
      valid: /[a-zA-Z]/g.test(value),
      message: messages.letter || "Password has a letter."
    },
    maxLength: {
      valid: value.length <= (maxLength || 16),
      message: messages.maxLength || "Password has no more than " + maxLength + " characters."
    },
    notEmpty: {
      valid: Boolean(value.length > 0 && valueAgain && valueAgain.length > 0),
      message: messages.notEmpty || "Password fields are not empty."
    }
  };
  var enabledRules = useMemo(function () {
    return rules.filter(function (rule) {
      return Boolean(ruleDefinitions[rule]);
    });
  }, [rules]);
  var isValid = enabledRules.every(function (rule) {
    return ruleDefinitions[rule].valid;
  });
  var failedRules = useMemo(function () {
    return enabledRules.filter(function (rule) {
      return !ruleDefinitions[rule].valid;
    });
  }, [value, valueAgain, enabledRules]);
  useEffect(function () {
    if (typeof onChange === "function") {
      onChange(isValid, failedRules);
    }
  }, [isValid, failedRules]);
  if (rtl) {
    className = className ? className + " rtl" : "rtl";
  }
  return React.createElement("ul", {
    className: className,
    style: _extends({
      margin: 0,
      padding: 0
    }, style)
  }, enabledRules.map(function (rule) {
    var _ruleDefinitions$rule = ruleDefinitions[rule],
      message = _ruleDefinitions$rule.message,
      valid = _ruleDefinitions$rule.valid;
    return React.createElement(Rule, Object.assign({
      key: rule,
      valid: valid,
      iconSize: 18,
      validColor: "#4BCA81",
      invalidColor: "#FF0033",
      rtl: rtl
    }, remainingProps), message);
  }));
};
var Rule = function Rule(_ref2) {
  var valid = _ref2.valid,
    iconSize = _ref2.iconSize,
    validColor = _ref2.validColor,
    invalidColor = _ref2.invalidColor,
    validTextColor = _ref2.validTextColor,
    invalidTextColor = _ref2.invalidTextColor,
    iconComponents = _ref2.iconComponents,
    hideIcon = _ref2.hideIcon,
    rtl = _ref2.rtl,
    children = _ref2.children;
  return React.createElement("li", {
    className: valid ? "valid" : "invalid",
    style: {
      listStyleType: "none",
      display: "flex",
      alignItems: "center",
      margin: "2px 0"
    }
  }, !hideIcon ? iconComponents ? valid ? iconComponents.ValidIcon : iconComponents.InvalidIcon : React.createElement("svg", {
    className: "checklist-icon",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: iconSize,
    height: iconSize,
    viewBox: "0 0 512 512",
    style: {
      marginRight: rtl ? 0 : 5,
      marginLeft: rtl ? 5 : 0
    }
  }, React.createElement("path", {
    fill: valid ? validColor : invalidColor,
    d: valid ? "M432 64l-240 240-112-112-80 80 192 192 320-320z" : "M507.331 411.33c-0.002-0.002-0.004-0.004-0.006-0.005l-155.322-155.325 155.322-155.325c0.002-0.002 0.004-0.003 0.006-0.005 1.672-1.673 2.881-3.627 3.656-5.708 2.123-5.688 0.912-12.341-3.662-16.915l-73.373-73.373c-4.574-4.573-11.225-5.783-16.914-3.66-2.080 0.775-4.035 1.984-5.709 3.655 0 0.002-0.002 0.003-0.004 0.005l-155.324 155.326-155.324-155.325c-0.002-0.002-0.003-0.003-0.005-0.005-1.673-1.671-3.627-2.88-5.707-3.655-5.69-2.124-12.341-0.913-16.915 3.66l-73.374 73.374c-4.574 4.574-5.784 11.226-3.661 16.914 0.776 2.080 1.985 4.036 3.656 5.708 0.002 0.001 0.003 0.003 0.005 0.005l155.325 155.324-155.325 155.326c-0.001 0.002-0.003 0.003-0.004 0.005-1.671 1.673-2.88 3.627-3.657 5.707-2.124 5.688-0.913 12.341 3.661 16.915l73.374 73.373c4.575 4.574 11.226 5.784 16.915 3.661 2.080-0.776 4.035-1.985 5.708-3.656 0.001-0.002 0.003-0.003 0.005-0.005l155.324-155.325 155.324 155.325c0.002 0.001 0.004 0.003 0.006 0.004 1.674 1.672 3.627 2.881 5.707 3.657 5.689 2.123 12.342 0.913 16.914-3.661l73.373-73.374c4.574-4.574 5.785-11.227 3.662-16.915-0.776-2.080-1.985-4.034-3.657-5.707z"
  })) : null, React.createElement("span", {
    style: {
      paddingTop: 2,
      opacity: valid ? 1 : !invalidTextColor ? 0.5 : undefined,
      flex: 1,
      color: valid ? validTextColor : invalidTextColor
    }
  }, children));
};

export { PasswordRulesValidator };
//# sourceMappingURL=password-rules-validator.esm.js.map
