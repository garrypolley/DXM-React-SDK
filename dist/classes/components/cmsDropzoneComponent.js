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
var React = require("react");
var crownpeak_dxm_sdk_core_1 = require("crownpeak-dxm-sdk-core");
var cmsComponent_1 = require("./cmsComponent");
var CmsDropZoneComponent = /** @class */ (function (_super) {
    __extends(CmsDropZoneComponent, _super);
    function CmsDropZoneComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.components = {};
        _this.data = (crownpeak_dxm_sdk_core_1.CmsDataCache.get(crownpeak_dxm_sdk_core_1.CmsDataCache.cmsAssetId).DropZones || {})[props.name] || [];
        return _this;
    }
    CmsDropZoneComponent.prototype.getComponents = function () {
        var _this = this;
        var components = [];
        var i = 0;
        this.data.map(function (component) {
            var key = Object.keys(component)[0];
            components.push(React.createElement(_this.components[key], {
                key: _this.props.name + i++,
                data: component[key]
            }));
        });
        return components;
    };
    CmsDropZoneComponent.prototype.render = function (attributes) {
        return React.createElement('div', attributes, this.getComponents());
    };
    return CmsDropZoneComponent;
}(cmsComponent_1.default));
exports.default = CmsDropZoneComponent;
//# sourceMappingURL=cmsDropzoneComponent.js.map