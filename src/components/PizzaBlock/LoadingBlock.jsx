import React from 'react';
import ContentLoader from "react-content-loader"


function LoadingBlock(props) {
    return (
            <ContentLoader
                className='pizza-block'
                speed={2}
                width={280}
                height={460}
                viewBox="0 0 280 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="120" cy="120" r="109" />
                <rect x="165" y="326" rx="0" ry="0" width="0" height="1" />
                <rect x="-7" y="240" rx="0" ry="0" width="280" height="26" />
                <rect x="-5" y="277" rx="3" ry="6" width="280" height="84" />
                <rect x="12" y="379" rx="3" ry="6" width="79" height="35" />
                <rect x="133" y="373" rx="25" ry="25" width="137" height="49" />
            </ContentLoader>
    );
}

export default LoadingBlock;