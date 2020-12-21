import React from 'react'

import chrIcon from '../../assets/images/chr.dc.svg'
import iconFacebook from '../../assets/images/icon-facebook.png'
import iconTwitter from '../../assets/images/icon-twitter.png'


const PageFooter = () => {
    return (
        <footer className="PageFooter">
            <div className="PageFooter__Container">
                <a href="/">
                    <img className="PageFooter__Container-chrIcon" src={chrIcon} alt="Logo do Chaordic"></img>
                </a>
                <div className="PageFooter__Container-Icons">
                    <a href="/">
                        <img className="PageFooter__Container-Icons-fb" src={iconFacebook} alt="Logo do Facebook"></img>
                    </a>
                    <a href="/">
                    <img className="PageFooter__Container-Icons-tt" src={iconTwitter} alt="Logo do Twitter"></img>    
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default PageFooter