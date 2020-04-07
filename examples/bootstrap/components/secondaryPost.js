import React from 'react';
import CmsComponent from '../../../common/classes/cmsComponent';
import CmsField from "../../../common/classes/cmsField";
import CmsFieldTypes from "../../../common/enum/cmsFieldTypes";

export default class SecondaryPost extends CmsComponent
{
    constructor(props)
    {
        super(props);
        this.post_title = new CmsField("Post_Title", CmsFieldTypes.TEXT);
        this.post_date = new CmsField("Post_Date", CmsFieldTypes.DATE);
    }

    render() {
        return (
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">{ this.post_title.value() }</a>
                        </h3>
                        <div className="mb-1 text-muted">{ this.post_date.value() }</div>
                        <p className="card-text mb-auto">{ new CmsField("Post_Content", CmsFieldTypes.WYSIWYG).value() }</p>
                        <a href="#">Continue reading</a>
                    </div>
                    <img className="card-img-right flex-auto d-none d-md-block"
                         data-src="holder.js/200x250?theme=thumb" alt="Card image cap" />
                </div>
        )
    }
}