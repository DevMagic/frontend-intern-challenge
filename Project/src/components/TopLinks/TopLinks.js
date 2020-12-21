import React from 'react'

const TopLinks = (props) => {
    return (
        <div className="TopLinksSection">
            <div className="TopLinksContainer">
                <p className="TopLinksContainer-linkUrl">
                    {props.linkUrl}
                </p>
                <p className="TopLinksContainer-linkAcces">
                    {props.linkAcces}
                </p>
            </div>
            <hr className="TopLinksContainer-divisor"/>
        </div>
    )
}

export default TopLinks