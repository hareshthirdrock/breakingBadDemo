"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var D_workspace_Arham_Angular_angular_14_breakingbad_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../details/details.page */ 1735);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 7556);








let HomePage = class HomePage {
  constructor(authService, loadingController, modalCtrl) {
    this.authService = authService;
    this.loadingController = loadingController;
    this.modalCtrl = modalCtrl;
    this.isOpen = false;
    this.filterArr = [1, 2, 3, 4, 5];
    this.isLoading = false;
    this.imageList = ["../../assets/breakingbad.jpg", "../../assets/breakingbad2.jpg"];
    this.slideOpts = {
      speed: 400,
      initialSlide: 0,
      slidesPerView: 1,
      autoplay: {
        disableOnInteraction: false
      }
    }; // this.showloading();
  }

  ngOnInit() {
    this.getlist();
  }

  getlist() {
    this.isLoading = true;
    this.authService.get().subscribe(res => {
      if (res) {
        this.list = res;
        this.copyList = res;
        console.log(this.list);
        this.isLoading = false;
      }
    }, err => {
      console.log('Error  in API');
      this.isLoading = false;
    });
  }

  search(event) {
    if (event.target && event.target.value) {
      this.searchValue = event.target.value.toLowerCase();
      event.target.value = event.target.value.toLowerCase();

      if (this.filterValue) {
        this.filterNameWithAppearence(event.target.value);
      } else {
        this.filterName(event.target.value);
      }
    } else {
      this.searchValue = null;

      if (this.filterValue) {
        this.filterAppearence();
      } else {
        this.list = this.copyList;
      }
    }
  }

  presentPopover(e) {
    this.popover.event = e;
    this.isOpen = true;
  }

  getFilterValue(value) {
    this.isOpen = false;
    console.log('get Value', value);
    this.filterValue = value;

    if (this.filterValue) {
      if (this.searchValue) {
        this.filterNameWithAppearence(this.searchValue);
      } else {
        this.filterAppearence();
      }
    } else {
      if (this.searchValue) {
        this.filterName(this.searchValue);
      } else {
        this.list = this.copyList;
      }
    }
  }

  filterName(value) {
    this.list = this.copyList.filter(x => x.name.toLowerCase().includes(value));
  }

  filterAppearence() {
    this.list = this.copyList.filter(x => x.appearance.includes(this.filterValue));
  }

  filterNameWithAppearence(value) {
    this.list = this.copyList.filter(x => x.name.toLowerCase().includes(value) && x.appearance.includes(this.filterValue));
  }

  presentModal(item) {
    var _this = this;

    return (0,D_workspace_Arham_Angular_angular_14_breakingbad_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //const mySubject = new BehaviorSubject();
      const dismissFirstModal = () => {
        modal.dismiss();
      };

      const modal = yield _this.modalCtrl.create({
        component: _details_details_page__WEBPACK_IMPORTED_MODULE_3__.DetailsPage,
        breakpoints: [0],
        handle: false,
        componentProps: {
          dismissFirstModal: dismissFirstModal,
          item
        }
      });
      yield modal.present(); // mySubject.subscribe((value: string) => {
      // });
      // modal.onDidDismiss().then((_ => {
      //   mySubject.unsubscribe();
      // }));
    })();
  }

};

HomePage.ctorParameters = () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

