"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var inline_svg_component_1 = require("./inline-svg.component");
var inline_svg_config_1 = require("./inline-svg.config");
var inline_svg_directive_1 = require("./inline-svg.directive");
var InlineSVGModule = (function () {
    function InlineSVGModule() {
    }
    InlineSVGModule_1 = InlineSVGModule;
    InlineSVGModule.forRoot = function (config) {
        return {
            ngModule: InlineSVGModule_1,
            providers: [
                { provide: inline_svg_config_1.InlineSVGConfig, useValue: config }
            ]
        };
    };
    var InlineSVGModule_1;
    InlineSVGModule = InlineSVGModule_1 = __decorate([
        core_1.NgModule({
            declarations: [inline_svg_directive_1.InlineSVGDirective, inline_svg_component_1.InlineSVGComponent],
            exports: [inline_svg_directive_1.InlineSVGDirective],
            entryComponents: [inline_svg_component_1.InlineSVGComponent]
        })
    ], InlineSVGModule);
    return InlineSVGModule;
}());
exports.InlineSVGModule = InlineSVGModule;
