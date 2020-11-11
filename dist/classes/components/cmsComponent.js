"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var crownpeak_dxm_sdk_core_1 = require("crownpeak-dxm-sdk-core");
var cmsCore_1 = require("../common/cmsCore");
var CmsComponent = /** @class */ (function (_super) {
    __extends(CmsComponent, _super);
    function CmsComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.cmsFolder = "";
        _this.cmsZones = [];
        crownpeak_dxm_sdk_core_1.CmsDataCache.cmsComponentName = _this.constructor.name;
        var dataSource = ((props["data-source"] || crownpeak_dxm_sdk_core_1.CmsDataCache.get(crownpeak_dxm_sdk_core_1.CmsDataCache.cmsAssetId))[crownpeak_dxm_sdk_core_1.CmsDataCache.cmsComponentName]);
        crownpeak_dxm_sdk_core_1.CmsDataCache.dataSource = dataSource;
        if (Array.isArray(dataSource)) {
            var index = dataSource.index;
            if (typeof index === "undefined" || isNaN(index))
                index = 0;
            else
                index++;
            dataSource.index = index;
        }
        return _this;
    }
    return CmsComponent;
}(cmsCore_1.default));
exports.default = CmsComponent;
//# sourceMappingURL=cmsComponent.js.map