HomePage.propDecorators = {
  popover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['popover']
  }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this._commonHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        };
    }
    get() {
        return this.http.get('https://breakingbadapi.com/api/characters', this._commonHeaders);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".label {\n  margin: 12px;\n  font-size: 20px;\n  font-weight: bold;\n}\n\nion-icon {\n  font-size: 22px;\n}\n\n::ng-deep #background-content {\n  background: #cfcfcf;\n}\n\n.selectedNumber {\n  --ion-item-background: #cecfff;\n}\n\n.selectedNumber .item-native {\n  background-color: #cecfff;\n}\n\n.searchbar {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.ion-label {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.noDataAvailable {\n  text-align: -webkit-center;\n  font-size: 25px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxhbmd1bGFyJTIwMTRcXGJyZWFraW5nYmFkXFxzcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUU7RUFDRSxtQkFBQTtBQ0NKOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURBQztFQUNHLHlCQUFBO0FDRUo7O0FERUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWx7XG4gIG1hcmdpbjogMTJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7IC8vUHJlZmVycmVkIHNpemUgaGVyZVxufVxuLy8gLm1haW4ucGFnZXtcbiAgOjpuZy1kZWVwICNiYWNrZ3JvdW5kLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZDojY2ZjZmNmXG4gIH1cbi8vIH1cbi5zZWxlY3RlZE51bWJlcntcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAgI2NlY2ZmZjtcbiAuaXRlbS1uYXRpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2ZmZjtcbiAgfVxufVxuXG4uc2VhcmNoYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW9uLWxhYmVse1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubm9EYXRhQXZhaWxhYmxle1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiIsIi5sYWJlbCB7XG4gIG1hcmdpbjogMTJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbjo6bmctZGVlcCAjYmFja2dyb3VuZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2NmY2ZjZjtcbn1cblxuLnNlbGVjdGVkTnVtYmVyIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjY2VjZmZmO1xufVxuLnNlbGVjdGVkTnVtYmVyIC5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWNmZmY7XG59XG5cbi5zZWFyY2hiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubm9EYXRhQXZhaWxhYmxlIHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Breaking Bad\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"main-page\">   \n  \n <ion-card>\n  <ion-slides pager [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let image of imageList\">\n    \n      <img [src]=\"image\">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-card-header>\n    <ion-card-title>Breaking Bad</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan, and the namesake of the Breaking Bad franchise.\n  </ion-card-content>\n </ion-card>\n <ion-label class=\"label\">Characters</ion-label>\n<ng-container *ngIf=\"!isLoading && (list.length || searchValue)\">\n <ion-toolbar class=\"searchbar\">\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"10\">\n      <ion-searchbar  (ionInput)=\"search($event)\"  ></ion-searchbar>\n    </ion-col>\n    <ion-col class=\"ion-text-center\">\n      <ion-icon name=\"filter-outline\" (click)=\"presentPopover($event)\"></ion-icon>\n      <ion-popover #popover [isOpen]=\"isOpen\" side=\"left\" (didDismiss)= \"isOpen = false\">\n        <ng-template>\n          <ion-content class=\"ion-padding\">\n            <ion-list>\n                <ion-item [ngClass]=\"{'selectedNumber':filterValue==null}\" (click)=\"getFilterValue(null)\">All</ion-item>\n                <ion-item *ngFor=\"let item of filterArr;\" [ngClass]=\"{'selectedNumber':filterValue==item}\" (click)=\"getFilterValue(item)\">{{item}}</ion-item>\n          </ion-list>\n          </ion-content>\n        </ng-template>\n      </ion-popover>\n    </ion-col>\n  </ion-row>\n\n\n</ion-toolbar>\n\n<ion-card *ngFor=\"let item of list\" (click)=\"presentModal(item)\" >\n  <ion-row class=\"ion-align-items-center\">\n  <ion-col size=\"3\">\n        <ion-avatar>\n          <img [src]=\"item.img\">\n    </ion-avatar>\n  </ion-col >\n  <ion-col class=\"ion-text-start\" size=\"9\">\n    <ion-label class=\"ion-label\">{{item.name}}</ion-label>\n  </ion-col>\n</ion-row>\n</ion-card>\n</ng-container>\n<ng-container *ngIf=\"!isLoading && !list.length \">\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"noDataAvailable\">\n    <ion-label>No Characters available</ion-label>\n  </ion-col>\n  </ion-row>\n</ng-container>\n<!-- <ion-spinner></ion-spinner> -->\n<ng-container *ngIf=\"isLoading\">\n<ion-card *ngFor=\"let item of [{},{},{},{},{}]\" >\n<ion-item>\n  <ion-avatar slot=\"start\">\n    <ion-skeleton-text animated></ion-skeleton-text>\n  </ion-avatar>\n  <ion-label>\n    <h3>\n      <!-- <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text> -->\n    </h3>\n    <p>\n      <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n    </p>\n    <p>\n      <!-- <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text> -->\n    </p>\n  </ion-label>\n</ion-item> \n</ion-card>\n</ng-container>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map