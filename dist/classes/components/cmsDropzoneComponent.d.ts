import * as React from 'react';
import { ReactNode } from "React";
import CmsComponent from './cmsComponent';
import IDropZoneProps from './IDropZoneProps';
export default class CmsDropZoneComponent extends CmsComponent {
    data: any[];
    components: {
        [key: string]: React.ClassType<any, React.Component, React.ComponentClass>;
    };
    constructor(props: IDropZoneProps);
    getComponents(): any[];
    render(attributes?: object): ReactNode;
}
