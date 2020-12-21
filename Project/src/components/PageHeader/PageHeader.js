import React from 'react';

import devmagicLogo from '../../assets/images/Devmagic-Logo.svg'

const PageHeader = () => {
    return (
        <header className="PageHeader">
            <div className="PageHeader__logo">
                <a href="/">
                    <img className="PageHeader__logo-image" src={devmagicLogo} alt="Logo da DevMagic"></img>
                </a>
            </div>
        </header>
    )
}

export default PageHeader