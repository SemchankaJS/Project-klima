/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalWindow */ \"./src/modules/modalWindow.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/carousel */ \"./src/modules/carousel.js\");\n/* harmony import */ var _modules_scrolls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrolls */ \"./src/modules/scrolls.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/maskPhone */ \"./src/modules/maskPhone.js\");\n/* harmony import */ var _modules_modalWindow2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modalWindow2 */ \"./src/modules/modalWindow2.js\");\n/* harmony import */ var _modules_aboutUs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/aboutUs */ \"./src/modules/aboutUs.js\");\n\n\n\n\n\n\n\n\n\n\n // Модальное окно и подложка\n\n(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__.default)(); // Главный слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.default)(); // Карусель\n\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_2__.default)(); // Прокрутка страницы\n\n(0,_modules_scrolls__WEBPACK_IMPORTED_MODULE_3__.default)(); // Отправка данных\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__.default)(); // Аккордион\n\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_6__.default)('.tel');\n(0,_modules_modalWindow2__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_aboutUs__WEBPACK_IMPORTED_MODULE_8__.default)();\n\n//# sourceURL=webpack://thesis/./src/index.js?");

/***/ }),

/***/ "./src/modules/aboutUs.js":
/*!********************************!*\
  !*** ./src/modules/aboutUs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar aboutUs = function aboutUs() {\n  document.querySelector('.num1').style.opacity = '1';\n  document.querySelector('.num2').style.opacity = '1';\n  document.querySelector('.num3').style.opacity = '1';\n  document.querySelector('.num4').style.opacity = '1';\n  var count = 0,\n      flyInterval;\n\n  var flyAnimate = function flyAnimate() {\n    count++;\n\n    if (count < 31) {\n      document.querySelector('.num1').textContent = \"\".concat(count);\n      document.querySelector('.num2').textContent = \"\".concat(count + 25);\n      document.querySelector('.num3').textContent = \"\".concat(count - 7);\n      document.querySelector('.num4').textContent = \"\".concat(count - 7);\n    } else {\n      cancelAnimationFrame(flyInterval);\n      count = 0;\n      return;\n    }\n\n    flyInterval = requestAnimationFrame(flyAnimate);\n  };\n\n  var stop = false;\n  document.addEventListener('scroll', function () {\n    if (window.pageYOffset > 1200 && !stop) {\n      flyAnimate();\n      stop = true;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutUs);\n\n//# sourceURL=webpack://thesis/./src/modules/aboutUs.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// Аккордион\nvar accordeon = function accordeon() {\n  var accordeon = document.querySelector('.accordeon'),\n      element = accordeon.querySelectorAll('.element');\n\n  var addStyle = function addStyle() {\n    var style = document.createElement('style');\n    style.textContent = \"\\n      .accordeon .element.active .element-content {\\n        display: block !important;\\n      }\\n      .accordeon .element-content {\\n        display: none !important;\\n      }\\n    \";\n    document.head.appendChild(style);\n  };\n\n  addStyle();\n\n  var _iterator = _createForOfIteratorHelper(element),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      item.addEventListener('click', function () {\n        if (this.classList.contains('active')) {\n          this.classList.remove('active');\n        } else {\n          var _iterator2 = _createForOfIteratorHelper(element),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var elem = _step2.value;\n              elem.classList.remove('active');\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n\n          this.classList.add('active');\n        }\n      });\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://thesis/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar carousel = function carousel() {\n  var _createForOfIteratorHelper = function _createForOfIteratorHelper(o, allowArrayLike) {\n    var it;\n\n    if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {\n      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {\n        if (it) o = it;\n        var i = 0;\n\n        var F = function F() {};\n\n        return {\n          s: F,\n          n: function n() {\n            if (i >= o.length) return {\n              done: true\n            };\n            return {\n              done: false,\n              value: o[i++]\n            };\n          },\n          e: function e(_e) {\n            throw _e;\n          },\n          f: F\n        };\n      }\n\n      throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n    }\n\n    var normalCompletion = true,\n        didErr = false,\n        err;\n    return {\n      s: function s() {\n        it = o[Symbol.iterator]();\n      },\n      n: function n() {\n        var step = it.next();\n        normalCompletion = step.done;\n        return step;\n      },\n      e: function e(_e2) {\n        didErr = true;\n        err = _e2;\n      },\n      f: function f() {\n        try {\n          if (!normalCompletion && it[\"return\"] != null) it[\"return\"]();\n        } finally {\n          if (didErr) throw err;\n        }\n      }\n    };\n  };\n\n  var _classCallCheck = function _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n      throw new TypeError(\"Cannot call a class as a function\");\n    }\n  };\n\n  var _defineProperties = function _defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  };\n\n  var _createClass = function _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n\n  var servicesCarousel = function servicesCarousel() {\n    var SliderCarousel = function () {\n      function SliderCarousel(_ref) {\n        var main = _ref.main,\n            wrap = _ref.wrap,\n            next = _ref.next,\n            prev = _ref.prev,\n            _ref$position = _ref.position,\n            position = _ref$position === void 0 ? 0 : _ref$position,\n            _ref$slidesToShow = _ref.slidesToShow,\n            slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow;\n\n        _classCallCheck(this, SliderCarousel);\n\n        if (!main || !wrap) {\n          console.warn('slider-carousel: Необходимо 2 свойства, \"main\" и \"wrap\"!');\n        }\n\n        this.main = document.querySelector(main);\n        this.wrap = document.querySelector(wrap);\n        this.slides = document.querySelector(wrap).children;\n        this.next = document.querySelector(next);\n        this.prev = document.querySelector(prev);\n        this.slidesToShow = slidesToShow;\n        this.options = {\n          position: position,\n          widthSlide: Math.floor(100 / this.slidesToShow),\n          maxPosition: this.slides.length - this.slidesToShow\n        };\n      }\n\n      _createClass(SliderCarousel, [{\n        key: \"init\",\n        value: function init() {\n          this.addClass();\n          this.addStyle();\n\n          if (this.prev && this.next) {\n            this.controlSlider();\n          } else {\n            this.addArrow();\n            this.controlSlider();\n          }\n        }\n      }, {\n        key: \"addClass\",\n        value: function addClass() {\n          this.main.classList.add('slider');\n          this.wrap.classList.add('slider__wrap');\n\n          var _iterator = _createForOfIteratorHelper(this.slides),\n              _step;\n\n          try {\n            for (_iterator.s(); !(_step = _iterator.n()).done;) {\n              var item = _step.value;\n              item.classList.add('slider__item');\n            }\n          } catch (err) {\n            _iterator.e(err);\n          } finally {\n            _iterator.f();\n          }\n        }\n      }, {\n        key: \"addStyle\",\n        value: function addStyle() {\n          var style = document.createElement('style');\n          style.id = 'sliderCarousel-style';\n          style.textContent = \"\\n        .slider{\\n          overflow: hidden !important;\\n        }\\n        .slider__wrap{\\n          display: flex !important;\\n          transition: transform 0.5s !important;\\n          will-change: transform !important;\\n        }\\n        .slider__item{\\n          display: flex !important;\\n          align-items: center;\\n          justify-content: center;\\n          flex: 0 0 \".concat(this.options.widthSlide, \"% !important;\\n          margin: auto 0 !important;\\n        }\\n      \");\n          document.head.appendChild(style);\n        }\n      }, {\n        key: \"controlSlider\",\n        value: function controlSlider() {\n          this.prev.addEventListener('click', this.prevSlider.bind(this));\n          this.next.addEventListener('click', this.nextSlider.bind(this));\n        }\n      }, {\n        key: \"prevSlider\",\n        value: function prevSlider() {\n          if (this.options.infinity || this.options.position > 0) {\n            --this.options.position;\n\n            if (this.options.position < 0) {\n              this.options.position = this.options.maxPosition;\n            }\n\n            this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n          }\n        }\n      }, {\n        key: \"nextSlider\",\n        value: function nextSlider() {\n          if (this.options.infinity || this.options.position < this.options.maxPosition) {\n            ++this.options.position;\n\n            if (this.options.position > this.options.maxPosition) {\n              this.options.position = 0;\n            }\n\n            this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n          }\n        }\n      }, {\n        key: \"addArrow\",\n        value: function addArrow() {\n          this.prev = document.querySelector('.arrow-left');\n          this.next = document.querySelector('.arrow-right');\n        }\n      }]);\n\n      return SliderCarousel;\n    }();\n\n    var carousel = new SliderCarousel({\n      main: '.services-elements',\n      wrap: '.services-carousel',\n      prev: '#test-left',\n      next: '.arrow-right',\n      slidesToShow: 3\n    });\n    carousel.init();\n    var element = document.querySelectorAll('.element');\n    var array = [element[0], element[1], element[2], element[3], element[4], element[5]];\n    array.forEach(function (item) {\n      item.addEventListener('click', function () {\n        var callback = document.querySelector('.modal-callback');\n        var modalOverlay = document.querySelector('.modal-overlay');\n        var modalClose = document.querySelector('.modal-close>img');\n        callback.style.display = 'block';\n        modalOverlay.style.display = 'block';\n        modalClose.addEventListener('click', function () {\n          callback.style.display = 'none';\n          modalOverlay.style.display = 'none';\n          document.querySelectorAll('input').forEach(function (item) {\n            if (item.type === 'text' || item.type === 'tel') {\n              item.value = '';\n            }\n          });\n        });\n        modalOverlay.addEventListener('click', function () {\n          callback.style.display = 'none';\n          modalOverlay.style.display = 'none';\n        });\n      });\n    });\n  };\n\n  servicesCarousel();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://thesis/./src/modules/carousel.js?");

/***/ }),

