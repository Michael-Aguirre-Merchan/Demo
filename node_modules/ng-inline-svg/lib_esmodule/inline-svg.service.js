var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, RendererFactory2 } from '@angular/core';
import * as i0 from "@angular/core";
var InlineSVGService = (function () {
    function InlineSVGService(rendererFactory) {
        this._ranScripts = {};
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    InlineSVGService.prototype.insertEl = function (dir, parentEl, content, replaceContents, prepend) {
        if (replaceContents && !prepend) {
            var parentNode = dir._prevSVG && dir._prevSVG.parentNode;
            if (parentNode) {
                this._renderer.removeChild(parentNode, dir._prevSVG);
            }
            parentEl.innerHTML = '';
        }
        if (prepend) {
            this._renderer.insertBefore(parentEl, content, parentEl.firstChild);
        }
        else {
            this._renderer.appendChild(parentEl, content);
        }
        if (content.nodeName === 'svg') {
            dir._prevSVG = content;
        }
    };
    InlineSVGService.prototype.evalScripts = function (svg, url, evalMode) {
        var scripts = svg.querySelectorAll('script');
        var scriptsToEval = [];
        for (var i = 0; i < scripts.length; i++) {
            var scriptType = scripts[i].getAttribute('type');
            if (!scriptType || scriptType === 'application/ecmascript' || scriptType === 'application/javascript') {
                var script = scripts[i].innerText || scripts[i].textContent;
                scriptsToEval.push(script);
                this._renderer.removeChild(scripts[i].parentNode, scripts[i]);
            }
        }
        if (scriptsToEval.length > 0 && (evalMode === "always" ||
            (evalMode === "once" && !this._ranScripts[url]))) {
            for (var i = 0; i < scriptsToEval.length; i++) {
                new Function(scriptsToEval[i])(window);
            }
            this._ranScripts[url] = true;
        }
    };
    InlineSVGService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function InlineSVGService_Factory() { return new InlineSVGService(i0.ɵɵinject(i0.RendererFactory2)); }, token: InlineSVGService, providedIn: "root" });
    InlineSVGService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [RendererFactory2])
    ], InlineSVGService);
    return InlineSVGService;
}());
export { InlineSVGService };
