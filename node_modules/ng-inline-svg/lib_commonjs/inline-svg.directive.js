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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var inline_svg_component_1 = require("./inline-svg.component");
var svg_cache_service_1 = require("./svg-cache.service");
var inline_svg_service_1 = require("./inline-svg.service");
var inline_svg_config_1 = require("./inline-svg.config");
var SvgUtil = require("./svg-util");
var InlineSVGDirective = (function () {
    function InlineSVGDirective(_el, _viewContainerRef, _resolver, _svgCache, _renderer, _inlineSVGService, _config, platformId) {
        this._el = _el;
        this._viewContainerRef = _viewContainerRef;
        this._resolver = _resolver;
        this._svgCache = _svgCache;
        this._renderer = _renderer;
        this._inlineSVGService = _inlineSVGService;
        this._config = _config;
        this.platformId = platformId;
        this.resolveSVGUrl = true;
        this.replaceContents = true;
        this.prepend = false;
        this.injectComponent = false;
        this.cacheSVG = true;
        this.forceEvalStyles = false;
        this.evalScripts = "always";
        this.onSVGInserted = new core_1.EventEmitter();
        this.onSVGFailed = new core_1.EventEmitter();
        this._supportsSVG = SvgUtil.isSvgSupported();
        if (!common_1.isPlatformServer(this.platformId) && !this._supportsSVG) {
            this._fail('Embed SVG are not supported by this browser');
        }
    }
    InlineSVGDirective.prototype.ngOnInit = function () {
        if (!this._isValidPlatform() || this._isSSRDisabled()) {
            return;
        }
        this._insertSVG();
    };
    InlineSVGDirective.prototype.ngOnChanges = function (changes) {
        if (!this._isValidPlatform() || this._isSSRDisabled()) {
            return;
        }
        if (changes['inlineSVG']) {
            this._insertSVG();
        }
    };
    InlineSVGDirective.prototype.ngOnDestroy = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    InlineSVGDirective.prototype._insertSVG = function () {
        var _this = this;
        if (!common_1.isPlatformServer(this.platformId) && !this._supportsSVG) {
            return;
        }
        if (!this.inlineSVG) {
            this._fail('No URL passed to [inlineSVG]');
            return;
        }
        if (this.inlineSVG === this._prevUrl) {
            return;
        }
        this._prevUrl = this.inlineSVG;
        this._subscription = this._svgCache.getSVG(this.inlineSVG, this.resolveSVGUrl, this.cacheSVG)
            .subscribe(function (svg) {
            if (SvgUtil.isUrlSymbol(_this.inlineSVG)) {
                var symbolId = _this.inlineSVG.split('#')[1];
                svg = SvgUtil.createSymbolSvg(_this._renderer, svg, symbolId);
            }
            _this._processSvg(svg);
        }, function (err) {
            _this._fail(err);
        });
    };
    InlineSVGDirective.prototype._processSvg = function (svg) {
        if (!svg) {
            return;
        }
        if (this.removeSVGAttributes && common_1.isPlatformBrowser(this.platformId)) {
            SvgUtil.removeAttributes(svg, this.removeSVGAttributes);
        }
        if (this.setSVGAttributes) {
            SvgUtil.setAttributes(svg, this.setSVGAttributes);
        }
        if (this.onSVGLoaded) {
            svg = this.onSVGLoaded(svg, this._el.nativeElement);
        }
        this._insertEl(svg);
        if (common_1.isPlatformBrowser(this.platformId)) {
            this._inlineSVGService.evalScripts(svg, this.inlineSVG, this.evalScripts);
        }
        if (this.forceEvalStyles) {
            var styleTags = svg.querySelectorAll('style');
            Array.from(styleTags).forEach(function (tag) { return tag.textContent += ''; });
        }
        this.onSVGInserted.emit(svg);
    };
    InlineSVGDirective.prototype._insertEl = function (el) {
        if (this.injectComponent) {
            if (!this._svgComp) {
                var factory = this._resolver.resolveComponentFactory(inline_svg_component_1.InlineSVGComponent);
                this._svgComp = this._viewContainerRef.createComponent(factory);
            }
            this._svgComp.instance.context = this;
            this._svgComp.instance.replaceContents = this.replaceContents;
            this._svgComp.instance.prepend = this.prepend;
            this._svgComp.instance.content = el;
            this._renderer.appendChild(this._el.nativeElement, this._svgComp.injector.get(inline_svg_component_1.InlineSVGComponent)._el.nativeElement);
        }
        else {
            this._inlineSVGService.insertEl(this, this._el.nativeElement, el, this.replaceContents, this.prepend);
        }
    };
    InlineSVGDirective.prototype._fail = function (msg) {
        this.onSVGFailed.emit(msg);
        if (this.fallbackImgUrl) {
            var elImg = this._renderer.createElement('IMG');
            this._renderer.setAttribute(elImg, 'src', this.fallbackImgUrl);
            this._insertEl(elImg);
        }
    };
    InlineSVGDirective.prototype._isValidPlatform = function () {
        return common_1.isPlatformServer(this.platformId) || common_1.isPlatformBrowser(this.platformId);
    };
    InlineSVGDirective.prototype._isSSRDisabled = function () {
        return common_1.isPlatformServer(this.platformId) && this._config && this._config.clientOnly;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InlineSVGDirective.prototype, "inlineSVG", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InlineSVGDirective.prototype, "resolveSVGUrl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InlineSVGDirective.prototype, "replaceContents", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InlineSVGDirective.prototype, "prepend", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InlineSVGDirective.prototype, "injectComponent", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InlineSVGDirective.prototype, "cacheSVG", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InlineSVGDirective.prototype, "setSVGAttributes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], InlineSVGDirective.prototype, "removeSVGAttributes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InlineSVGDirective.prototype, "forceEvalStyles", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InlineSVGDirective.prototype, "evalScripts", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InlineSVGDirective.prototype, "fallbackImgUrl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], InlineSVGDirective.prototype, "onSVGLoaded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InlineSVGDirective.prototype, "onSVGInserted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InlineSVGDirective.prototype, "onSVGFailed", void 0);
    InlineSVGDirective = __decorate([
        core_1.Directive({
            selector: '[inlineSVG]',
            providers: [svg_cache_service_1.SVGCacheService]
        }),
        __param(6, core_1.Optional()),
        __param(7, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.ViewContainerRef,
            core_1.ComponentFactoryResolver,
            svg_cache_service_1.SVGCacheService,
            core_1.Renderer2,
            inline_svg_service_1.InlineSVGService,
            inline_svg_config_1.InlineSVGConfig,
            Object])
    ], InlineSVGDirective);
    return InlineSVGDirective;
}());
exports.InlineSVGDirective = InlineSVGDirective;
