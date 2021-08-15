import React from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard";
import {IconContext} from "react-icons";
import {IoCopy} from "react-icons/io5";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/**
 * A copy button for copying values.
 * @param setCopied
 * @param toCopy
 * @param theme
 * @returns {*}
 * @constructor
 */
const CopyButton = ({setCopied, toCopy, theme}) => {
    return (
        <div>
            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip id="tooltip-top">
                        Copy to clipboard
                    </Tooltip>
                }
            >
                <CopyToClipboard text={toCopy} onCopy={() => setCopied(true)}>
                    <div className="icon">
                        <IconContext.Provider value={{color: theme === 'dark' ? '#d2dad9' : '#676767'}}>
                            <span><IoCopy size={25}/></span>
                        </IconContext.Provider>
                    </div>
                </CopyToClipboard>
            </OverlayTrigger>
        </div>
    );
};

export default CopyButton;
