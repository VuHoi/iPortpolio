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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _root_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root/app.component */ "./src/app/root/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _home_containerHome_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/containerHome/home.component */ "./src/app/home/containerHome/home.component.ts");
/* harmony import */ var _resume_resume_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume/resume/resume.component */ "./src/app/resume/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_info_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/info/info.component */ "./src/app/home/info/info.component.ts");
/* harmony import */ var _info_card_info_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info-card/info-card.component */ "./src/app/info-card/info-card.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _resume_container_resume_container_resume_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resume/container-resume/container-resume.component */ "./src/app/resume/container-resume/container-resume.component.ts");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project-card/project-card.component */ "./src/app/project-card/project-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_containerHome_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], data: { title: 'home' } },
    { path: 'resume', component: _resume_container_resume_container_resume_component__WEBPACK_IMPORTED_MODULE_12__["ContainerResumeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: '**', redirectTo: 'home' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                _home_containerHome_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _resume_resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _home_info_info_component__WEBPACK_IMPORTED_MODULE_9__["InfoComponent"],
                _info_card_info_card_component__WEBPACK_IMPORTED_MODULE_10__["InfoCardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _resume_container_resume_container_resume_component__WEBPACK_IMPORTED_MODULE_12__["ContainerResumeComponent"],
                _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_13__["ProjectCardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ProgressbarModule"].forRoot()
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]
            ],
            bootstrap: [_root_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundFooter{\r\n   background-color: #fdfdfd;\r\n   min-height: 50px ;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backgroundFooter d-flex\">\r\n    <div class=\"p-2 align-self-center ml-2\">\r\n      T:0365 240 627 | toilahoi007@gmail.com\r\n    </div>\r\n    <div class=\"p-2  align-self-center\">\r\n      <button class=\"btn-secondary m-1\"><i class=\"fa fa-bold\"></i> </button>\r\n      <button class=\"btn-secondary m-1\"><i class=\"fa fa-facebook-f\"></i></button>\r\n      <button class=\"btn-secondary m-1\"><i class=\"fa fa-linkedin\" ></i></button>\r\n      <button class=\"btn-secondary m-1\"><i class=\"fa fa-twitter\"></i></button>\r\n\r\n    </div>\r\n  <div class=\"ml-auto p-2 align-self-center mr-2\"><i class=\"fa fa-copyright\"></i>2018 by Group 5  University of Information Technilogy</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/containerHome/home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/home/containerHome/home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".positionCard1{\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n  z-index: 1 !important;\r\n\r\n}\r\n\r\n.positionCard1:hover{\r\n  z-index: 50!important;\r\n}\r\n\r\n.positionCard2:hover{\r\n  z-index: 50!important;\r\n}\r\n\r\n.positionCard3:hover{\r\n  z-index: 50!important;\r\n}\r\n\r\n.positionCard2{\r\n  position: absolute;\r\n  top: 150px;\r\n  left: 80px;\r\n  z-index: 2  !important; /* IE 9 */\r\n  -webkit-transform: rotate(-10deg); /* Safari */\r\n  transform: rotate(-10deg);\r\n\r\n}\r\n\r\n.positionCard3{\r\n  position: absolute;\r\n  top: 300px;\r\n  right: 8%;\r\n  z-index: 2  !important; /* IE 9 */\r\n  -webkit-transform: rotate(-5deg); /* Safari */\r\n  transform: rotate(-5deg);\r\n}\r\n\r\n.positionInfo{\r\n  position: absolute;\r\n  top: 0;\r\n  right: 15%;\r\n  left:15%;\r\n  z-index: 40  !important;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.positionPin{\r\n  position: absolute;\r\n  top: 0;\r\n  right: 5%;\r\n  width: 100px;\r\n  z-index: 1  !important; /* IE 9 */\r\n  -webkit-transform: rotate(-15deg); /* Safari */\r\n  transform: rotate(-15deg);\r\n}\r\n\r\n.positionPin2{\r\n  position: absolute;\r\n  top: 100px;\r\n  right: 2%;\r\n  width: 100px;\r\n  z-index: 1  !important;\r\n\r\n}\r\n\r\n.positionPin3{\r\n  position: absolute;\r\n  top: 390px;\r\n  right: 7%;\r\n  width: 100px;\r\n  z-index: 3  !important; /* IE 9 */\r\n  -webkit-transform: rotate(30deg); /* Safari */\r\n  transform: rotate(30deg);\r\n}\r\n\r\n.positionPin4{\r\n  position: absolute;\r\n  top: 180px;\r\n  left: 5%;\r\n  width: 100px;\r\n  z-index: 3  !important; /* IE 9 */\r\n  -webkit-transform: rotate(-85deg); /* Safari */\r\n  transform: rotate(10deg);\r\n}\r\n\r\n.position{\r\n  position: relative;\r\n  top: 0;\r\n  right: 0;\r\n  height: 1000px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/containerHome/home.component.html":
/*!********************************************************!*\
  !*** ./src/app/home/containerHome/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position\">\r\n  <info-card class=\"positionCard1\" title={{cardOne.title}}\r\n             first_paragraph={{cardOne.first_paragraph}}\r\n             second_paragraph={{cardOne.second_paragraph}}>\r\n  </info-card>\r\n  <info class=\"positionInfo\"></info>\r\n  <info-card class=\"positionCard2\"  title={{cardTwo.title}}\r\n             first_paragraph={{cardTwo.first_paragraph}}\r\n             second_paragraph={{cardTwo.second_paragraph}}>\r\n  </info-card>\r\n  <info-card class=\"positionCard3\" title={{cardThree.title}}\r\n             first_paragraph={{cardThree.first_paragraph}}\r\n             second_paragraph={{cardThree.second_paragraph}}>\r\n  </info-card>\r\n  <img class=\"positionPin\" alt=\"pin\" src=\"../../../assets/images/pin2.png\"/>\r\n  <img class=\"positionPin2\" alt=\"pin2\" src=\"../../../assets/images/pin2.png\"/>\r\n  <img class=\"positionPin3\" alt=\"pin3\" src=\"../../../assets/images/pin2.png\"/>\r\n  <img class=\"positionPin4\" alt=\"pin4\" src=\"../../../assets/images/pin1.png\"/>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/containerHome/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home/containerHome/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService) {
        this.titleService = titleService;
        this.cardOne = {
            title: 'University',
            first_paragraph: 'I\'m fourth of student at Ho Chi Minh City  University of Information ' +
                'Technology (or UIT) is a member of Vietnam National University - Ho Chi Minh' +
                ' City (VNU-HCM) and is the only university of Vietnam that undertakes information and' +
                ' communication technology research and focused, in-depth training.',
            second_paragraph: 'The University has the youngest management, research and teaching staff of any VNU-HCM member, ' +
                'bringing great enthusiasm along with dynamic and creative advantages  proud ' +
                'to be the only university in Vietnam to specialize in information technology ' +
                'and communications, also focusing on fostering intellectual development.'
        };
        this.cardTwo = {
            title: 'Hometown',
            first_paragraph: 'The City of Da Lat is the capital of Lam Dong Province and can be found 5000 feet about ' +
                'sea level towards the south of the Central Highlands Region of Vietnam.' +
                ' Surrounded by thousands of pine trees it is home to almost a quarter of ' +
                'a million people. Da Lat has its own weather system, being temperate ' +
                'as apposed to Vietnam’s normally tropical climate. The valleys around ' +
                'the city are often shrouded in mist giving rise to the city’s nickname ' +
                'of City of Eternal Spring',
            second_paragraph: 'The large flower industry here produces Hydrangeas and ' +
                'Strawflowers also known as Golden Everlasting. Strawberries and Mulberries' +
                'are also grown and the local preserve of these and Sweet Potato'
        };
        this.cardThree = {
            title: 'Hobbies',
            first_paragraph: 'I like photography because it’s a creative hobby and it ' +
                'makes you notice the world around you. I love capturing special' +
                ' moments or unusual or beautiful images, and it’s a great feeling to be able to look back through my pictures' +
                ' and relive different experiences. These memories usually cheer me up' +
                'The last time I took photos on a special occasion was at my friend’s ' +
                'wedding a few weeks ago. I got some great pictures of the bride and' +
                ' groom and their guests celebrating.',
            second_paragraph: 'I can become a composer. I have compose 10 song and published on my SoundClound ' +
                'If you want to following me , feel free to contact me . I  very happy to meet you.'
        };
        titleService.setTitle('iPortpolio(Home)');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/containerHome/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/containerHome/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/info/info.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/info/info.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundInfo {\r\n  background-size: cover;\r\n  /*background: url(\"../../../assets/images/mainContainer.png\") repeat center center;*/\r\n  background-color: #fdfdfd;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n\r\n.thickLine{\r\n  font: normal normal normal 90px/1.2em Impact,impact-w01-2010,impact-w02-2010,impact-w10-2010,sans-serif;\r\n  color: #000000;\r\n  white-space:nowrap;\r\n}\r\n\r\n\r\n.lineHeight{\r\n  line-height: 1.8rem;\r\n}\r\n\r\n\r\n.goldColor{\r\n  color: gold;\r\n}\r\n\r\n\r\n.borderBottom{\r\n  border-bottom: black 3px dashed;\r\n}\r\n\r\n\r\n.btn-dark{\r\n  background-color: black;\r\n  color: #fdfdfd;\r\n  min-height: 50px;\r\n  min-width: 24%;\r\n  font-size:1.75rem;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.btn-dark:hover{\r\n  background-color: gold;\r\n}\r\n\r\n\r\n.containerHome{\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n}\r\n\r\n\r\np{\r\n  color:black !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/info/info.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/info/info.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backgroundInfo\">\n  <div class=\"containerHome\">\n    <div class=\"borderBottom\">\n      <br/>\n      <h1 class=\"thickLine pt-5 lineHeight\">Welcome</h1>\n      <h1 class=\"thickLine pt-5 lineHeight\">I'm Vu Khac Hoi,</h1>\n      <h1 class=\"thickLine pt-5 pb-5 lineHeight goldColor\">here to write for you.</h1>\n    </div>\n  </div>\n  <div class=\"containerHome\">\n    <br/>\n    <div class=\"d-flex justify-content-between\">\n      <button class=\"btn btn-dark\">Resume</button>\n      <button class=\"btn btn-dark\">Writing</button>\n      <button class=\"btn btn-dark\">Contact</button>\n    </div>\n  </div>\n  <div class=\"containerHome\">\n    <br/>\n    <br/>\n  <div class=\"row\">\n    <div class=\"col-md-7 \">\n      <h5 class=\"fontTitle\">Who I Am ?</h5>\n      <p> I am living in Thu Duc  District, HCM City.\n        I have been  writing code for a couple of years\n        and have gotten my  hand  dirty  in  various\n        languages  and frameworks. I love coding back-end\n        development but  also  comfortable  if  I have\n        to  code  in  the front-end.\n      </p>\n      <p>\n        I  am  responsible  for  my own  project  and\n        take self-development  seriously .I\n        task  and try to push myself to the limit\n        every single day and enjoy every second of it.\n        My goal is to work as a web developer in a  team\n        of passionate,  amazing  people and work hard\n        to achieve it.\n      </p>\n      <p>\n        If  you  are an  employer looking to hire or a\n        friend who  just  wanna  talk,\n        feel  free  to  contact  me.\n      </p>\n    </div>\n    <div class=\"col-md-1\"></div>\n    <div class=\"col-md-4\">\n      <h5 class=\"fontTitle\">Skill ?</h5>\n      <p>\n        I  started  with  C  and C++ ,   migrated  to\n        C# soon later and now really interested in\n        JavaScript\n      </p>\n      <p>\n        I    can     use     various frameworks / libraries\n        Android/Java, ASP.NET Core, React / Angular,\n        Redux, Express\n      </p>\n      <p>\n        I also know about tools and utilities to make development\n        process easier Visual Studio,\n        Intellij IDEA,Webpack\n      </p>\n\n    </div>\n  </div>\n  </div>\n\n</div>\n<footer class=\"footer mt-3\"></footer>\n\n\n"

/***/ }),

/***/ "./src/app/home/info/info.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/info/info.component.ts ***!
  \*********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
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

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/home/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/home/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/info-card/info-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/info-card/info-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundInfoCard{\r\n  background-size: cover;\r\n  height: 450px;\r\n  width: 480px;\r\n  background: url('container1.png') no-repeat left center;\r\n}\r\n\r\n.backgroundInfoCard:hover{\r\n  background: url('borderContainer1.png') no-repeat left center;\r\n}\r\n\r\n.rotateCard{ /* IE 9 */\r\n  -webkit-transform: rotate(-3deg); /* Safari */\r\n  transform: rotate(-3deg);\r\n}\r\n"

/***/ }),

