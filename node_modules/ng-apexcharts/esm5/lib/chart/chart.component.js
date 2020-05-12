/**
 * @fileoverview added by tsickle
 * Generated from: lib/chart/chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { asapScheduler } from "rxjs";
import { default as ApexCharts } from "apexcharts";
var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.autoUpdateSeries = true;
    }
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        asapScheduler.schedule((/**
         * @return {?}
         */
        function () {
            _this.createElement();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        asapScheduler.schedule((/**
         * @return {?}
         */
        function () {
            if (_this.autoUpdateSeries &&
                Object.keys(changes).filter((/**
                 * @param {?} c
                 * @return {?}
                 */
                function (c) { return c !== "series"; })).length === 0) {
                _this.updateSeries(_this.series, true);
                return;
            }
            _this.createElement();
        }));
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chartObj) {
            this.chartObj.destroy();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ChartComponent.prototype.createElement = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        if (this.annotations) {
            options.annotations = this.annotations;
        }
        if (this.chart) {
            options.chart = this.chart;
        }
        if (this.colors) {
            options.colors = this.colors;
        }
        if (this.dataLabels) {
            options.dataLabels = this.dataLabels;
        }
        if (this.series) {
            options.series = this.series;
        }
        if (this.stroke) {
            options.stroke = this.stroke;
        }
        if (this.labels) {
            options.labels = this.labels;
        }
        if (this.legend) {
            options.legend = this.legend;
        }
        if (this.fill) {
            options.fill = this.fill;
        }
        if (this.tooltip) {
            options.tooltip = this.tooltip;
        }
        if (this.plotOptions) {
            options.plotOptions = this.plotOptions;
        }
        if (this.responsive) {
            options.responsive = this.responsive;
        }
        if (this.markers) {
            options.markers = this.markers;
        }
        if (this.noData) {
            options.noData = this.noData;
        }
        if (this.xaxis) {
            options.xaxis = this.xaxis;
        }
        if (this.yaxis) {
            options.yaxis = this.yaxis;
        }
        if (this.grid) {
            options.grid = this.grid;
        }
        if (this.states) {
            options.states = this.states;
        }
        if (this.title) {
            options.title = this.title;
        }
        if (this.subtitle) {
            options.subtitle = this.subtitle;
        }
        if (this.theme) {
            options.theme = this.theme;
        }
        if (this.chartObj) {
            this.chartObj.destroy();
        }
        this.chartObj = new ApexCharts(this.chartElement.nativeElement, options);
        this.render();
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        return this.chartObj.render();
    };
    /**
     * @param {?} options
     * @param {?=} redrawPaths
     * @param {?=} animate
     * @param {?=} updateSyncedCharts
     * @return {?}
     */
    ChartComponent.prototype.updateOptions = /**
     * @param {?} options
     * @param {?=} redrawPaths
     * @param {?=} animate
     * @param {?=} updateSyncedCharts
     * @return {?}
     */
    function (options, redrawPaths, animate, updateSyncedCharts) {
        return this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts);
    };
    /**
     * @param {?} newSeries
     * @param {?=} animate
     * @return {?}
     */
    ChartComponent.prototype.updateSeries = /**
     * @param {?} newSeries
     * @param {?=} animate
     * @return {?}
     */
    function (newSeries, animate) {
        this.chartObj.updateSeries(newSeries, animate);
    };
    /**
     * @param {?} newSeries
     * @param {?=} animate
     * @return {?}
     */
    ChartComponent.prototype.appendSeries = /**
     * @param {?} newSeries
     * @param {?=} animate
     * @return {?}
     */
    function (newSeries, animate) {
        this.chartObj.appendSeries(newSeries, animate);
    };
    /**
     * @param {?} seriesName
     * @return {?}
     */
    ChartComponent.prototype.toggleSeries = /**
     * @param {?} seriesName
     * @return {?}
     */
    function (seriesName) {
        return this.chartObj.toggleSeries(seriesName);
    };
    /**
     * @param {?} seriesName
     * @return {?}
     */
    ChartComponent.prototype.showSeries = /**
     * @param {?} seriesName
     * @return {?}
     */
    function (seriesName) {
        this.chartObj.showSeries(seriesName);
    };
    /**
     * @param {?} seriesName
     * @return {?}
     */
    ChartComponent.prototype.hideSeries = /**
     * @param {?} seriesName
     * @return {?}
     */
    function (seriesName) {
        this.chartObj.hideSeries(seriesName);
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.resetSeries = /**
     * @return {?}
     */
    function () {
        this.chartObj.resetSeries();
    };
    /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    ChartComponent.prototype.zoomX = /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function (min, max) {
        this.chartObj.zoomX(min, max);
    };
    /**
     * @param {?} seriesIndex
     * @param {?=} dataPointIndex
     * @return {?}
     */
    ChartComponent.prototype.toggleDataPointSelection = /**
     * @param {?} seriesIndex
     * @param {?=} dataPointIndex
     * @return {?}
     */
    function (seriesIndex, dataPointIndex) {
        this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex);
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.chartObj.destroy();
    };
    /**
     * @param {?=} localeName
     * @return {?}
     */
    ChartComponent.prototype.setLocale = /**
     * @param {?=} localeName
     * @return {?}
     */
    function (localeName) {
        this.chartObj.setLocale(localeName);
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.paper = /**
     * @return {?}
     */
    function () {
        this.chartObj.paper();
    };
    /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    ChartComponent.prototype.addXaxisAnnotation = /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    function (options, pushToMemory, context) {
        this.chartObj.addXaxisAnnotation(options, pushToMemory, context);
    };
    /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    ChartComponent.prototype.addYaxisAnnotation = /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    function (options, pushToMemory, context) {
        this.chartObj.addYaxisAnnotation(options, pushToMemory, context);
    };
    /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    ChartComponent.prototype.addPointAnnotation = /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    function (options, pushToMemory, context) {
        this.chartObj.addPointAnnotation(options, pushToMemory, context);
    };
    /**
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    ChartComponent.prototype.removeAnnotation = /**
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    function (id, options) {
        this.chartObj.removeAnnotation(id, options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    ChartComponent.prototype.clearAnnotations = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.chartObj.clearAnnotations(options);
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.dataURI = /**
     * @return {?}
     */
    function () {
        return this.chartObj.dataURI();
    };
    ChartComponent.decorators = [
        { type: Component, args: [{
                    selector: "apx-chart",
                    template: "<div #chart></div>\n",
                    styles: [""]
                }] }
    ];
    ChartComponent.propDecorators = {
        chart: [{ type: Input }],
        annotations: [{ type: Input }],
        colors: [{ type: Input }],
        dataLabels: [{ type: Input }],
        series: [{ type: Input }],
        stroke: [{ type: Input }],
        labels: [{ type: Input }],
        legend: [{ type: Input }],
        markers: [{ type: Input }],
        noData: [{ type: Input }],
        fill: [{ type: Input }],
        tooltip: [{ type: Input }],
        plotOptions: [{ type: Input }],
        responsive: [{ type: Input }],
        xaxis: [{ type: Input }],
        yaxis: [{ type: Input }],
        grid: [{ type: Input }],
        states: [{ type: Input }],
        title: [{ type: Input }],
        subtitle: [{ type: Input }],
        theme: [{ type: Input }],
        autoUpdateSeries: [{ type: Input }],
        chartElement: [{ type: ViewChild, args: ["chart", { static: true },] }]
    };
    return ChartComponent;
}());
export { ChartComponent };
if (false) {
    /** @type {?} */
    ChartComponent.prototype.chart;
    /** @type {?} */
    ChartComponent.prototype.annotations;
    /** @type {?} */
    ChartComponent.prototype.colors;
    /** @type {?} */
    ChartComponent.prototype.dataLabels;
    /** @type {?} */
    ChartComponent.prototype.series;
    /** @type {?} */
    ChartComponent.prototype.stroke;
    /** @type {?} */
    ChartComponent.prototype.labels;
    /** @type {?} */
    ChartComponent.prototype.legend;
    /** @type {?} */
    ChartComponent.prototype.markers;
    /** @type {?} */
    ChartComponent.prototype.noData;
    /** @type {?} */
    ChartComponent.prototype.fill;
    /** @type {?} */
    ChartComponent.prototype.tooltip;
    /** @type {?} */
    ChartComponent.prototype.plotOptions;
    /** @type {?} */
    ChartComponent.prototype.responsive;
    /** @type {?} */
    ChartComponent.prototype.xaxis;
    /** @type {?} */
    ChartComponent.prototype.yaxis;
    /** @type {?} */
    ChartComponent.prototype.grid;
    /** @type {?} */
    ChartComponent.prototype.states;
    /** @type {?} */
    ChartComponent.prototype.title;
    /** @type {?} */
    ChartComponent.prototype.subtitle;
    /** @type {?} */
    ChartComponent.prototype.theme;
    /** @type {?} */
    ChartComponent.prototype.autoUpdateSeries;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype.chartElement;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype.chartObj;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXBleGNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC9jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBc0J2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxPQUFPLElBQUksVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRW5EO0lBQUE7UUE0QlcscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0lBcU5uQyxDQUFDOzs7O0lBaE5DLGlDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEMsYUFBYSxDQUFDLFFBQVE7OztRQUFDO1lBQ3JCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQVlDO1FBWEMsYUFBYSxDQUFDLFFBQVE7OztRQUFDO1lBQ3JCLElBQ0UsS0FBSSxDQUFDLGdCQUFnQjtnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFFBQVEsRUFBZCxDQUFjLEVBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUM3RDtnQkFDQSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLE9BQU87YUFDUjtZQUVELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFR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OztJQUN6QiwrQkFBMEI7O0lBQzFCLHFDQUFzQzs7SUFDdEMsZ0NBQXVCOztJQUN2QixvQ0FBb0M7O0lBQ3BDLGdDQUE4RDs7SUFDOUQsZ0NBQTRCOztJQUM1QixnQ0FBMEI7O0lBQzFCLGdDQUE0Qjs7SUFDNUIsaUNBQThCOztJQUM5QixnQ0FBNEI7O0lBQzVCLDhCQUF3Qjs7SUFDeEIsaUNBQThCOztJQUM5QixxQ0FBc0M7O0lBQ3RDLG9DQUFzQzs7SUFDdEMsK0JBQTBCOztJQUMxQiwrQkFBd0M7O0lBQ3hDLDhCQUF3Qjs7SUFDeEIsZ0NBQTRCOztJQUM1QiwrQkFBa0M7O0lBQ2xDLGtDQUFxQzs7SUFDckMsK0JBQTBCOztJQUUxQiwwQ0FBaUM7Ozs7O0lBRWpDLHNDQUF1RTs7Ozs7SUFDdkUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBBcGV4QW5ub3RhdGlvbnMsXG4gIEFwZXhBeGlzQ2hhcnRTZXJpZXMsXG4gIEFwZXhDaGFydCxcbiAgQXBleERhdGFMYWJlbHMsXG4gIEFwZXhGaWxsLFxuICBBcGV4R3JpZCxcbiAgQXBleExlZ2VuZCxcbiAgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgQXBleE1hcmtlcnMsXG4gIEFwZXhOb0RhdGEsXG4gIEFwZXhQbG90T3B0aW9ucyxcbiAgQXBleFJlc3BvbnNpdmUsXG4gIEFwZXhTdGF0ZXMsXG4gIEFwZXhTdHJva2UsXG4gIEFwZXhUaGVtZSxcbiAgQXBleFRpdGxlU3VidGl0bGUsXG4gIEFwZXhUb29sdGlwLFxuICBBcGV4WEF4aXMsXG4gIEFwZXhZQXhpc1xufSBmcm9tIFwiLi4vbW9kZWwvYXBleC10eXBlc1wiO1xuaW1wb3J0IHsgYXNhcFNjaGVkdWxlciB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgQXBleENoYXJ0cyB9IGZyb20gXCJhcGV4Y2hhcnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHgtY2hhcnRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaGFydC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2hhcnQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjaGFydDogQXBleENoYXJ0O1xuICBASW5wdXQoKSBhbm5vdGF0aW9uczogQXBleEFubm90YXRpb25zO1xuICBASW5wdXQoKSBjb2xvcnM6IGFueVtdO1xuICBASW5wdXQoKSBkYXRhTGFiZWxzOiBBcGV4RGF0YUxhYmVscztcbiAgQElucHV0KCkgc2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzIHwgQXBleE5vbkF4aXNDaGFydFNlcmllcztcbiAgQElucHV0KCkgc3Ryb2tlOiBBcGV4U3Ryb2tlO1xuICBASW5wdXQoKSBsYWJlbHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBsZWdlbmQ6IEFwZXhMZWdlbmQ7XG4gIEBJbnB1dCgpIG1hcmtlcnM6IEFwZXhNYXJrZXJzO1xuICBASW5wdXQoKSBub0RhdGE6IEFwZXhOb0RhdGE7XG4gIEBJbnB1dCgpIGZpbGw6IEFwZXhGaWxsO1xuICBASW5wdXQoKSB0b29sdGlwOiBBcGV4VG9vbHRpcDtcbiAgQElucHV0KCkgcGxvdE9wdGlvbnM6IEFwZXhQbG90T3B0aW9ucztcbiAgQElucHV0KCkgcmVzcG9uc2l2ZTogQXBleFJlc3BvbnNpdmVbXTtcbiAgQElucHV0KCkgeGF4aXM6IEFwZXhYQXhpcztcbiAgQElucHV0KCkgeWF4aXM6IEFwZXhZQXhpcyB8IEFwZXhZQXhpc1tdO1xuICBASW5wdXQoKSBncmlkOiBBcGV4R3JpZDtcbiAgQElucHV0KCkgc3RhdGVzOiBBcGV4U3RhdGVzO1xuICBASW5wdXQoKSB0aXRsZTogQXBleFRpdGxlU3VidGl0bGU7XG4gIEBJbnB1dCgpIHN1YnRpdGxlOiBBcGV4VGl0bGVTdWJ0aXRsZTtcbiAgQElucHV0KCkgdGhlbWU6IEFwZXhUaGVtZTtcblxuICBASW5wdXQoKSBhdXRvVXBkYXRlU2VyaWVzID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKFwiY2hhcnRcIiwgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBjaGFydEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2hhcnRPYmo6IGFueTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmF1dG9VcGRhdGVTZXJpZXMgJiZcbiAgICAgICAgT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGMgPT4gYyAhPT0gXCJzZXJpZXNcIikubGVuZ3RoID09PSAwXG4gICAgICApIHtcbiAgICAgICAgdGhpcy51cGRhdGVTZXJpZXModGhpcy5zZXJpZXMsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY2hhcnRPYmopIHtcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7fTtcblxuICAgIGlmICh0aGlzLmFubm90YXRpb25zKSB7XG4gICAgICBvcHRpb25zLmFubm90YXRpb25zID0gdGhpcy5hbm5vdGF0aW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIG9wdGlvbnMuY2hhcnQgPSB0aGlzLmNoYXJ0O1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2xvcnMpIHtcbiAgICAgIG9wdGlvbnMuY29sb3JzID0gdGhpcy5jb2xvcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFMYWJlbHMpIHtcbiAgICAgIG9wdGlvbnMuZGF0YUxhYmVscyA9IHRoaXMuZGF0YUxhYmVscztcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VyaWVzKSB7XG4gICAgICBvcHRpb25zLnNlcmllcyA9IHRoaXMuc2VyaWVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdHJva2UpIHtcbiAgICAgIG9wdGlvbnMuc3Ryb2tlID0gdGhpcy5zdHJva2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhYmVscykge1xuICAgICAgb3B0aW9ucy5sYWJlbHMgPSB0aGlzLmxhYmVscztcbiAgICB9XG4gICAgaWYgKHRoaXMubGVnZW5kKSB7XG4gICAgICBvcHRpb25zLmxlZ2VuZCA9IHRoaXMubGVnZW5kO1xuICAgIH1cbiAgICBpZiAodGhpcy5maWxsKSB7XG4gICAgICBvcHRpb25zLmZpbGwgPSB0aGlzLmZpbGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgIG9wdGlvbnMudG9vbHRpcCA9IHRoaXMudG9vbHRpcDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGxvdE9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMucGxvdE9wdGlvbnMgPSB0aGlzLnBsb3RPcHRpb25zO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNwb25zaXZlKSB7XG4gICAgICBvcHRpb25zLnJlc3BvbnNpdmUgPSB0aGlzLnJlc3BvbnNpdmU7XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcmtlcnMpIHtcbiAgICAgIG9wdGlvbnMubWFya2VycyA9IHRoaXMubWFya2VycztcbiAgICB9XG4gICAgaWYgKHRoaXMubm9EYXRhKSB7XG4gICAgICBvcHRpb25zLm5vRGF0YSA9IHRoaXMubm9EYXRhO1xuICAgIH1cbiAgICBpZiAodGhpcy54YXhpcykge1xuICAgICAgb3B0aW9ucy54YXhpcyA9IHRoaXMueGF4aXM7XG4gICAgfVxuICAgIGlmICh0aGlzLnlheGlzKSB7XG4gICAgICBvcHRpb25zLnlheGlzID0gdGhpcy55YXhpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgb3B0aW9ucy5ncmlkID0gdGhpcy5ncmlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZXMpIHtcbiAgICAgIG9wdGlvbnMuc3RhdGVzID0gdGhpcy5zdGF0ZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLnRpdGxlKSB7XG4gICAgICBvcHRpb25zLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3VidGl0bGUpIHtcbiAgICAgIG9wdGlvbnMuc3VidGl0bGUgPSB0aGlzLnN1YnRpdGxlO1xuICAgIH1cbiAgICBpZiAodGhpcy50aGVtZSkge1xuICAgICAgb3B0aW9ucy50aGVtZSA9IHRoaXMudGhlbWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hhcnRPYmopIHtcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnRPYmogPSBuZXcgQXBleENoYXJ0cyh0aGlzLmNoYXJ0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNoYXJ0T2JqLnJlbmRlcigpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZU9wdGlvbnMoXG4gICAgb3B0aW9uczogYW55LFxuICAgIHJlZHJhd1BhdGhzPzogYm9vbGVhbixcbiAgICBhbmltYXRlPzogYm9vbGVhbixcbiAgICB1cGRhdGVTeW5jZWRDaGFydHM/OiBib29sZWFuXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNoYXJ0T2JqLnVwZGF0ZU9wdGlvbnMoXG4gICAgICBvcHRpb25zLFxuICAgICAgcmVkcmF3UGF0aHMsXG4gICAgICBhbmltYXRlLFxuICAgICAgdXBkYXRlU3luY2VkQ2hhcnRzXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVTZXJpZXMoXG4gICAgbmV3U2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzIHwgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgICBhbmltYXRlPzogYm9vbGVhblxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnVwZGF0ZVNlcmllcyhuZXdTZXJpZXMsIGFuaW1hdGUpO1xuICB9XG5cbiAgcHVibGljIGFwcGVuZFNlcmllcyhcbiAgICBuZXdTZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXMgfCBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzLFxuICAgIGFuaW1hdGU/OiBib29sZWFuXG4gICkge1xuICAgIHRoaXMuY2hhcnRPYmouYXBwZW5kU2VyaWVzKG5ld1NlcmllcywgYW5pbWF0ZSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VyaWVzKHNlcmllc05hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmoudG9nZ2xlU2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIHNob3dTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGFydE9iai5zaG93U2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIGhpZGVTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGFydE9iai5oaWRlU2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0U2VyaWVzKCkge1xuICAgIHRoaXMuY2hhcnRPYmoucmVzZXRTZXJpZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyB6b29tWChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnpvb21YKG1pbiwgbWF4KTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVEYXRhUG9pbnRTZWxlY3Rpb24oXG4gICAgc2VyaWVzSW5kZXg6IG51bWJlcixcbiAgICBkYXRhUG9pbnRJbmRleD86IG51bWJlclxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnRvZ2dsZURhdGFQb2ludFNlbGVjdGlvbihzZXJpZXNJbmRleCwgZGF0YVBvaW50SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TG9jYWxlKGxvY2FsZU5hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnNldExvY2FsZShsb2NhbGVOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBwYXBlcigpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnBhcGVyKCk7XG4gIH1cblxuICBwdWJsaWMgYWRkWGF4aXNBbm5vdGF0aW9uKFxuICAgIG9wdGlvbnM6IGFueSxcbiAgICBwdXNoVG9NZW1vcnk/OiBib29sZWFuLFxuICAgIGNvbnRleHQ/OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5jaGFydE9iai5hZGRYYXhpc0Fubm90YXRpb24ob3B0aW9ucywgcHVzaFRvTWVtb3J5LCBjb250ZXh0KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRZYXhpc0Fubm90YXRpb24oXG4gICAgb3B0aW9uczogYW55LFxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXG4gICAgY29udGV4dD86IGFueVxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFlheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xuICB9XG5cbiAgcHVibGljIGFkZFBvaW50QW5ub3RhdGlvbihcbiAgICBvcHRpb25zOiBhbnksXG4gICAgcHVzaFRvTWVtb3J5PzogYm9vbGVhbixcbiAgICBjb250ZXh0PzogYW55XG4gICkge1xuICAgIHRoaXMuY2hhcnRPYmouYWRkUG9pbnRBbm5vdGF0aW9uKG9wdGlvbnMsIHB1c2hUb01lbW9yeSwgY29udGV4dCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQW5ub3RhdGlvbihpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgdGhpcy5jaGFydE9iai5yZW1vdmVBbm5vdGF0aW9uKGlkLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFubm90YXRpb25zKG9wdGlvbnM/OiBhbnkpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmNsZWFyQW5ub3RhdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZGF0YVVSSSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai5kYXRhVVJJKCk7XG4gIH1cbn1cbiJdfQ==