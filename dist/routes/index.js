"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// routes/index.js
var router = _express.default.Router();
/* GET home page. */


router.get('/', function (_req, res) {
  res.render('index', {
    title: 'Express'
  });
});
var _default = router;
exports.default = _default;