/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/apex-types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// export declare class ApexCharts {
//   constructor(el: any, options: ApexOptions);
//   static exec(chartID: string, fn: () => void, options: any): any;
//   static initOnLoad(): void;
//   render(): Promise<void>;
//   updateOptions(options: any, redrawPaths: boolean, animate: boolean, updateSyncedCharts: boolean): Promise<void>;
//   updateSeries(newSeries: ApexAxisChartSeries | ApexNonAxisChartSeries, animate: boolean): void;
//   toggleSeries(seriesName: string): void;
//   destroy(): void;
//   addXaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
//   addYaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
//   addPointAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
//   addText(options: any, pushToMemory?: boolean, context?: any): void;
//   dataURI(): void;
// }
/**
 * @record
 */
export function ApexOptions() { }
if (false) {
    /** @type {?|undefined} */
    ApexOptions.prototype.annotations;
    /** @type {?|undefined} */
    ApexOptions.prototype.chart;
    /** @type {?|undefined} */
    ApexOptions.prototype.colors;
    /** @type {?|undefined} */
    ApexOptions.prototype.dataLabels;
    /** @type {?|undefined} */
    ApexOptions.prototype.series;
    /** @type {?|undefined} */
    ApexOptions.prototype.stroke;
    /** @type {?|undefined} */
    ApexOptions.prototype.labels;
    /** @type {?|undefined} */
    ApexOptions.prototype.legend;
    /** @type {?|undefined} */
    ApexOptions.prototype.fill;
    /** @type {?|undefined} */
    ApexOptions.prototype.tooltip;
    /** @type {?|undefined} */
    ApexOptions.prototype.plotOptions;
    /** @type {?|undefined} */
    ApexOptions.prototype.responsive;
    /** @type {?|undefined} */
    ApexOptions.prototype.markers;
    /** @type {?|undefined} */
    ApexOptions.prototype.noData;
    /** @type {?|undefined} */
    ApexOptions.prototype.xaxis;
    /** @type {?|undefined} */
    ApexOptions.prototype.yaxis;
    /** @type {?|undefined} */
    ApexOptions.prototype.grid;
    /** @type {?|undefined} */
    ApexOptions.prototype.states;
    /** @type {?|undefined} */
    ApexOptions.prototype.title;
    /** @type {?|undefined} */
    ApexOptions.prototype.subtitle;
    /** @type {?|undefined} */
    ApexOptions.prototype.theme;
}
/**
 * @record
 */
function ApexDropShadow() { }
if (false) {
    /** @type {?|undefined} */
    ApexDropShadow.prototype.enabled;
    /** @type {?|undefined} */
    ApexDropShadow.prototype.top;
    /** @type {?|undefined} */
    ApexDropShadow.prototype.left;
    /** @type {?|undefined} */
    ApexDropShadow.prototype.blur;
    /** @type {?|undefined} */
    ApexDropShadow.prototype.opacity;
    /** @type {?|undefined} */
    ApexDropShadow.prototype.color;
}
/**
 * Main Chart options
 * See https://apexcharts.com/docs/options/chart/
 * @record
 */
export function ApexChart() { }
if (false) {
    /** @type {?|undefined} */
    ApexChart.prototype.width;
    /** @type {?|undefined} */
    ApexChart.prototype.height;
    /** @type {?} */
    ApexChart.prototype.type;
    /** @type {?|undefined} */
    ApexChart.prototype.foreColor;
    /** @type {?|undefined} */
    ApexChart.prototype.fontFamily;
    /** @type {?|undefined} */
    ApexChart.prototype.background;
    /** @type {?|undefined} */
    ApexChart.prototype.offsetX;
    /** @type {?|undefined} */
    ApexChart.prototype.offsetY;
    /** @type {?|undefined} */
    ApexChart.prototype.dropShadow;
    /** @type {?|undefined} */
    ApexChart.prototype.events;
    /** @type {?|undefined} */
    ApexChart.prototype.brush;
    /** @type {?|undefined} */
    ApexChart.prototype.id;
    /** @type {?|undefined} */
    ApexChart.prototype.group;
    /** @type {?|undefined} */
    ApexChart.prototype.locales;
    /** @type {?|undefined} */
    ApexChart.prototype.defaultLocale;
    /** @type {?|undefined} */
    ApexChart.prototype.parentHeightOffset;
    /** @type {?|undefined} */
    ApexChart.prototype.redrawOnParentResize;
    /** @type {?|undefined} */
    ApexChart.prototype.sparkline;
    /** @type {?|undefined} */
    ApexChart.prototype.stacked;
    /** @type {?|undefined} */
    ApexChart.prototype.stackType;
    /** @type {?|undefined} */
    ApexChart.prototype.toolbar;
    /** @type {?|undefined} */
    ApexChart.prototype.zoom;
    /** @type {?|undefined} */
    ApexChart.prototype.selection;
    /** @type {?|undefined} */
    ApexChart.prototype.animations;
}
/**
 * @record
 */
export function ApexStates() { }
if (false) {
    /** @type {?|undefined} */
    ApexStates.prototype.normal;
    /** @type {?|undefined} */
    ApexStates.prototype.hover;
    /** @type {?|undefined} */
    ApexStates.prototype.active;
}
/**
 * Chart Title options
 * See https://apexcharts.com/docs/options/title/
 * @record
 */
export function ApexTitleSubtitle() { }
if (false) {
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.text;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.align;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.margin;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.offsetX;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.offsetY;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.floating;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.style;
}
/**
 * Options for the line drawn on line and area charts.
 * See https://apexcharts.com/docs/options/stroke/
 * @record
 */
export function ApexStroke() { }
if (false) {
    /** @type {?|undefined} */
    ApexStroke.prototype.show;
    /** @type {?|undefined} */
    ApexStroke.prototype.curve;
    /** @type {?|undefined} */
    ApexStroke.prototype.lineCap;
    /** @type {?|undefined} */
    ApexStroke.prototype.colors;
    /** @type {?|undefined} */
    ApexStroke.prototype.width;
    /** @type {?|undefined} */
    ApexStroke.prototype.dashArray;
}
/**
 * @record
 */
export function ApexAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    ApexAnnotations.prototype.position;
    /** @type {?|undefined} */
    ApexAnnotations.prototype.yaxis;
    /** @type {?|undefined} */
    ApexAnnotations.prototype.xaxis;
    /** @type {?|undefined} */
    ApexAnnotations.prototype.points;
    /** @type {?|undefined} */
    ApexAnnotations.prototype.shapes;
    /** @type {?|undefined} */
    ApexAnnotations.prototype.texts;
    /** @type {?|undefined} */
    ApexAnnotations.prototype.images;
}
/**
 * @record
 */
export function AnnotationLabel() { }
if (false) {
    /** @type {?|undefined} */
    AnnotationLabel.prototype.borderColor;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.borderWidth;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.text;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.textAnchor;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.offsetX;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.offsetY;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.style;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.position;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.orientation;
}
/**
 * @record
 */
export function AnnotationStyle() { }
if (false) {
    /** @type {?|undefined} */
    AnnotationStyle.prototype.background;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.color;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.fontSize;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.fontFamily;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.fontWeight;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.cssClass;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.padding;
}
/**
 * @record
 */
export function XAxisAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.x;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.x2;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.strokeDashArray;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.fillColor;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.borderColor;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.borderWidth;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.opacity;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.offsetX;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.offsetY;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.label;
}
/**
 * @record
 */
export function YAxisAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.y;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.y2;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.strokeDashArray;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.fillColor;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.borderColor;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.borderWidth;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.opacity;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.offsetX;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.offsetY;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.yAxisIndex;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.label;
}
/**
 * @record
 */
export function PointAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    PointAnnotations.prototype.x;
    /** @type {?|undefined} */
    PointAnnotations.prototype.y;
    /** @type {?|undefined} */
    PointAnnotations.prototype.yAxisIndex;
    /** @type {?|undefined} */
    PointAnnotations.prototype.seriesIndex;
    /** @type {?|undefined} */
    PointAnnotations.prototype.marker;
    /** @type {?|undefined} */
    PointAnnotations.prototype.label;
    /** @type {?|undefined} */
    PointAnnotations.prototype.image;
}
/**
 * @record
 */
export function ShapeAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    ShapeAnnotations.prototype.x;
    /** @type {?|undefined} */
    ShapeAnnotations.prototype.y;
    /** @type {?|undefined} */
    ShapeAnnotations.prototype.type;
    /** @type {?|undefined} */
    ShapeAnnotations.prototype.width;
    /** @type {?|undefined} */
    ShapeAnnotations.prototype.height;
    /** @type {?|undefined} */
    ShapeAnnotations.prototype.appendTo;
    /** @type {?|undefined} */
    ShapeAnnotations.prototype.backgroundColor;
    /** @type {?|undefined} */
    ShapeAnnotations.prototype.opacity;
    /** @type {?|undefined} */
    ShapeAnnotations.prototype.borderWidth;
    /** @type {?|undefined} */
    ShapeAnnotations.prototype.borderRadius;
    /** @type {?|undefined} */
    ShapeAnnotations.prototype.borderColor;
}
/**
 * @record
 */
export function ImageAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    ImageAnnotations.prototype.path;
    /** @type {?|undefined} */
    ImageAnnotations.prototype.x;
    /** @type {?|undefined} */
    ImageAnnotations.prototype.y;
    /** @type {?|undefined} */
    ImageAnnotations.prototype.width;
    /** @type {?|undefined} */
    ImageAnnotations.prototype.height;
    /** @type {?|undefined} */
    ImageAnnotations.prototype.appendTo;
}
/**
 * @record
 */
