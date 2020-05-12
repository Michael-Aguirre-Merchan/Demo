var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { InlineSVGDirective } from './inline-svg.directive';
import { InlineSVGService } from './inline-svg.service';
var InlineSVGComponent = (function () {
    function InlineSVGComponent(_inlineSVGService, el) {
        this._inlineSVGService = _inlineSVGService;
        this._el = el;
    }
    InlineSVGComponent.prototype.ngAfterViewInit = function () {
        this._updateContent();
    };
    InlineSVGComponent.prototype.ngOnChanges = function (changes) {
        if (changes['content']) {
            this._updateContent();
        }
    };
    InlineSVGComponent.prototype._updateContent = function () {
        this._inlineSVGService.insertEl(this.context, this._el.nativeElement, this.content, this.replaceContents, this.prepend);
    };
    __decorate([
        Input(),
        __metadata("design:type", InlineSVGDirective)
    ], InlineSVGComponent.prototype, "context", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], InlineSVGComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], InlineSVGComponent.prototype, "replaceContents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], InlineSVGComponent.prototype, "prepend", void 0);
    InlineSVGComponent = __decorate([
        Component({
            selector: 'inline-svg',
            template: '',
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [InlineSVGService, ElementRef])
    ], InlineSVGComponent);
    return InlineSVGComponent;
}());
export { InlineSVGComponent };
