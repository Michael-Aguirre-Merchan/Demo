"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var inline_svg_config_1 = require("./inline-svg.config");
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./inline-svg.config");
var i3 = require("@angular/common/http");
var SVGCacheService = (function () {
    function SVGCacheService(_appBase, _location, _config, httpBackend, rendererFactory) {
        this._appBase = _appBase;
        this._location = _location;
        this._config = _config;
        this._http = new http_1.HttpClient(httpBackend);
        this._renderer = rendererFactory.createRenderer(null, null);
        this.setBaseUrl();
        if (!SVGCacheService_1._cache) {
            SVGCacheService_1._cache = new Map();
        }
        if (!SVGCacheService_1._inProgressReqs) {
            SVGCacheService_1._inProgressReqs = new Map();
        }
    }
    SVGCacheService_1 = SVGCacheService;
    SVGCacheService.prototype.getSVG = function (url, resolveSVGUrl, cache) {
        var _this = this;
        if (cache === void 0) { cache = true; }
        var svgUrl = resolveSVGUrl
            ? this.getAbsoluteUrl(url)
            : url;
        if (cache && SVGCacheService_1._cache.has(svgUrl)) {
            return rxjs_1.of(this._cloneSVG(SVGCacheService_1._cache.get(svgUrl)));
        }
        if (SVGCacheService_1._inProgressReqs.has(svgUrl)) {
            return SVGCacheService_1._inProgressReqs.get(svgUrl);
        }
        var req = this._http.get(svgUrl, { responseType: 'text' })
            .pipe(operators_1.finalize(function () {
            SVGCacheService_1._inProgressReqs.delete(svgUrl);
        }), operators_1.share(), operators_1.map(function (svgText) {
            var svgEl = _this._svgElementFromString(svgText);
            SVGCacheService_1._cache.set(svgUrl, svgEl);
            return _this._cloneSVG(svgEl);
        }));
        SVGCacheService_1._inProgressReqs.set(svgUrl, req);
        return req;
    };
    SVGCacheService.prototype.setBaseUrl = function () {
        if (this._config) {
            this._baseUrl = this._config.baseUrl;
        }
        else if (this._appBase !== null) {
            this._baseUrl = this._appBase;
        }
        else if (this._location !== null) {
            this._baseUrl = this._location.getBaseHrefFromDOM();
        }
    };
    SVGCacheService.prototype.getAbsoluteUrl = function (url) {
        if (this._baseUrl && !/^https?:\/\//i.test(url)) {
            url = this._baseUrl + url;
            if (url.indexOf('//') === 0) {
                url = url.substring(1);
            }
        }
        var base = this._renderer.createElement('BASE');
        base.href = url;
        return base.href;
    };
    SVGCacheService.prototype._svgElementFromString = function (str) {
        var div = this._renderer.createElement('DIV');
        div.innerHTML = str;
        var svg = div.querySelector('svg');
        if (!svg) {
            throw new Error('No SVG found in loaded contents');
        }
        return svg;
    };
    SVGCacheService.prototype._cloneSVG = function (svg) {
        return svg.cloneNode(true);
    };
    var SVGCacheService_1;
    SVGCacheService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SVGCacheService_Factory() { return new SVGCacheService(i0.ɵɵinject(i1.APP_BASE_HREF, 8), i0.ɵɵinject(i1.PlatformLocation, 8), i0.ɵɵinject(i2.InlineSVGConfig, 8), i0.ɵɵinject(i3.HttpBackend), i0.ɵɵinject(i0.RendererFactory2)); }, token: SVGCacheService, providedIn: "root" });
    SVGCacheService = SVGCacheService_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(0, core_1.Optional()), __param(0, core_1.Inject(common_1.APP_BASE_HREF)),
        __param(1, core_1.Optional()),
        __param(2, core_1.Optional()),
        __metadata("design:paramtypes", [String, common_1.PlatformLocation,
            inline_svg_config_1.InlineSVGConfig,
            http_1.HttpBackend,
            core_1.RendererFactory2])
    ], SVGCacheService);
    return SVGCacheService;
}());
exports.SVGCacheService = SVGCacheService;
