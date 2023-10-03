import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords.join(', ')} />}
            {/* 필요한 경우 다른 메타 태그들도 추가할 수 있습니다. */}
        </Helmet>
    );
};

export default Meta;
