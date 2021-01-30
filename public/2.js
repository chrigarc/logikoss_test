(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/UserTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Import component
 // Import stylesheet

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserTable",
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      data: [],
      currentPage: 1,
      perPage: 10,
      total: 0,
      order: 'desc',
      field: 'id',
      loading: false
    };
  },
  created: function created() {
    this.prepareComponent();
  },
  methods: {
    prepareComponent: function prepareComponent() {
      this.getData();
    },
    sorted: function sorted(field, order) {
      this.field = field;
      this.order = order;
      this.getData();
    },
    pageChange: function pageChange(page) {
      this.currentPage = page;
      this.getData();
    },
    getData: function getData() {
      this.loading = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserTable.vue?vue&type=template&id=73fabcea&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/UserTable.vue?vue&type=template&id=73fabcea&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("loading", { attrs: { active: _vm.isLoading, "is-full-page": true } }),
      _vm._v(" "),
      _c(
        "section",
        [
          _c(
            "b-field",
            { attrs: { grouped: "", "group-multiline": "" } },
            [
              _c(
                "b-select",
                {
                  on: { input: _vm.getData },
                  model: {
                    value: _vm.perPage,
                    callback: function($$v) {
                      _vm.perPage = $$v
                    },
                    expression: "perPage"
                  }
                },
                [
                  _c("option", { attrs: { value: "5" } }, [
                    _vm._v("5 por página")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "10" } }, [
                    _vm._v("10 por página")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "15" } }, [
                    _vm._v("15 por página")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "20" } }, [
                    _vm._v("20 por página")
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("b-table", {
            attrs: {
              data: _vm.data,
              paginated: "",
              loading: _vm.loading,
              "per-page": _vm.perPage,
              "backend-pagination": "",
              "default-sort": "id",
              "backend-sorting": "",
              "current-page": _vm.currentPage,
              total: _vm.total
            },
            on: { sort: _vm.sorted, "page-change": _vm.pageChange }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/UserTable.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/user/UserTable.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserTable_vue_vue_type_template_id_73fabcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserTable.vue?vue&type=template&id=73fabcea&scoped=true& */ "./resources/js/components/user/UserTable.vue?vue&type=template&id=73fabcea&scoped=true&");
/* harmony import */ var _UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserTable.vue?vue&type=script&lang=js& */ "./resources/js/components/user/UserTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserTable_vue_vue_type_template_id_73fabcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserTable_vue_vue_type_template_id_73fabcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "73fabcea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/UserTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/UserTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/user/UserTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/UserTable.vue?vue&type=template&id=73fabcea&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/user/UserTable.vue?vue&type=template&id=73fabcea&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_73fabcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserTable.vue?vue&type=template&id=73fabcea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserTable.vue?vue&type=template&id=73fabcea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_73fabcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_73fabcea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);