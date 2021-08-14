import React, { useState } from 'react';
import Settings from './Settings.js';

function Header({ settings, updateSettings, updateVolume }) {
    const [isMuted, setIsMuted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleVolume = e => {
        updateVolume(e);
        setIsMuted(prev => !prev);
    };
    const handleOpen = () => setIsOpen(prev => !prev);
    const handleClose = e => {
        updateSettings(e);
        setIsOpen(false);
    };

    return (
        <div className="wrapper">
            <header>
                <h1>&#9835;&nbsp;Music Memory&nbsp;&#9835;</h1>
                <div className="header-icons">
                    <div className="icon-volume" onClick={handleVolume}>
                        <svg id="icon-volume" className="on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 22">
                            <path
                                d="M8.12,6H2.53A1.49,1.49,0,0,0,1,7.47v6.92a1.5,1.5,0,0,0,1.53,1.47H8.11a1.56,1.56,0,0,1,1,.35l5.33,4.43A1.54,1.54,0,0,0,17,19.53V2.47a1.53,1.53,0,0,0-2.51-1.12L9.1,5.66A1.56,1.56,0,0,1,8.12,6Z"
                                fill="#fff"
                            />
                            {isMuted ? (
                                <g id="off">
                                    <line
                                        x1="18.35"
                                        y1="7.1"
                                        x2="25.6"
                                        y2="14.05"
                                        fill="none"
                                        stroke="#eee"
                                        strokeLinecap="round"
                                        strokeWidth="1.91"
                                    />
                                    <line
                                        x1="18.35"
                                        y1="14.05"
                                        x2="25.6"
                                        y2="7.1"
                                        fill="none"
                                        stroke="#eee"
                                        strokeLinecap="round"
                                        strokeWidth="1.91"
                                    />
                                </g>
                            ) : (
                                <g id="on">
                                    <path
                                        d="M19.6,6.26A7.67,7.67,0,0,1,21.39,11a7.3,7.3,0,0,1-1.79,4.74"
                                        fill="none"
                                        stroke="#eee"
                                        strokeLinecap="round"
                                        strokeWidth="1.91"
                                    />
                                    <path
                                        d="M23.16,4.16A11,11,0,0,1,25.75,11a10.49,10.49,0,0,1-2.59,6.84"
                                        fill="none"
                                        stroke="#eee"
                                        strokeLinecap="round"
                                        strokeWidth="1.91"
                                    />
                                </g>
                            )}
                        </svg>
                    </div>
                    <div className="icon-settings" onClick={handleOpen}>
                        <svg
                            id="icon-settings"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="100%"
                            fill="#eee"
                        >
                            <path d="M12,4c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S16.418,4,12,4z M12,16c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4C16,14.209,14.209,16,12,16z" />
                            <path d="M14.917 5l-.426-2.191C14.399 2.339 13.988 2 13.509 2h-3.018c-.479 0-.89.339-.982.809L9.083 5H14.917zM9.083 19l.426 2.191C9.601 21.661 10.012 22 10.491 22h3.018c.479 0 .89-.339.982-.809L14.917 19H9.083zM7.396 5.974l-2.11-.726C4.833 5.092 4.334 5.279 4.094 5.693L2.585 8.307c-.239.415-.151.941.21 1.255l1.684 1.464L7.396 5.974zM16.604 18.026l2.11.726c.453.156.952-.031 1.192-.446l1.509-2.614c.239-.415.151-.941-.21-1.255l-1.684-1.464L16.604 18.026zM4.479 12.974l-1.684 1.464c-.361.314-.449.84-.21 1.255l1.509 2.614c.239.415.739.601 1.192.446l2.11-.726L4.479 12.974zM19.521 11.026l1.684-1.464c.361-.314.449-.84.21-1.255l-1.509-2.614c-.239-.415-.739-.601-1.192-.446l-2.11.726L19.521 11.026z" />
                        </svg>
                    </div>
                </div>

                {isOpen && <Settings settings={settings} updateSettings={updateSettings} handleClose={handleClose} />}
            </header>
        </div>
    );
}

export default Header;