/***/ "./src/app/info-card/info-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/info-card/info-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backgroundInfoCard p-5\">\r\n  <div class=\"rotateCard\">\r\n    <h5 class=\"fontTitle\">{{title}}</h5>\r\n    <p>{{first_paragraph}}</p>\r\n    <p>{{second_paragraph}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/info-card/info-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/info-card/info-card.component.ts ***!
  \**************************************************/
/*! exports provided: InfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardComponent", function() { return InfoCardComponent; });
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

var InfoCardComponent = /** @class */ (function () {
    function InfoCardComponent() {
    }
    InfoCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InfoCardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InfoCardComponent.prototype, "first_paragraph", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InfoCardComponent.prototype, "second_paragraph", void 0);
    InfoCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'info-card',
            template: __webpack_require__(/*! ./info-card.component.html */ "./src/app/info-card/info-card.component.html"),
            styles: [__webpack_require__(/*! ./info-card.component.css */ "./src/app/info-card/info-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoCardComponent);
    return InfoCardComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundHeader{\r\n  background-size: cover;\r\n  height: 130px;\r\n  margin-bottom: -10px;\r\n  margin-right: 15%;\r\n  z-index: 10;\r\n  background: url('home1.png') no-repeat right center;\r\n}\r\n\r\n\r\n.ml-10{\r\n  margin-left: 10rem;\r\n}\r\n\r\n\r\n.backgroundHeader a:hover{\r\n  color: gold;\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backgroundHeader\">\n  <div class=\"d-inline-block w-100 \">\n    <a class=\"float-right mt-5 ml-10 mr-5 h3 font-weight-bold\" routerLink=\"/contact\">\n      Contact\n    </a>\n    <a class=\"float-right mt-5  ml-10  h3 font-weight-bold\" routerLink=\"resume\">\n      Resume\n    </a>\n    <a class=\"float-right mt-5  ml-10  h3 font-weight-bold\" routerLink=\"home\">\n      Home\n    </a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/project-card/project-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/project-card/project-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundProjectCard{\r\n  background-size: cover;\r\n  height: 528px;\r\n  width: 632px;\r\n  background: url('container3.png') no-repeat left center;\r\n}\r\n\r\n.backgroundProjectCard:hover{\r\n  background: url('borderContainer3.png') no-repeat left center;\r\n}\r\n\r\n.rotateProjectCard{ /* IE 9 */\r\n  -webkit-transform: rotate(2deg); /* Safari */\r\n  transform: rotate(2deg);\r\n}\r\n\r\n.fontSizeIcon{\r\n  font-size: 50px;\r\n  color: #d5dade;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/project-card/project-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/project-card/project-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backgroundProjectCard p-5\">\r\n  <div class=\"rotateProjectCard h-100 p-4 d-flex align-items-center flex-column\">\r\n    <div class=\"mb-auto\">\r\n      <div class=\"text-center\">\r\n        <h5 class=\"fontTitle\">{{title}}</h5>\r\n      </div>\r\n      <p>{{first_paragraph}}</p>\r\n      <p>{{second_paragraph}}</p>\r\n    </div>\r\n    <div class=\"d-flex w-100 flex-row align-items-center justify-content-between fontSizeIcon\">\r\n      <i  *ngFor=\"let icon of icons\" class={{icon}}></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/project-card/project-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-card/project-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
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

var ProjectCardComponent = /** @class */ (function () {
    function ProjectCardComponent() {
    }
    ProjectCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectCardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectCardComponent.prototype, "first_paragraph", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectCardComponent.prototype, "second_paragraph", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProjectCardComponent.prototype, "icons", void 0);
    ProjectCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'project-card',
            template: __webpack_require__(/*! ./project-card.component.html */ "./src/app/project-card/project-card.component.html"),
            styles: [__webpack_require__(/*! ./project-card.component.css */ "./src/app/project-card/project-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectCardComponent);
    return ProjectCardComponent;
}());



/***/ }),

/***/ "./src/app/resume/container-resume/container-resume.component.css":
/*!************************************************************************!*\
  !*** ./src/app/resume/container-resume/container-resume.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".positionCard1{\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n  z-index: 1 !important;\r\n\r\n}\r\n\r\n.positionCard1:hover{\r\n  z-index: 50!important;\r\n}\r\n\r\n.positionCard2:hover{\r\n  z-index: 50!important;\r\n}\r\n\r\n.positionCard3:hover{\r\n  z-index: 50!important;\r\n}\r\n\r\n.positionCard4:hover{\r\n  z-index: 50!important;\r\n}\r\n\r\n.positionCard2{\r\n  position: absolute;\r\n  top: 150px;\r\n  left: 80px;\r\n  z-index: 2  !important; /* IE 9 */\r\n  -webkit-transform: rotate(-10deg); /* Safari */\r\n  transform: rotate(-10deg);\r\n\r\n}\r\n\r\n.positionCard3{\r\n  position: absolute;\r\n  top: 300px;\r\n  right: 5%;\r\n  z-index: 2  !important; /* IE 9 */\r\n  -webkit-transform: rotate(-5deg); /* Safari */\r\n  transform: rotate(-5deg);\r\n}\r\n\r\n.positionCard4{\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 5%;\r\n  z-index: 2  !important; /* IE 9 */\r\n  -webkit-transform: rotate(-5deg); /* Safari */\r\n  transform: rotate(5deg);\r\n}\r\n\r\n.positionInfo{\r\n  position: absolute;\r\n  top: 0;\r\n  right: 15%;\r\n  left:15%;\r\n  z-index: 40  !important;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.positionPin{\r\n  position: absolute;\r\n  top: 0;\r\n  right: 5%;\r\n  width: 100px;\r\n  z-index: 1  !important; /* IE 9 */\r\n  -webkit-transform: rotate(-15deg); /* Safari */\r\n  transform: rotate(-15deg);\r\n}\r\n\r\n.positionPin2{\r\n  position: absolute;\r\n  top: 100px;\r\n  right: 2%;\r\n  width: 100px;\r\n  z-index: 1  !important;\r\n\r\n}\r\n\r\n.positionPin3{\r\n  position: absolute;\r\n  top: 100px;\r\n  right: 7%;\r\n  width: 100px;\r\n  z-index: 3  !important; /* IE 9 */\r\n  -webkit-transform: rotate(30deg); /* Safari */\r\n  transform: rotate(30deg);\r\n}\r\n\r\n.position{\r\n  position: relative;\r\n  top: 10px;\r\n  right: 0;\r\n  height: 1700px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/resume/container-resume/container-resume.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/resume/container-resume/container-resume.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position\">\r\n  <project-card class=\"positionCard1\"\r\n                title={{projectOne.title}}\r\n                first_paragraph={{projectOne.first_paragraph}}\r\n                second_paragraph={{projectOne.second_paragraph}}\r\n                [icons]=projectOne.icons>\r\n  </project-card>\r\n  <resume class=\"positionInfo\"></resume>\r\n  <project-card class=\"positionCard2\"\r\n                title={{projectOne.title}}\r\n                first_paragraph={{projectOne.first_paragraph}}\r\n                second_paragraph={{projectOne.second_paragraph}}\r\n                [icons]=projectOne.icons>\r\n  </project-card>\r\n  <project-card class=\"positionCard3\"\r\n                title={{projectOne.title}}\r\n                first_paragraph={{projectOne.first_paragraph}}\r\n                second_paragraph={{projectOne.second_paragraph}}\r\n                [icons]=projectOne.icons>\r\n  </project-card>\r\n  <project-card class=\"positionCard4\"\r\n                title={{projectOne.title}}\r\n                first_paragraph={{projectOne.first_paragraph}}\r\n                second_paragraph={{projectOne.second_paragraph}}\r\n                [icons]=projectOne.icons>\r\n  </project-card>\r\n  <img class=\"positionPin\" alt=\"pin\" src=\"../../../assets/images/pin2.png\"/>\r\n  <img class=\"positionPin2\" alt=\"pin2\" src=\"../../../assets/images/pin2.png\"/>\r\n  <!--<img class=\"positionPin3\" alt=\"pin2\" src=\"../../../assets/images/pin2.png\"/>-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/resume/container-resume/container-resume.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/resume/container-resume/container-resume.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContainerResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerResumeComponent", function() { return ContainerResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContainerResumeComponent = /** @class */ (function () {
    function ContainerResumeComponent(titleService) {
        this.titleService = titleService;
        this.projectOne = {
            title: "Ishop",
            first_paragraph: 'It is a  E-commerce  website that I make a year ago.' +
                'It was my first website when I decided to switch from major' +
                ' to programming software through website programming.' +
                ' I started with the front end as angular 4. It requires' +
                ' me to learn a lot of background knowledge of a front end ' +
                'developer such as html css javascript. I have learned very ' +
                'seriously to overcome this difficulty. And in this website' +
                ' I just stop being a front end developer and get involved ' +
                'in design database work with the back end',
            second_paragraph: 'On this site I use angular4, ASP.net core 2.0, Entity framework core' +
                ' , bootstrap 4 ',
            icons: [
                'devicon-csharp-plain',
                'devicon-angularjs-plain',
                'devicon-bootstrap-plain',
                'devicon-webpack-plain',
                'devicon-html5-plain',
                'devicon-css3-plain',
                'devicon-git-plain '
            ]
        };
        titleService.setTitle('iPortpolio(Resume)');
    }
    ContainerResumeComponent.prototype.ngOnInit = function () {
    };
    ContainerResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container-resume',
            template: __webpack_require__(/*! ./container-resume.component.html */ "./src/app/resume/container-resume/container-resume.component.html"),
            styles: [__webpack_require__(/*! ./container-resume.component.css */ "./src/app/resume/container-resume/container-resume.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], ContainerResumeComponent);
    return ContainerResumeComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume/resume.component.css":
/*!****************************************************!*\
  !*** ./src/app/resume/resume/resume.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundInfo {\r\n  background-size: cover;\r\n  background-color: #fdfdfd;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.headerResume {\r\n  background-color: #d5dade;\r\n  min-height: 300px;\r\n}\r\n\r\n.boxTitle {\r\n  background-color: #fdfdfd;\r\n  min-height: 200px;\r\n  min-width: 70%;\r\n}\r\n\r\n.borderBox {\r\n  border: 2px #babbbd solid;\r\n  margin: 15px;\r\n  min-height: 170px;\r\n}\r\n\r\n.borderBox > .d-flex {\r\n  min-height: 170px;\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\n.lineHeight {\r\n  height: 150px;\r\n}\r\n\r\n.line {\r\n  background-color: #babbbd;\r\n  width: 3px;\r\n  margin-top: -130px;\r\n}\r\n\r\n.avatar {\r\n  margin-top: -100px;\r\n}\r\n\r\n.colorTitle {\r\n  color: #4d4d4d;\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\n.w-33 {\r\n  width: 33%;\r\n}\r\n\r\n.w-50px {\r\n  width: 50px;\r\n}\r\n\r\n.box {\r\n  margin-left: 15%;\r\n  margin-right: 15%;\r\n  border: 1px #4d4d4d solid;\r\n  min-height: 40px;\r\n}\r\n\r\n.lineHorizontal {\r\n  background-color: #4d4d4d;\r\n  width: 15%;\r\n  height: 2px;\r\n\r\n}\r\n\r\n.lineVehical{\r\n  background-color: #4d4d4d;\r\n  width: 2px;\r\n  height: 50px;\r\n  margin-top: -70px;\r\n}\r\n\r\n.margin-20{\r\n  margin-top: -20px;\r\n}\r\n\r\n.margin-70{\r\n  margin-top: -70px;\r\n}\r\n\r\n.margin-right-15p{\r\n  margin-right: -15%;\r\n}\r\n\r\n.margin-left-15p{\r\n  margin-left: -15%;\r\n}\r\n\r\n.magrin-bottom-20px{\r\n  margin-bottom: -20px;\r\n}\r\n\r\n.expertise{\r\n  letter-spacing: 0.2em;\r\n  line-height: 2.2rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/resume/resume/resume.component.html":
/*!*****************************************************!*\
  !*** ./src/app/resume/resume/resume.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backgroundInfo\">\r\n  <div class=\"d-flex align-items-center justify-content-center headerResume  \">\r\n    <div class=\"boxTitle\">\r\n      <div class=\"borderBox\">\r\n        <div class=\"d-flex align-items-center justify-content-center flex-column\">\r\n          <h3>Vũ Khắc Hợi</h3>\r\n          <h3>K.T.P.M - 2015</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex align-items-center justify-content-center lineHeight\">\r\n    <div class=\"line lineHeight\"></div>\r\n  </div>\r\n  <div class=\"d-flex justify-content-between avatar\">\r\n    <div class=\"w-33 \">\r\n      <div class=\" text-center mr-5 ml-5 border-bottom\">\r\n        <h4 class=\"colorTitle \">PROFILE</h4>\r\n      </div>\r\n      <div class=\"pl-3 pr-3 pt-1 text-center\">\r\n        I'm a fourth of year student at\r\n        University Of Infomation Technology,\r\n        with good knowledge of Object\r\n        Oriented Analysis and Design,\r\n        Database Design. Learning new l\r\n        anguages and technologies is what\r\n        I am passionate about\r\n      </div>\r\n    </div>\r\n    <div class=\"w-33 d-flex align-items-center justify-content-center\">\r\n      <img class=\"rounded-circle\" src=\"../../../assets/images/me.png\" alt=\"me\">\r\n    </div>\r\n    <div class=\"w-33\">\r\n      <div class=\"d-flex p-1 border-bottom mr-3\">\r\n        <div class=\"mt-2\">56 Tan Lap , Di An , Binh Duong</div>\r\n        <div class=\"ml-auto h3 w-50px text-center\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></div>\r\n      </div>\r\n      <div class=\"d-flex p-1 border-bottom mr-3\">\r\n        <div class=\"mt-2\">toilahoi007@gmail.com</div>\r\n        <div class=\"ml-auto h3 w-50px text-center\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></div>\r\n      </div>\r\n      <div class=\"d-flex p-1 border-bottom mr-3\">\r\n        <div class=\"mt-2\">github.com/hoideptrai123</div>\r\n        <div class=\"ml-auto h3 w-50px text-center\"><i class=\"fa fa-television\" aria-hidden=\"true\"></i></div>\r\n      </div>\r\n      <div class=\"d-flex p-1 border-bottom mr-3\">\r\n        <div class=\"mt-2\">0365 240 627</div>\r\n        <div class=\"ml-auto h3 w-50px text-center\"><i class=\"fa fa-mobile\" aria-hidden=\"true\"></i></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex justify-content-between mt-5\">\r\n    <div class=\"w-33 mt-5 border-bottom border-right \">\r\n      <div class=\"box d-flex align-items-center justify-content-center\">\r\n        <h4 class=\"colorTitle \">EDUCATION</h4>\r\n\r\n      </div>\r\n      <div class=\"d-flex\">\r\n        <div class=\"lineHorizontal ml-auto margin-20 \"></div>\r\n      </div>\r\n      <div class=\"d-flex\">\r\n        <div class=\"lineHorizontal ml-auto margin-70 margin-right-15p \"></div>\r\n      </div>\r\n      <div class=\"d-flex\">\r\n        <div class=\"lineVehical ml-auto \"></div>\r\n      </div>\r\n      <div class=\"text-center mt-3\">\r\n        <div class=\"font-weight-bold\">FRONT-END DEVELOPER</div>\r\n        <div>TMA Solutions</div>\r\n        <div>2018-now</div>\r\n      </div>\r\n      <div class=\"text-center mt-3\">\r\n        <div class=\"font-weight-bold\">INTERNSHIP ANDROID</div>\r\n        <div>NKS company</div>\r\n        <div>2017-2018</div>\r\n      </div>\r\n      <div class=\"text-center mt-3 mb-3\">\r\n        <div class=\"font-weight-bold\">STUDENT HERE</div>\r\n        <div>UIT University</div>\r\n        <div>2015-2020</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-33 d-flex flex-column border-bottom\">\r\n      <div class=\"box d-flex align-items-center justify-content-center alert-info\">\r\n        <h4 class=\"colorTitle \">SKILLS</h4>\r\n      </div>\r\n      <div class=\"row mt-3 pt-3 pb-2 pr-2 pl-2\">\r\n        <div class=\"col-md-5\">\r\n          <div>ASP.net core</div>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <progressbar class=\"progress-striped active\" [value]=\"80\" type=\"info\"><i>80 / 100</i></progressbar>\r\n        </div>\r\n      </div>\r\n      <div class=\"row pt-3 pb-2 pr-2 pl-2\">\r\n        <div class=\"col-md-5\">\r\n          <div>ReactJS</div>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <progressbar class=\"progress-striped active\" [value]=\"80\" type=\"info\"><i>80 / 100</i></progressbar>\r\n        </div>\r\n      </div>\r\n      <div class=\"row pt-3 pb-2 pr-2 pl-2\">\r\n        <div class=\"col-md-5\">\r\n          <div>Angular6</div>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <progressbar class=\"progress-striped active\" [value]=\"80\" type=\"info\"><i>80 / 100</i></progressbar>\r\n        </div>\r\n      </div>\r\n      <div class=\"row pt-3 pb-2 pr-2 pl-2\">\r\n        <div class=\"col-md-5\">\r\n          <div>PhotoshopCC</div>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <progressbar class=\"progress-striped active\" [value]=\"80\" type=\"info\"><i>80 / 100</i></progressbar>\r\n        </div>\r\n      </div>\r\n      <div class=\"row pt-3 pb-2 pr-2 pl-2\">\r\n        <div class=\"col-md-5\">\r\n          <div>Algorithm</div>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <progressbar class=\"progress-striped active\" [value]=\"80\" type=\"info\"><i>80 / 100</i></progressbar>\r\n        </div>\r\n      </div>\r\n      <div class=\"row pt-3 pb-2 pr-2 pl-2\">\r\n        <div class=\"col-md-5\">\r\n          <div>OOP</div>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <progressbar class=\"progress-striped active\" [value]=\"80\" type=\"info\"><i>80 / 100</i></progressbar>\r\n        </div>\r\n      </div>\r\n      <div class=\"box d-flex align-items-center justify-content-center alert-info mt-auto magrin-bottom-20px\">\r\n        <h4 class=\"colorTitle \">EXPERIENCE</h4>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"w-33 mt-5 border-bottom border-left\">\r\n      <div class=\"box d-flex align-items-center justify-content-center\">\r\n        <h4 class=\"  colorTitle  \">EXPERTISE</h4>\r\n      </div>\r\n      <div class=\"d-flex\">\r\n        <div class=\"lineHorizontal mr-auto margin-20 \"></div>\r\n      </div>\r\n      <div class=\"d-flex\">\r\n        <div class=\"lineHorizontal mr-auto margin-70 margin-left-15p \"></div>\r\n      </div>\r\n      <div class=\"d-flex\">\r\n        <div class=\"lineVehical mr-auto \"></div>\r\n      </div>\r\n      <div class=\"d-flex align-items-center justify-content-center flex-column mt-3\">\r\n        <div class=\"expertise\">WEB DESIGN</div>\r\n        <div class=\"expertise\">PROJECT DESIGN</div>\r\n        <div class=\"expertise\">DESIGN DATABASE</div>\r\n        <div class=\"expertise\">OBJECT ORIENTED ANALYSIS</div>\r\n        <div class=\"expertise\">REPORT WRITING</div>\r\n        <div class=\"expertise\">HTML5 & CSS3</div>\r\n        <div class=\"expertise\">QUALITY CONTROL</div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row ml-4 mr-4 mt-5\">\r\n    <div class=\"col-md-9 \">\r\n      <h4 class=\"colorTitle \">Front-End Developer</h4>\r\n      <p>\r\n        TMA Solutions is a privately owned software outsourcing company\r\n        of Vietnam, with headquarters in Ho Chi Minh city Vietnam and other\r\n        offices in Canada, United States, Ireland, Australia. TMA Solutions is\r\n        one of the largest offshore software providers in Vietnam. At here. I can\r\n      </p>\r\n      <div class=\"ml-5\">\r\n        <i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i>\r\n        Design database with my  passion team.\r\n      </div>\r\n      <div class=\"ml-5\">\r\n        <i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i>\r\n        Design database with my  passion team.\r\n      </div>\r\n      <div class=\"ml-5\">\r\n        <i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i>\r\n        Design database with my  passion team.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 mt-5 pr-3 alert-info d-flex align-items-center justify-content-center flex-column\">\r\n      <div>TMA Solutions</div>\r\n      <div>Quang Trung Software</div>\r\n      <div> 2018-now</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row ml-4 mr-4 mt-5\">\r\n    <div class=\"col-md-9 \">\r\n      <h4 class=\"colorTitle \">Android Internship</h4>\r\n      <p>\r\n        TMA Solutions is a privately owned software outsourcing company\r\n        of Vietnam, with headquarters in Ho Chi Minh city Vietnam and other\r\n        offices in Canada, United States, Ireland, Australia. TMA Solutions is\r\n        one of the largest offshore software providers in Vietnam. At here. I can\r\n      </p>\r\n      <div class=\"ml-5\">\r\n        <i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i>\r\n        Design database with my  passion team.\r\n      </div>\r\n      <div class=\"ml-5\">\r\n        <i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i>\r\n        Design database with my  passion team.\r\n      </div>\r\n      <div class=\"ml-5\">\r\n        <i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i>\r\n        Design database with my  passion team.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 mt-5 pr-3 alert-info d-flex align-items-center justify-content-center flex-column\">\r\n      <div>NKS company</div>\r\n      <div>District 3 HCM</div>\r\n      <div> 2017-2018</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"footer mt-3\"></footer>\r\n"

/***/ }),

/***/ "./src/app/resume/resume/resume.component.ts":
/*!***************************************************!*\
  !*** ./src/app/resume/resume/resume.component.ts ***!
  \***************************************************/
/*! exports provided: getProgressbarConfig, ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgressbarConfig", function() { return getProgressbarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function getProgressbarConfig() {
    return Object.assign(new ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressbarConfig"](), { animate: true, striped: true, max: 100 });
}
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume/resume.component.css")],
            providers: [{ provide: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressbarConfig"], useFactory: getProgressbarConfig }]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/root/app.component.css":
/*!****************************************!*\
  !*** ./src/app/root/app.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/root/app.component.html":
/*!*****************************************!*\
  !*** ./src/app/root/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n\r\n<div\r\n  style=\"background-color: rgb(221, 221, 221);\r\n     width: 100%; height: 100%;\">\r\n  <div\r\n    style=\"width: 100%; background-size: auto; background-position: center top; background-repeat: repeat; height: 100%; background-image: url(&quot;https://static.wixstatic.com/media/214ec6_5ad58bcff90ac51cd673594a611ffad0.png/v1/fill/w_150,h_150,al_c,q_85/214ec6_5ad58bcff90ac51cd673594a611ffad0.webp&quot;);\"\r\n    data-type=\"bgimage\" data-height=\"100%\"\r\n    data-image-css=\"{&quot;backgroundSize&quot;:&quot;auto&quot;,&quot;backgroundPosition&quot;:&quot;center top&quot;,&quot;backgroundRepeat&quot;:&quot;repeat&quot;,&quot;height&quot;:&quot;100%&quot;}\">\r\n    <navigation></navigation>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/root/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/root/app.component.ts ***!
  \***************************************/
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
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/root/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/root/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! F:\github\iPortfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map