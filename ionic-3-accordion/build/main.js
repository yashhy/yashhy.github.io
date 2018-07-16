webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bus/bus.module": [
		151
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusPageModule", function() { return BusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bus__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_green_bus_ion_item_green_bus_ion_item__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_green_bus_ion_item_wrapper_green_bus_ion_item_wrapper__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BusPageModule = /** @class */ (function () {
    function BusPageModule() {
    }
    BusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* BusPage */],
                __WEBPACK_IMPORTED_MODULE_3__components_green_bus_ion_item_green_bus_ion_item__["a" /* GreenBusIonItemComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_green_bus_ion_item_wrapper_green_bus_ion_item_wrapper__["a" /* GreenBusIonItemWrapperComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bus__["a" /* BusPage */])
            ]
        })
    ], BusPageModule);
    return BusPageModule;
}());

//# sourceMappingURL=bus.module.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bus_bus__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToDropPoints = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__bus_bus__["a" /* BusPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/yashwanthh/Personal/Personal_DEV/green-bus/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Welcome!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <br/><br/><br/><br/><br/><br/><br/>\n  <button ion-button full (click)="goToDropPoints()">Go To Drop Points</button>\n</ion-content>\n'/*ion-inline-end:"/Users/yashwanthh/Personal/Personal_DEV/green-bus/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bus_bus_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bus_bus__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bus/bus.module#BusPageModule', name: 'BusPage', segment: 'bus', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_bus_bus_module__["BusPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_bus_bus__["a" /* BusPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenBusIonItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the GreenBusIonItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GreenBusIonItemComponent = /** @class */ (function () {
    function GreenBusIonItemComponent() {
        console.log('Hello GreenBusIonItemComponent Component');
        this.text = 'Hello World';
    }
    GreenBusIonItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'green-bus-ion-item',template:/*ion-inline-start:"/Users/yashwanthh/Personal/Personal_DEV/green-bus/src/components/green-bus-ion-item/green-bus-ion-item.html"*/'<!-- Generated template for the GreenBusIonItemComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/yashwanthh/Personal/Personal_DEV/green-bus/src/components/green-bus-ion-item/green-bus-ion-item.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GreenBusIonItemComponent);
    return GreenBusIonItemComponent;
}());

//# sourceMappingURL=green-bus-ion-item.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenBusIonItemWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the GreenBusIonItemWrapperComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GreenBusIonItemWrapperComponent = /** @class */ (function () {
    function GreenBusIonItemWrapperComponent() {
        console.log('Hello GreenBusIonItemWrapperComponent Component');
        this.text = 'Hello World';
    }
    GreenBusIonItemWrapperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[green-bus-ion-item-wrapper]',template:/*ion-inline-start:"/Users/yashwanthh/Personal/Personal_DEV/green-bus/src/components/green-bus-ion-item-wrapper/green-bus-ion-item-wrapper.html"*/'<!-- <ion-item class="bus-route">\n  <ion-icon name="ios-pin-outline" item-start></ion-icon>\n    {{route.routeName}}\n  <button ion-button item-end>\n    {{route.totalStudents}} Students &nbsp;&nbsp;&nbsp;\n    <ion-icon name="ios-arrow-down"></ion-icon>\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n  </button>\n</ion-item> -->\n\n<!-- <ion-icon name="ios-pin-outline" item-start></ion-icon> -->\n<ng-content></ng-content>'/*ion-inline-end:"/Users/yashwanthh/Personal/Personal_DEV/green-bus/src/components/green-bus-ion-item-wrapper/green-bus-ion-item-wrapper.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GreenBusIonItemWrapperComponent);
    return GreenBusIonItemWrapperComponent;
}());

