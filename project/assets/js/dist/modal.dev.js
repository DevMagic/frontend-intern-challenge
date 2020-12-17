"use strict";

var modal = {
  success: function success(msg, title) {
    $('body').append("<div class=\"alert\">\n        <div class=\"card\">\n            <div class=\"success-checkmark\">\n                <div class=\"check-icon\">\n                    <span class=\"icon-line line-tip\"></span>\n                    <span class=\"icon-line line-long\"></span>\n                    <div class=\"icon-circle\"></div>\n                    <div class=\"icon-fix\"></div>\n                </div>\n            </div>\n            <h2>".concat(title, "</h2>\n            <p>").concat(msg, "</p>\n            <button onclick=\"modal.close()\">Ok</button>\n        </div>\n    </div>"));
  },
  error: function error(msg, title) {
    $('body').append("<div class=\"alert\">\n        <div class=\"card\">\n            <div class=\"error-banmark\">\n                <div class=\"ban-icon\">\n                    <span class=\"icon-line line-long-invert\"></span>\n                    <span class=\"icon-line line-long\"></span>\n                    <div class=\"icon-circle\"></div>\n                    <div class=\"icon-fix\"></div>\n                </div>\n            </div>\n            <h2>".concat(title, "</h2>\n            <p>").concat(msg, "</p>\n            <button onclick=\"modal.close()\">Ok</button>\n        </div>\n    </div>"));
  },
  close: function close() {
    $('.alert').remove();
  }
};