/***/ "./src/modules/maskPhone.js":
/*!**********************************!*\
  !*** ./src/modules/maskPhone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar maskPhone = function maskPhone(selector) {\n  var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+48  ___-___-___';\n  var elems = document.querySelectorAll(selector);\n\n  function mask(event) {\n    var keyCode = event.keyCode;\n    var template = masked,\n        def = template.replace(/\\D/g, \"\"),\n        val = this.value.replace(/\\D/g, \"\");\n    var i = 0,\n        newValue = template.replace(/[_\\d]/g, function (a) {\n      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n    });\n    i = newValue.indexOf(\"_\");\n\n    if (i !== -1) {\n      newValue = newValue.slice(0, i);\n    }\n\n    var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n      return \"\\\\d{1,\" + a.length + \"}\";\n    }).replace(/[+()]/g, \"\\\\$&\");\n    reg = new RegExp(\"^\" + reg + \"$\");\n\n    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n      this.value = newValue;\n    }\n\n    if (event.type === \"blur\" && this.value.length < 5) {\n      this.value = \"\";\n    }\n  }\n\n  var _iterator = _createForOfIteratorHelper(elems),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      elem.addEventListener(\"input\", mask);\n      elem.addEventListener(\"focus\", mask);\n      elem.addEventListener(\"blur\", mask);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack://thesis/./src/modules/maskPhone.js?");

/***/ }),

