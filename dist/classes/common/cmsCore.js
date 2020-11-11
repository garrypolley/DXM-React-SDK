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
var React = require("react");
var CmsCore = /** @class */ (function (_super) {
    __extends(CmsCore, _super);
    function CmsCore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cmsDataProvider = new crownpeak_dxm_sdk_core_1.CmsNullDataProvider();
        _this.cmsAssetId = -1;
        return _this;
    }
    CmsCore.init = function (cmsStaticDataLocation, cmsDynamicDataLocation) {
        crownpeak_dxm_sdk_core_1.CmsDataCache.init(cmsStaticDataLocation, cmsDynamicDataLocation);
    };
    return CmsCore;
}(React.Component));
exports.default = CmsCore;
//# sourceMappingURL=cmsCore.js.map