//# sourceMappingURL=green-bus-ion-item-wrapper.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yashwanthh/Personal/Personal_DEV/green-bus/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n<button>Hi</button>'/*ion-inline-end:"/Users/yashwanthh/Personal/Personal_DEV/green-bus/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BusPage = /** @class */ (function () {
    function BusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.busRoutes = [];
        this.computedBusRoute = [];
    }
    BusPage.prototype.ngOnInit = function () {
        this.busRoutes = [{
                ITEM_TYPE: 'BUS_ROUTE_LIST',
                expanded: false,
                routeName: 'Indra Nagar',
                totalStudents: 3,
                students: [{
                        avatar: './assets/imgs/jessie.png',
                        name: 'ABC',
                        email: 'abc@asdf.ddf'
                    }, {
                        avatar: './assets/imgs/buzz.png',
                        name: 'buzz',
                        email: 'abc@asdf.ddf'
                    }, {
                        avatar: './assets/imgs/woody.png',
                        name: 'woody',
                        email: 'abc@asdf.ddf'
                    }]
            }, {
                ITEM_TYPE: 'BUS_ROUTE_LIST',
                expanded: false,
                routeName: 'RS Palayam',
                totalStudents: 5,
                students: [{
                        avatar: './assets/imgs/jessie.png',
                        name: 'ABC',
                        email: 'abc@asdf.ddf'
                    }, {
                        avatar: './assets/imgs/buzz.png',
                        name: 'buzz',
                        email: 'abc@asdf.ddf'
                    }, {
                        avatar: './assets/imgs/woody.png',
                        name: 'woody',
                        email: 'abc@asdf.ddf'
                    }, {
                        avatar: './assets/imgs/buzz.png',
                        name: 'buzz',
                        email: 'abc@asdf.ddf'
                    }, {
                        avatar: './assets/imgs/woody.png',
                        name: 'woody',
                        email: 'abc@asdf.ddf'
                    }]
            }, {
                ITEM_TYPE: 'BUS_ROUTE_LIST',
                expanded: false,
                routeName: 'Central',
                totalStudents: 2,
                students: [{
                        avatar: './assets/imgs/jessie.png',
                        name: 'ABC',
                        email: 'abc@asdf.ddf'
                    }, {
                        avatar: './assets/imgs/buzz.png',
                        name: 'buzz',
                        email: 'abc@asdf.ddf'
                    }]
            }];
        this.computedBusRoute = this.busRoutes.slice();
    };
    BusPage.prototype.onBusRouteExpanded = function (index, studentList, isExpanded) {
        var hasStudentList = this.computedBusRoute.filter(function (a) { return a.ITEM_TYPE === 'STUDENT_LIST'; }).length !== 0;
        this.computedBusRoute = [];
        if (!isExpanded) {
            this.computedBusRoute = this.busRoutes.slice();
            return;
        }
        if (index === this.busRoutes.length && hasStudentList) {
            index = index - 1;
        }
        var firstBusRouteArr = this.busRoutes.slice(0, index);
        var secondBusRouteArr = this.busRoutes.slice(index);
        (_a = this.computedBusRoute).push.apply(_a, firstBusRouteArr);
        var studentListObj = {
            ITEM_TYPE: 'STUDENT_LIST',
            students: studentList
        };
        this.computedBusRoute.push(studentListObj);
        (_b = this.computedBusRoute).push.apply(_b, secondBusRouteArr);
        var _a, _b;
    };
    BusPage.prototype.resetExpanded = function () {
        for (var i = 0; i < this.busRoutes.length; i++) {
            this.busRoutes[i].expanded = false;
        }
    };
    BusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BusPage', this.busRoutes);
    };
    BusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bus',template:/*ion-inline-start:"/Users/yashwanthh/Personal/Personal_DEV/green-bus/src/pages/bus/bus.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Kendra Vidhyala</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="bus-name">Bus - Volvo - 7897</div>\n  <ul class="bus-stop-list list list-md">\n    <li class="item item-block item-md" *ngFor="let route of computedBusRoute; let idx = index">\n      <!-- BUS_ROUTE_LIST -->\n      <ion-icon name="ios-pin-outline" item-start *ngIf="route.ITEM_TYPE == \'BUS_ROUTE_LIST\'"></ion-icon>\n      <div class="item-inner" *ngIf="route.ITEM_TYPE == \'BUS_ROUTE_LIST\'">\n        <div class="input-wrapper">\n          <ion-label class="label label-md">\n            {{route.routeName}}\n          </ion-label>\n        </div>\n        <button ion-button item-end small (click)="expanded = !route.expanded; resetExpanded(); route.expanded = expanded; onBusRouteExpanded(idx + 1, route.students, route.expanded)">\n            {{route.totalStudents}} Students &nbsp;&nbsp;&nbsp;\n          <ion-icon name="ios-arrow-down" *ngIf="route.expanded"></ion-icon>\n          <ion-icon name="ios-arrow-forward" *ngIf="!route.expanded"></ion-icon>\n        </button>\n      </div>\n\n      <!-- STUDENT_LIST -->\n      <ion-list class="inner-ion-list" *ngIf="route.ITEM_TYPE == \'STUDENT_LIST\'">\n        <ion-item *ngFor="let student of route.students">\n          <ion-avatar item-start>\n            <img src="{{student.avatar}}">\n          </ion-avatar>\n          <h2>{{student.name}}</h2>\n          <p>{{student.email}}</p>\n        </ion-item>\n      </ion-list>\n    </li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"/Users/yashwanthh/Personal/Personal_DEV/green-bus/src/pages/bus/bus.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], BusPage);
    return BusPage;
    var _a, _b;
}());

//# sourceMappingURL=bus.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map