/***/ "./src/modules/modalWindow.js":
/*!************************************!*\
  !*** ./src/modules/modalWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modalWindow = function modalWindow() {\n  var callback = document.querySelector('.modal-callback');\n  var modalOverlay = document.querySelector('.modal-overlay');\n  var modalBtn = document.querySelectorAll('a')[5];\n  var modalClose = document.querySelector('.modal-close>img');\n  modalBtn.addEventListener('click', function () {\n    callback.style.display = 'block';\n    modalOverlay.style.display = 'block';\n  });\n  modalClose.addEventListener('click', function () {\n    callback.style.display = 'none';\n    modalOverlay.style.display = 'none';\n    document.querySelectorAll('input').forEach(function (item) {\n      if (item.type === 'text' || item.type === 'tel') {\n        item.value = '';\n      }\n    });\n  });\n  modalOverlay.addEventListener('click', function () {\n    callback.style.display = 'none';\n    modalOverlay.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n//# sourceURL=webpack://thesis/./src/modules/modalWindow.js?");

/***/ }),

/***/ "./src/modules/modalWindow2.js":
/*!*************************************!*\
  !*** ./src/modules/modalWindow2.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Зеленая кнопка \nvar modalWindow2 = function modalWindow2() {\n  var callback = document.querySelector('.modal-callback');\n  var modalOverlay = document.querySelector('.modal-overlay');\n  var modalBtn = document.querySelectorAll('a')[15];\n  var modalClose = document.querySelector('.modal-close>img');\n  modalBtn.addEventListener('click', function () {\n    callback.style.display = 'block';\n    modalOverlay.style.display = 'block';\n  });\n  modalClose.addEventListener('click', function () {\n    callback.style.display = 'none';\n    modalOverlay.style.display = 'none';\n    document.querySelectorAll('input').forEach(function (item) {\n      if (item.type === 'text' || item.type === 'tel') {\n        item.value = '';\n      }\n    });\n  });\n  modalOverlay.addEventListener('click', function () {\n    callback.style.display = 'none';\n    modalOverlay.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow2);\n\n//# sourceURL=webpack://thesis/./src/modules/modalWindow2.js?");

/***/ }),

