/**
 * @fileoverview added by tsickle
 * Generated from: lib/chart/chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { asapScheduler } from "rxjs";
import { default as ApexCharts } from "apexcharts";
export class ChartComponent {
    constructor() {
        this.autoUpdateSeries = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        asapScheduler.schedule((/**
         * @return {?}
         */
        () => {
            this.createElement();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        asapScheduler.schedule((/**
         * @return {?}
         */
        () => {
            if (this.autoUpdateSeries &&
                Object.keys(changes).filter((/**
                 * @param {?} c
                 * @return {?}
                 */
                c => c !== "series")).length === 0) {
                this.updateSeries(this.series, true);
                return;
            }
            this.createElement();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chartObj) {
            this.chartObj.destroy();
        }
    }
    /**
     * @private
     * @return {?}
     */
    createElement() {
        /** @type {?} */
        const options = {};
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
    }
    /**
     * @return {?}
     */
    render() {
        return this.chartObj.render();
    }
    /**
     * @param {?} options
     * @param {?=} redrawPaths
     * @param {?=} animate
     * @param {?=} updateSyncedCharts
     * @return {?}
     */
    updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
        return this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts);
    }
    /**
     * @param {?} newSeries
     * @param {?=} animate
     * @return {?}
     */
    updateSeries(newSeries, animate) {
        this.chartObj.updateSeries(newSeries, animate);
    }
    /**
     * @param {?} newSeries
     * @param {?=} animate
     * @return {?}
     */
    appendSeries(newSeries, animate) {
        this.chartObj.appendSeries(newSeries, animate);
    }
    /**
     * @param {?} seriesName
     * @return {?}
     */
    toggleSeries(seriesName) {
        return this.chartObj.toggleSeries(seriesName);
    }
    /**
     * @param {?} seriesName
     * @return {?}
     */
    showSeries(seriesName) {
        this.chartObj.showSeries(seriesName);
    }
    /**
     * @param {?} seriesName
     * @return {?}
     */
    hideSeries(seriesName) {
        this.chartObj.hideSeries(seriesName);
    }
    /**
     * @return {?}
     */
    resetSeries() {
        this.chartObj.resetSeries();
    }
    /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    zoomX(min, max) {
        this.chartObj.zoomX(min, max);
    }
    /**
     * @param {?} seriesIndex
     * @param {?=} dataPointIndex
     * @return {?}
     */
    toggleDataPointSelection(seriesIndex, dataPointIndex) {
        this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.chartObj.destroy();
    }
    /**
     * @param {?=} localeName
     * @return {?}
     */
    setLocale(localeName) {
        this.chartObj.setLocale(localeName);
    }
    /**
     * @return {?}
     */
    paper() {
        this.chartObj.paper();
    }
    /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    addXaxisAnnotation(options, pushToMemory, context) {
        this.chartObj.addXaxisAnnotation(options, pushToMemory, context);
    }
    /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    addYaxisAnnotation(options, pushToMemory, context) {
        this.chartObj.addYaxisAnnotation(options, pushToMemory, context);
    }
    /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    addPointAnnotation(options, pushToMemory, context) {
        this.chartObj.addPointAnnotation(options, pushToMemory, context);
    }
    /**
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    removeAnnotation(id, options) {
        this.chartObj.removeAnnotation(id, options);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    clearAnnotations(options) {
        this.chartObj.clearAnnotations(options);
    }
    /**
     * @return {?}
     */
    dataURI() {
        return this.chartObj.dataURI();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXBleGNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC9jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBc0J2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxPQUFPLElBQUksVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBT25ELE1BQU0sT0FBTyxjQUFjO0lBTDNCO1FBNEJXLHFCQUFnQixHQUFHLElBQUksQ0FBQztJQXFObkMsQ0FBQzs7OztJQWhOQyxRQUFRO1FBQ04sYUFBYSxDQUFDLFFBQVE7OztRQUFDLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxhQUFhLENBQUMsUUFBUTs7O1FBQUMsR0FBRyxFQUFFO1lBQzFCLElBQ0UsSUFBSSxDQUFDLGdCQUFnQjtnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQzdEO2dCQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckMsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFD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QiwrQkFBa0M7O0lBQ2xDLGtDQUFxQzs7SUFDckMsK0JBQTBCOztJQUUxQiwwQ0FBaUM7Ozs7O0lBRWpDLHNDQUF1RTs7Ozs7SUFDdkUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBBcGV4QW5ub3RhdGlvbnMsXG4gIEFwZXhBeGlzQ2hhcnRTZXJpZXMsXG4gIEFwZXhDaGFydCxcbiAgQXBleERhdGFMYWJlbHMsXG4gIEFwZXhGaWxsLFxuICBBcGV4R3JpZCxcbiAgQXBleExlZ2VuZCxcbiAgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgQXBleE1hcmtlcnMsXG4gIEFwZXhOb0RhdGEsXG4gIEFwZXhQbG90T3B0aW9ucyxcbiAgQXBleFJlc3BvbnNpdmUsXG4gIEFwZXhTdGF0ZXMsXG4gIEFwZXhTdHJva2UsXG4gIEFwZXhUaGVtZSxcbiAgQXBleFRpdGxlU3VidGl0bGUsXG4gIEFwZXhUb29sdGlwLFxuICBBcGV4WEF4aXMsXG4gIEFwZXhZQXhpc1xufSBmcm9tIFwiLi4vbW9kZWwvYXBleC10eXBlc1wiO1xuaW1wb3J0IHsgYXNhcFNjaGVkdWxlciB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgQXBleENoYXJ0cyB9IGZyb20gXCJhcGV4Y2hhcnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHgtY2hhcnRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaGFydC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2hhcnQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjaGFydDogQXBleENoYXJ0O1xuICBASW5wdXQoKSBhbm5vdGF0aW9uczogQXBleEFubm90YXRpb25zO1xuICBASW5wdXQoKSBjb2xvcnM6IGFueVtdO1xuICBASW5wdXQoKSBkYXRhTGFiZWxzOiBBcGV4RGF0YUxhYmVscztcbiAgQElucHV0KCkgc2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzIHwgQXBleE5vbkF4aXNDaGFydFNlcmllcztcbiAgQElucHV0KCkgc3Ryb2tlOiBBcGV4U3Ryb2tlO1xuICBASW5wdXQoKSBsYWJlbHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBsZWdlbmQ6IEFwZXhMZWdlbmQ7XG4gIEBJbnB1dCgpIG1hcmtlcnM6IEFwZXhNYXJrZXJzO1xuICBASW5wdXQoKSBub0RhdGE6IEFwZXhOb0RhdGE7XG4gIEBJbnB1dCgpIGZpbGw6IEFwZXhGaWxsO1xuICBASW5wdXQoKSB0b29sdGlwOiBBcGV4VG9vbHRpcDtcbiAgQElucHV0KCkgcGxvdE9wdGlvbnM6IEFwZXhQbG90T3B0aW9ucztcbiAgQElucHV0KCkgcmVzcG9uc2l2ZTogQXBleFJlc3BvbnNpdmVbXTtcbiAgQElucHV0KCkgeGF4aXM6IEFwZXhYQXhpcztcbiAgQElucHV0KCkgeWF4aXM6IEFwZXhZQXhpcyB8IEFwZXhZQXhpc1tdO1xuICBASW5wdXQoKSBncmlkOiBBcGV4R3JpZDtcbiAgQElucHV0KCkgc3RhdGVzOiBBcGV4U3RhdGVzO1xuICBASW5wdXQoKSB0aXRsZTogQXBleFRpdGxlU3VidGl0bGU7XG4gIEBJbnB1dCgpIHN1YnRpdGxlOiBBcGV4VGl0bGVTdWJ0aXRsZTtcbiAgQElucHV0KCkgdGhlbWU6IEFwZXhUaGVtZTtcblxuICBASW5wdXQoKSBhdXRvVXBkYXRlU2VyaWVzID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKFwiY2hhcnRcIiwgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBjaGFydEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2hhcnRPYmo6IGFueTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmF1dG9VcGRhdGVTZXJpZXMgJiZcbiAgICAgICAgT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGMgPT4gYyAhPT0gXCJzZXJpZXNcIikubGVuZ3RoID09PSAwXG4gICAgICApIHtcbiAgICAgICAgdGhpcy51cGRhdGVTZXJpZXModGhpcy5zZXJpZXMsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY2hhcnRPYmopIHtcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7fTtcblxuICAgIGlmICh0aGlzLmFubm90YXRpb25zKSB7XG4gICAgICBvcHRpb25zLmFubm90YXRpb25zID0gdGhpcy5hbm5vdGF0aW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIG9wdGlvbnMuY2hhcnQgPSB0aGlzLmNoYXJ0O1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2xvcnMpIHtcbiAgICAgIG9wdGlvbnMuY29sb3JzID0gdGhpcy5jb2xvcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFMYWJlbHMpIHtcbiAgICAgIG9wdGlvbnMuZGF0YUxhYmVscyA9IHRoaXMuZGF0YUxhYmVscztcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VyaWVzKSB7XG4gICAgICBvcHRpb25zLnNlcmllcyA9IHRoaXMuc2VyaWVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdHJva2UpIHtcbiAgICAgIG9wdGlvbnMuc3Ryb2tlID0gdGhpcy5zdHJva2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhYmVscykge1xuICAgICAgb3B0aW9ucy5sYWJlbHMgPSB0aGlzLmxhYmVscztcbiAgICB9XG4gICAgaWYgKHRoaXMubGVnZW5kKSB7XG4gICAgICBvcHRpb25zLmxlZ2VuZCA9IHRoaXMubGVnZW5kO1xuICAgIH1cbiAgICBpZiAodGhpcy5maWxsKSB7XG4gICAgICBvcHRpb25zLmZpbGwgPSB0aGlzLmZpbGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgIG9wdGlvbnMudG9vbHRpcCA9IHRoaXMudG9vbHRpcDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGxvdE9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMucGxvdE9wdGlvbnMgPSB0aGlzLnBsb3RPcHRpb25zO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNwb25zaXZlKSB7XG4gICAgICBvcHRpb25zLnJlc3BvbnNpdmUgPSB0aGlzLnJlc3BvbnNpdmU7XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcmtlcnMpIHtcbiAgICAgIG9wdGlvbnMubWFya2VycyA9IHRoaXMubWFya2VycztcbiAgICB9XG4gICAgaWYgKHRoaXMubm9EYXRhKSB7XG4gICAgICBvcHRpb25zLm5vRGF0YSA9IHRoaXMubm9EYXRhO1xuICAgIH1cbiAgICBpZiAodGhpcy54YXhpcykge1xuICAgICAgb3B0aW9ucy54YXhpcyA9IHRoaXMueGF4aXM7XG4gICAgfVxuICAgIGlmICh0aGlzLnlheGlzKSB7XG4gICAgICBvcHRpb25zLnlheGlzID0gdGhpcy55YXhpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgb3B0aW9ucy5ncmlkID0gdGhpcy5ncmlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZXMpIHtcbiAgICAgIG9wdGlvbnMuc3RhdGVzID0gdGhpcy5zdGF0ZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLnRpdGxlKSB7XG4gICAgICBvcHRpb25zLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3VidGl0bGUpIHtcbiAgICAgIG9wdGlvbnMuc3VidGl0bGUgPSB0aGlzLnN1YnRpdGxlO1xuICAgIH1cbiAgICBpZiAodGhpcy50aGVtZSkge1xuICAgICAgb3B0aW9ucy50aGVtZSA9IHRoaXMudGhlbWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hhcnRPYmopIHtcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnRPYmogPSBuZXcgQXBleENoYXJ0cyh0aGlzLmNoYXJ0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNoYXJ0T2JqLnJlbmRlcigpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZU9wdGlvbnMoXG4gICAgb3B0aW9uczogYW55LFxuICAgIHJlZHJhd1BhdGhzPzogYm9vbGVhbixcbiAgICBhbmltYXRlPzogYm9vbGVhbixcbiAgICB1cGRhdGVTeW5jZWRDaGFydHM/OiBib29sZWFuXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNoYXJ0T2JqLnVwZGF0ZU9wdGlvbnMoXG4gICAgICBvcHRpb25zLFxuICAgICAgcmVkcmF3UGF0aHMsXG4gICAgICBhbmltYXRlLFxuICAgICAgdXBkYXRlU3luY2VkQ2hhcnRzXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVTZXJpZXMoXG4gICAgbmV3U2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzIHwgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgICBhbmltYXRlPzogYm9vbGVhblxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnVwZGF0ZVNlcmllcyhuZXdTZXJpZXMsIGFuaW1hdGUpO1xuICB9XG5cbiAgcHVibGljIGFwcGVuZFNlcmllcyhcbiAgICBuZXdTZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXMgfCBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzLFxuICAgIGFuaW1hdGU/OiBib29sZWFuXG4gICkge1xuICAgIHRoaXMuY2hhcnRPYmouYXBwZW5kU2VyaWVzKG5ld1NlcmllcywgYW5pbWF0ZSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VyaWVzKHNlcmllc05hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmoudG9nZ2xlU2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIHNob3dTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGFydE9iai5zaG93U2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIGhpZGVTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGFydE9iai5oaWRlU2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0U2VyaWVzKCkge1xuICAgIHRoaXMuY2hhcnRPYmoucmVzZXRTZXJpZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyB6b29tWChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnpvb21YKG1pbiwgbWF4KTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVEYXRhUG9pbnRTZWxlY3Rpb24oXG4gICAgc2VyaWVzSW5kZXg6IG51bWJlcixcbiAgICBkYXRhUG9pbnRJbmRleD86IG51bWJlclxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnRvZ2dsZURhdGFQb2ludFNlbGVjdGlvbihzZXJpZXNJbmRleCwgZGF0YVBvaW50SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TG9jYWxlKGxvY2FsZU5hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnNldExvY2FsZShsb2NhbGVOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBwYXBlcigpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnBhcGVyKCk7XG4gIH1cblxuICBwdWJsaWMgYWRkWGF4aXNBbm5vdGF0aW9uKFxuICAgIG9wdGlvbnM6IGFueSxcbiAgICBwdXNoVG9NZW1vcnk/OiBib29sZWFuLFxuICAgIGNvbnRleHQ/OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5jaGFydE9iai5hZGRYYXhpc0Fubm90YXRpb24ob3B0aW9ucywgcHVzaFRvTWVtb3J5LCBjb250ZXh0KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRZYXhpc0Fubm90YXRpb24oXG4gICAgb3B0aW9uczogYW55LFxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXG4gICAgY29udGV4dD86IGFueVxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFlheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xuICB9XG5cbiAgcHVibGljIGFkZFBvaW50QW5ub3RhdGlvbihcbiAgICBvcHRpb25zOiBhbnksXG4gICAgcHVzaFRvTWVtb3J5PzogYm9vbGVhbixcbiAgICBjb250ZXh0PzogYW55XG4gICkge1xuICAgIHRoaXMuY2hhcnRPYmouYWRkUG9pbnRBbm5vdGF0aW9uKG9wdGlvbnMsIHB1c2hUb01lbW9yeSwgY29udGV4dCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQW5ub3RhdGlvbihpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgdGhpcy5jaGFydE9iai5yZW1vdmVBbm5vdGF0aW9uKGlkLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFubm90YXRpb25zKG9wdGlvbnM/OiBhbnkpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmNsZWFyQW5ub3RhdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZGF0YVVSSSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai5kYXRhVVJJKCk7XG4gIH1cbn1cbiJdfQ==