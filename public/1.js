(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/post/PostTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/post/PostTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserTable",
  props: {
    url: String
  },
  data: function data() {
    return {
      data: [],
      currentPage: 1,
      perPage: 10,
      total: 0,
      order: 'desc',
      field: 'id',
      loading: false,
      columns: [{
        label: 'Acciones',
        searchable: false,
        custom: true,
        field: 'actions'
      }, {
        field: 'id',
        label: 'ID',
        numeric: true,
        searchable: true
      }, {
        field: 'title',
        label: 'Titulo',
        searchable: true
      }]
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
      var _this = this;

      var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.log(filters);
      this.loading = true;
      axios.get(this.url, {
        params: Object.assign({
          perPage: this.perPage,
          page: this.currentPage,
          field: this.field
        }, filters)
      }).then(function (response) {
        console.log(_this.data);
        _this.data = response.data.data;
        _this.total = response.data.total;
      })["catch"](function (errors) {
        console.error(errors); // eslint-disable-next-line
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/post/PostTable.vue?vue&type=template&id=ac2c786c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/post/PostTable.vue?vue&type=template&id=ac2c786c&scoped=true& ***!
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
  return _c("div", [
    _c("section", [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "control" }, [
            _c(
              "a",
              {
                staticClass: "button is-success",
                attrs: { href: _vm.url + "/create" }
              },
              [
                _vm._v(
                  "\n                        Nueva Entrada\n                    "
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "column" },
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
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c(
          "div",
          { staticClass: "column is-full" },
          [
            _c(
              "b-table",
              {
                attrs: {
                  data: _vm.data,
                  paginated: "",
                  loading: _vm.loading,
                  "per-page": _vm.perPage,
                  "backend-pagination": "",
                  "default-sort": "id",
                  "backend-sorting": "",
                  "current-page": _vm.currentPage,
                  total: _vm.total,
                  "backend-filtering": true
                },
                on: {
                  sort: _vm.sorted,
                  "page-change": _vm.pageChange,
                  "filters-change": _vm.getData
                }
              },
              [
                _vm._l(_vm.columns, function(column) {
                  return [
                    _c(
                      "b-table-column",
                      _vm._b(
                        {
                          key: column.id,
                          scopedSlots: _vm._u(
                            [
                              column.searchable && !column.numeric
                                ? {
                                    key: "searchable",
                                    fn: function(props) {
                                      return [
                                        _c("b-input", {
                                          attrs: {
                                            placeholder:
                                              "Buscar por " +
                                              props.column.label,
                                            icon: "magnify",
                                            size: "is-small"
                                          },
                                          model: {
                                            value:
                                              props.filters[props.column.field],
                                            callback: function($$v) {
                                              _vm.$set(
                                                props.filters,
                                                props.column.field,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "props.filters[props.column.field]"
                                          }
                                        })
                                      ]
                                    }
                                  }
                                : null,
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    !column.custom
                                      ? [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(props.row[column.field]) +
                                              "\n                                "
                                          )
                                        ]
                                      : column.field === "actions"
                                      ? [
                                          _c("ActionButtons", {
                                            attrs: {
                                              edit: true,
                                              show: true,
                                              dele: true,
                                              url: _vm.url,
                                              row: props.row,
                                              primaryKey: "slug"
                                            },
                                            on: { deleteData: _vm.getData }
                                          })
                                        ]
                                      : _vm._e()
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        },
                        "b-table-column",
                        column,
                        false
                      )
                    )
                  ]
                })
              ],
              2
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/post/PostTable.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/post/PostTable.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostTable_vue_vue_type_template_id_ac2c786c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostTable.vue?vue&type=template&id=ac2c786c&scoped=true& */ "./resources/js/components/post/PostTable.vue?vue&type=template&id=ac2c786c&scoped=true&");
/* harmony import */ var _PostTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostTable.vue?vue&type=script&lang=js& */ "./resources/js/components/post/PostTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostTable_vue_vue_type_template_id_ac2c786c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostTable_vue_vue_type_template_id_ac2c786c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ac2c786c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/post/PostTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/post/PostTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/post/PostTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/post/PostTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/post/PostTable.vue?vue&type=template&id=ac2c786c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/post/PostTable.vue?vue&type=template&id=ac2c786c&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostTable_vue_vue_type_template_id_ac2c786c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostTable.vue?vue&type=template&id=ac2c786c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/post/PostTable.vue?vue&type=template&id=ac2c786c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostTable_vue_vue_type_template_id_ac2c786c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostTable_vue_vue_type_template_id_ac2c786c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);