/***/ "./src/modules/scrolls.js":
/*!********************************!*\
  !*** ./src/modules/scrolls.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrolls = function scrolls() {\n  var up = document.querySelector('.up');\n\n  var addStyle = function addStyle() {\n    var style = document.createElement('style');\n    style.textContent = \"\\n      .up {\\n        display: none;\\n      }  \\n      .up-active {\\n        display: block !important;\\n      }\\n      \";\n    document.head.appendChild(style);\n  };\n\n  addStyle();\n\n  var addClass = function addClass() {\n    var scroll = window.pageYOffset;\n\n    if (scroll >= 503) {\n      up.classList.add('up-active');\n    }\n\n    if (scroll === 0) {\n      up.classList.remove('up-active');\n    }\n  };\n\n  addClass();\n\n  var goTop = function goTop() {\n    if (window.pageYOffset > 0) {\n      window.scrollTo(window.pageYOffset, 0);\n    }\n  };\n\n  up.addEventListener('click', goTop);\n  document.addEventListener('scroll', addClass);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolls);\n\n//# sourceURL=webpack://thesis/./src/modules/scrolls.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!',\n      input = document.querySelectorAll('input'),\n      name = document.getElementsByName('fio')[0],\n      statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"\\n    font-size: 2rem;\\n    color: black;\\n    text-align: center;\\n  \";\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  document.addEventListener('input', function (event) {\n    if (event.target.placeholder === 'Ваше имя') {\n      event.target.value = event.target.value.replace(/[^а-яё\\s]/gi, '');\n    }\n  });\n  input.forEach(function (elem) {\n    elem.addEventListener('blur', function () {\n      name.value = name.value.replace(/([а-яё])([а-яё]+)/gi, function (match, val1, val2) {\n        return val1.toUpperCase() + val2;\n      });\n    });\n  });\n  var valid = false;\n  document.addEventListener('input', function (event) {\n    if (event.target.placeholder === 'Ваше имя' && /^[а-яё]{3,20}$/i.test(event.target.value)) {\n      valid = true;\n      return;\n    } else {\n      valid = false;\n    }\n\n    if (event.target.placeholder === 'Телефон*' && event.target.value.length === 18) {\n      valid = true;\n      return;\n    } else {\n      valid = false;\n    }\n  });\n  document.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (valid === true) {\n      target.appendChild(statusMessage);\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(target);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      input.forEach(function (item) {\n        item.value = '';\n      });\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('Status network not 200');\n        }\n\n        statusMessage.textContent = successMessage;\n        document.querySelector('.feedback').value = 'отправлено';\n        setTimeout(function () {\n          document.querySelector('.feedback').value = 'отправить';\n          statusMessage.textContent = '';\n        }, 5000);\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n        document.querySelector('.feedback').value = 'отправляется';\n        setTimeout(function () {\n          document.querySelector('.feedback').value = 'отправить';\n          statusMessage.textContent = '';\n        }, 5000);\n      });\n    } else {\n      return;\n    }\n\n    valid = false;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://thesis/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var indexSlider = 1;\n  var sliderItem = document.querySelectorAll('.item');\n  var table = document.querySelectorAll('.table');\n  table.forEach(function (item) {\n    item.classList.add('table');\n  });\n\n  var showSlides = function showSlides(n) {\n    if (n > sliderItem.length) {\n      indexSlider = 1;\n    }\n\n    if (n < 1) {\n      indexSlider = sliderItem.length;\n    }\n\n    sliderItem.forEach(function (item) {\n      item.classList.add('animated');\n      item.style.display = 'none';\n    });\n    sliderItem[indexSlider - 1].style.display = 'block';\n    table.forEach(function (item) {\n      item.classList.remove('active');\n    });\n  };\n\n  showSlides(indexSlider);\n\n  var nextSlides = function nextSlides(n) {\n    showSlides(indexSlider += n);\n  };\n\n  setInterval(function () {\n    nextSlides(1);\n    sliderItem[indexSlider - 1].classList.remove('fadeIn');\n    sliderItem[indexSlider - 1].classList.add('fadeIn');\n    setTimeout(function () {\n      return table[indexSlider - 1].classList.add('active');\n    }, 30);\n    setTimeout(function () {\n      return table[indexSlider - 1].classList.remove('active');\n    }, 2550);\n  }, 3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://thesis/./src/modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;