function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./juegos/vieja/vieja.component */
    "./src/app/juegos/vieja/vieja.component.ts");
    /* harmony import */


    var _tasks_todo_tasks_todo_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tasks/todo-tasks/todo-tasks.component */
    "./src/app/tasks/todo-tasks/todo-tasks.component.ts");
    /* harmony import */


    var _geocerca_google_geocerca_google_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./geocerca-google/geocerca-google.component */
    "./src/app/geocerca-google/geocerca-google.component.ts");
    /* harmony import */


    var _tio_lista_tio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tio/lista-tio.component */
    "./src/app/tio/lista-tio.component.ts");
    /* harmony import */


    var _tio_detalle_tio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tio/detalle-tio.component */
    "./src/app/tio/detalle-tio.component.ts");
    /* harmony import */


    var _tio_nuevo_tio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tio/nuevo-tio.component */
    "./src/app/tio/nuevo-tio.component.ts");
    /* harmony import */


    var _tio_actualizar_tio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tio/actualizar-tio.component */
    "./src/app/tio/actualizar-tio.component.ts");
    /* harmony import */


    var _tio_login_usuarios_login_usuarios_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tio/login-usuarios/login-usuarios.component */
    "./src/app/tio/login-usuarios/login-usuarios.component.ts");
    /* harmony import */


    var _tio_registrar_usuarios_registrar_usuarios_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tio/registrar-usuarios/registrar-usuarios.component */
    "./src/app/tio/registrar-usuarios/registrar-usuarios.component.ts");
    /* harmony import */


    var _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./blockchain/blockchain.component */
    "./src/app/blockchain/blockchain.component.ts");

    var usuario = {
      id: 1,
      nombre: "error",
      password: "123456",
      email: "error@gmail.com"
    };

    if (localStorage.getItem('login')) {
      usuario = JSON.parse(localStorage.getItem('login')); //console.log('login')
      //console.log(localStorage.getItem('login'))
    }

    var routes = [{
      path: '',
      redirectTo: '/geocerca',
      pathMatch: 'full'
    }, {
      path: 'blockchain',
      component: _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_11__["BlockChainComponent"]
    }, {
      path: 'login',
      component: _tio_login_usuarios_login_usuarios_component__WEBPACK_IMPORTED_MODULE_9__["LoginUsuariosComponent"]
    }, {
      path: 'registro',
      component: _tio_registrar_usuarios_registrar_usuarios_component__WEBPACK_IMPORTED_MODULE_10__["RegistrarUsuariosComponent"]
    }, {
      path: 'vieja',
      component: _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_2__["ViejaComponent"]
    }, {
      path: 'tasks',
      component: _tasks_todo_tasks_todo_tasks_component__WEBPACK_IMPORTED_MODULE_3__["TodoTasksComponent"]
    }, {
      path: 'geocerca',
      component: _geocerca_google_geocerca_google_component__WEBPACK_IMPORTED_MODULE_4__["GeocercaGoogleComponent"]
    }, {
      path: 'lista',
      component: _tio_lista_tio_component__WEBPACK_IMPORTED_MODULE_5__["ListaTioComponent"]
    }, {
      path: 'detalle/:id',
      component: _tio_detalle_tio_component__WEBPACK_IMPORTED_MODULE_6__["DetalleTioComponent"]
    }, {
      path: 'nuevo',
      component: _tio_nuevo_tio_component__WEBPACK_IMPORTED_MODULE_7__["NuevoTioComponent"]
    }, {
      path: 'actualizar/:id',
      component: _tio_actualizar_tio_component__WEBPACK_IMPORTED_MODULE_8__["ActualizarTioComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angularrouter';
      this.brandControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
      this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
      this.brands = [{
        value: 1,
        viewValue: 'Louis Vuitton'
      }, {
        value: 2,
        viewValue: 'Gucci'
      }, {
        value: 3,
        viewValue: 'Prada'
      }, {
        value: 4,
        viewValue: 'Chanel'
      }];
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var ngrx_store_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngrx-store-persist */
    "./node_modules/ngrx-store-persist/dist/index.js");
    /* harmony import */


    var ngrx_store_persist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_persist__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _store_tasks_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store/tasks.reducer */
    "./src/app/store/tasks.reducer.ts");
    /* harmony import */


    var _store_users_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./store/users.reducer */
    "./src/app/store/users.reducer.ts");
    /* harmony import */


    var _store_login_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./store/login.reducer */
    "./src/app/store/login.reducer.ts");
    /* harmony import */


    var _tasks_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tasks/add-task/add-task.component */
    "./src/app/tasks/add-task/add-task.component.ts");
    /* harmony import */


    var _tasks_list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tasks/list-tasks/list-tasks.component */
    "./src/app/tasks/list-tasks/list-tasks.component.ts");
    /* harmony import */


    var _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./juegos/vieja/vieja.component */
    "./src/app/juegos/vieja/vieja.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _tasks_todo_tasks_todo_tasks_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./tasks/todo-tasks/todo-tasks.component */
    "./src/app/tasks/todo-tasks/todo-tasks.component.ts");
    /* harmony import */


    var _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./blockchain/blockchain.component */
    "./src/app/blockchain/blockchain.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _geocerca_google_geocerca_google_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./geocerca-google/geocerca-google.component */
    "./src/app/geocerca-google/geocerca-google.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _tio_lista_tio_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./tio/lista-tio.component */
    "./src/app/tio/lista-tio.component.ts");
    /* harmony import */


    var _tio_nuevo_tio_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./tio/nuevo-tio.component */
    "./src/app/tio/nuevo-tio.component.ts");
    /* harmony import */


    var _tio_detalle_tio_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./tio/detalle-tio.component */
    "./src/app/tio/detalle-tio.component.ts");
    /* harmony import */


    var _tio_actualizar_tio_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./tio/actualizar-tio.component */
    "./src/app/tio/actualizar-tio.component.ts");
    /* harmony import */


    var _tio_login_usuarios_login_usuarios_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./tio/login-usuarios/login-usuarios.component */
    "./src/app/tio/login-usuarios/login-usuarios.component.ts");
    /* harmony import */


    var _tio_registrar_usuarios_registrar_usuarios_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./tio/registrar-usuarios/registrar-usuarios.component */
    "./src/app/tio/registrar-usuarios/registrar-usuarios.component.ts");
    /* import {
      MatToolbarModule,
      //MatIconModule,
      //MatSidenavModule,
      //MatListModule,
      //MatButtonModule
    } from  '@angular/material'; */


    localStorage.setItem('URL', 'https://localhost:44382/');

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _agm_core__WEBPACK_IMPORTED_MODULE_27__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyDZktO_JnnvrY4BnD2IyZo8PqNXiDTWP1w'
      }),
      /* StoreModule.forRoot({
        tasks: taskReducer,
        users: userReducer,
        login: loginReducer
      }), */
      _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({
        tasks: _store_tasks_reducer__WEBPACK_IMPORTED_MODULE_6__["taskReducer"],
        users: _store_users_reducer__WEBPACK_IMPORTED_MODULE_7__["userReducer"],
        login: _store_login_reducer__WEBPACK_IMPORTED_MODULE_8__["loginReducer"]
      }, {
        metaReducers: [ngrx_store_persist__WEBPACK_IMPORTED_MODULE_5__["storageSyncMetaReducer"]]
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _tasks_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_9__["AddTaskComponent"], _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_11__["ViejaComponent"], _tasks_list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_10__["ListTasksComponent"], _tasks_todo_tasks_todo_tasks_component__WEBPACK_IMPORTED_MODULE_15__["TodoTasksComponent"], _geocerca_google_geocerca_google_component__WEBPACK_IMPORTED_MODULE_26__["GeocercaGoogleComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_28__["MenuComponent"], _tio_lista_tio_component__WEBPACK_IMPORTED_MODULE_29__["ListaTioComponent"], _tio_nuevo_tio_component__WEBPACK_IMPORTED_MODULE_30__["NuevoTioComponent"], _tio_detalle_tio_component__WEBPACK_IMPORTED_MODULE_31__["DetalleTioComponent"], _tio_login_usuarios_login_usuarios_component__WEBPACK_IMPORTED_MODULE_33__["LoginUsuariosComponent"], _tio_actualizar_tio_component__WEBPACK_IMPORTED_MODULE_32__["ActualizarTioComponent"], _tio_registrar_usuarios_registrar_usuarios_component__WEBPACK_IMPORTED_MODULE_34__["RegistrarUsuariosComponent"], _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_16__["BlockChainComponent"]],
        imports: [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _agm_core__WEBPACK_IMPORTED_MODULE_27__["AgmCoreModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _tasks_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_9__["AddTaskComponent"], _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_11__["ViejaComponent"], _tasks_list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_10__["ListTasksComponent"], _tasks_todo_tasks_todo_tasks_component__WEBPACK_IMPORTED_MODULE_15__["TodoTasksComponent"], _geocerca_google_geocerca_google_component__WEBPACK_IMPORTED_MODULE_26__["GeocercaGoogleComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_28__["MenuComponent"], _tio_lista_tio_component__WEBPACK_IMPORTED_MODULE_29__["ListaTioComponent"], _tio_nuevo_tio_component__WEBPACK_IMPORTED_MODULE_30__["NuevoTioComponent"], _tio_detalle_tio_component__WEBPACK_IMPORTED_MODULE_31__["DetalleTioComponent"], _tio_login_usuarios_login_usuarios_component__WEBPACK_IMPORTED_MODULE_33__["LoginUsuariosComponent"], _tio_actualizar_tio_component__WEBPACK_IMPORTED_MODULE_32__["ActualizarTioComponent"], _tio_registrar_usuarios_registrar_usuarios_component__WEBPACK_IMPORTED_MODULE_34__["RegistrarUsuariosComponent"], _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_16__["BlockChainComponent"]],
          imports: [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
          }), _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _agm_core__WEBPACK_IMPORTED_MODULE_27__["AgmCoreModule"].forRoot({
            apiKey: 'AIzaSyDZktO_JnnvrY4BnD2IyZo8PqNXiDTWP1w'
          }),
          /* StoreModule.forRoot({
            tasks: taskReducer,
            users: userReducer,
            login: loginReducer
          }), */
          _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({
            tasks: _store_tasks_reducer__WEBPACK_IMPORTED_MODULE_6__["taskReducer"],
            users: _store_users_reducer__WEBPACK_IMPORTED_MODULE_7__["userReducer"],
            login: _store_login_reducer__WEBPACK_IMPORTED_MODULE_8__["loginReducer"]
          }, {
            metaReducers: [ngrx_store_persist__WEBPACK_IMPORTED_MODULE_5__["storageSyncMetaReducer"]]
          }), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blockchain/blockchain.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/blockchain/blockchain.component.ts ***!
    \****************************************************/

  /*! exports provided: BlockChainComponent */

  /***/
  function srcAppBlockchainBlockchainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockChainComponent", function () {
      return BlockChainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tio_tio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tio/tio.service */
    "./src/app/tio/tio.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var BlockChainComponent = /*#__PURE__*/function () {
      function BlockChainComponent(tioService, router, store) {
        _classCallCheck(this, BlockChainComponent);

        this.tioService = tioService;
        this.router = router;
        this.store = store;
        this.title = 'Ejemplo simpre de criptomonedas';
        this.bloques = [];
        this.login = this.store.select('login');

        if (localStorage.getItem('login')) {
          var usuario = JSON.parse(localStorage.getItem('login'));
          console.log('login');
          console.log(localStorage.getItem('login'));

          if (usuario.nombre != 'error') {//this.router.navigate(['/']);
          } else {
            this.router.navigate(['/login']);
          }
        }
      }

      _createClass(BlockChainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "prueba",
        value: function prueba() {
          alert('Prueba');
        }
      }]);

      return BlockChainComponent;
    }();

    BlockChainComponent.ɵfac = function BlockChainComponent_Factory(t) {
      return new (t || BlockChainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tio_tio_service__WEBPACK_IMPORTED_MODULE_1__["TioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    BlockChainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlockChainComponent,
      selectors: [["app-blockchain"]],
      decls: 6,
      vars: 1,
      consts: [[3, "click"]],
      template: function BlockChainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "P\xE1gina de blockchain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockChainComponent_Template_button_click_4_listener() {
            return ctx.prueba();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Bot\xF3n de prueba\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2tjaGFpbi9ibG9ja2NoYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7RUFFdkIiLCJmaWxlIjoic3JjL2FwcC9ibG9ja2NoYWluL2Jsb2NrY2hhaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5ib3RvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockChainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blockchain',
          templateUrl: './blockchain.component.html',
          styleUrls: ['./blockchain.component.css']
        }]
      }], function () {
        return [{
          type: _tio_tio_service__WEBPACK_IMPORTED_MODULE_1__["TioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/geocerca-google/geocerca-google.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/geocerca-google/geocerca-google.component.ts ***!
    \**************************************************************/

  /*! exports provided: GeocercaGoogleComponent */

  /***/
  function srcAppGeocercaGoogleGeocercaGoogleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeocercaGoogleComponent", function () {
      return GeocercaGoogleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tio_tio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tio/tio.service */
    "./src/app/tio/tio.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GeocercaGoogleComponent_agm_marker_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "agm-marker", 5);
      }

      if (rf & 2) {
        var marker_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", marker_r1.lat)("longitude", marker_r1.lng);
      }
    }

    var GeocercaGoogleComponent = /*#__PURE__*/function () {
      /* paths: Array<LatLngLiteral> = [
        {lat:51.69612661762577,lng:6.756516564459343},
        {lat:51.9710789023937,lng:7.025681603521843},
        {lat:52.00490726563561,lng:7.811204064459343},
        {lat:51.87961464450517,lng:8.228684533209343},
        {lat:51.699531328872304,lng:8.096848595709343},
        {lat:51.52556429514715,lng:7.448655236334343}] */
      //paths: LatLngLiteral[] = []

      /* paths: Array<LatLngLiteral> = [
        *     { lat: 0,  lng: 10 },
        *     { lat: 0,  lng: 20 },
        *     { lat: 10, lng: 20 },
        *     { lat: 10, lng: 10 },
        *     { lat: 0,  lng: 10 }
        *   ] */
      function GeocercaGoogleComponent(tioService, router, store) {
        _classCallCheck(this, GeocercaGoogleComponent);

        this.tioService = tioService;
        this.router = router;
        this.store = store;
        this.title = 'Ejemplo simpre de usar Google maps en angular';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.clickeable = true;
        this.draggable = true;
        this.map = null;
        this.tituloMarker = 'Titulo marker';
        this.markers = [];
        this.color = "black";
        this.visible = true;
        this.paths = [];
        this.login = this.store.select('login');

        if (localStorage.getItem('login')) {
          var usuario = JSON.parse(localStorage.getItem('login')); //console.log('login')
          //console.log(localStorage.getItem('login'))

          if (usuario.nombre != 'error') {
            this.router.navigate(['/']);
          } else {
            this.router.navigate(['/login']);
          }
        }
      }

      _createClass(GeocercaGoogleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "limpiar",
        value: function limpiar() {
          this.markers = [];
          this.paths = [];
        } //google.maps.MouseEvent

      }, {
        key: "mapClick",
        value: function mapClick(event) {
          //console.log(JSON.stringify(event.coords));
          var position = {
            lat: event.coords.lat,
            lng: event.coords.lng
          };
          this.markers.push(position);
          this.paths = Object.values(this.markers);
          /* this.paths.push({
            lat: event.coords.lat,
            lng: event.coords.lng
          }); */

          console.log(this.paths);
        }
      }]);

      return GeocercaGoogleComponent;
    }();

    GeocercaGoogleComponent.ɵfac = function GeocercaGoogleComponent_Factory(t) {
      return new (t || GeocercaGoogleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tio_tio_service__WEBPACK_IMPORTED_MODULE_1__["TioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    GeocercaGoogleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GeocercaGoogleComponent,
      selectors: [["app-geocerca-google"]],
      decls: 8,
      vars: 12,
      consts: [["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], [2, "width", "100%", "height", "1rem", "display", "block"], [3, "latitude", "longitude", "clickableIcons", "draggable", "mapClick"], [3, "latitude", "longitude", 4, "ngFor", "ngForOf"], [3, "clickable", "visible", "editable", "zIndex", "draggable", "paths"], [3, "latitude", "longitude"]],
      template: function GeocercaGoogleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeocercaGoogleComponent_Template_button_click_2_listener() {
            return ctx.limpiar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Limpiar\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "agm-map", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function GeocercaGoogleComponent_Template_agm_map_mapClick_5_listener($event) {
            return ctx.mapClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeocercaGoogleComponent_agm_marker_6_Template, 1, 2, "agm-marker", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "agm-polygon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("clickableIcons", ctx.clickeable)("draggable", ctx.draggable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clickable", true)("visible", true)("editable", true)("zIndex", 1)("draggable", true)("paths", ctx.paths);
        }
      },
      directives: [_agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmPolygon"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMarker"]],
      styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .boton[_ngcontent-%COMP%]{\r\n    background-color: blueviolet;\r\n    width: 20rem;\r\n    color:white;\r\n    font-size: 20pt;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VvY2VyY2EtZ29vZ2xlL2dlb2NlcmNhLWdvb2dsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7O0VBRXZCIiwiZmlsZSI6InNyYy9hcHAvZ2VvY2VyY2EtZ29vZ2xlL2dlb2NlcmNhLWdvb2dsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeocercaGoogleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-geocerca-google',
          templateUrl: './geocerca-google.component.html',
          styleUrls: ['./geocerca-google.component.css']
        }]
      }], function () {
        return [{
          type: _tio_tio_service__WEBPACK_IMPORTED_MODULE_1__["TioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/juegos/vieja/vieja.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/juegos/vieja/vieja.component.ts ***!
    \*************************************************/

  /*! exports provided: ViejaComponent */

  /***/
  function srcAppJuegosViejaViejaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViejaComponent", function () {
      return ViejaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViejaComponent_li_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_li_41_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.jumpTo(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Go to move #", i_r2, "");
      }
    }

    var ViejaComponent = /*#__PURE__*/function () {
      function ViejaComponent() {
        _classCallCheck(this, ViejaComponent);

        this.quiengano = 'Next player: X';
        this.squares = Array(9).fill(null);
        this.hayganador = 0;
        this.contador = 0;
        this.history = [{
          squares: Array(9).fill(null)
        }];
        this.stepNumber = 0;
        this.xIsNext = true; //this.state.hayganador = 0;
        //this.state.xIsNext = true;
        //this.state.contador = 0;
        //this.state.stepNumber = 0;
        //var squares = [null,null,null,null,null,null,null,null,null];//Array<String>(9).fill(null);
        //this.state.history.push(squares);
      }

      _createClass(ViejaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /* var squares = [null,null,null,null,null,null,null,null,null];//Array<String>(9).fill(null);
          this.state.history.push(squares); */
        }
      }, {
        key: "quiengano2",
        value: function quiengano2() {
          var squares = this.history[this.stepNumber];

          if (this.hayganador == 1) {
            return 'Winner: ' + (this.xIsNext ? 'O' : 'X');
          } else {
            return 'Next player: ' + (this.xIsNext ? 'X' : 'O');
          }
        }
      }, {
        key: "mostrarSquares",
        value: function mostrarSquares(i) {
          /* const current = this.history[history.length - 1];
          return current.squares[i] == null ? ' ':current.squares[i].toString(); */
          return this.squares[i];
        }
      }, {
        key: "handleClick",
        value: function handleClick(i) {
          this.quiengano = this.quiengano2();

          if (this.hayganador == 1) {
            return;
          } //console.log(i);
          //console.log(this.squares[i])


          var history = this.history.slice(0, this.stepNumber + 1); //const current = history[history.length - 1];
          //const squares = current.squares.slice();

          var squares = this.squares.slice();
          var caracter = this.xIsNext ? 'X' : 'O';
          this.squares[i] = caracter.toString(); //this.state.history.push({squares: squares});
          //this.state.stepNumber++;

          this.history = history.concat([{
            squares: squares
          }]), this.stepNumber = history.length;
          this.xIsNext = !this.xIsNext;
          console.log(this.squares);

          if (this.calculateWinner(this.squares)) {
            this.hayganador = 1;
          } else {
            this.hayganador = 0;
          }
        }
      }, {
        key: "jumpTo",
        value: function jumpTo(step) {
          this.stepNumber = 0;
          this.xIsNext = step % 2 === 0;
          this.squares = this.history[step].squares;
          this.history = [{
            squares: Array(9).fill(null)
          }];
        }
      }, {
        key: "calculateWinner",
        value: function calculateWinner(squares) {
          var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

          for (var i = 0; i < lines.length; i++) {
            var _lines$i = _slicedToArray(lines[i], 3),
                a = _lines$i[0],
                b = _lines$i[1],
                c = _lines$i[2];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }

          return null;
        }
      }]);

      return ViejaComponent;
    }();

    ViejaComponent.ɵfac = function ViejaComponent_Factory(t) {
      return new (t || ViejaComponent)();
    };

    ViejaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViejaComponent,
      selectors: [["app-vieja"]],
      decls: 42,
      vars: 11,
      consts: [["className", "game"], ["className", "game-board"], [2, "float", "left", "width", "300px", "display", "block"], ["className", "board-row", 2, "float", "left", "width", "100%"], [2, "float", "left", "width", "33.33%"], ["className", "square", 2, "margin", "0", "padding-left", "0", "list-style", "none", "width", "100px", "height", "100px", 3, "click"], ["className", "game-info", 2, "float", "left", "width", "100%"], [2, "float", "left", "width", "100%"], [4, "ngFor", "ngForOf"], [3, "click"]],
      template: function ViejaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vieja works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_8_listener() {
            return ctx.handleClick(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_11_listener() {
            return ctx.handleClick(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_14_listener() {
            return ctx.handleClick(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_18_listener() {
            return ctx.handleClick(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_21_listener() {
            return ctx.handleClick(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_24_listener() {
            return ctx.handleClick(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_28_listener() {
            return ctx.handleClick(6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_31_listener() {
            return ctx.handleClick(7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViejaComponent_Template_button_click_34_listener() {
            return ctx.handleClick(8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ViejaComponent_li_41_Template, 3, 1, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[0], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[1], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[2], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[3], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[4], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[5], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[6], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[7], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.squares[8], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quiengano, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.history);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p1ZWdvcy92aWVqYS92aWVqYS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViejaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vieja',
          templateUrl: './vieja.component.html',
          styleUrls: ['./vieja.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_login_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../store/login.actions */
    "./src/app/store/login.actions.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    function MenuComponent_ul_31_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/login");
      }
    }

    function MenuComponent_ul_31_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/registro");
      }
    }

    function MenuComponent_ul_31_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_ul_31_li_3_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_ul_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_ul_31_li_1_Template, 3, 1, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_ul_31_li_2_Template, 3, 1, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_ul_31_li_3_Template, 3, 0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.nombre == "error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.nombre == "error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.nombre != "error");
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(location, router, store) {
        _classCallCheck(this, MenuComponent);

        this.router = router;
        this.store = store;
        this.nombre = '';
        this.email = 'zddfdfdsfd';
        this.password = '';
        this.usuariologeado = false;
        this.login = this.store.select('login');

        if (localStorage.getItem('login')) {
          var usuario = JSON.parse(localStorage.getItem('login'));

          if (usuario.nombre != 'error') {
            this.usuariologeado = true;
          } else {
            this.usuariologeado = false;
            console.log('location'); //console.log(this.router.url)
            //console.log(this.activatedRoute.url);
            //this.router.navigate(['/login']);
          }
        } else {}
      }
      /* ngAfterViewInit() {
        this.usuariologeado = this.child.usuariologeado
      } */


      _createClass(MenuComponent, [{
        key: "logout",
        value: function logout() {
          var usuario = {
            id: 1,
            nombre: "error",
            password: "123456",
            email: "error@gmail.com"
          };
          this.usuariologeado = false;
          this.store.dispatch(new _store_login_actions__WEBPACK_IMPORTED_MODULE_1__["InicioUsuario"](usuario));
          this.router.navigate(['/login']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 33,
      vars: 8,
      consts: [[1, "container-fluid"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#/", 1, "navbar-brand"], ["src", "./assets/images/principal.jpg", "width", "50", "height", "50", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "/lista", 1, "nav-link"], ["routerLink", "/nuevo", 1, "nav-link"], ["class", "nav navbar-nav navbar-right", 4, "ngFor", "ngForOf"], [1, "nav", "navbar-nav", "navbar-right"], ["class", "nav-item", 4, "ngIf"], [1, "nav-link", 3, "click"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Blockchain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Geocerca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Estados persistentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Listar usuarios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nuevo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Tic Tac Toe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MenuComponent_ul_31_Template, 4, 3, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/blockchain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/geocerca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/vieja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 6, ctx.login));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/tio.ts":
  /*!*******************************!*\
    !*** ./src/app/models/tio.ts ***!
    \*******************************/

  /*! exports provided: Tio */

  /***/
  function srcAppModelsTioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tio", function () {
      return Tio;
    });

    var Tio = function Tio(nombre, email, password) {
      _classCallCheck(this, Tio);

      this.nombre = nombre;
      this.email = email;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/store/login.actions.ts":
  /*!****************************************!*\
    !*** ./src/app/store/login.actions.ts ***!
    \****************************************/

  /*! exports provided: INICIO_TASK, REGISTRO_TASK, InicioUsuario, RegistroUsuario */

  /***/
  function srcAppStoreLoginActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INICIO_TASK", function () {
      return INICIO_TASK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REGISTRO_TASK", function () {
      return REGISTRO_TASK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioUsuario", function () {
      return InicioUsuario;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroUsuario", function () {
      return RegistroUsuario;
    }); // 2 - Definición del tipo de acción


    var INICIO_TASK = 'Login Usuario';
    var REGISTRO_TASK = 'Registro Usuario'; // 3 - Creación de la clase tipo AddTask

    var InicioUsuario = function InicioUsuario(payload) {
      _classCallCheck(this, InicioUsuario);

      this.payload = payload;
      this.type = INICIO_TASK;
    };

    var RegistroUsuario = function RegistroUsuario(payload) {
      _classCallCheck(this, RegistroUsuario);

      this.payload = payload;
      this.type = REGISTRO_TASK;
    };
    /***/

  },

  /***/
  "./src/app/store/login.reducer.ts":
  /*!****************************************!*\
    !*** ./src/app/store/login.reducer.ts ***!
    \****************************************/

  /*! exports provided: loginReducer */

  /***/
  function srcAppStoreLoginReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginReducer", function () {
      return loginReducer;
    });
    /* harmony import */


    var _login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.actions */
    "./src/app/store/login.actions.ts"); // 2 - Estado inicial


    var initialState = {
      id: 1,
      nombre: "error",
      password: "123456",
      email: "error@gmail.com"
    }; //localStorage.setItem('login', JSON.stringify(initialState))
    // localStorage.getItem('URL');
    // 3 - Switch con las funciones puras

    function loginReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [initialState];
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _login_actions__WEBPACK_IMPORTED_MODULE_0__["INICIO_TASK"]:
          console.log('action.payload login');
          console.log(JSON.stringify(action.payload));
          var usuario = {
            id: action.payload.id,
            nombre: action.payload.nombre,
            email: action.payload.email,
            password: action.payload.password
          };
          localStorage.setItem('login', JSON.stringify(usuario));
          return [action.payload];

        case _login_actions__WEBPACK_IMPORTED_MODULE_0__["REGISTRO_TASK"]:
          console.log('action.payload registro');
          console.log(JSON.stringify(action.payload));
          var usuario2 = {
            id: action.payload.id,
            nombre: action.payload.nombre,
            email: action.payload.email,
            password: action.payload.password
          };
          localStorage.setItem('login', JSON.stringify(usuario2));
          return [action.payload];

        default:
          //localStorage.setItem('login', JSON.stringify(initialState))
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/store/tasks.actions.ts":
  /*!****************************************!*\
    !*** ./src/app/store/tasks.actions.ts ***!
    \****************************************/

  /*! exports provided: ADD_TASK, AddTask */

  /***/
  function srcAppStoreTasksActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_TASK", function () {
      return ADD_TASK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTask", function () {
      return AddTask;
    }); // 2 - Definición del tipo de acción


    var ADD_TASK = 'Add task'; // 3 - Creación de la clase tipo AddTask

    var AddTask = function AddTask(payload) {
      _classCallCheck(this, AddTask);

      this.payload = payload;
      this.type = ADD_TASK;
    };
    /***/

  },

  /***/
  "./src/app/store/tasks.reducer.ts":
  /*!****************************************!*\
    !*** ./src/app/store/tasks.reducer.ts ***!
    \****************************************/

  /*! exports provided: taskReducer */

  /***/
  function srcAppStoreTasksReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "taskReducer", function () {
      return taskReducer;
    });
    /* harmony import */


    var _tasks_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tasks.actions */
    "./src/app/store/tasks.actions.ts"); // 2 - Estado inicial


    var initialState = {
      name: 'Primera tarea',
      state: 'Pendiente'
    }; // 3 - Switch con las funciones puras

    function taskReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [initialState];
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _tasks_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TASK"]:
          return [].concat(_toConsumableArray(state), [action.payload]);

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/store/users.actions.ts":
  /*!****************************************!*\
    !*** ./src/app/store/users.actions.ts ***!
    \****************************************/

  /*! exports provided: AÑADIR_TASK, AñadirUsuario */

  /***/
  function srcAppStoreUsersActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AÑADIR_TASK", function () {
      return AÑADIR_TASK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AñadirUsuario", function () {
      return AñadirUsuario;
    }); // 2 - Definición del tipo de acción


    var AÑADIR_TASK = 'Añadir Usuario'; // 3 - Creación de la clase tipo AddTask

    var AñadirUsuario = function AñadirUsuario(payload) {
      _classCallCheck(this, AñadirUsuario);

      this.payload = payload;
      this.type = AÑADIR_TASK;
    };
    /***/

  },

  /***/
  "./src/app/store/users.reducer.ts":
  /*!****************************************!*\
    !*** ./src/app/store/users.reducer.ts ***!
    \****************************************/

  /*! exports provided: userReducer */

  /***/
  function srcAppStoreUsersReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userReducer", function () {
      return userReducer;
    });
    /* harmony import */


    var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./users.actions */
    "./src/app/store/users.actions.ts"); // 2 - Estado inicial


    var initialState = {
      id: 1,
      username: "luis13711",
      password: "123456",
      firstName: "Luis",
      lastName: "Correa"
    }; // 3 - Switch con las funciones puras

    function userReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [initialState];
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _users_actions__WEBPACK_IMPORTED_MODULE_0__["AÑADIR_TASK"]:
          return [].concat(_toConsumableArray(state), [action.payload]);

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/tasks/add-task/add-task.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/tasks/add-task/add-task.component.ts ***!
    \******************************************************/

  /*! exports provided: AddTaskComponent */

  /***/
  function srcAppTasksAddTaskAddTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function () {
      return AddTaskComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_tasks_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../store/tasks.actions */
    "./src/app/store/tasks.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"); // Importaciones


    var AddTaskComponent = /*#__PURE__*/function () {
      function AddTaskComponent(store) {
        _classCallCheck(this, AddTaskComponent);

        this.store = store;
      }

      _createClass(AddTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Disparamos la acción

      }, {
        key: "addTask",
        value: function addTask(name, state) {
          this.store.dispatch(new _store_tasks_actions__WEBPACK_IMPORTED_MODULE_1__["AddTask"]({
            name: name,
            state: state
          }));
        }
      }]);

      return AddTaskComponent;
    }();

    AddTaskComponent.ɵfac = function AddTaskComponent_Factory(t) {
      return new (t || AddTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    AddTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddTaskComponent,
      selectors: [["app-add-task"]],
      decls: 7,
      vars: 0,
      consts: [[1, "left"], ["type", "text", "placeholder", "Nombre"], ["name", ""], ["type", "text", "placeholder", "Estado"], ["state", ""], [3, "click"]],
      template: function AddTaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTaskComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx.addTask(_r0.value, _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Crear Tarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL2FkZC10YXNrL2FkZC10YXNrLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-task',
          templateUrl: './add-task.component.html',
          styleUrls: ['./add-task.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tasks/list-tasks/list-tasks.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/tasks/list-tasks/list-tasks.component.ts ***!
    \**********************************************************/

  /*! exports provided: ListTasksComponent */

  /***/
  function srcAppTasksListTasksListTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListTasksComponent", function () {
      return ListTasksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListTasksComponent_div_0_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("name: ", task_r2.name, " state: ", task_r2.state, "");
      }
    }

    function ListTasksComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tareas:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListTasksComponent_div_0_li_4_Template, 3, 2, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r0.tasks));
      }
    }

    var ListTasksComponent = /*#__PURE__*/function () {
      function ListTasksComponent(store) {
        _classCallCheck(this, ListTasksComponent);

        this.store = store; // Accedemos a la store:

        this.tasks = this.store.select('tasks');
      }

      _createClass(ListTasksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListTasksComponent;
    }();

    ListTasksComponent.ɵfac = function ListTasksComponent_Factory(t) {
      return new (t || ListTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    ListTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListTasksComponent,
      selectors: [["app-list-tasks"]],
      decls: 1,
      vars: 1,
      consts: [["class", "right", 4, "ngIf"], [1, "right"], [4, "ngFor", "ngForOf"]],
      template: function ListTasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListTasksComponent_div_0_Template, 6, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL2xpc3QtdGFza3MvbGlzdC10YXNrcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListTasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list-tasks',
          templateUrl: './list-tasks.component.html',
          styleUrls: ['./list-tasks.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tasks/todo-tasks/todo-tasks.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/tasks/todo-tasks/todo-tasks.component.ts ***!
    \**********************************************************/

  /*! exports provided: TodoTasksComponent */

  /***/
  function srcAppTasksTodoTasksTodoTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoTasksComponent", function () {
      return TodoTasksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../list-tasks/list-tasks.component */
    "./src/app/tasks/list-tasks/list-tasks.component.ts");
    /* harmony import */


    var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../add-task/add-task.component */
    "./src/app/tasks/add-task/add-task.component.ts"); //const api = localStorage.getItem('URL') + 'api/actividad';
    //const api = 'https://localhost:44382/' + 'api/actividad';


    var api = "http://www.programandoconrupert.com/ws/servicio-gatos.php";

    var TodoTasksComponent = /*#__PURE__*/function () {
      function TodoTasksComponent() {
        _classCallCheck(this, TodoTasksComponent);
      }

      _createClass(TodoTasksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Disparamos la acción

      }, {
        key: "addTask",
        value: function addTask() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var response, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return fetch(api);

                  case 3:
                    response = _context.sent;
                    _context.next = 6;
                    return response.json();

                  case 6:
                    data = _context.sent;
                    alert(JSON.stringify(data));
                    _context.next = 13;
                    break;

                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context["catch"](0);
                    alert(_context.t0);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 10]]);
          }));
        }
      }]);

      return TodoTasksComponent;
    }();

    TodoTasksComponent.ɵfac = function TodoTasksComponent_Factory(t) {
      return new (t || TodoTasksComponent)();
    };

    TodoTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TodoTasksComponent,
      selectors: [["app-todo-tasks"]],
      decls: 4,
      vars: 0,
      consts: [[3, "click"]],
      template: function TodoTasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-list-tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-add-task");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoTasksComponent_Template_button_click_2_listener() {
            return ctx.addTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Usar estandar fetch");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      directives: [_list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_2__["ListTasksComponent"], _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__["AddTaskComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3RvZG8tdGFza3MvdG9kby10YXNrcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TodoTasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-todo-tasks',
          templateUrl: './todo-tasks.component.html',
          styleUrls: ['./todo-tasks.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tio/actualizar-tio.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/tio/actualizar-tio.component.ts ***!
    \*************************************************/

  /*! exports provided: ActualizarTioComponent */

  /***/
  function srcAppTioActualizarTioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActualizarTioComponent", function () {
      return ActualizarTioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_tio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/tio */
    "./src/app/models/tio.ts");
    /* harmony import */


    var _tio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tio.service */
    "./src/app/tio/tio.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ActualizarTioComponent = /*#__PURE__*/function () {
      function ActualizarTioComponent(tioService, activatedRoute, router) {
        _classCallCheck(this, ActualizarTioComponent);

        this.tioService = tioService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.nombre = '';
        this.email = '';
        this.password = '';
      }

      _createClass(ActualizarTioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var id = this.activatedRoute.snapshot.params.id;
          this.tioService.detalle(id).subscribe(function (data) {
            _this.nombre = data.nombre;
            _this.email = data.email;
            _this.password = data.password;
          }, function (err) {
            console.log(err.error.mensaje);
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          var _this2 = this;

          var id = this.activatedRoute.snapshot.params.id;
          var tio = new _models_tio__WEBPACK_IMPORTED_MODULE_1__["Tio"](this.nombre, this.email, this.password);
          this.tioService.actualizar(tio, id).subscribe(function (data) {
            alert(data.mensaje);

            _this2.router.navigate(['/']);
          }, function (err) {
            alert(err.error.mensaje);
          });
        }
      }]);

      return ActualizarTioComponent;
    }();

    ActualizarTioComponent.ɵfac = function ActualizarTioComponent_Factory(t) {
      return new (t || ActualizarTioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tio_service__WEBPACK_IMPORTED_MODULE_2__["TioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ActualizarTioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActualizarTioComponent,
      selectors: [["app-actualizar-tio"]],
      decls: 18,
      vars: 4,
      consts: [["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "nombre"], ["type", "text", "id", "nombre", "name", "nombre", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-lg", 3, "disabled"], ["type", "reset", "value", "Reset", 1, "btn", "btn-danger"]],
      template: function ActualizarTioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ActualizarTioComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nombre:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActualizarTioComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActualizarTioComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActualizarTioComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Actualizar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rpby9hY3R1YWxpemFyLXRpby5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActualizarTioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-actualizar-tio',
          templateUrl: './actualizar-tio.component.html',
          styleUrls: ['./actualizar-tio.component.css']
        }]
      }], function () {
        return [{
          type: _tio_service__WEBPACK_IMPORTED_MODULE_2__["TioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tio/detalle-tio.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/tio/detalle-tio.component.ts ***!
    \**********************************************/

  /*! exports provided: DetalleTioComponent */

  /***/
  function srcAppTioDetalleTioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleTioComponent", function () {
      return DetalleTioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tio.service */
    "./src/app/tio/tio.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DetalleTioComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nombre: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Correo: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleTioComponent_div_0_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.volver();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Volver");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Detalles de ", ctx_r0.tio.nombre, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.tio.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.tio.email);
      }
    }

    var DetalleTioComponent = /*#__PURE__*/function () {
      function DetalleTioComponent(tioService, activatedRoute) {
        _classCallCheck(this, DetalleTioComponent);

        this.tioService = tioService;
        this.activatedRoute = activatedRoute;
      }

      _createClass(DetalleTioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var id = this.activatedRoute.snapshot.params.id;
          this.tioService.detalle(id).subscribe(function (data) {
            _this3.tio = data;
          });
        }
      }, {
        key: "volver",
        value: function volver() {
          window.history.back();
        }
      }]);

      return DetalleTioComponent;
    }();

    DetalleTioComponent.ɵfac = function DetalleTioComponent_Factory(t) {
      return new (t || DetalleTioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tio_service__WEBPACK_IMPORTED_MODULE_1__["TioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    DetalleTioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetalleTioComponent,
      selectors: [["app-detalle-tio"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container mt-3", 4, "ngIf"], [1, "container", "mt-3"], [1, "card", "text-center"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "card-text"], [1, "card-footer"], [1, "btn", "btn-outline-primary", "btn-lg", 3, "click"]],
      template: function DetalleTioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetalleTioComponent_div_0_Template, 17, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tio);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rpby9kZXRhbGxlLXRpby5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleTioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detalle-tio',
          templateUrl: './detalle-tio.component.html',
          styleUrls: ['./detalle-tio.component.css']
        }]
      }], function () {
        return [{
          type: _tio_service__WEBPACK_IMPORTED_MODULE_1__["TioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tio/lista-tio.component.ts":
  /*!********************************************!*\
    !*** ./src/app/tio/lista-tio.component.ts ***!
    \********************************************/

  /*! exports provided: ListaTioComponent */

  /***/
  function srcAppTioListaTioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaTioComponent", function () {
      return ListaTioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tio.service */
    "./src/app/tio/tio.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ListaTioComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ver");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaTioComponent_tr_12_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var tio_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.borrar(tio_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Borrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tio_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tio_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tio_r1.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tio_r1.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detalle/", tio_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/actualizar/", tio_r1.id, "");
      }
    }

    var ListaTioComponent = /*#__PURE__*/function () {
      function ListaTioComponent(tioService) {
        _classCallCheck(this, ListaTioComponent);

        this.tioService = tioService;
      }

      _createClass(ListaTioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.load();
        }
      }, {
        key: "load",
        value: function load() {
          this.tios = this.tioService.lista();
        }
      }, {
        key: "borrar",
        value: function borrar(id) {
          var _this4 = this;

          if (confirm('¿Seguro que lo quieres borrar?')) {
            this.tioService.borrar(id).subscribe(function (data) {
              alert('tío eliminado');

              _this4.load();
            });
          }
        }
      }]);

      return ListaTioComponent;
    }();

    ListaTioComponent.ɵfac = function ListaTioComponent_Factory(t) {
      return new (t || ListaTioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tio_service__WEBPACK_IMPORTED_MODULE_1__["TioService"]));
    };

    ListaTioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListaTioComponent,
      selectors: [["app-lista-tio"]],
      decls: 17,
      vars: 3,
      consts: [[1, "table", "table-dark", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["routerLink", "/nuevo", 1, "btn", "btn-outline-success", "btn-lg"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], [1, "btn", "btn-outline-primary", 3, "routerLink"], [1, "btn", "btn-outline-warning", 3, "routerLink"], [1, "btn", "btn-outline-danger", 3, "click"]],
      template: function ListaTioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Acciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListaTioComponent_tr_12_Template, 15, 5, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nuevo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 1, ctx.tios));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rpby9saXN0YS10aW8uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaTioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lista-tio',
          templateUrl: './lista-tio.component.html',
          styleUrls: ['./lista-tio.component.css']
        }]
      }], function () {
        return [{
          type: _tio_service__WEBPACK_IMPORTED_MODULE_1__["TioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tio/login-usuarios/login-usuarios.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/tio/login-usuarios/login-usuarios.component.ts ***!
    \****************************************************************/

  /*! exports provided: LoginUsuariosComponent */

  /***/
  function srcAppTioLoginUsuariosLoginUsuariosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginUsuariosComponent", function () {
      return LoginUsuariosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_tio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/tio */
    "./src/app/models/tio.ts");
    /* harmony import */


    var _store_login_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../store/login.actions */
    "./src/app/store/login.actions.ts");
    /* harmony import */


    var _tio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tio.service */
    "./src/app/tio/tio.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginUsuariosComponent = /*#__PURE__*/function () {
      function LoginUsuariosComponent(tioService, router, store) {
        _classCallCheck(this, LoginUsuariosComponent);

        this.tioService = tioService;
        this.router = router;
        this.store = store;
        this.nombre = '';
        this.email = 'zddfdfdsfd';
        this.password = '';
        this.login = this.store.select('login');

        if (localStorage.getItem('login')) {
          var usuario = JSON.parse(localStorage.getItem('login'));
          console.log('login');
          console.log(localStorage.getItem('login'));

          if (usuario.nombre != 'error') {
            this.router.navigate(['/']);
          }
        }
      }

      _createClass(LoginUsuariosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var response, data, usuario;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.tio = new _models_tio__WEBPACK_IMPORTED_MODULE_2__["Tio"](this.nombre, this.email, this.password);
                    _context2.next = 3;
                    return this.tioService.login(this.tio);

                  case 3:
                    response = _context2.sent;

                    if (response.status == 200) {
                      //console.log('data:')
                      //console.log(JSON.stringify(response.data))
                      //[{"id":1,"nombre":"luis13711","email":"alberto13711@gmail.com","password":"123456"}]
                      data = response.data;
                      usuario = data[0]; //console.log(response.data[0].nombre)

                      this.store.dispatch(new _store_login_actions__WEBPACK_IMPORTED_MODULE_3__["InicioUsuario"]({
                        id: usuario.id,
                        nombre: usuario.nombre,
                        email: usuario.email,
                        password: usuario.password
                      }));
                      this.router.navigate(['/']);
                    } else {
                      console.log('ocurrio un error');
                    }
                    /* this.tioService.login(this.tio).subscribe(
                      data => {
                        console.log('data:')
                        console.log(JSON.stringify(data))
                        console.log(JSON.stringify(data[0]))
                        //alert(data.mensaje);
                        //this.router.navigate(['/']);
                      },
                      err => {
                        alert(err.error.mensaje);
                      }
                    ); */


                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LoginUsuariosComponent;
    }();

    LoginUsuariosComponent.ɵfac = function LoginUsuariosComponent_Factory(t) {
      return new (t || LoginUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tio_service__WEBPACK_IMPORTED_MODULE_4__["TioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]));
    };

    LoginUsuariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginUsuariosComponent,
      selectors: [["app-login-usuarios"]],
      decls: 19,
      vars: 2,
      consts: [[2, "display", "block", "width", "100%", "height", "5rem"], [1, "card", "card-default", 2, "width", "25rem", "margin", "auto"], [1, "card-body"], [1, "card-header", "text-center"], ["novalidate", "", 3, "ngSubmit"], [1, "form-group"], ["for", "nombre"], ["type", "text", "id", "nombre", "name", "nombre", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-lg"], ["type", "reset", "value", "Reset", 1, "btn", "btn-danger"]],
      template: function LoginUsuariosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginUsuariosComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nombre:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginUsuariosComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginUsuariosComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rpby9sb2dpbi11c3Vhcmlvcy9sb2dpbi11c3Vhcmlvcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginUsuariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login-usuarios',
          templateUrl: './login-usuarios.component.html',
          styleUrls: ['./login-usuarios.component.css']
        }]
      }], function () {
        return [{
          type: _tio_service__WEBPACK_IMPORTED_MODULE_4__["TioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tio/nuevo-tio.component.ts":
  /*!********************************************!*\
    !*** ./src/app/tio/nuevo-tio.component.ts ***!
    \********************************************/

  /*! exports provided: NuevoTioComponent */

  /***/
  function srcAppTioNuevoTioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NuevoTioComponent", function () {
      return NuevoTioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_tio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/tio */
    "./src/app/models/tio.ts");
    /* harmony import */


    var _tio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tio.service */
    "./src/app/tio/tio.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NuevoTioComponent = /*#__PURE__*/function () {
      function NuevoTioComponent(tioService, router) {
        _classCallCheck(this, NuevoTioComponent);

        this.tioService = tioService;
        this.router = router;
        this.nombre = '';
        this.email = '';
        this.password = '';
      }

      _createClass(NuevoTioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this5 = this;

          this.tio = new _models_tio__WEBPACK_IMPORTED_MODULE_1__["Tio"](this.nombre, this.email, this.password);
          this.tioService.nuevo(this.tio).subscribe(function (data) {
            alert(data.mensaje);

            _this5.router.navigate(['/']);
          }, function (err) {
            alert(err.error.mensaje);
          });
        }
      }]);

      return NuevoTioComponent;
    }();

    NuevoTioComponent.ɵfac = function NuevoTioComponent_Factory(t) {
      return new (t || NuevoTioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tio_service__WEBPACK_IMPORTED_MODULE_2__["TioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    NuevoTioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NuevoTioComponent,
      selectors: [["app-nuevo-tio"]],
      decls: 18,
      vars: 4,
      consts: [["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "nombre"], ["type", "text", "id", "nombre", "name", "nombre", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-lg", 3, "disabled"], ["type", "reset", "value", "Reset", 1, "btn", "btn-danger"]],
      template: function NuevoTioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NuevoTioComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nombre:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NuevoTioComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NuevoTioComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NuevoTioComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Crear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rpby9udWV2by10aW8uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NuevoTioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nuevo-tio',
          templateUrl: './nuevo-tio.component.html',
          styleUrls: ['./nuevo-tio.component.css']
        }]
      }], function () {
        return [{
          type: _tio_service__WEBPACK_IMPORTED_MODULE_2__["TioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tio/registrar-usuarios/registrar-usuarios.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/tio/registrar-usuarios/registrar-usuarios.component.ts ***!
    \************************************************************************/

  /*! exports provided: RegistrarUsuariosComponent */

  /***/
  function srcAppTioRegistrarUsuariosRegistrarUsuariosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrarUsuariosComponent", function () {
      return RegistrarUsuariosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_tio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/tio */
    "./src/app/models/tio.ts");
    /* harmony import */


    var _store_login_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../store/login.actions */
    "./src/app/store/login.actions.ts");
    /* harmony import */


    var _tio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tio.service */
    "./src/app/tio/tio.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RegistrarUsuariosComponent = /*#__PURE__*/function () {
      function RegistrarUsuariosComponent(tioService, router, store) {
        _classCallCheck(this, RegistrarUsuariosComponent);

        this.tioService = tioService;
        this.router = router;
        this.store = store;
        this.nombre = '';
        this.email = 'zddfdfdsfd';
        this.password = '';
        this.login = this.store.select('login');

        if (localStorage.getItem('login')) {
          var usuario = JSON.parse(localStorage.getItem('login')); //console.log('login')
          //console.log(localStorage.getItem('login'))

          if (usuario.nombre != 'error') {
            this.router.navigate(['/']);
          }
        }
      }

      _createClass(RegistrarUsuariosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCreate",
        value: function onCreate() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var response, data, usuario;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.tio = new _models_tio__WEBPACK_IMPORTED_MODULE_2__["Tio"](this.nombre, this.email, this.password);
                    _context3.next = 3;
                    return this.tioService.registrar(this.tio);

                  case 3:
                    response = _context3.sent;

                    if (response.status == 200) {
                      data = response.data;
                      usuario = data[0];
                      this.store.dispatch(new _store_login_actions__WEBPACK_IMPORTED_MODULE_3__["RegistroUsuario"]({
                        id: usuario.id,
                        nombre: usuario.nombre,
                        email: usuario.email,
                        password: usuario.password
                      }));
                      this.router.navigate(['/']);
                    } else {
                      console.log('ocurrio un error');
                    }

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return RegistrarUsuariosComponent;
    }();

    RegistrarUsuariosComponent.ɵfac = function RegistrarUsuariosComponent_Factory(t) {
      return new (t || RegistrarUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tio_service__WEBPACK_IMPORTED_MODULE_4__["TioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]));
    };

    RegistrarUsuariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegistrarUsuariosComponent,
      selectors: [["app-registrar-usuarios"]],
      decls: 23,
      vars: 3,
      consts: [[2, "display", "block", "width", "100%", "height", "5rem"], [1, "card", "card-default", 2, "width", "25rem", "margin", "auto"], [1, "card-body"], [1, "card-header", "text-center"], ["novalidate", "", 3, "ngSubmit"], [1, "form-group"], ["for", "nombre"], ["type", "text", "id", "nombre", "name", "nombre", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-lg"], ["type", "reset", "value", "Reset", 1, "btn", "btn-danger"]],
      template: function RegistrarUsuariosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Registro");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegistrarUsuariosComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nombre:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistrarUsuariosComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistrarUsuariosComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistrarUsuariosComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Crear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rpby9yZWdpc3RyYXItdXN1YXJpb3MvcmVnaXN0cmFyLXVzdWFyaW9zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistrarUsuariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-registrar-usuarios',
          templateUrl: './registrar-usuarios.component.html',
          styleUrls: ['./registrar-usuarios.component.css']
        }]
      }], function () {
        return [{
          type: _tio_service__WEBPACK_IMPORTED_MODULE_4__["TioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tio/tio.service.ts":
  /*!************************************!*\
    !*** ./src/app/tio/tio.service.ts ***!
    \************************************/

  /*! exports provided: TioService */

  /***/
  function srcAppTioTioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TioService", function () {
      return TioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! axios */
    "./node_modules/axios/index.js");
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TioService = /*#__PURE__*/function () {
      function TioService(httpClient) {
        _classCallCheck(this, TioService);

        this.httpClient = httpClient;
        this.tioURL = 'https://servicios-profesionales.herokuapp.com/tio/';
        this.usuariologeado = false;
      }

      _createClass(TioService, [{
        key: "obtenerUsuarioLogeado",
        value: function obtenerUsuarioLogeado() {
          return this.usuariologeado;
        }
      }, {
        key: "cambiarLogeo",
        value: function cambiarLogeo(valor) {
          this.usuariologeado = valor;
        }
      }, {
        key: "lista",
        value: function lista() {
          return this.httpClient.get(this.tioURL + 'lista');
        }
      }, {
        key: "detalle",
        value: function detalle(id) {
          return this.httpClient.get(this.tioURL + "detalle/".concat(id));
        }
      }, {
        key: "login",
        value: function login(tio) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var response;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.tioURL + 'login', tio);

                  case 3:
                    response = _context4.sent;
                    return _context4.abrupt("return", response);

                  case 7:
                    _context4.prev = 7;
                    _context4.t0 = _context4["catch"](0);
                    return _context4.abrupt("return", _context4.t0.response);

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[0, 7]]);
          }));
        }
      }, {
        key: "registrar",
        value: function registrar(tio) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var response;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.tioURL + 'nuevo', tio);

                  case 3:
                    response = _context5.sent;
                    return _context5.abrupt("return", response);

                  case 7:
                    _context5.prev = 7;
                    _context5.t0 = _context5["catch"](0);
                    return _context5.abrupt("return", _context5.t0.response);

                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[0, 7]]);
          }));
        }
        /* registrar(tio: Tio): Observable<any> {
          return this.httpClient.post<any>(this.tioURL + 'nuevo', tio);
        } */

      }, {
        key: "nuevo",
        value: function nuevo(tio) {
          return this.httpClient.post(this.tioURL + 'nuevo', tio);
        }
      }, {
        key: "actualizar",
        value: function actualizar(tio, id) {
          return this.httpClient.put(this.tioURL + "actualizar/".concat(id), tio);
        }
      }, {
        key: "borrar",
        value: function borrar(id) {
          return this.httpClient["delete"](this.tioURL + "borrar/".concat(id));
        }
      }]);

      return TioService;
    }();

    TioService.ɵfac = function TioService_Factory(t) {
      return new (t || TioService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    TioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TioService,
      factory: TioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngrx_store_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngrx-store-persist */
    "./node_modules/ngrx-store-persist/dist/index.js");
    /* harmony import */


    var ngrx_store_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_persist__WEBPACK_IMPORTED_MODULE_4__);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    }); // main.ts persisted

    Object(ngrx_store_persist__WEBPACK_IMPORTED_MODULE_4__["getAllDataFromLocalForage"])({
      driver: ngrx_store_persist__WEBPACK_IMPORTED_MODULE_4___default.a.INDEXEDDB,
      keys: ['user', 'posts', 'tasks', 'users', 'login']
    }).then(function () {
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Bus209\Documents\htdocs\angularroute\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map