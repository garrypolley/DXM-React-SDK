import { ICmsDataProvider } from 'crownpeak-dxm-sdk-core';
import * as React from 'react';
export default class CmsCore extends React.Component {
    cmsDataProvider: ICmsDataProvider;
    cmsAssetId: number;
    static init(cmsStaticDataLocation: string, cmsDynamicDataLocation: string): void;
}
