import React from 'react';
import Link from 'next/link';

const MainBanner = ({banner}) => {
    return (
        <>
            <div className="main-banner">
                <div className="container">
                    <div className="content">
                        <span className="sub-title">{banner.infoText}</span>
                        <h1>{banner.heading}</h1>
                       <Link href="/sign-in">
                            <a className="default-btn">{banner.btnText}</a>
                       </Link>

                        <img src={banner.image.url} alt="image" />
                    </div>
                </div>
                
                {/* Shape Images */}
                {/* <div className="banner-shape3">
                    <img src="/images/shape/shape2.png" alt="image" />
                </div>
                <div className="banner-shape8">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div>
                <div className="banner-shape7">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div> */}
            </div>
        </>
    )
}

export default MainBanner;