export function TextAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    TextAnnotations.prototype.x;
    /** @type {?|undefined} */
    TextAnnotations.prototype.y;
    /** @type {?|undefined} */
    TextAnnotations.prototype.text;
    /** @type {?|undefined} */
    TextAnnotations.prototype.textAnchor;
    /** @type {?|undefined} */
    TextAnnotations.prototype.foreColor;
    /** @type {?|undefined} */
    TextAnnotations.prototype.fontSize;
    /** @type {?|undefined} */
    TextAnnotations.prototype.fontFamily;
    /** @type {?|undefined} */
    TextAnnotations.prototype.fontWeight;
    /** @type {?|undefined} */
    TextAnnotations.prototype.appendTo;
    /** @type {?|undefined} */
    TextAnnotations.prototype.backgroundColor;
    /** @type {?|undefined} */
    TextAnnotations.prototype.borderColor;
    /** @type {?|undefined} */
    TextAnnotations.prototype.borderRadius;
    /** @type {?|undefined} */
    TextAnnotations.prototype.borderWidth;
    /** @type {?|undefined} */
    TextAnnotations.prototype.paddingLeft;
    /** @type {?|undefined} */
    TextAnnotations.prototype.paddingRight;
    /** @type {?|undefined} */
    TextAnnotations.prototype.paddingTop;
    /** @type {?|undefined} */
    TextAnnotations.prototype.paddingBottom;
}
/**
 * Options for localization.
 * See https://apexcharts.com/docs/options/chart/locales
 * @record
 */
export function ApexLocale() { }
if (false) {
    /** @type {?|undefined} */
    ApexLocale.prototype.name;
    /** @type {?|undefined} */
    ApexLocale.prototype.options;
}
/**
 * PlotOptions for specifying chart-type-specific configuration.
 * See https://apexcharts.com/docs/options/plotoptions/bar/
 * @record
 */
export function ApexPlotOptions() { }
if (false) {
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.bar;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.bubble;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.candlestick;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.heatmap;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.pie;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.polarArea;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.radar;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.radialBar;
}
/**
 * @record
 */
export function ApexFill() { }
if (false) {
    /** @type {?|undefined} */
    ApexFill.prototype.colors;
    /** @type {?|undefined} */
    ApexFill.prototype.opacity;
    /** @type {?|undefined} */
    ApexFill.prototype.type;
    /** @type {?|undefined} */
    ApexFill.prototype.gradient;
    /** @type {?|undefined} */
    ApexFill.prototype.image;
    /** @type {?|undefined} */
    ApexFill.prototype.pattern;
}
/**
 * Chart Legend configuration options.
 * See https://apexcharts.com/docs/options/legend/
 * @record
 */
export function ApexLegend() { }
if (false) {
    /** @type {?|undefined} */
    ApexLegend.prototype.show;
    /** @type {?|undefined} */
    ApexLegend.prototype.showForSingleSeries;
    /** @type {?|undefined} */
    ApexLegend.prototype.showForNullSeries;
    /** @type {?|undefined} */
    ApexLegend.prototype.showForZeroSeries;
    /** @type {?|undefined} */
    ApexLegend.prototype.floating;
    /** @type {?|undefined} */
    ApexLegend.prototype.inverseOrder;
    /** @type {?|undefined} */
    ApexLegend.prototype.position;
    /** @type {?|undefined} */
    ApexLegend.prototype.horizontalAlign;
    /** @type {?|undefined} */
    ApexLegend.prototype.fontSize;
    /** @type {?|undefined} */
    ApexLegend.prototype.fontFamily;
    /** @type {?|undefined} */
    ApexLegend.prototype.fontWeight;
    /** @type {?|undefined} */
    ApexLegend.prototype.width;
    /** @type {?|undefined} */
    ApexLegend.prototype.height;
    /** @type {?|undefined} */
    ApexLegend.prototype.offsetX;
    /** @type {?|undefined} */
    ApexLegend.prototype.offsetY;
    /** @type {?|undefined} */
    ApexLegend.prototype.textAnchor;
    /** @type {?|undefined} */
    ApexLegend.prototype.labels;
    /** @type {?|undefined} */
    ApexLegend.prototype.markers;
    /** @type {?|undefined} */
    ApexLegend.prototype.itemMargin;
    /** @type {?|undefined} */
    ApexLegend.prototype.containerMargin;
    /** @type {?|undefined} */
    ApexLegend.prototype.onItemClick;
    /** @type {?|undefined} */
    ApexLegend.prototype.onItemHover;
    /**
     * @param {?} legendName
     * @param {?=} opts
     * @return {?}
     */
    ApexLegend.prototype.formatter = function (legendName, opts) { };
    /**
     * @param {?} legendName
     * @param {?=} opts
     * @return {?}
     */
    ApexLegend.prototype.tooltipHoverFormatter = function (legendName, opts) { };
}
/**
 * Chart Datalabels options
 * See https://apexcharts.com/docs/options/datalabels/
 * @record
 */
export function ApexDataLabels() { }
if (false) {
    /** @type {?|undefined} */
    ApexDataLabels.prototype.enabled;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.enabledOnSeries;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.textAnchor;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.distributed;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.offsetX;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.offsetY;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.style;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.background;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.dropShadow;
    /**
     * @param {?} val
     * @param {?=} opts
     * @return {?}
     */
    ApexDataLabels.prototype.formatter = function (val, opts) { };
}
/**
 * @record
 */
export function ApexResponsive() { }
if (false) {
    /** @type {?|undefined} */
    ApexResponsive.prototype.breakpoint;
    /** @type {?|undefined} */
    ApexResponsive.prototype.options;
}
/**
 * Chart Tooltip options
 * See https://apexcharts.com/docs/options/tooltip/
 * @record
 */
export function ApexTooltip() { }
if (false) {
    /** @type {?|undefined} */
    ApexTooltip.prototype.enabled;
    /** @type {?|undefined} */
    ApexTooltip.prototype.enabledOnSeries;
    /** @type {?|undefined} */
    ApexTooltip.prototype.shared;
    /** @type {?|undefined} */
    ApexTooltip.prototype.followCursor;
    /** @type {?|undefined} */
    ApexTooltip.prototype.intersect;
    /** @type {?|undefined} */
    ApexTooltip.prototype.inverseOrder;
    /** @type {?|undefined} */
    ApexTooltip.prototype.custom;
    /** @type {?|undefined} */
    ApexTooltip.prototype.fillSeriesColor;
    /** @type {?|undefined} */
    ApexTooltip.prototype.theme;
    /** @type {?|undefined} */
    ApexTooltip.prototype.style;
    /** @type {?|undefined} */
    ApexTooltip.prototype.onDatasetHover;
    /** @type {?|undefined} */
    ApexTooltip.prototype.x;
    /** @type {?|undefined} */
    ApexTooltip.prototype.y;
    /** @type {?|undefined} */
    ApexTooltip.prototype.z;
    /** @type {?|undefined} */
    ApexTooltip.prototype.marker;
    /** @type {?|undefined} */
    ApexTooltip.prototype.items;
    /** @type {?|undefined} */
    ApexTooltip.prototype.fixed;
}
/**
 * X Axis options
 * See https://apexcharts.com/docs/options/xaxis/
 * @record
 */
export function ApexXAxis() { }
if (false) {
    /** @type {?|undefined} */
    ApexXAxis.prototype.type;
    /** @type {?|undefined} */
    ApexXAxis.prototype.categories;
    /** @type {?|undefined} */
    ApexXAxis.prototype.offsetX;
    /** @type {?|undefined} */
    ApexXAxis.prototype.offsetY;
    /** @type {?|undefined} */
    ApexXAxis.prototype.sorted;
    /** @type {?|undefined} */
    ApexXAxis.prototype.labels;
    /** @type {?|undefined} */
    ApexXAxis.prototype.axisBorder;
    /** @type {?|undefined} */
    ApexXAxis.prototype.axisTicks;
    /** @type {?|undefined} */
    ApexXAxis.prototype.tickPlacement;
    /** @type {?|undefined} */
    ApexXAxis.prototype.tickAmount;
    /** @type {?|undefined} */
    ApexXAxis.prototype.min;
    /** @type {?|undefined} */
    ApexXAxis.prototype.max;
    /** @type {?|undefined} */
    ApexXAxis.prototype.range;
    /** @type {?|undefined} */
    ApexXAxis.prototype.floating;
    /** @type {?|undefined} */
    ApexXAxis.prototype.position;
    /** @type {?|undefined} */
    ApexXAxis.prototype.title;
    /** @type {?|undefined} */
    ApexXAxis.prototype.crosshairs;
    /** @type {?|undefined} */
    ApexXAxis.prototype.tooltip;
}
/**
 * Y Axis options
 * See https://apexcharts.com/docs/options/yaxis/
 * @record
 */
export function ApexYAxis() { }
if (false) {
    /** @type {?|undefined} */
    ApexYAxis.prototype.show;
    /** @type {?|undefined} */
    ApexYAxis.prototype.showAlways;
    /** @type {?|undefined} */
    ApexYAxis.prototype.showForNullSeries;
    /** @type {?|undefined} */
    ApexYAxis.prototype.seriesName;
    /** @type {?|undefined} */
    ApexYAxis.prototype.opposite;
    /** @type {?|undefined} */
    ApexYAxis.prototype.reversed;
    /** @type {?|undefined} */
    ApexYAxis.prototype.logarithmic;
    /** @type {?|undefined} */
    ApexYAxis.prototype.tickAmount;
    /** @type {?|undefined} */
    ApexYAxis.prototype.forceNiceScale;
    /** @type {?|undefined} */
    ApexYAxis.prototype.min;
    /** @type {?|undefined} */
    ApexYAxis.prototype.max;
    /** @type {?|undefined} */
    ApexYAxis.prototype.floating;
    /** @type {?|undefined} */
    ApexYAxis.prototype.decimalsInFloat;
    /** @type {?|undefined} */
    ApexYAxis.prototype.labels;
    /** @type {?|undefined} */
    ApexYAxis.prototype.axisBorder;
    /** @type {?|undefined} */
    ApexYAxis.prototype.axisTicks;
    /** @type {?|undefined} */
    ApexYAxis.prototype.title;
    /** @type {?|undefined} */
    ApexYAxis.prototype.crosshairs;
    /** @type {?|undefined} */
    ApexYAxis.prototype.tooltip;
}
/**
 * Plot X and Y grid options
 * See https://apexcharts.com/docs/options/grid/
 * @record
 */
