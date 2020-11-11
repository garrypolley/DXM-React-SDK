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
var cmsCore_1 = require("../common/cmsCore");
var crownpeak_dxm_sdk_core_1 = require("crownpeak-dxm-sdk-core");
var CmsPage = /** @class */ (function (_super) {
    __extends(CmsPage, _super);
    function CmsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cmsUseTmf = false;
        _this.cmsSuppressFolder = false;
        _this.cmsSuppressModel = false;
        _this.state = { isLoaded: false };
        return _this;
    }
    CmsPage.prototype.render = function () {
        if (this.state.isLoaded)
            return null;
        var that = this;
        this.cmsDataProvider.getSingleAsset(this.cmsAssetId).then(function () { return that.setState({ isLoaded: true }); });
        crownpeak_dxm_sdk_core_1.CmsDataCache.cmsAssetId = this.cmsAssetId;
        return null;
    };
    return CmsPage;
}(cmsCore_1.default));
exports.default = CmsPage;
//# sourceMappingURL=cmsPage.js.map