/// <reference types="react" />
import CmsCore from "../common/cmsCore";
import { ReactNode } from "React";
export default class CmsPage extends CmsCore {
    cmsWrapper?: string;
    cmsUseTmf: boolean;
    cmsSuppressFolder: boolean;
    cmsSuppressModel: boolean;
    state: {
        isLoaded: boolean;
    };
    render(): ReactNode;
}