export function ApexGrid() { }
if (false) {
    /** @type {?|undefined} */
    ApexGrid.prototype.show;
    /** @type {?|undefined} */
    ApexGrid.prototype.borderColor;
    /** @type {?|undefined} */
    ApexGrid.prototype.strokeDashArray;
    /** @type {?|undefined} */
    ApexGrid.prototype.position;
    /** @type {?|undefined} */
    ApexGrid.prototype.xaxis;
    /** @type {?|undefined} */
    ApexGrid.prototype.yaxis;
    /** @type {?|undefined} */
    ApexGrid.prototype.row;
    /** @type {?|undefined} */
    ApexGrid.prototype.column;
    /** @type {?|undefined} */
    ApexGrid.prototype.padding;
}
/**
 * @record
 */
export function ApexTheme() { }
if (false) {
    /** @type {?|undefined} */
    ApexTheme.prototype.mode;
    /** @type {?|undefined} */
    ApexTheme.prototype.palette;
    /** @type {?|undefined} */
    ApexTheme.prototype.monochrome;
}
/**
 * @record
 */
function ApexDiscretePoint() { }
if (false) {
    /** @type {?|undefined} */
    ApexDiscretePoint.prototype.seriesIndex;
    /** @type {?|undefined} */
    ApexDiscretePoint.prototype.dataPointIndex;
    /** @type {?|undefined} */
    ApexDiscretePoint.prototype.fillColor;
    /** @type {?|undefined} */
    ApexDiscretePoint.prototype.strokeColor;
    /** @type {?|undefined} */
    ApexDiscretePoint.prototype.size;
}
/**
 * @record
 */
export function ApexMarkers() { }
if (false) {
    /** @type {?|undefined} */
    ApexMarkers.prototype.size;
    /** @type {?|undefined} */
    ApexMarkers.prototype.colors;
    /** @type {?|undefined} */
    ApexMarkers.prototype.strokeColors;
    /** @type {?|undefined} */
    ApexMarkers.prototype.strokeWidth;
    /** @type {?|undefined} */
    ApexMarkers.prototype.strokeOpacity;
    /** @type {?|undefined} */
    ApexMarkers.prototype.strokeDashArray;
    /** @type {?|undefined} */
    ApexMarkers.prototype.fillOpacity;
    /** @type {?|undefined} */
    ApexMarkers.prototype.discrete;
    /** @type {?|undefined} */
    ApexMarkers.prototype.shape;
    /** @type {?|undefined} */
    ApexMarkers.prototype.radius;
    /** @type {?|undefined} */
    ApexMarkers.prototype.offsetX;
    /** @type {?|undefined} */
    ApexMarkers.prototype.offsetY;
    /** @type {?|undefined} */
    ApexMarkers.prototype.showNullDataPoints;
    /** @type {?|undefined} */
    ApexMarkers.prototype.hover;
    /**
     * @param {?=} e
     * @return {?}
     */
    ApexMarkers.prototype.onClick = function (e) { };
    /**
     * @param {?=} e
     * @return {?}
     */
    ApexMarkers.prototype.onDblClick = function (e) { };
}
/**
 * @record
 */
