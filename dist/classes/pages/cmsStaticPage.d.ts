import CmsPage from "./cmsPage";
export default class CmsStaticPage extends CmsPage {
    constructor(props: any);
    private static _load;
    static load(assetId: number, useState: Function, useEffect: Function): boolean;
    static loadSync(assetId: number): void;
}
