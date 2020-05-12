import { AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { InlineSVGDirective } from './inline-svg.directive';
import { InlineSVGService } from './inline-svg.service';
export declare class InlineSVGComponent implements AfterViewInit, OnChanges {
    private _inlineSVGService;
    context: InlineSVGDirective;
    content: HTMLElement | SVGElement;
    replaceContents: boolean;
    prepend: boolean;
    constructor(_inlineSVGService: InlineSVGService, el: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _updateContent;
}