export function ApexNoData() { }
if (false) {
    /** @type {?|undefined} */
    ApexNoData.prototype.text;
    /** @type {?|undefined} */
    ApexNoData.prototype.align;
    /** @type {?|undefined} */
    ApexNoData.prototype.verticalAlign;
    /** @type {?|undefined} */
    ApexNoData.prototype.offsetX;
    /** @type {?|undefined} */
    ApexNoData.prototype.offsetY;
    /** @type {?|undefined} */
    ApexNoData.prototype.style;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleC10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWFwZXhjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvYXBleC10eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxpQ0FzQkM7OztJQXJCQyxrQ0FBOEI7O0lBQzlCLDRCQUFrQjs7SUFDbEIsNkJBQWtCOztJQUNsQixpQ0FBNEI7O0lBQzVCLDZCQUFzRDs7SUFDdEQsNkJBQW9COztJQUNwQiw2QkFBa0I7O0lBQ2xCLDZCQUFvQjs7SUFDcEIsMkJBQWdCOztJQUNoQiw4QkFBc0I7O0lBQ3RCLGtDQUE4Qjs7SUFDOUIsaUNBQThCOztJQUM5Qiw4QkFBc0I7O0lBQ3RCLDZCQUFvQjs7SUFDcEIsNEJBQWtCOztJQUNsQiw0QkFBZ0M7O0lBQ2hDLDJCQUFnQjs7SUFDaEIsNkJBQW9COztJQUNwQiw0QkFBMEI7O0lBQzFCLCtCQUE2Qjs7SUFDN0IsNEJBQWtCOzs7OztBQUdwQiw2QkFPQzs7O0lBTkMsaUNBQWtCOztJQUNsQiw2QkFBYTs7SUFDYiw4QkFBYzs7SUFDZCw4QkFBYzs7SUFDZCxpQ0FBaUI7O0lBQ2pCLCtCQUFlOzs7Ozs7O0FBT2pCLCtCQXFIQzs7O0lBcEhDLDBCQUF3Qjs7SUFDeEIsMkJBQXlCOztJQUN6Qix5QkFBZ0I7O0lBQ2hCLDhCQUFtQjs7SUFDbkIsK0JBQW9COztJQUNwQiwrQkFBb0I7O0lBQ3BCLDRCQUFpQjs7SUFDakIsNEJBQWlCOztJQUNqQiwrQkFHRTs7SUFDRiwyQkFnQkU7O0lBQ0YsMEJBSUU7O0lBQ0YsdUJBQVk7O0lBQ1osMEJBQWU7O0lBQ2YsNEJBQXVCOztJQUN2QixrQ0FBdUI7O0lBQ3ZCLHVDQUE0Qjs7SUFDNUIseUNBQStCOztJQUMvQiw4QkFFRTs7SUFDRiw0QkFBa0I7O0lBQ2xCLDhCQUE4Qjs7SUFDOUIsNEJBbUJFOztJQUNGLHlCQWVFOztJQUNGLDhCQXFCRTs7SUFDRiwrQkFZRTs7Ozs7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SUFDakIsOEJBQWlCOztJQUNqQix5Q0FBNkI7O0lBQzdCLDRCQUdFOzs7OztJQUNGLGlEQUF3Qjs7Ozs7SUFDeEIsb0RBQTJCOzs7OztBQUc3QixnQ0FXQzs7O0lBVkMsMEJBQWM7O0lBQ2QsMkJBQW9DOztJQUNwQyxtQ0FBNEM7O0lBQzVDLDZCQUFpQjs7SUFDakIsNkJBQWlCOztJQUNqQiwyQkFJRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBkZWNsYXJlIGNsYXNzIEFwZXhDaGFydHMge1xuLy8gICBjb25zdHJ1Y3RvcihlbDogYW55LCBvcHRpb25zOiBBcGV4T3B0aW9ucyk7XG4vLyAgIHN0YXRpYyBleGVjKGNoYXJ0SUQ6IHN0cmluZywgZm46ICgpID0+IHZvaWQsIG9wdGlvbnM6IGFueSk6IGFueTtcbi8vICAgc3RhdGljIGluaXRPbkxvYWQoKTogdm9pZDtcbi8vICAgcmVuZGVyKCk6IFByb21pc2U8dm9pZD47XG4vLyAgIHVwZGF0ZU9wdGlvbnMob3B0aW9uczogYW55LCByZWRyYXdQYXRoczogYm9vbGVhbiwgYW5pbWF0ZTogYm9vbGVhbiwgdXBkYXRlU3luY2VkQ2hhcnRzOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbi8vICAgdXBkYXRlU2VyaWVzKG5ld1NlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsIGFuaW1hdGU6IGJvb2xlYW4pOiB2b2lkO1xuLy8gICB0b2dnbGVTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKTogdm9pZDtcbi8vICAgZGVzdHJveSgpOiB2b2lkO1xuLy8gICBhZGRYYXhpc0Fubm90YXRpb24ob3B0aW9uczogYW55LCBwdXNoVG9NZW1vcnk/OiBib29sZWFuLCBjb250ZXh0PzogYW55KTogdm9pZDtcbi8vICAgYWRkWWF4aXNBbm5vdGF0aW9uKG9wdGlvbnM6IGFueSwgcHVzaFRvTWVtb3J5PzogYm9vbGVhbiwgY29udGV4dD86IGFueSk6IHZvaWQ7XG4vLyAgIGFkZFBvaW50QW5ub3RhdGlvbihvcHRpb25zOiBhbnksIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sIGNvbnRleHQ/OiBhbnkpOiB2b2lkO1xuLy8gICBhZGRUZXh0KG9wdGlvbnM6IGFueSwgcHVzaFRvTWVtb3J5PzogYm9vbGVhbiwgY29udGV4dD86IGFueSk6IHZvaWQ7XG4vLyAgIGRhdGFVUkkoKTogdm9pZDtcbi8vIH1cblxuZXhwb3J0IGludGVyZmFjZSBBcGV4T3B0aW9ucyB7XG4gIGFubm90YXRpb25zPzogQXBleEFubm90YXRpb25zO1xuICBjaGFydD86IEFwZXhDaGFydDtcbiAgY29sb3JzPzogc3RyaW5nW107XG4gIGRhdGFMYWJlbHM/OiBBcGV4RGF0YUxhYmVscztcbiAgc2VyaWVzPzogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXM7XG4gIHN0cm9rZT86IEFwZXhTdHJva2U7XG4gIGxhYmVscz86IHN0cmluZ1tdO1xuICBsZWdlbmQ/OiBBcGV4TGVnZW5kO1xuICBmaWxsPzogQXBleEZpbGw7XG4gIHRvb2x0aXA/OiBBcGV4VG9vbHRpcDtcbiAgcGxvdE9wdGlvbnM/OiBBcGV4UGxvdE9wdGlvbnM7XG4gIHJlc3BvbnNpdmU/OiBBcGV4UmVzcG9uc2l2ZVtdO1xuICBtYXJrZXJzPzogQXBleE1hcmtlcnM7XG4gIG5vRGF0YT86IEFwZXhOb0RhdGE7XG4gIHhheGlzPzogQXBleFhBeGlzO1xuICB5YXhpcz86IEFwZXhZQXhpcyB8IEFwZXhZQXhpc1tdO1xuICBncmlkPzogQXBleEdyaWQ7XG4gIHN0YXRlcz86IEFwZXhTdGF0ZXM7XG4gIHRpdGxlPzogQXBleFRpdGxlU3VidGl0bGU7XG4gIHN1YnRpdGxlPzogQXBleFRpdGxlU3VidGl0bGU7XG4gIHRoZW1lPzogQXBleFRoZW1lO1xufVxuXG5pbnRlcmZhY2UgQXBleERyb3BTaGFkb3cge1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgdG9wPzogbnVtYmVyO1xuICBsZWZ0PzogbnVtYmVyO1xuICBibHVyPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBjb2xvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBNYWluIENoYXJ0IG9wdGlvbnNcbiAqIFNlZSBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy9jaGFydC9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGV4Q2hhcnQge1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0eXBlOiBDaGFydFR5cGU7XG4gIGZvcmVDb2xvcj86IHN0cmluZztcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgb2Zmc2V0WD86IG51bWJlcjtcbiAgb2Zmc2V0WT86IG51bWJlcjtcbiAgZHJvcFNoYWRvdz86IEFwZXhEcm9wU2hhZG93ICYge1xuICAgIGVuYWJsZWRPblNlcmllcz86IHVuZGVmaW5lZCB8IG51bWJlcltdO1xuICAgIGNvbG9yPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIH07XG4gIGV2ZW50cz86IHtcbiAgICBhbmltYXRpb25FbmQ/KGNoYXJ0OiBhbnksIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xuICAgIGJlZm9yZU1vdW50PyhjaGFydDogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICBtb3VudGVkPyhjaGFydDogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICB1cGRhdGVkPyhjaGFydDogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICBtb3VzZU1vdmU/KGU6IGFueSwgY2hhcnQ/OiBhbnksIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xuICAgIGNsaWNrPyhlOiBhbnksIGNoYXJ0PzogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICBsZWdlbmRDbGljaz8oY2hhcnQ6IGFueSwgc2VyaWVzSW5kZXg/OiBudW1iZXIsIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xuICAgIG1hcmtlckNsaWNrPyhlOiBhbnksIGNoYXJ0PzogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICBzZWxlY3Rpb24/KGNoYXJ0OiBhbnksIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xuICAgIGRhdGFQb2ludFNlbGVjdGlvbj8oZTogYW55LCBjaGFydD86IGFueSwgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG4gICAgZGF0YVBvaW50TW91c2VFbnRlcj8oZTogYW55LCBjaGFydD86IGFueSwgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG4gICAgZGF0YVBvaW50TW91c2VMZWF2ZT8oZTogYW55LCBjaGFydD86IGFueSwgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG4gICAgYmVmb3JlWm9vbT8oY2hhcnQ6IGFueSwgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG4gICAgem9vbWVkPyhjaGFydDogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICBzY3JvbGxlZD8oY2hhcnQ6IGFueSwgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG4gIH07XG4gIGJydXNoPzoge1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIGF1dG9TY2FsZVlheGlzPzogYm9vbGVhbjtcbiAgICB0YXJnZXQ/OiBzdHJpbmc7XG4gIH07XG4gIGlkPzogc3RyaW5nO1xuICBncm91cD86IHN0cmluZztcbiAgbG9jYWxlcz86IEFwZXhMb2NhbGVbXTtcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZztcbiAgcGFyZW50SGVpZ2h0T2Zmc2V0PzogbnVtYmVyO1xuICByZWRyYXdPblBhcmVudFJlc2l6ZT86IGJvb2xlYW47XG4gIHNwYXJrbGluZT86IHtcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgfTtcbiAgc3RhY2tlZD86IGJvb2xlYW47XG4gIHN0YWNrVHlwZT86IFwibm9ybWFsXCIgfCBcIjEwMCVcIjtcbiAgdG9vbGJhcj86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgdG9vbHM/OiB7XG4gICAgICBkb3dubG9hZD86IGJvb2xlYW4gfCBzdHJpbmc7XG4gICAgICBzZWxlY3Rpb24/OiBib29sZWFuIHwgc3RyaW5nO1xuICAgICAgem9vbT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gICAgICB6b29taW4/OiBib29sZWFuIHwgc3RyaW5nO1xuICAgICAgem9vbW91dD86IGJvb2xlYW4gfCBzdHJpbmc7XG4gICAgICBwYW4/OiBib29sZWFuIHwgc3RyaW5nO1xuICAgICAgcmVzZXQ/OiBib29sZWFuIHwgc3RyaW5nO1xuICAgICAgY3VzdG9tSWNvbnM/OiB7XG4gICAgICAgIGljb24/OiBzdHJpbmc7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgICBpbmRleD86IG51bWJlcjtcbiAgICAgIH1bXTtcbiAgICB9O1xuICAgIGF1dG9TZWxlY3RlZD86IFwiem9vbVwiIHwgXCJzZWxlY3Rpb25cIiB8IFwicGFuXCI7XG4gIH07XG4gIHpvb20/OiB7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgdHlwZT86IFwieFwiIHwgXCJ5XCIgfCBcInh5XCI7XG4gICAgYXV0b1NjYWxlWWF4aXM/OiBib29sZWFuO1xuICAgIHpvb21lZEFyZWE/OiB7XG4gICAgICBmaWxsPzoge1xuICAgICAgICBjb2xvcj86IHN0cmluZztcbiAgICAgICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICAgIH07XG4gICAgICBzdHJva2U/OiB7XG4gICAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICB3aWR0aD86IG51bWJlcjtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbiAgc2VsZWN0aW9uPzoge1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgZmlsbD86IHtcbiAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB9O1xuICAgIHN0cm9rZT86IHtcbiAgICAgIHdpZHRoPzogbnVtYmVyO1xuICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgICAgZGFzaEFycmF5PzogbnVtYmVyO1xuICAgIH07XG4gICAgeGF4aXM/OiB7XG4gICAgICBtaW4/OiBudW1iZXI7XG4gICAgICBtYXg/OiBudW1iZXI7XG4gICAgfTtcbiAgICB5YXhpcz86IHtcbiAgICAgIG1pbj86IG51bWJlcjtcbiAgICAgIG1heD86IG51bWJlcjtcbiAgICB9O1xuICB9O1xuICBhbmltYXRpb25zPzoge1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIGVhc2luZz86IFwibGluZWFyXCIgfCBcImVhc2VpblwiIHwgXCJlYXNlb3V0XCIgfCBcImVhc2Vpbm91dFwiO1xuICAgIHNwZWVkPzogbnVtYmVyO1xuICAgIGFuaW1hdGVHcmFkdWFsbHk/OiB7XG4gICAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgICAgIGRlbGF5PzogbnVtYmVyO1xuICAgIH07XG4gICAgZHluYW1pY0FuaW1hdGlvbj86IHtcbiAgICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgICAgc3BlZWQ/OiBudW1iZXI7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGV4U3RhdGVzIHtcbiAgbm9ybWFsPzoge1xuICAgIGZpbHRlcj86IHtcbiAgICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgICB2YWx1ZT86IG51bWJlcjtcbiAgICB9O1xuICB9O1xuICBob3Zlcj86IHtcbiAgICBmaWx0ZXI/OiB7XG4gICAgICB0eXBlPzogc3RyaW5nO1xuICAgICAgdmFsdWU/OiBudW1iZXI7XG4gICAgfTtcbiAgfTtcbiAgYWN0aXZlPzoge1xuICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uPzogYm9vbGVhbjtcbiAgICBmaWx0ZXI/OiB7XG4gICAgICB0eXBlPzogc3RyaW5nO1xuICAgICAgdmFsdWU/OiBudW1iZXI7XG4gICAgfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGFydCBUaXRsZSBvcHRpb25zXG4gKiBTZWUgaHR0cHM6Ly9hcGV4Y2hhcnRzLmNvbS9kb2NzL29wdGlvbnMvdGl0bGUvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBleFRpdGxlU3VidGl0bGUge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBhbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcbiAgbWFyZ2luPzogbnVtYmVyO1xuICBvZmZzZXRYPzogbnVtYmVyO1xuICBvZmZzZXRZPzogbnVtYmVyO1xuICBmbG9hdGluZz86IGJvb2xlYW47XG4gIHN0eWxlPzoge1xuICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGFydCBTZXJpZXMgb3B0aW9ucy5cbiAqIFVzZSBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzIGZvciBQaWUgYW5kIERvbnV0IGNoYXJ0cy5cbiAqIFNlZSBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy9zZXJpZXMvXG4gKi9cbmV4cG9ydCB0eXBlIEFwZXhBeGlzQ2hhcnRTZXJpZXMgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGRhdGE6XG4gICAgfCAobnVtYmVyIHwgbnVsbClbXVxuICAgIHwgeyB4OiBhbnk7IHk6IGFueTsgZmlsbENvbG9yPzogc3RyaW5nOyBzdHJva2VDb2xvcj86IHN0cmluZyB9W11cbiAgICB8IFtudW1iZXIsIG51bWJlciB8IG51bGxdW11cbiAgICB8IFtudW1iZXIsIChudW1iZXIgfCBudWxsKVtdXVtdO1xufVtdO1xuXG5leHBvcnQgdHlwZSBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzID0gbnVtYmVyW107XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgdGhlIGxpbmUgZHJhd24gb24gbGluZSBhbmQgYXJlYSBjaGFydHMuXG4gKiBTZWUgaHR0cHM6Ly9hcGV4Y2hhcnRzLmNvbS9kb2NzL29wdGlvbnMvc3Ryb2tlL1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwZXhTdHJva2Uge1xuICBzaG93PzogYm9vbGVhbjtcbiAgY3VydmU/OiBcInNtb290aFwiIHwgXCJzdHJhaWdodFwiIHwgXCJzdGVwbGluZVwiO1xuICBsaW5lQ2FwPzogXCJidXR0XCIgfCBcInNxdWFyZVwiIHwgXCJyb3VuZFwiO1xuICBjb2xvcnM/OiBzdHJpbmdbXTtcbiAgd2lkdGg/OiBudW1iZXIgfCBudW1iZXJbXTtcbiAgZGFzaEFycmF5PzogbnVtYmVyIHwgbnVtYmVyW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBleEFubm90YXRpb25zIHtcbiAgcG9zaXRpb24/OiBzdHJpbmc7XG4gIHlheGlzPzogWUF4aXNBbm5vdGF0aW9uc1tdO1xuICB4YXhpcz86IFhBeGlzQW5ub3RhdGlvbnNbXTtcbiAgcG9pbnRzPzogUG9pbnRBbm5vdGF0aW9uc1tdO1xuICBzaGFwZXM/OiBTaGFwZUFubm90YXRpb25zW107XG4gIHRleHRzPzogVGV4dEFubm90YXRpb25zW107XG4gIGltYWdlcz86IEltYWdlQW5ub3RhdGlvbnNbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQW5ub3RhdGlvbkxhYmVsIHtcbiAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIGJvcmRlcldpZHRoPzogbnVtYmVyO1xuICB0ZXh0Pzogc3RyaW5nO1xuICB0ZXh0QW5jaG9yPzogc3RyaW5nO1xuICBvZmZzZXRYPzogbnVtYmVyO1xuICBvZmZzZXRZPzogbnVtYmVyO1xuICBzdHlsZT86IEFubm90YXRpb25TdHlsZTtcbiAgcG9zaXRpb24/OiBzdHJpbmc7XG4gIG9yaWVudGF0aW9uPzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBBbm5vdGF0aW9uU3R5bGUge1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbiAgZm9udFNpemU/OiBzdHJpbmc7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNzc0NsYXNzPzogc3RyaW5nO1xuICBwYWRkaW5nPzoge1xuICAgIGxlZnQ/OiBudW1iZXI7XG4gICAgcmlnaHQ/OiBudW1iZXI7XG4gICAgdG9wPzogbnVtYmVyO1xuICAgIGJvdHRvbT86IG51bWJlcjtcbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgWEF4aXNBbm5vdGF0aW9ucyB7XG4gIHg/OiBudWxsIHwgbnVtYmVyIHwgc3RyaW5nO1xuICB4Mj86IG51bGwgfCBudW1iZXIgfCBzdHJpbmc7XG4gIHN0cm9rZURhc2hBcnJheT86IG51bWJlcjtcbiAgZmlsbENvbG9yPzogc3RyaW5nO1xuICBib3JkZXJDb2xvcj86IHN0cmluZztcbiAgYm9yZGVyV2lkdGg/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIG9mZnNldFg/OiBudW1iZXI7XG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIGxhYmVsPzogQW5ub3RhdGlvbkxhYmVsO1xufVxuZXhwb3J0IGludGVyZmFjZSBZQXhpc0Fubm90YXRpb25zIHtcbiAgeT86IG51bGwgfCBudW1iZXIgfCBzdHJpbmc7XG4gIHkyPzogbnVsbCB8IG51bWJlciB8IHN0cmluZztcbiAgc3Ryb2tlRGFzaEFycmF5PzogbnVtYmVyO1xuICBmaWxsQ29sb3I/OiBzdHJpbmc7XG4gIGJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBib3JkZXJXaWR0aD86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgb2Zmc2V0WD86IG51bWJlcjtcbiAgb2Zmc2V0WT86IG51bWJlcjtcbiAgeUF4aXNJbmRleD86IG51bWJlcjtcbiAgbGFiZWw/OiBBbm5vdGF0aW9uTGFiZWw7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBvaW50QW5ub3RhdGlvbnMge1xuICB4PzogbnVtYmVyIHwgc3RyaW5nO1xuICB5PzogbnVsbCB8IG51bWJlcjtcbiAgeUF4aXNJbmRleD86IG51bWJlcjtcbiAgc2VyaWVzSW5kZXg/OiBudW1iZXI7XG4gIG1hcmtlcj86IHtcbiAgICBzaXplPzogbnVtYmVyO1xuICAgIGZpbGxDb2xvcj86IHN0cmluZztcbiAgICBzdHJva2VDb2xvcj86IHN0cmluZztcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgICBzaGFwZT86IHN0cmluZztcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgcmFkaXVzPzogbnVtYmVyO1xuICAgIGNzc0NsYXNzPzogc3RyaW5nO1xuICB9O1xuICBsYWJlbD86IEFubm90YXRpb25MYWJlbDtcbiAgaW1hZ2U/OiB7XG4gICAgcGF0aD86IHN0cmluZztcbiAgICB3aWR0aD86IG51bWJlcjtcbiAgICBoZWlnaHQ/OiBudW1iZXI7XG4gICAgb2Zmc2V0WD86IG51bWJlcjtcbiAgICBvZmZzZXRZPzogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoYXBlQW5ub3RhdGlvbnMge1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICB0eXBlPzogc3RyaW5nO1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBhcHBlbmRUbz86IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBib3JkZXJXaWR0aD86IG51bWJlcjtcbiAgYm9yZGVyUmFkaXVzPzogbnVtYmVyO1xuICBib3JkZXJDb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZUFubm90YXRpb25zIHtcbiAgcGF0aD86IHN0cmluZztcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgYXBwZW5kVG8/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dEFubm90YXRpb25zIHtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgdGV4dD86IHN0cmluZztcbiAgdGV4dEFuY2hvcj86IHN0cmluZztcbiAgZm9yZUNvbG9yPzogc3RyaW5nO1xuICBmb250U2l6ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgZm9udEZhbWlseT86IHVuZGVmaW5lZCB8IHN0cmluZztcbiAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYXBwZW5kVG8/OiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIGJvcmRlclJhZGl1cz86IG51bWJlcjtcbiAgYm9yZGVyV2lkdGg/OiBudW1iZXI7XG4gIHBhZGRpbmdMZWZ0PzogbnVtYmVyO1xuICBwYWRkaW5nUmlnaHQ/OiBudW1iZXI7XG4gIHBhZGRpbmdUb3A/OiBudW1iZXI7XG4gIHBhZGRpbmdCb3R0b20/OiBudW1iZXI7XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgbG9jYWxpemF0aW9uLlxuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL2NoYXJ0L2xvY2FsZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGV4TG9jYWxlIHtcbiAgbmFtZT86IHN0cmluZztcbiAgb3B0aW9ucz86IHtcbiAgICBtb250aHM/OiBzdHJpbmdbXTtcbiAgICBzaG9ydE1vbnRocz86IHN0cmluZ1tdO1xuICAgIGRheXM/OiBzdHJpbmdbXTtcbiAgICBzaG9ydERheXM/OiBzdHJpbmdbXTtcbiAgICB0b29sYmFyPzoge1xuICAgICAgZG93bmxvYWQ/OiBzdHJpbmc7XG4gICAgICBzZWxlY3Rpb24/OiBzdHJpbmc7XG4gICAgICBzZWxlY3Rpb25ab29tPzogc3RyaW5nO1xuICAgICAgem9vbUluPzogc3RyaW5nO1xuICAgICAgem9vbU91dD86IHN0cmluZztcbiAgICAgIHBhbj86IHN0cmluZztcbiAgICAgIHJlc2V0Pzogc3RyaW5nO1xuICAgIH07XG4gIH07XG59XG5cbi8qKlxuICogUGxvdE9wdGlvbnMgZm9yIHNwZWNpZnlpbmcgY2hhcnQtdHlwZS1zcGVjaWZpYyBjb25maWd1cmF0aW9uLlxuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL3Bsb3RvcHRpb25zL2Jhci9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGV4UGxvdE9wdGlvbnMge1xuICBiYXI/OiB7XG4gICAgaG9yaXpvbnRhbD86IGJvb2xlYW47XG4gICAgc3RhcnRpbmdTaGFwZT86IFwiZmxhdFwiIHwgXCJyb3VuZGVkXCI7XG4gICAgZW5kaW5nU2hhcGU/OiBcImZsYXRcIiB8IFwicm91bmRlZFwiO1xuICAgIGNvbHVtbldpZHRoPzogc3RyaW5nO1xuICAgIGJhckhlaWdodD86IHN0cmluZztcbiAgICBkaXN0cmlidXRlZD86IGJvb2xlYW47XG4gICAgcmFuZ2VCYXJPdmVybGFwPzogYm9vbGVhbjtcbiAgICBjb2xvcnM/OiB7XG4gICAgICByYW5nZXM/OiB7XG4gICAgICAgIGZyb20/OiBudW1iZXI7XG4gICAgICAgIHRvPzogbnVtYmVyO1xuICAgICAgICBjb2xvcj86IHN0cmluZztcbiAgICAgIH1bXTtcbiAgICAgIGJhY2tncm91bmRCYXJDb2xvcnM/OiBzdHJpbmdbXTtcbiAgICAgIGJhY2tncm91bmRCYXJPcGFjaXR5PzogbnVtYmVyO1xuICAgICAgYmFja2dyb3VuZEJhclJhZGl1cz86IG51bWJlcjtcbiAgICB9O1xuICAgIGRhdGFMYWJlbHM/OiB7XG4gICAgICBtYXhJdGVtcz86IG51bWJlcjtcbiAgICAgIGhpZGVPdmVyZmxvd2luZ0xhYmVscz86IGJvb2xlYW47XG4gICAgICBwb3NpdGlvbj86IHN0cmluZztcbiAgICAgIG9yaWVudGF0aW9uPzogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG4gICAgfTtcbiAgfTtcbiAgYnViYmxlPzoge1xuICAgIG1pbkJ1YmJsZVJhZGl1cz86IG51bWJlcjtcbiAgICBtYXhCdWJibGVSYWRpdXM/OiBudW1iZXI7XG4gIH07XG4gIGNhbmRsZXN0aWNrPzoge1xuICAgIGNvbG9ycz86IHtcbiAgICAgIHVwd2FyZD86IHN0cmluZztcbiAgICAgIGRvd253YXJkPzogc3RyaW5nO1xuICAgIH07XG4gICAgd2ljaz86IHtcbiAgICAgIHVzZUZpbGxDb2xvcj86IGJvb2xlYW47XG4gICAgfTtcbiAgfTtcbiAgaGVhdG1hcD86IHtcbiAgICByYWRpdXM/OiBudW1iZXI7XG4gICAgZW5hYmxlU2hhZGVzPzogYm9vbGVhbjtcbiAgICBzaGFkZUludGVuc2l0eT86IG51bWJlcjtcbiAgICByZXZlcnNlTmVnYXRpdmVTaGFkZT86IGJvb2xlYW47XG4gICAgZGlzdHJpYnV0ZWQ/OiBib29sZWFuO1xuICAgIHVzZUZpbGxDb2xvckFzU3Ryb2tlPzogYm9vbGVhbjtcbiAgICBjb2xvclNjYWxlPzoge1xuICAgICAgcmFuZ2VzPzoge1xuICAgICAgICBmcm9tPzogbnVtYmVyO1xuICAgICAgICB0bz86IG51bWJlcjtcbiAgICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICAgIGZvcmVDb2xvcj86IHN0cmluZztcbiAgICAgICAgbmFtZT86IHN0cmluZztcbiAgICAgIH1bXTtcbiAgICAgIGludmVyc2U/OiBib29sZWFuO1xuICAgICAgbWluPzogbnVtYmVyO1xuICAgICAgbWF4PzogbnVtYmVyO1xuICAgIH07XG4gIH07XG4gIHBpZT86IHtcbiAgICBjdXN0b21TY2FsZT86IG51bWJlcjtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgZXhwYW5kT25DbGljaz86IGJvb2xlYW47XG4gICAgZGF0YUxhYmVscz86IHtcbiAgICAgIG9mZnNldD86IG51bWJlcjtcbiAgICAgIG1pbkFuZ2xlVG9TaG93TGFiZWw/OiBudW1iZXI7XG4gICAgfTtcbiAgICBkb251dD86IHtcbiAgICAgIHNpemU/OiBzdHJpbmc7XG4gICAgICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICAgICAgbGFiZWxzPzoge1xuICAgICAgICBzaG93PzogYm9vbGVhbjtcbiAgICAgICAgbmFtZT86IHtcbiAgICAgICAgICBzaG93PzogYm9vbGVhbjtcbiAgICAgICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICAgICAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgICAgICAgIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICAgICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICAgICAgICBmb3JtYXR0ZXI/KHZhbDogc3RyaW5nKTogc3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgICB2YWx1ZT86IHtcbiAgICAgICAgICBzaG93PzogYm9vbGVhbjtcbiAgICAgICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICAgICAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgICAgICAgIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICAgICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICAgICAgICBmb3JtYXR0ZXI/KHZhbDogc3RyaW5nKTogc3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgICB0b3RhbD86IHtcbiAgICAgICAgICBzaG93PzogYm9vbGVhbjtcbiAgICAgICAgICBzaG93QWx3YXlzPzogYm9vbGVhbjtcbiAgICAgICAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgICAgICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgICAgICAgIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICAgICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICAgICAgZm9ybWF0dGVyPyh3OiBhbnkpOiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH07XG4gIHBvbGFyQXJlYT86IHtcbiAgICByaW5ncz86IHtcbiAgICAgIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICAgICAgc3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgcmFkYXI/OiB7XG4gICAgc2l6ZT86IG51bWJlcjtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgcG9seWdvbnM/OiB7XG4gICAgICBzdHJva2VDb2xvcnM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIHN0cm9rZVdpZHRoPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBjb25uZWN0b3JDb2xvcnM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIGZpbGw/OiB7XG4gICAgICAgIGNvbG9ycz86IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xuICByYWRpYWxCYXI/OiB7XG4gICAgaW52ZXJzZU9yZGVyPzogYm9vbGVhbjtcbiAgICBzdGFydEFuZ2xlPzogbnVtYmVyO1xuICAgIGVuZEFuZ2xlPzogbnVtYmVyO1xuICAgIG9mZnNldFg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICBob2xsb3c/OiB7XG4gICAgICBtYXJnaW4/OiBudW1iZXI7XG4gICAgICBzaXplPzogc3RyaW5nO1xuICAgICAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgICAgIGltYWdlPzogc3RyaW5nO1xuICAgICAgaW1hZ2VXaWR0aD86IG51bWJlcjtcbiAgICAgIGltYWdlSGVpZ2h0PzogbnVtYmVyO1xuICAgICAgaW1hZ2VPZmZzZXRYPzogbnVtYmVyO1xuICAgICAgaW1hZ2VPZmZzZXRZPzogbnVtYmVyO1xuICAgICAgaW1hZ2VDbGlwcGVkPzogYm9vbGVhbjtcbiAgICAgIHBvc2l0aW9uPzogXCJmcm9udFwiIHwgXCJiYWNrXCI7XG4gICAgICBkcm9wU2hhZG93PzogQXBleERyb3BTaGFkb3c7XG4gICAgfTtcbiAgICB0cmFjaz86IHtcbiAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgc3RhcnRBbmdsZT86IG51bWJlcjtcbiAgICAgIGVuZEFuZ2xlPzogbnVtYmVyO1xuICAgICAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgICAgIHN0cm9rZVdpZHRoPzogc3RyaW5nO1xuICAgICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICAgIG1hcmdpbj86IG51bWJlcjtcbiAgICAgIGRyb3BTaGFkb3c/OiBBcGV4RHJvcFNoYWRvdztcbiAgICB9O1xuICAgIGRhdGFMYWJlbHM/OiB7XG4gICAgICBzaG93PzogYm9vbGVhbjtcbiAgICAgIG5hbWU/OiB7XG4gICAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICAgICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICAgICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgICB9O1xuICAgICAgdmFsdWU/OiB7XG4gICAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICAgICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICAgICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgICAgIGZvcm1hdHRlcj8odmFsOiBudW1iZXIpOiBzdHJpbmc7XG4gICAgICB9O1xuICAgICAgdG90YWw/OiB7XG4gICAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgICBsYWJlbD86IHN0cmluZztcbiAgICAgICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICAgICAgZm9udFNpemU/OiBzdHJpbmc7XG4gICAgICAgIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgICBmb3JtYXR0ZXI/KG9wdHM6IGFueSk6IHN0cmluZztcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGV4RmlsbCB7XG4gIGNvbG9ycz86IHN0cmluZ1tdO1xuICBvcGFjaXR5PzogbnVtYmVyIHwgbnVtYmVyW107XG4gIHR5cGU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgZ3JhZGllbnQ/OiB7XG4gICAgc2hhZGU/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBzaGFkZUludGVuc2l0eT86IG51bWJlcjtcbiAgICBncmFkaWVudFRvQ29sb3JzPzogc3RyaW5nW107XG4gICAgaW52ZXJzZUNvbG9ycz86IGJvb2xlYW47XG4gICAgb3BhY2l0eUZyb20/OiBudW1iZXI7XG4gICAgb3BhY2l0eVRvPzogbnVtYmVyO1xuICAgIHN0b3BzPzogbnVtYmVyW107XG4gIH07XG4gIGltYWdlPzoge1xuICAgIHNyYz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgfTtcbiAgcGF0dGVybj86IHtcbiAgICBzdHlsZT86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGFydCBMZWdlbmQgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL2xlZ2VuZC9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGV4TGVnZW5kIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHNob3dGb3JTaW5nbGVTZXJpZXM/OiBib29sZWFuO1xuICBzaG93Rm9yTnVsbFNlcmllcz86IGJvb2xlYW47XG4gIHNob3dGb3JaZXJvU2VyaWVzPzogYm9vbGVhbjtcbiAgZmxvYXRpbmc/OiBib29sZWFuO1xuICBpbnZlcnNlT3JkZXI/OiBib29sZWFuO1xuICBwb3NpdGlvbj86IFwidG9wXCIgfCBcInJpZ2h0XCIgfCBcImJvdHRvbVwiIHwgXCJsZWZ0XCI7XG4gIGhvcml6b250YWxBbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcbiAgZm9udFNpemU/OiBzdHJpbmc7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIG9mZnNldFg/OiBudW1iZXI7XG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIHRleHRBbmNob3I/OiBzdHJpbmc7XG4gIGxhYmVscz86IHtcbiAgICBjb2xvcnM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB1c2VTZXJpZXNDb2xvcnM/OiBib29sZWFuO1xuICB9O1xuICBtYXJrZXJzPzoge1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBzdHJva2VDb2xvcj86IHN0cmluZztcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgICBmaWxsQ29sb3JzPzogc3RyaW5nW107XG4gICAgb2Zmc2V0WD86IG51bWJlcjtcbiAgICBvZmZzZXRZPzogbnVtYmVyO1xuICAgIHJhZGl1cz86IG51bWJlcjtcbiAgICBjdXN0b21IVE1MPygpOiBhbnk7XG4gICAgb25DbGljaz8oKTogdm9pZDtcbiAgfTtcbiAgaXRlbU1hcmdpbj86IHtcbiAgICBob3Jpem9udGFsPzogbnVtYmVyO1xuICAgIHZlcnRpY2FsPzogbnVtYmVyO1xuICB9O1xuICBjb250YWluZXJNYXJnaW4/OiB7XG4gICAgbGVmdD86IG51bWJlcjtcbiAgICB0b3A/OiBudW1iZXI7XG4gIH07XG4gIG9uSXRlbUNsaWNrPzoge1xuICAgIHRvZ2dsZURhdGFTZXJpZXM/OiBib29sZWFuO1xuICB9O1xuICBvbkl0ZW1Ib3Zlcj86IHtcbiAgICBoaWdobGlnaHREYXRhU2VyaWVzPzogYm9vbGVhbjtcbiAgfTtcbiAgZm9ybWF0dGVyPyhsZWdlbmROYW1lOiBzdHJpbmcsIG9wdHM/OiBhbnkpOiBzdHJpbmc7XG4gIHRvb2x0aXBIb3ZlckZvcm1hdHRlcj8obGVnZW5kTmFtZTogc3RyaW5nLCBvcHRzPzogYW55KTogc3RyaW5nO1xufVxuXG4vKipcbiAqIENoYXJ0IERhdGFsYWJlbHMgb3B0aW9uc1xuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL2RhdGFsYWJlbHMvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBleERhdGFMYWJlbHMge1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgZW5hYmxlZE9uU2VyaWVzPzogdW5kZWZpbmVkIHwgbnVtYmVyW107XG4gIHRleHRBbmNob3I/OiBcInN0YXJ0XCIgfCBcIm1pZGRsZVwiIHwgXCJlbmRcIjtcbiAgZGlzdHJpYnV0ZWQ/OiBib29sZWFuO1xuICBvZmZzZXRYPzogbnVtYmVyO1xuICBvZmZzZXRZPzogbnVtYmVyO1xuICBzdHlsZT86IHtcbiAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgY29sb3JzPzogc3RyaW5nW107XG4gIH07XG4gIGJhY2tncm91bmQ/OiB7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgZm9yZUNvbG9yPzogc3RyaW5nO1xuICAgIGJvcmRlclJhZGl1cz86IG51bWJlcjtcbiAgICBwYWRkaW5nPzogbnVtYmVyO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgYm9yZGVyV2lkdGg/OiBudW1iZXI7XG4gICAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gICAgZHJvcFNoYWRvdz86IEFwZXhEcm9wU2hhZG93O1xuICB9O1xuICBkcm9wU2hhZG93PzogQXBleERyb3BTaGFkb3c7XG4gIGZvcm1hdHRlcj8odmFsOiBudW1iZXIsIG9wdHM/OiBhbnkpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBleFJlc3BvbnNpdmUge1xuICBicmVha3BvaW50PzogbnVtYmVyO1xuICBvcHRpb25zPzogYW55O1xufVxuXG50eXBlIEFwZXhUb29sdGlwWSA9IHtcbiAgdGl0bGU/OiB7XG4gICAgZm9ybWF0dGVyPyhzZXJpZXNOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG4gIH07XG4gIGZvcm1hdHRlcj8odmFsOiBudW1iZXIsIG9wdHM/OiBhbnkpOiBzdHJpbmc7XG59O1xuLyoqXG4gKiBDaGFydCBUb29sdGlwIG9wdGlvbnNcbiAqIFNlZSBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy90b29sdGlwL1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwZXhUb29sdGlwIHtcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIGVuYWJsZWRPblNlcmllcz86IHVuZGVmaW5lZCB8IG51bWJlcltdO1xuICBzaGFyZWQ/OiBib29sZWFuO1xuICBmb2xsb3dDdXJzb3I/OiBib29sZWFuO1xuICBpbnRlcnNlY3Q/OiBib29sZWFuO1xuICBpbnZlcnNlT3JkZXI/OiBib29sZWFuO1xuICBjdXN0b20/OiAoKG9wdGlvbnM6IGFueSkgPT4gYW55KSB8ICgob3B0aW9uczogYW55KSA9PiBhbnkpW107XG4gIGZpbGxTZXJpZXNDb2xvcj86IGJvb2xlYW47XG4gIHRoZW1lPzogc3RyaW5nO1xuICBzdHlsZT86IHtcbiAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICB9O1xuICBvbkRhdGFzZXRIb3Zlcj86IHtcbiAgICBoaWdobGlnaHREYXRhU2VyaWVzPzogYm9vbGVhbjtcbiAgfTtcbiAgeD86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICBmb3JtYXQ/OiBzdHJpbmc7XG4gICAgZm9ybWF0dGVyPyh2YWw6IG51bWJlciwgb3B0cz86IGFueSk6IHN0cmluZztcbiAgfTtcbiAgeT86IEFwZXhUb29sdGlwWSB8IEFwZXhUb29sdGlwWVtdO1xuICB6Pzoge1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGZvcm1hdHRlcj8odmFsOiBudW1iZXIpOiBzdHJpbmc7XG4gIH07XG4gIG1hcmtlcj86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICBmaWxsQ29sb3JzPzogc3RyaW5nW107XG4gIH07XG4gIGl0ZW1zPzoge1xuICAgIGRpc3BsYXk/OiBzdHJpbmc7XG4gIH07XG4gIGZpeGVkPzoge1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIHBvc2l0aW9uPzogc3RyaW5nOyAvLyB0b3BSaWdodDsgdG9wTGVmdDsgYm90dG9tUmlnaHQ7IGJvdHRvbUxlZnRcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gIH07XG59XG5cbi8qKlxuICogWCBBeGlzIG9wdGlvbnNcbiAqIFNlZSBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy94YXhpcy9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGV4WEF4aXMge1xuICB0eXBlPzogXCJjYXRlZ29yeVwiIHwgXCJkYXRldGltZVwiIHwgXCJudW1lcmljXCI7XG4gIGNhdGVnb3JpZXM/OiBhbnk7XG4gIG9mZnNldFg/OiBudW1iZXI7XG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIHNvcnRlZD86IGJvb2xlYW47XG4gIGxhYmVscz86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICByb3RhdGU/OiBudW1iZXI7XG4gICAgcm90YXRlQWx3YXlzPzogYm9vbGVhbjtcbiAgICBoaWRlT3ZlcmxhcHBpbmdMYWJlbHM/OiBib29sZWFuO1xuICAgIHNob3dEdXBsaWNhdGVzPzogYm9vbGVhbjtcbiAgICB0cmltPzogYm9vbGVhbjtcbiAgICBtaW5IZWlnaHQ/OiBudW1iZXI7XG4gICAgbWF4SGVpZ2h0PzogbnVtYmVyO1xuICAgIHN0eWxlPzoge1xuICAgICAgY29sb3JzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICAgIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgICAgY3NzQ2xhc3M/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgZm9ybWF0Pzogc3RyaW5nO1xuICAgIGRhdGV0aW1lVVRDPzogYm9vbGVhbjtcbiAgICBkYXRldGltZUZvcm1hdHRlcj86IHtcbiAgICAgIHllYXI/OiBzdHJpbmc7XG4gICAgICBtb250aD86IHN0cmluZztcbiAgICAgIGRheT86IHN0cmluZztcbiAgICAgIGhvdXI/OiBzdHJpbmc7XG4gICAgICBtaW51dGU/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBmb3JtYXR0ZXI/KHZhbHVlOiBzdHJpbmcsIHRpbWVzdGFtcD86IG51bWJlcik6IHN0cmluZyB8IHN0cmluZ1tdO1xuICB9O1xuICBheGlzQm9yZGVyPzoge1xuICAgIHNob3c/OiBib29sZWFuO1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIG9mZnNldFg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgfTtcbiAgYXhpc1RpY2tzPzoge1xuICAgIHNob3c/OiBib29sZWFuO1xuICAgIGJvcmRlclR5cGU/OiBzdHJpbmc7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgaGVpZ2h0PzogbnVtYmVyO1xuICAgIG9mZnNldFg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgfTtcbiAgdGlja1BsYWNlbWVudD86IHN0cmluZztcbiAgdGlja0Ftb3VudD86IG51bWJlciB8IFwiZGF0YVBvaW50c1wiO1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbiAgcmFuZ2U/OiBudW1iZXI7XG4gIGZsb2F0aW5nPzogYm9vbGVhbjtcbiAgcG9zaXRpb24/OiBzdHJpbmc7XG4gIHRpdGxlPzoge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgb2Zmc2V0WD86IG51bWJlcjtcbiAgICBvZmZzZXRZPzogbnVtYmVyO1xuICAgIHN0eWxlPzoge1xuICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgICAgY3NzQ2xhc3M/OiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgY3Jvc3NoYWlycz86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgICBwb3NpdGlvbj86IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHN0cm9rZT86IHtcbiAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgd2lkdGg/OiBudW1iZXI7XG4gICAgICBkYXNoQXJyYXk/OiBudW1iZXI7XG4gICAgfTtcbiAgICBmaWxsPzoge1xuICAgICAgdHlwZT86IHN0cmluZztcbiAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgZ3JhZGllbnQ/OiB7XG4gICAgICAgIGNvbG9yRnJvbT86IHN0cmluZztcbiAgICAgICAgY29sb3JUbz86IHN0cmluZztcbiAgICAgICAgc3RvcHM/OiBudW1iZXJbXTtcbiAgICAgICAgb3BhY2l0eUZyb20/OiBudW1iZXI7XG4gICAgICAgIG9wYWNpdHlUbz86IG51bWJlcjtcbiAgICAgIH07XG4gICAgfTtcbiAgICBkcm9wU2hhZG93PzogQXBleERyb3BTaGFkb3c7XG4gIH07XG4gIHRvb2x0aXA/OiB7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICBzdHlsZT86IHtcbiAgICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICB9O1xuICAgIGZvcm1hdHRlcj8odmFsdWU6IHN0cmluZywgb3B0cz86IG9iamVjdCk6IHN0cmluZztcbiAgfTtcbn1cblxuLyoqXG4gKiBZIEF4aXMgb3B0aW9uc1xuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL3lheGlzL1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwZXhZQXhpcyB7XG4gIHNob3c/OiBib29sZWFuO1xuICBzaG93QWx3YXlzPzogYm9vbGVhbjtcbiAgc2hvd0Zvck51bGxTZXJpZXM/OiBib29sZWFuO1xuICBzZXJpZXNOYW1lPzogc3RyaW5nO1xuICBvcHBvc2l0ZT86IGJvb2xlYW47XG4gIHJldmVyc2VkPzogYm9vbGVhbjtcbiAgbG9nYXJpdGhtaWM/OiBib29sZWFuO1xuICB0aWNrQW1vdW50PzogbnVtYmVyO1xuICBmb3JjZU5pY2VTY2FsZT86IGJvb2xlYW47XG4gIG1pbj86IG51bWJlciB8ICgobWluOiBudW1iZXIpID0+IG51bWJlcik7XG4gIG1heD86IG51bWJlciB8ICgobWF4OiBudW1iZXIpID0+IG51bWJlcik7XG4gIGZsb2F0aW5nPzogYm9vbGVhbjtcbiAgZGVjaW1hbHNJbkZsb2F0PzogbnVtYmVyO1xuICBsYWJlbHM/OiB7XG4gICAgc2hvdz86IGJvb2xlYW47XG4gICAgbWluV2lkdGg/OiBudW1iZXI7XG4gICAgbWF4V2lkdGg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WD86IG51bWJlcjtcbiAgICBvZmZzZXRZPzogbnVtYmVyO1xuICAgIHJvdGF0ZT86IG51bWJlcjtcbiAgICBhbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcbiAgICBwYWRkaW5nPzogbnVtYmVyO1xuICAgIHN0eWxlPzoge1xuICAgICAgY29sb3JzPzogc3RyaW5nO1xuICAgICAgZm9udFNpemU/OiBzdHJpbmc7XG4gICAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgIGNzc0NsYXNzPzogc3RyaW5nO1xuICAgIH07XG4gICAgZm9ybWF0dGVyPyh2YWw6IG51bWJlciwgb3B0cz86IGFueSk6IHN0cmluZztcbiAgfTtcbiAgYXhpc0JvcmRlcj86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgICB3aWR0aD86IG51bWJlcjtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gIH07XG4gIGF4aXNUaWNrcz86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgICB3aWR0aD86IG51bWJlcjtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gIH07XG4gIHRpdGxlPzoge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgcm90YXRlPzogbnVtYmVyO1xuICAgIG9mZnNldFg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICBzdHlsZT86IHtcbiAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgZm9udFNpemU/OiBzdHJpbmc7XG4gICAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgIGNzc0NsYXNzPzogc3RyaW5nO1xuICAgIH07XG4gIH07XG4gIGNyb3NzaGFpcnM/OiB7XG4gICAgc2hvdz86IGJvb2xlYW47XG4gICAgcG9zaXRpb24/OiBzdHJpbmc7XG4gICAgc3Ryb2tlPzoge1xuICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICB3aWR0aD86IG51bWJlcjtcbiAgICAgIGRhc2hBcnJheT86IG51bWJlcjtcbiAgICB9O1xuICB9O1xuICB0b29sdGlwPzoge1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIG9mZnNldFg/OiBudW1iZXI7XG4gIH07XG59XG5cbi8qKlxuICogUGxvdCBYIGFuZCBZIGdyaWQgb3B0aW9uc1xuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL2dyaWQvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBleEdyaWQge1xuICBzaG93PzogYm9vbGVhbjtcbiAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIHN0cm9rZURhc2hBcnJheT86IG51bWJlcjtcbiAgcG9zaXRpb24/OiBcImZyb250XCIgfCBcImJhY2tcIjtcbiAgeGF4aXM/OiB7XG4gICAgbGluZXM/OiB7XG4gICAgICBzaG93PzogYm9vbGVhbjtcbiAgICAgIG9mZnNldFg/OiBudW1iZXI7XG4gICAgICBvZmZzZXRZPzogbnVtYmVyO1xuICAgIH07XG4gIH07XG4gIHlheGlzPzoge1xuICAgIGxpbmVzPzoge1xuICAgICAgc2hvdz86IGJvb2xlYW47XG4gICAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICB9O1xuICB9O1xuICByb3c/OiB7XG4gICAgY29sb3JzPzogc3RyaW5nW107XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgY29sdW1uPzoge1xuICAgIGNvbG9ycz86IHN0cmluZ1tdO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHBhZGRpbmc/OiB7XG4gICAgdG9wPzogbnVtYmVyO1xuICAgIHJpZ2h0PzogbnVtYmVyO1xuICAgIGJvdHRvbT86IG51bWJlcjtcbiAgICBsZWZ0PzogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwZXhUaGVtZSB7XG4gIG1vZGU/OiBcImxpZ2h0XCIgfCBcImRhcmtcIjtcbiAgcGFsZXR0ZT86IHN0cmluZztcbiAgbW9ub2Nocm9tZT86IHtcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgICBzaGFkZVRvPzogXCJsaWdodFwiIHwgXCJkYXJrXCI7XG4gICAgc2hhZGVJbnRlbnNpdHk/OiBudW1iZXI7XG4gIH07XG59XG5cbmludGVyZmFjZSBBcGV4RGlzY3JldGVQb2ludCB7XG4gIHNlcmllc0luZGV4PzogbnVtYmVyO1xuICBkYXRhUG9pbnRJbmRleD86IG51bWJlcjtcbiAgZmlsbENvbG9yPzogc3RyaW5nO1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcbiAgc2l6ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGV4TWFya2VycyB7XG4gIHNpemU/OiBudW1iZXIgfCBudW1iZXJbXTtcbiAgY29sb3JzPzogc3RyaW5nW107XG4gIHN0cm9rZUNvbG9ycz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBzdHJva2VXaWR0aD86IG51bWJlciB8IG51bWJlcltdO1xuICBzdHJva2VPcGFjaXR5PzogbnVtYmVyIHwgbnVtYmVyW107XG4gIHN0cm9rZURhc2hBcnJheT86IG51bWJlciB8IG51bWJlcltdO1xuICBmaWxsT3BhY2l0eT86IG51bWJlciB8IG51bWJlcltdO1xuICBkaXNjcmV0ZT86IEFwZXhEaXNjcmV0ZVBvaW50W107XG4gIHNoYXBlPzogXCJjaXJjbGVcIiB8IFwic3F1YXJlXCIgfCBzdHJpbmdbXTtcbiAgcmFkaXVzPzogbnVtYmVyO1xuICBvZmZzZXRYPzogbnVtYmVyO1xuICBvZmZzZXRZPzogbnVtYmVyO1xuICBzaG93TnVsbERhdGFQb2ludHM/OiBib29sZWFuO1xuICBob3Zlcj86IHtcbiAgICBzaXplPzogbnVtYmVyO1xuICAgIHNpemVPZmZzZXQ/OiBudW1iZXI7XG4gIH07XG4gIG9uQ2xpY2s/KGU/OiBhbnkpOiB2b2lkO1xuICBvbkRibENsaWNrPyhlPzogYW55KTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGV4Tm9EYXRhIHtcbiAgdGV4dD86IHN0cmluZztcbiAgYWxpZ24/OiBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCI7XG4gIHZlcnRpY2FsQWxpZ24/OiBcInRvcFwiIHwgXCJtaWRkbGVcIiB8IFwiYm90dG9tXCI7XG4gIG9mZnNldFg/OiBudW1iZXI7XG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIHN0eWxlPzoge1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIENoYXJ0VHlwZSA9XG4gIHwgXCJsaW5lXCJcbiAgfCBcImFyZWFcIlxuICB8IFwiYmFyXCJcbiAgfCBcImhpc3RvZ3JhbVwiXG4gIHwgXCJwaWVcIlxuICB8IFwiZG9udXRcIlxuICB8IFwicmFkaWFsQmFyXCJcbiAgfCBcInNjYXR0ZXJcIlxuICB8IFwiYnViYmxlXCJcbiAgfCBcImhlYXRtYXBcIlxuICB8IFwiY2FuZGxlc3RpY2tcIlxuICB8IFwicmFkYXJcIlxuICB8IFwicG9sYXJBcmVhXCJcbiAgfCBcInJhbmdlQmFyXCI7XG4iXX0=