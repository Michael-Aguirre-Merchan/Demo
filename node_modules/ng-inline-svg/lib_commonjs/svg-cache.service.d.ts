import { PlatformLocation } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';
import { InlineSVGConfig } from './inline-svg.config';
export declare class SVGCacheService {
    private _appBase;
    private _location;
    private _config;
    private static _cache;
    private static _inProgressReqs;
    private _baseUrl;
    private _http;
    private _renderer;
    constructor(_appBase: string, _location: PlatformLocation, _config: InlineSVGConfig, httpBackend: HttpBackend, rendererFactory: RendererFactory2);
    getSVG(url: string, resolveSVGUrl: boolean, cache?: boolean): Observable<SVGElement>;
    setBaseUrl(): void;
    getAbsoluteUrl(url: string): string;
    private _svgElementFromString;
    private _cloneSVG;
}
