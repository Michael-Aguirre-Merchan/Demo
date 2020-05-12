import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { LOCALE_CONFIG, DefaultLocaleConfig } from './daterangepicker.config';
var LocaleService = /** @class */ (function () {
    function LocaleService(_config) {
        this._config = _config;
    }
    Object.defineProperty(LocaleService.prototype, "config", {
        get: function () {
            if (!this._config) {
                return DefaultLocaleConfig;
            }
            return tslib_1.__assign({}, DefaultLocaleConfig, this._config);
        },
        enumerable: true,
        configurable: true
    });
    LocaleService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LOCALE_CONFIG,] }] }
    ]; };
    LocaleService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject(LOCALE_CONFIG))
    ], LocaleService);
    return LocaleService;
}());
export { LocaleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF0ZXJhbmdlcGlja2VyLW1hdGVyaWFsLyIsInNvdXJjZXMiOlsibG9jYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFHNUY7SUFDRSx1QkFBMkMsT0FBcUI7UUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztJQUFHLENBQUM7SUFFcEUsc0JBQUksaUNBQU07YUFBVjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixPQUFPLG1CQUFtQixDQUFDO2FBQzVCO1lBRUQsNEJBQVksbUJBQW1CLEVBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNwRCxDQUFDOzs7T0FBQTs7Z0RBUlksTUFBTSxTQUFDLGFBQWE7O0lBRHRCLGFBQWE7UUFEekIsVUFBVSxFQUFFO1FBRUUsbUJBQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO09BRHZCLGFBQWEsQ0FVekI7SUFBRCxvQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExPQ0FMRV9DT05GSUcsIERlZmF1bHRMb2NhbGVDb25maWcsIExvY2FsZUNvbmZpZyB9IGZyb20gJy4vZGF0ZXJhbmdlcGlja2VyLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfQ09ORklHKSBwcml2YXRlIF9jb25maWc6IExvY2FsZUNvbmZpZykge31cblxuICBnZXQgY29uZmlnKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdExvY2FsZUNvbmZpZztcbiAgICB9XG5cbiAgICByZXR1cm4gey4uLiBEZWZhdWx0TG9jYWxlQ29uZmlnLCAuLi50aGlzLl9jb25maWd9O1xuICB9XG59XG4iXX0=