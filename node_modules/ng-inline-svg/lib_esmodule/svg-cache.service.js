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
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional, RendererFactory2 } from '@angular/core';
import { of } from 'rxjs';
import { finalize, map, share } from 'rxjs/operators';
import { InlineSVGConfig } from './inline-svg.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./inline-svg.config";
import * as i3 from "@angular/common/http";
var SVGCacheService = (function () {
    function SVGCacheService(_appBase, _location, _config, httpBackend, rendererFactory) {
        this._appBase = _appBase;
        this._location = _location;
        this._config = _config;
        this._http = new HttpClient(httpBackend);
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
            return of(this._cloneSVG(SVGCacheService_1._cache.get(svgUrl)));
        }
        if (SVGCacheService_1._inProgressReqs.has(svgUrl)) {
            return SVGCacheService_1._inProgressReqs.get(svgUrl);
        }
        var req = this._http.get(svgUrl, { responseType: 'text' })
            .pipe(finalize(function () {
            SVGCacheService_1._inProgressReqs.delete(svgUrl);
        }), share(), map(function (svgText) {
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
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Optional()), __param(0, Inject(APP_BASE_HREF)),
        __param(1, Optional()),
        __param(2, Optional()),
        __metadata("design:paramtypes", [String, PlatformLocation,
            InlineSVGConfig,
            HttpBackend,
            RendererFactory2])
    ], SVGCacheService);
    return SVGCacheService;
}());
export { SVGCacheService };
