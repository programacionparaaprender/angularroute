(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div class=\"container\">\r\n  <div></div>\r\n  <div class=\"header clearfix\">\r\n    <nav>\r\n      <ul class=\"nav nav-pills float-left\">\r\n        <a [routerLink]=\"'/home'\" class=\"nav-item nav-link\" exact> Home </a>\r\n      </ul>\r\n      <ul class=\"nav nav-pills float-left\">\r\n        <a [routerLink] = \"'/products'\">\r\n          Go to Products List\r\n        </a>\r\n      </ul>\r\n    </nav>\r\n    <h3 class=\"text-muted\">{{ title }}</h3>\r\n    <!-- <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"> -->\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/juegos/vieja/vieja.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/juegos/vieja/vieja.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>vieja works!</p>\r\n    <div>\r\n    <div className=\"game\">\r\n              <div className=\"game-board\">\r\n                <div style=\"float: left;width: 300px;display:block;\">\r\n                <div style=\"float:left;width:100%;\" className=\"board-row\">\r\n                <div style=\"float: left;width: 33.33%;\">\r\n                    <button \r\n                    (click)=\"handleClick(0)\"\r\n                    style=\"margin:0; paddingLeft: 0; listStyle: none; width:100px; height:100px;\" className=\"square\">\r\n                      {{squares[0]}}\r\n                    </button>\r\n                </div>\r\n                <div style=\"float: left;width: 33.33%;\">\r\n                    <button \r\n                    (click)=\"handleClick(1)\"\r\n                    style=\"margin:0; paddingLeft: 0; listStyle: none; width:100px; height:100px;\" className=\"square\">\r\n                      {{squares[1]}}\r\n                    </button>\r\n                </div>\r\n                <div style=\"float: left;width: 33.33%;\">\r\n                    <button \r\n                    (click)=\"handleClick(2)\"\r\n                    style=\"margin:0; paddingLeft: 0; listStyle: none; width:100px; height:100px;\" className=\"square\">\r\n                      {{squares[2]}}\r\n                    </button>\r\n                </div>\r\n                <div style=\"float:left;width:100%;\" className=\"board-row\">\r\n                <div style=\"float: left;width: 33.33%;\">\r\n                    <button \r\n                    (click)=\"handleClick(3)\"\r\n                    style=\"margin:0; paddingLeft: 0; listStyle: none; width:100px; height:100px;\" className=\"square\">\r\n                      {{squares[3]}}\r\n                    </button>\r\n                </div>\r\n                <div style=\"float: left;width: 33.33%;\">\r\n                    <button \r\n                    (click)=\"handleClick(4)\"\r\n                    style=\"margin:0; paddingLeft: 0; listStyle: none; width:100px; height:100px;\" className=\"square\">\r\n                      {{squares[4]}}\r\n                    </button>\r\n                </div>\r\n                <div style=\"float: left;width: 33.33%;\">\r\n                    <button \r\n                    (click)=\"handleClick(5)\"\r\n                    style=\"margin:0; paddingLeft: 0; listStyle: none; width:100px; height:100px;\" className=\"square\">\r\n                      {{squares[5]}}\r\n                    </button>\r\n                </div>\r\n                </div>\r\n                <div style=\"float:left;width:100%;\" className=\"board-row\">\r\n                <div style=\"float: left;width: 33.33%;\">\r\n                    <button \r\n                    (click)=\"handleClick(6)\"\r\n                    style=\"margin:0; paddingLeft: 0; listStyle: none; width:100px; height:100px;\" className=\"square\">\r\n                      {{squares[6]}}\r\n                    </button>\r\n                </div>\r\n                <div style=\"float: left;width: 33.33%;\">\r\n                    <button \r\n                    (click)=\"handleClick(7)\"\r\n                    style=\"margin:0; paddingLeft: 0; listStyle: none; width:100px; height:100px;\" className=\"square\">\r\n                      {{squares[7]}}\r\n                    </button>\r\n                </div>\r\n                <div style=\"float: left;width: 33.33%;\">\r\n                    <button \r\n                    (click)=\"handleClick(8)\"\r\n                    style=\"margin:0; paddingLeft: 0; listStyle: none; width:100px; height:100px;\" className=\"square\">\r\n                      {{squares[8]}}\r\n                    </button>\r\n                </div>\r\n                </div>\r\n                </div>\r\n                </div>\r\n              </div>\r\n              <div style=\"float:left;width:100%;\" className=\"game-info\">\r\n                <div style=\"float:left;width:100%;\">\r\n                    {{quiengano}}      \r\n                </div>     \r\n                <div style=\"float:left;width:100%;\">\r\n                   <ol>\r\n                     <li  *ngFor=\"let item of history; let i = index\">\r\n                      <button (click)=\"jumpTo(i)\">Go to move #{{i}}</button>\r\n                    </li>\r\n                    </ol>   \r\n                </div>   \r\n              </div>\r\n            </div>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-detail/product-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-detail/product-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Product Details</h2>\r\n\r\n<div *ngIf=\"product\">\r\n  <h3>{{ product.name }}</h3>\r\n  <h4>{{ product.price | currency }}</h4>\r\n  <p>{{ product.description }}</p>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Products</h2>\r\n<div *ngFor=\"let product of products; index as id\">\r\n\r\n    <h3>\r\n        <a [routerLink]=\"['/products', id]\"><!-- product.id -->\r\n          {{ product.name }}\r\n        </a>\r\n      </h3>\r\n      <p *ngIf=\"product.description\">\r\n        Description: {{ product.description }}\r\n      </p>\r\n      <button (click)=\"share()\">\r\n        Share\r\n      </button>\r\n  </div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./juegos/vieja/vieja.component */ "./src/app/juegos/vieja/vieja.component.ts");







//import { HomeComponents } from "../../../../../../../Users/LuisCorrea/Documents/htdocs/angularroute2/src/app/home/home.component";
var routes = [
    { path: '', redirectTo: '/vieja', pathMatch: 'full' },
    /* { path: '',  redirectTo: '/products', pathMatch: 'full' }, */
    { path: 'products', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"] },
    { path: 'product/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"] },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'vieja', component: _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_6__["ViejaComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*<div class=\"row\"></div>*/\r\n#app\r\n{\r\n    width:800px;\r\n    height:300px;\r\n    background-color:azure;\r\n}\r\n.boton\r\n{\r\n    float:left;\r\n    height:40px;\r\n            width:100%;\r\n            background-color:olive;\r\n            font-size:14px;\r\n            font-style:normal;\r\n            font-family:Verdana, Geneva, Tahoma, sans-serif;\r\n            text-align:center;\r\n            text-decoration:none;\r\n            padding: 10px 20px 10px 20px;\r\n            color:white;\r\n        }\r\n.boton:hover\r\n        {\r\n            text-decoration:none;\r\n            color:white;\r\n            background-color:blue;\r\n        }\r\n/*\r\n        .row\r\n        {\r\n            float:left;\r\n            width:100%;\r\n        }\r\n        */\r\n.col-20-px\r\n        {\r\n            float:left;\r\n            width:20%;\r\n        }\r\n.col-30-px\r\n        {\r\n            float:left;\r\n            width:30%;\r\n        }\r\n.col-70-px\r\n        {\r\n            float:left;\r\n            width:70%;\r\n        }\r\n.col-80-px\r\n        {\r\n            float:left;\r\n            width:80%;\r\n        }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLFdBQVc7WUFDSCxVQUFVO1lBQ1Ysc0JBQXNCO1lBQ3RCLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsK0NBQStDO1lBQy9DLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsNEJBQTRCO1lBQzVCLFdBQVc7UUFDZjtBQUNBOztZQUVJLG9CQUFvQjtZQUNwQixXQUFXO1lBQ1gscUJBQXFCO1FBQ3pCO0FBQ0E7Ozs7OztTQU1DO0FBQ0Q7O1lBRUksVUFBVTtZQUNWLFNBQVM7UUFDYjtBQUNBOztZQUVJLFVBQVU7WUFDVixTQUFTO1FBQ2I7QUFDQTs7WUFFSSxVQUFVO1lBQ1YsU0FBUztRQUNiO0FBQ0E7O1lBRUksVUFBVTtZQUNWLFNBQVM7UUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo8ZGl2IGNsYXNzPVwicm93XCI+PC9kaXY+Ki9cclxuI2FwcFxyXG57XHJcbiAgICB3aWR0aDo4MDBweDtcclxuICAgIGhlaWdodDozMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YXp1cmU7XHJcbn1cclxuLmJvdG9uXHJcbntcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpvbGl2ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvdG9uOmhvdmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICAucm93XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgICAgIC5jb2wtMjAtcHhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjIwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbC0zMC1weFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6MzAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLTcwLXB4XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDo3MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtODAtcHhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angularroute2';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./juegos/vieja/vieja.component */ "./src/app/juegos/vieja/vieja.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"],
                _juegos_vieja_vieja_component__WEBPACK_IMPORTED_MODULE_9__["ViejaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/juegos/vieja/vieja.component.css":
/*!**************************************************!*\
  !*** ./src/app/juegos/vieja/vieja.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p1ZWdvcy92aWVqYS92aWVqYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/juegos/vieja/vieja.component.ts":
/*!*************************************************!*\
  !*** ./src/app/juegos/vieja/vieja.component.ts ***!
  \*************************************************/
/*! exports provided: ViejaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViejaComponent", function() { return ViejaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViejaComponent = /** @class */ (function () {
    function ViejaComponent() {
        this.quiengano = 'Next player: X';
        this.squares = Array(9).fill(null);
        this.hayganador = 0;
        this.contador = 0;
        this.history = [
            {
                squares: Array(9).fill(null)
            }
        ];
        this.stepNumber = 0;
        this.xIsNext = true;
        //this.state.hayganador = 0;
        //this.state.xIsNext = true;
        //this.state.contador = 0;
        //this.state.stepNumber = 0;
        //var squares = [null,null,null,null,null,null,null,null,null];//Array<String>(9).fill(null);
        //this.state.history.push(squares);
    }
    ViejaComponent.prototype.ngOnInit = function () {
        /* var squares = [null,null,null,null,null,null,null,null,null];//Array<String>(9).fill(null);
        this.state.history.push(squares); */
    };
    ViejaComponent.prototype.quiengano2 = function () {
        var squares = this.history[this.stepNumber];
        if (this.hayganador == 1) {
            return 'Winner: ' + (this.xIsNext ? 'O' : 'X');
        }
        else {
            return 'Next player: ' + (this.xIsNext ? 'X' : 'O');
        }
    };
    ViejaComponent.prototype.mostrarSquares = function (i) {
        /* const current = this.history[history.length - 1];
        return current.squares[i] == null ? ' ':current.squares[i].toString(); */
        return this.squares[i];
    };
    ViejaComponent.prototype.handleClick = function (i) {
        this.quiengano = this.quiengano2();
        if (this.hayganador == 1) {
            return;
        }
        //console.log(i);
        //console.log(this.squares[i])
        var history = this.history.slice(0, this.stepNumber + 1);
        //const current = history[history.length - 1];
        //const squares = current.squares.slice();
        var squares = this.squares.slice();
        var caracter = this.xIsNext ? 'X' : 'O';
        this.squares[i] = caracter.toString();
        //this.state.history.push({squares: squares});
        //this.state.stepNumber++;
        this.history = history.concat([{ squares: squares }]),
            this.stepNumber = history.length;
        this.xIsNext = !this.xIsNext;
        console.log(this.squares);
        if (this.calculateWinner(this.squares)) {
            this.hayganador = 1;
        }
        else {
            this.hayganador = 0;
        }
    };
    ViejaComponent.prototype.jumpTo = function (step) {
        this.stepNumber = 0;
        this.xIsNext = (step % 2) === 0;
        this.squares = this.history[step].squares;
        this.history = [
            {
                squares: Array(9).fill(null)
            }
        ];
    };
    ViejaComponent.prototype.calculateWinner = function (squares) {
        var lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (var i = 0; i < lines.length; i++) {
            var _a = lines[i], a = _a[0], b = _a[1], c = _a[2];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };
    ViejaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vieja',
            template: __webpack_require__(/*! raw-loader!./vieja.component.html */ "./node_modules/raw-loader/index.js!./src/app/juegos/vieja/vieja.component.html"),
            styles: [__webpack_require__(/*! ./vieja.component.css */ "./src/app/juegos/vieja/vieja.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViejaComponent);
    return ViejaComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route) {
        this.route = route;
        this.products = [{ id: 1, name: "shirp", description: "Description shirp", price: 0 }, { id: 2, name: "number", description: "Description number", price: 0 }];
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.product = _this.products[+params.get('id')];
        });
    };
    ProductDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.products = [{ id: 1, name: "shirp", description: "Description shirp", price: 0 }, { id: 2, name: "number", description: "Description number", price: 0 }];
    }
    ProductListComponent.prototype.share = function () {
        window.alert('The product has been shared!');
    };
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bus209\Documents\htdocs\angularroute2\ReactRedux\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map