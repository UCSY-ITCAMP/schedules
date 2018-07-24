(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _schedulelist_schedulelist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./schedulelist/schedulelist.component */ "./src/app/schedulelist/schedulelist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_12__["ScheduleComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_12__["ScheduleComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _schedulelist_schedulelist_component__WEBPACK_IMPORTED_MODULE_15__["SchedulelistComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab{\r\n    overflow: auto;\r\n}\r\n\r\n.mat-tab-body-wrapper{\r\ndisplay: none !important;\r\n}\r\n\r\n/deep/ .mat-tab-label {\r\n    color: #000000;\r\n    \r\n    font-weight: 800 !important;\r\n    font-family: 'Open Sans' !important;\r\n  }"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  fixed-top navbar-expand-lg\" style=\"display:block\">\n\n  <div class=\"container\">\n\n    <a href=\"https://ucsy.itcamp.org\">\n      <div class=\"navbar-translate\">\n        <img class=\"logosize\" src=\"assets/img/logo.PNG\" style=\"width: 50px; height: 50px;\">\n      </div>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isExpanded = !isExpanded\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon\"></span>\n      <span class=\"navbar-toggler-icon\"></span>\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\"  [class.mat-elevation-z2]=\"isExpanded\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a href=\"https://ucsy.itcamp.org\" class=\"nav-link\" style=\"fill: #555;\">\n            <!-- July -->\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"20px\" height=\"20px\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 27.02 27.02\"  xml:space=\"preserve\">\n              <g>\n                <path style=\"fill:#555;\" d=\"M3.674,24.876c0,0-0.024,0.604,0.566,0.604c0.734,0,6.811-0.008,6.811-0.008l0.01-5.581   c0,0-0.096-0.92,0.797-0.92h2.826c1.056,0,0.991,0.92,0.991,0.92l-0.012,5.563c0,0,5.762,0,6.667,0   c0.749,0,0.715-0.752,0.715-0.752V14.413l-9.396-8.358l-9.975,8.358C3.674,14.413,3.674,24.876,3.674,24.876z\"/>\n                <path style=\"fill:#555;\" d=\"M0,13.635c0,0,0.847,1.561,2.694,0l11.038-9.338l10.349,9.28c2.138,1.542,2.939,0,2.939,0   L13.732,1.54L0,13.635z\"/>\n                <polygon style=\"fill:#555;\" points=\"23.83,4.275 21.168,4.275 21.179,7.503 23.83,9.752  \"/>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              </svg>\n            <span style=\"vertical-align: 20%;margin-left: 10px;\">Home</span>\n            <!-- Schedule -->\n\n          </a>\n      \n        </li>\n        <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\" style=\"fill: #555;\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\"\n                width=\"20px\" height=\"20px\" viewBox=\"0 0 32.75 32.75\" style=\"enable-background:new 0 0 32.75 32.75;fill: inherit;\"\n                xml:space=\"preserve\">\n                <g>\n                  <g>\n                    <path d=\"M29.375,1.25h-1.123c0.029-0.093,0.059-0.186,0.059-0.289c0-0.53-0.432-0.961-0.963-0.961s-0.961,0.431-0.961,0.961    c0,0.103,0.028,0.196,0.059,0.289h-3.68c0.029-0.093,0.059-0.186,0.059-0.289C22.823,0.431,22.393,0,21.861,0    C21.331,0,20.9,0.431,20.9,0.961c0,0.103,0.029,0.196,0.059,0.289h-3.682c0.029-0.093,0.059-0.186,0.059-0.289    c0-0.53-0.43-0.961-0.961-0.961c-0.531,0-0.961,0.431-0.961,0.961c0,0.103,0.028,0.196,0.058,0.289h-3.681    c0.029-0.093,0.059-0.186,0.059-0.289C11.85,0.431,11.419,0,10.889,0c-0.531,0-0.962,0.431-0.962,0.961    c0,0.103,0.028,0.196,0.058,0.289h-3.68c0.03-0.093,0.059-0.186,0.059-0.289C6.364,0.43,5.934,0,5.403,0    C4.872,0,4.441,0.431,4.441,0.961c0,0.103,0.028,0.196,0.058,0.289H3.375c-1.518,0-2.75,1.233-2.75,2.75v26    c0,1.518,1.232,2.75,2.75,2.75H26.27l5.855-5.855V4C32.125,2.483,30.893,1.25,29.375,1.25z M3.375,31.25    c-0.689,0-1.25-0.561-1.25-1.25V9h28.5v17.273l-0.311,0.311h-2.355c-1.102,0-2,0.9-2,2v2.355l-0.311,0.311H3.375z\"\n                    />\n                    <path d=\"M16.091,17.725c0-2.953-2.467-4.104-5.096-4.104c-3.295,0-5.329,1.513-5.384,5.239h3.367    c-0.018-1.225,0.396-2.43,1.836-2.43c0.757,0,1.531,0.468,1.531,1.278c0,2.105-3.331,2.971-5.455,5.186    c-1.01,1.045-1.586,2.125-1.514,3.602h10.679v-3.061h-5.888c0.666-0.469,1.638-0.955,2.557-1.531    C14.381,20.876,16.091,19.958,16.091,17.725z\"\n                    />\n                    <path d=\"M27.771,22.102c0-2.539-1.891-4.017-4.32-4.017c-0.955,0-1.836,0.108-2.629,0.685l0.414-1.909h5.51V13.8h-8.139    l-1.26,7.22l3.528,0.127c0.287-0.559,0.953-0.703,1.513-0.703c1.135,0,1.639,0.793,1.639,1.837c0,0.937-0.721,1.675-1.818,1.675    c-0.686,0-1.404-0.36-1.621-1.025c0-0.037-0.035-0.091-0.035-0.127l-3.764,0.379c0.721,2.34,2.521,3.582,5.293,3.582    C24.98,26.764,27.771,25.611,27.771,22.102z\"\n                    />\n                  </g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n              </svg>\n              <span style=\"vertical-align: 20%;margin-left: 10px;\">Schedule</span>\n              <!-- Schedule -->\n  \n            </a>\n        \n          </li>\n      </ul>\n    </div>\n\n  </div>\n  <div>\n    <mat-tab-group class=\"mx-auto mat-tab\" (selectedTabChange)=\"selectSchedule($event)\" style=\"margin:0px;\">\n      <mat-tab  *ngFor=\"let schedule of schedules\">\n          <ng-template mat-tab-label>\n              {{schedule.from}} - {{schedule.to }}\n            </ng-template>\n\n     </mat-tab>\n    </mat-tab-group>\n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        // @Output() open: EventEmitter<any> = new EventEmitter();
        this.selectedSchedule = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isExpanded = false;
    }
    NavbarComponent.prototype.selectSchedule = function (selectedItem) {
        // console.log(selectedItem);
        this.selectedSchedule.emit(this.schedules[selectedItem.index]);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NavbarComponent.prototype, "selectedSchedule", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('schedules'),
        __metadata("design:type", Array)
    ], NavbarComponent.prototype, "schedules", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/*!*************************************************!*\
  !*** ./src/app/schedule/schedule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    max-width:  100px;\n    width: 100%;\n}\n\ni {\n    font-size: 14px;\n}"

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar [schedules] = \"schedules\" (selectedSchedule)=\"onTabChanged($event)\"></app-navbar>\n\n<app-schedulelist [scheduleArray] = scheduleArray ></app-schedulelist>"

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(db) {
        this.db = db;
        this.focusedSchedule = null;
        this.scheduleArray = null;
        this.roomArray = [];
        this.speakerArray = [];
        this.schedules = null;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.getSchedules();
    };
    ScheduleComponent.prototype.onTabChanged = function (obj) {
        console.log(obj.rooms);
        this.scheduleArray = obj.rooms;
    };
    ScheduleComponent.prototype.getSchedules = function () {
        var _this = this;
        this.db.list("2018/schedules").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (room) {
            return room;
        })).subscribe(function (res) {
            var items = res.map(function (item) {
                return item.payload.val();
            });
            _this.schedules = items;
        });
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/schedulelist/schedulelist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/schedulelist/schedulelist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/schedulelist/schedulelist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/schedulelist/schedulelist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top: 130px;\" *ngIf=\"scheduleArray\">\n  <div class=\"row\" style=\"padding-left: 8px;padding-right: 8px;\">\n    <div class=\"col-md-4 col-lg-3 col-12\" style=\"margin:0px;padding: 4px !important;\" *ngFor=\"let schedule of scheduleArray;\">\n\n      <mat-card [class.mat-elevation-z2]=\"focusedSchedule != schedule\" (mouseover)=\"focusedSchedule = schedule\" [class.mat-elevation-z16]=\"focusedSchedule == schedule\"\n        style=\"background: white;\">\n\n        <div class=\"d-flex flex-row\">\n          <img src=\"{{schedule.speaker.profile_url? schedule.speaker.profile_url: '//style.anu.edu.au/_anu/4/images/placeholders/person.png'}}\"\n            alt=\"Speaker Profile\" class=\"rounded-circle img-fluid\" style=\"width: 64px; height: 64px;\">\n\n          <div style=\"margin-left: 20px;\">\n            <h4 style=\"padding-bottom: 0px;margin-bottom: 0px;\">{{schedule.speaker.name}}</h4>\n            <h6 style=\"margin-top:0px;color: #686868;font-weight: 100;text-transform: none;\">{{schedule.speaker.position}} | {{schedule.speaker.company}}</h6>\n          </div>\n        </div>\n        <h5 style=\"min-height: 60px;\">{{schedule.speaker.topic}}</h5>\n        <div class=\"d-flex flex-row\">\n          <mat-icon style=\"width: 24px;height: 24px;\">room</mat-icon>\n          <span style=\"padding-left: 10px;margin-top: 0px;font-size: 1em;\"> {{schedule.id}}\n          </span>\n          <mat-icon *ngIf=\"schedule.info\" matTooltip=\"{{schedule.room.info}}\" matTooltipPosition=\"right\" style=\"color:#68686863;margin-left:5px;font-size:15px;margin-top: 4.8px;\">info</mat-icon>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/schedulelist/schedulelist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/schedulelist/schedulelist.component.ts ***!
  \********************************************************/
/*! exports provided: SchedulelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulelistComponent", function() { return SchedulelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SchedulelistComponent = /** @class */ (function () {
    function SchedulelistComponent() {
        this.focusedSchedule = null;
    }
    SchedulelistComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('scheduleArray'),
        __metadata("design:type", Array)
    ], SchedulelistComponent.prototype, "scheduleArray", void 0);
    SchedulelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedulelist',
            template: __webpack_require__(/*! ./schedulelist.component.html */ "./src/app/schedulelist/schedulelist.component.html"),
            styles: [__webpack_require__(/*! ./schedulelist.component.css */ "./src/app/schedulelist/schedulelist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SchedulelistComponent);
    return SchedulelistComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBkYsWDex1oQ20Ml9jN4hcjjr3TGswmwLI",
        authDomain: "ucsy-it-camp-1531499420236.firebaseapp.com",
        databaseURL: "https://ucsy-it-camp-1531499420236.firebaseio.com",
        projectId: "ucsy-it-camp-1531499420236",
        storageBucket: "ucsy-it-camp-1531499420236.appspot.com",
        messagingSenderId: "917988140807"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /usr/src/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map