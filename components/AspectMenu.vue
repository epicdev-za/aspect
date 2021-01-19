<template>

    <div class="aspect-menu">
        <div class="aspect-menu-top">
            <div class="aspect-menu-heading"><span>Page Settings</span></div>
            <div class="aspect-menu-btn toggle-menu">
                <div class="aspect-menu-slice">
                    <div class="aspect-menu-slice-inner">
                        <div class="aspect-menu-slice-hold">
                            <span class="aspect-menu-slice-txt">Menu</span>
                            <span class="aspect-menu-slice-arrow">❮</span>
                        </div>
                    </div>
                </div>
                <div class="aspect-menu-btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="arrow-left" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                            <g><path d="M20,13H4c-0.552,0-1-0.447-1-1c0-0.552,0.448-1,1-1h16c0.553,0,1,0.448,1,1C21,12.553,20.553,13,20,13z"></path></g>
                        <g><path d="M10,19c-0.256,0-0.512-0.098-0.707-0.293l-6-6c-0.391-0.391-0.391-1.023,0-1.414l6-6c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L5.414,12l5.293,5.293c0.391,0.391,0.391,1.023,0,1.414C10.512,18.902,10.256,19,10,19z"></path></g>
                        </svg>
                </div>
            </div>
        </div>
        <div class="aspect-tabs">
            <ul class="aspect-tabs-list">
                <li class="aspect-tabs-item"><div class="aspect-tabs-link active tab-tools">Tools</div></li>
                <li class="aspect-tabs-item"><div class="aspect-tabs-link tab-options">Options</div></li>
                <li class="aspect-tabs-item"><div class="aspect-tabs-link tab-seo">SEO</div></li>
                <li class="aspect-tabs-item settings tab-settings">
                    <div class="aspect-tabs-link">
                        <div class="aspect-tabs-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="settings" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                    <g><path d="M12,16c-2.206,0-4-1.794-4-4c0-2.206,1.794-4,4-4c2.206,0,4,1.794,4,4C16,14.206,14.206,16,12,16z M12,10   c-1.103,0-2,0.897-2,2c0,1.103,0.897,2,2,2c1.103,0,2-0.897,2-2C14,10.897,13.103,10,12,10z"></path></g>
                                <g><path d="M12.08,24c-1.654,0-3-1.346-3-3c-0.006-0.335-0.173-0.568-0.425-0.661c-0.415-0.175-0.589-0.077-0.775,0.105   c-1.238,1.239-3.161,1.188-4.296,0.054c-0.567-0.565-0.88-1.319-0.881-2.121c-0.001-0.801,0.311-1.555,0.877-2.122   c0.241-0.245,0.292-0.526,0.185-0.771c-0.106-0.248-0.34-0.402-0.598-0.403H3c-1.654,0-3-1.346-3-3s1.346-3,3-3   c0.335-0.006,0.569-0.173,0.662-0.425C3.793,8.352,3.742,8.07,3.555,7.88C2.333,6.658,2.332,4.755,3.501,3.585   c1.136-1.137,3.111-1.137,4.244-0.004c0.27,0.266,0.53,0.289,0.771,0.184c0.064-0.028,0.13-0.049,0.198-0.064   C8.891,3.583,8.999,3.383,9,3.166V3c0-1.654,1.346-3,3-3s3,1.346,3,3c0.001,0.345,0.155,0.579,0.395,0.681   c0.267,0.118,0.539,0.057,0.727-0.126c1.235-1.237,3.16-1.187,4.294-0.054c0.568,0.567,0.881,1.321,0.882,2.122   c0,0.802-0.312,1.555-0.879,2.123c-0.24,0.245-0.291,0.526-0.183,0.771c0.028,0.064,0.05,0.131,0.063,0.199   C20.418,8.891,20.617,8.999,20.834,9H21c1.654,0,3,1.346,3,3s-1.346,3-3,3c-0.346,0.001-0.578,0.155-0.681,0.394   c-0.112,0.255-0.062,0.536,0.125,0.727c0.619,0.618,0.932,1.372,0.933,2.173c0,0.802-0.312,1.556-0.878,2.123   c-1.134,1.134-3.109,1.135-4.245,0.003c-0.268-0.267-0.531-0.292-0.77-0.184c-0.249,0.106-0.403,0.339-0.404,0.598V21   C15.08,22.654,13.734,24,12.08,24z M8.333,18.259c0.371,0,0.732,0.077,1.072,0.228c0.967,0.353,1.648,1.305,1.674,2.4   c0,0.008,0,0.105,0,0.113c0,0.552,0.449,1,1,1c0.552,0,1-0.448,1-1v-0.17c0.003-1.061,0.634-2.013,1.606-2.429   c0.947-0.419,2.151-0.213,2.914,0.535c0.513,0.513,1.104,0.444,1.481,0.066c0.19-0.189,0.294-0.441,0.294-0.709   c0-0.267-0.104-0.518-0.293-0.706c-0.831-0.848-1.039-1.995-0.597-2.993c0.411-0.961,1.363-1.592,2.421-1.595   C21.552,13,22,12.552,22,12c0-0.551-0.448-1-1-1h-0.17c-1.061-0.004-2.013-0.634-2.429-1.606c-0.036-0.084-0.061-0.173-0.072-0.263   c-0.335-0.95-0.107-2.002,0.607-2.73c0.256-0.256,0.36-0.508,0.36-0.776c0-0.267-0.104-0.518-0.293-0.706   c-0.382-0.381-1.039-0.378-1.416-0.001c-0.868,0.852-2.015,1.03-2.992,0.599C13.634,5.102,13.003,4.15,13,3.093   C13,2.449,12.552,2,12,2c-0.551,0-1,0.449-1,1v0.17c-0.004,1.061-0.634,2.013-1.606,2.429C9.31,5.635,9.221,5.66,9.13,5.672   C8.197,6,7.113,5.763,6.4,5.065C5.886,4.55,5.295,4.618,4.917,4.997c-0.391,0.391-0.391,1.026,0,1.416   c0.83,0.847,1.038,1.994,0.598,2.991c-0.354,0.969-1.307,1.65-2.401,1.676c-0.008,0-0.106,0-0.114,0c-0.551,0-1,0.449-1,1   c0,0.552,0.449,1,1,1h0.17c1.06,0.003,2.012,0.634,2.429,1.605c0.436,0.988,0.228,2.136-0.534,2.914   c-0.257,0.257-0.361,0.509-0.361,0.776c0,0.267,0.104,0.518,0.293,0.706c0.38,0.382,1.039,0.379,1.416,0.001   C6.978,18.528,7.636,18.259,8.333,18.259z"></path></g>
                                </svg>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="aspect-menu-inner">
            <div class="aspect-menu-scroll">
                <div class="aspect-menu-section tools-page show">
                    <div class="aspect-menu-item active">
                            <span class="section-heading mb20">
                                <span class="w100">Tool Selection:</span>
                                <span class="aspect-infoIcon aspect-simple-tip large" data-note="Choose a tool from the list below and click 'Add'."> ? </span>
                            </span>
                        <ul class="aspectTools-list">
                            <li class="aspectTools-item">
                                <div class="aspect-options-top">
                                    <div class="aspect-options-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                        <g><path d="M19,22H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v14C22,20.654,20.654,22,19,22z M5,4   C4.449,4,4,4.449,4,5v14c0,0.552,0.449,1,1,1h14c0.552,0,1-0.448,1-1V5c0-0.551-0.448-1-1-1H5z"></path></g>
                                            <g><path d="M8.5,11C7.122,11,6,9.878,6,8.5S7.122,6,8.5,6S11,7.122,11,8.5S9.878,11,8.5,11z M8.5,8C8.224,8,8,8.224,8,8.5   S8.224,9,8.5,9S9,8.776,9,8.5S8.776,8,8.5,8z"></path></g>
                                            <g><path d="M5,22c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l11-11c0.391-0.391,1.023-0.391,1.414,0l5,5   c0.391,0.391,0.391,1.023,0,1.414s-1.023,0.391-1.414,0L16,11.414L5.707,21.707C5.512,21.902,5.256,22,5,22z"></path></g>
                                    </svg>
                                    </div>
                                    <div class="aspect-options-heading">Banner Tool</div>
                                    <div class="aspect-options-btn-hold"><div class="aspect-options-btn aspect-simple-tip large" data-note="Add a banner image to your page with the option to add a heading overlay as well.">Add</div></div>
                                </div>
                            </li>
                            <li class="aspectTools-item">
                                <div class="aspect-options-top">
                                    <div class="aspect-options-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="align-center" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                <g><path d="M18,11H6c-0.552,0-1-0.448-1-1s0.448-1,1-1h12c0.553,0,1,0.448,1,1S18.553,11,18,11z"></path></g>
                                            <g><path d="M21,7H3C2.448,7,2,6.552,2,6s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,7,21,7z"></path></g>
                                            <g><path d="M21,15H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,15,21,15z"></path></g>
                                            <g><path d="M18,19H6c-0.552,0-1-0.447-1-1s0.448-1,1-1h12c0.553,0,1,0.447,1,1S18.553,19,18,19z"></path></g>
                                            </svg>
                                    </div>
                                    <div class="aspect-options-heading">Text Tool</div>
                                    <div class="aspect-options-btn-hold"><div class="aspect-options-btn aspect-simple-tip large" data-note="Add basic text, lists, heading etc. With options to format the text to your liking.">Add</div></div>
                                </div>
                            </li>
                            <li class="aspectTools-item">
                                <div class="aspect-options-top">
                                    <div class="aspect-options-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="blog" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                <g><path d="M21,11H11c-0.552,0-1-0.448-1-1s0.448-1,1-1h10c0.553,0,1,0.448,1,1S21.553,11,21,11z"></path></g>
                                            <g><path d="M21,7H11c-0.552,0-1-0.448-1-1s0.448-1,1-1h10c0.553,0,1,0.448,1,1S21.553,7,21,7z"></path></g>
                                            <g><path d="M21,15H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,15,21,15z"></path></g>
                                            <g><path d="M21,19H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,19,21,19z"></path></g>
                                            <path d="M7.083,10.938H2.948c-0.488,0-0.886-0.397-0.886-0.886V5.917c0-0.488,0.397-0.886,0.886-0.886h4.135  c0.488,0,0.886,0.397,0.886,0.886v4.135C7.969,10.54,7.571,10.938,7.083,10.938z"></path>
                                            </svg>
                                    </div>
                                    <div class="aspect-options-heading">Image & Text</div>
                                    <div class="aspect-options-btn-hold"><div class="aspect-options-btn aspect-simple-tip large" data-note="Add an image with text next to it. You will have a range of options to customise this section to your liking.">Add</div></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="aspect-menu-section options-page">
                    <div id="tool-options-1" class="aspect-menu-item active">

                        <div class="aspect-options-top">
                            <div class="aspect-options-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                        <g><path d="M19,22H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v14C22,20.654,20.654,22,19,22z M5,4   C4.449,4,4,4.449,4,5v14c0,0.552,0.449,1,1,1h14c0.552,0,1-0.448,1-1V5c0-0.551-0.448-1-1-1H5z"></path></g>
                                    <g><path d="M8.5,11C7.122,11,6,9.878,6,8.5S7.122,6,8.5,6S11,7.122,11,8.5S9.878,11,8.5,11z M8.5,8C8.224,8,8,8.224,8,8.5   S8.224,9,8.5,9S9,8.776,9,8.5S8.776,8,8.5,8z"></path></g>
                                    <g><path d="M5,22c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l11-11c0.391-0.391,1.023-0.391,1.414,0l5,5   c0.391,0.391,0.391,1.023,0,1.414s-1.023,0.391-1.414,0L16,11.414L5.707,21.707C5.512,21.902,5.256,22,5,22z"></path></g>
                                    </svg>
                            </div>
                            <div class="aspect-options-heading">Banner Tool</div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Banner Height:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Adjust the height of the banner."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">Large</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Medium</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Small</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Tiny</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Toggle Heading:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Add or remove a heading which will overlay the banner image."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">Yes</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">No</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Heading Size:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Adjust the font size of the banner heading."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">Large</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Medium</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Small</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Tiny</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Toggle Paragraph:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Add or remove a paragraph which will overlay the banner image."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">Yes</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">No</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Toggle Buttons:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Enable or Disable buttons for this section."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">Yes</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">No</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Button Size:</span>
                                    <span class="aspect-global-btn aspect-simple-tip">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="globe" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                            <g><path d="M12,23C5.935,23,1,18.065,1,12S5.935,1,12,1s11,4.935,11,11S18.065,23,12,23z M12,3c-4.962,0-9,4.038-9,9   c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C21,7.038,16.963,3,12,3z"></path></g>
                                            <g><path d="M22,13H2c-0.552,0-1-0.447-1-1c0-0.552,0.448-1,1-1h20c0.553,0,1,0.448,1,1C23,12.553,22.553,13,22,13z"></path></g>
                                            <g><path d="M12,23L12,23c-0.281,0-0.549-0.118-0.738-0.325C8.596,19.756,7.083,15.973,7,12.021c0.083-3.994,1.596-7.777,4.262-10.695   c0.379-0.415,1.098-0.415,1.477,0c2.666,2.917,4.18,6.701,4.262,10.653c-0.082,3.995-1.596,7.778-4.262,10.696   C12.549,22.882,12.281,23,12,23z M12,3.55c-1.878,2.42-2.936,5.387-3,8.471c0.064,3.046,1.121,6.009,3,8.428   c1.879-2.419,2.937-5.386,3-8.47C14.937,8.932,13.879,5.969,12,3.55z"></path></g>
                                        </svg>
                                    </span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Adjust the size of the banner buttons."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Large</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">Medium</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Small</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Tiny</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Text Horizontal Alignment:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Choose your preferred alignment for the heading overlay."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly active" data-tip="Left Align">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="align-left" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                    <g><path d="M17,11H3c-0.552,0-1-0.448-1-1s0.448-1,1-1h14c0.553,0,1,0.448,1,1S17.553,11,17,11z"></path></g>
                                                <g><path d="M21,7H3C2.448,7,2,6.552,2,6s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,7,21,7z"></path></g>
                                                <g><path d="M21,15H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,15,21,15z"></path></g>
                                                <g><path d="M17,19H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h14c0.553,0,1,0.447,1,1S17.553,19,17,19z"></path></g>
                                                </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Center Align">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="align-center" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                    <g><path d="M18,11H6c-0.552,0-1-0.448-1-1s0.448-1,1-1h12c0.553,0,1,0.448,1,1S18.553,11,18,11z"></path></g>
                                                <g><path d="M21,7H3C2.448,7,2,6.552,2,6s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,7,21,7z"></path></g>
                                                <g><path d="M21,15H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,15,21,15z"></path></g>
                                                <g><path d="M18,19H6c-0.552,0-1-0.447-1-1s0.448-1,1-1h12c0.553,0,1,0.447,1,1S18.553,19,18,19z"></path></g>
                                                </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Right Align">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="align-right" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                    <g><path d="M21,11H7c-0.552,0-1-0.448-1-1s0.448-1,1-1h14c0.553,0,1,0.448,1,1S21.553,11,21,11z"></path></g>
                                                <g><path d="M21,7H3C2.448,7,2,6.552,2,6s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,7,21,7z"></path></g>
                                                <g><path d="M21,15H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,15,21,15z"></path></g>
                                                <g><path d="M21,19H7c-0.552,0-1-0.447-1-1s0.448-1,1-1h14c0.553,0,1,0.447,1,1S21.553,19,21,19z"></path></g>
                                                </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Justify">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="align-justify" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                    <g><path d="M21,11H3c-0.552,0-1-0.448-1-1s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,11,21,11z"></path></g>
                                                <g><path d="M21,7H3C2.448,7,2,6.552,2,6s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,7,21,7z"></path></g>
                                                <g><path d="M21,15H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,15,21,15z"></path></g>
                                                <g><path d="M21,19H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,19,21,19z"></path></g>
                                                </svg>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Text Vertical Alignment:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Choose your preferred vertical alignment for the heading overlay."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Align Top">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                                                <g id="Group_4" data-name="Group 4" transform="translate(0.125)">
                                                    <path id="Polygon_2" data-name="Polygon 2" d="M3,0,6,3H0Z" transform="translate(8.875 13)"/>
                                                    <rect id="Rectangle_6" data-name="Rectangle 6" width="24" height="2" rx="1" transform="translate(-0.125)"/>
                                                    <rect id="Rectangle_5" data-name="Rectangle 5" width="24" height="2" rx="1" transform="translate(-0.125 4)"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly active" data-tip="Align Center">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                                                <g id="Group_3" data-name="Group 3" transform="translate(-1.125 2.313)">
                                                    <path id="Polygon_3" data-name="Polygon 3" d="M3,0,6,3H0Z" transform="translate(16.125 0.688) rotate(180)"/>
                                                    <path id="Polygon_4" data-name="Polygon 4" d="M3,0,6,3H0Z" transform="translate(10.125 10.688)"/>
                                                    <rect id="Rectangle_6" data-name="Rectangle 6" width="24" height="2" rx="1" transform="translate(1.125 6.688)"/>
                                                    <rect id="Rectangle_7" data-name="Rectangle 7" width="24" height="2" rx="1" transform="translate(1.125 2.688)"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Align Bottom">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                                                <g id="Group_2" data-name="Group 2" transform="translate(-490.5 -314.5)">
                                                    <path id="Polygon_2" data-name="Polygon 2" d="M3,0,6,3H0Z" transform="translate(505.5 317.5) rotate(180)"/>
                                                    <rect id="Rectangle_6" data-name="Rectangle 6" width="24" height="2" rx="1" transform="translate(490.5 328.5)"/>
                                                    <rect id="Rectangle_5" data-name="Rectangle 5" width="24" height="2" rx="1" transform="translate(490.5 324.5)"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Background Image Position:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Choose how the background image will position itself within this section."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Top Left">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100">
                                                <g id="Custom_Size_1" data-name="Custom Size – 1" class="cls-1">
                                                    <g id="maximize" transform="translate(8 8)">
                                                        <path id="Path_1" data-name="Path 1" d="M26,82H14A12.015,12.015,0,0,1,2,70V58a4,4,0,1,1,8,0V70a4,4,0,0,0,4,4H26a4,4,0,0,1,0,8ZM78,30a4,4,0,0,1-4-4V14a4,4,0,0,0-4-4H58a4,4,0,1,1,0-8H70A12.015,12.015,0,0,1,82,14V26A4,4,0,0,1,78,30ZM6,30a4,4,0,0,1-4-4V14A12.015,12.015,0,0,1,14,2H26a4,4,0,0,1,0,8H14a4.007,4.007,0,0,0-4,4V26A4,4,0,0,1,6,30Z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Top Right">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100">
                                                <g id="Custom_Size_1" data-name="Custom Size – 1" class="cls-1">
                                                    <g id="maximize" transform="translate(8 8)">
                                                        <path id="Path_1" data-name="Path 1" d="M70,82H58a4,4,0,1,1,0-8H70a4,4,0,0,0,4-4V58a4,4,0,1,1,8,0V70A12.015,12.015,0,0,1,70,82Zm8-52a4,4,0,0,1-4-4V14a4,4,0,0,0-4-4H58a4,4,0,1,1,0-8H70A12.015,12.015,0,0,1,82,14V26A4,4,0,0,1,78,30ZM6,30a4,4,0,0,1-4-4V14A12.015,12.015,0,0,1,14,2H26a4,4,0,0,1,0,8H14a4.007,4.007,0,0,0-4,4V26A4,4,0,0,1,6,30Z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly active" data-tip="Center">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="maximize" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                    <g>
                                                        <path d="M19,22h-3c-0.553,0-1-0.447-1-1s0.447-1,1-1h3c0.552,0,1-0.448,1-1v-3c0-0.553,0.447-1,1-1s1,0.447,1,1v3   C22,20.654,20.654,22,19,22z M8,22H5c-1.654,0-3-1.346-3-3v-3c0-0.553,0.448-1,1-1s1,0.447,1,1v3c0,0.552,0.449,1,1,1h3   c0.552,0,1,0.447,1,1S8.552,22,8,22z M21,9c-0.553,0-1-0.448-1-1V5c0-0.551-0.448-1-1-1h-3c-0.553,0-1-0.448-1-1s0.447-1,1-1h3   c1.654,0,3,1.346,3,3v3C22,8.552,21.553,9,21,9z M3,9C2.448,9,2,8.552,2,8V5c0-1.654,1.346-3,3-3h3c0.552,0,1,0.448,1,1   S8.552,4,8,4H5C4.449,4,4,4.449,4,5v3C4,8.552,3.552,9,3,9z"></path>
                                                    </g>
                                                </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Bottom Left">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100">
                                                <g id="Custom_Size_1" data-name="Custom Size – 1" class="cls-1">
                                                    <g id="maximize" transform="translate(8 8)">
                                                        <path id="Path_1" data-name="Path 1" d="M70,82H58a4,4,0,1,1,0-8H70a4,4,0,0,0,4-4V58a4,4,0,1,1,8,0V70A12.015,12.015,0,0,1,70,82ZM26,82H14A12.015,12.015,0,0,1,2,70V58a4,4,0,1,1,8,0V70a4,4,0,0,0,4,4H26a4,4,0,0,1,0,8ZM6,30a4,4,0,0,1-4-4V14A12.015,12.015,0,0,1,14,2H26a4,4,0,0,1,0,8H14a4.007,4.007,0,0,0-4,4V26A4,4,0,0,1,6,30Z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Bottom Right">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100">
                                                <g id="Custom_Size_1" data-name="Custom Size – 1" class="cls-1">
                                                    <g id="maximize" transform="translate(8 8)">
                                                        <path id="Path_1" data-name="Path 1" d="M70,82H58a4,4,0,1,1,0-8H70a4,4,0,0,0,4-4V58a4,4,0,1,1,8,0V70A12.015,12.015,0,0,1,70,82ZM26,82H14A12.015,12.015,0,0,1,2,70V58a4,4,0,1,1,8,0V70a4,4,0,0,0,4,4H26a4,4,0,0,1,0,8ZM78,30a4,4,0,0,1-4-4V14a4,4,0,0,0-4-4H58a4,4,0,1,1,0-8H70A12.015,12.015,0,0,1,82,14V26A4,4,0,0,1,78,30Z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Blur Effect:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Add and adjust the blur of the background image. This could make it easier to read any text overlays."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">None</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Weak</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Medium</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Strong</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Toggle Side Padding:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Add or remove spacing on either side of the banner. If you want a full screen banner then turn the side padding off."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Yes</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">No</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Max Width:</span>
                                    <span class="aspect-global-btn aspect-simple-tip">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="globe" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                            <g><path d="M12,23C5.935,23,1,18.065,1,12S5.935,1,12,1s11,4.935,11,11S18.065,23,12,23z M12,3c-4.962,0-9,4.038-9,9   c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C21,7.038,16.963,3,12,3z"></path></g>
                                            <g><path d="M22,13H2c-0.552,0-1-0.447-1-1c0-0.552,0.448-1,1-1h20c0.553,0,1,0.448,1,1C23,12.553,22.553,13,22,13z"></path></g>
                                            <g><path d="M12,23L12,23c-0.281,0-0.549-0.118-0.738-0.325C8.596,19.756,7.083,15.973,7,12.021c0.083-3.994,1.596-7.777,4.262-10.695   c0.379-0.415,1.098-0.415,1.477,0c2.666,2.917,4.18,6.701,4.262,10.653c-0.082,3.995-1.596,7.778-4.262,10.696   C12.549,22.882,12.281,23,12,23z M12,3.55c-1.878,2.42-2.936,5.387-3,8.471c0.064,3.046,1.121,6.009,3,8.428   c1.879-2.419,2.937-5.386,3-8.47C14.937,8.932,13.879,5.969,12,3.55z"></path></g>
                                        </svg>
                                    </span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Adjust the max width of this element with one of the options below. This setting will react differently on different size screens."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Large</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Medium</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Small</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Tiny</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">None</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Text Max Width:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Adjust the max width of the text overlay with one of the options below. This setting will react differently on different size screens."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">Large</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Medium</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Small</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Tiny</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Margin:</span>
                                    <span class="aspect-global-btn aspect-simple-tip active">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="globe" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                            <g><path d="M12,23C5.935,23,1,18.065,1,12S5.935,1,12,1s11,4.935,11,11S18.065,23,12,23z M12,3c-4.962,0-9,4.038-9,9   c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C21,7.038,16.963,3,12,3z"></path></g>
                                            <g><path d="M22,13H2c-0.552,0-1-0.447-1-1c0-0.552,0.448-1,1-1h20c0.553,0,1,0.448,1,1C23,12.553,22.553,13,22,13z"></path></g>
                                            <g><path d="M12,23L12,23c-0.281,0-0.549-0.118-0.738-0.325C8.596,19.756,7.083,15.973,7,12.021c0.083-3.994,1.596-7.777,4.262-10.695   c0.379-0.415,1.098-0.415,1.477,0c2.666,2.917,4.18,6.701,4.262,10.653c-0.082,3.995-1.596,7.778-4.262,10.696   C12.549,22.882,12.281,23,12,23z M12,3.55c-1.878,2.42-2.936,5.387-3,8.471c0.064,3.046,1.121,6.009,3,8.428   c1.879-2.419,2.937-5.386,3-8.47C14.937,8.932,13.879,5.969,12,3.55z"></path></g>
                                        </svg>
                                    </span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note=
                                        "Top & bottom margin (spacing).
                                             By clicking the globe icon you can toggle global
                                             margin on and off. If global is on
                                             the margins will match the global settings & you
                                             won't be able to edit the margins here."> ? </span>
                                </span>
                            <div class="aspect-labInput aspect-disable">
                                <div class="aspect-labInput-label">Margin Top</div>
                                <div class="aspect-labInput-input">
                                    <input class="aspect-input" type="text" name="" value="0">
                                </div>
                            </div>
                            <div class="aspect-labInput aspect-disable">
                                <div class="aspect-labInput-label">Margin Bottom</div>
                                <div class="aspect-labInput-input">
                                    <input class="aspect-input" type="text" name="" value="50">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="tool-options-2" class="aspect-menu-item">

                        <div class="aspect-options-top">
                            <div class="aspect-options-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="align-center" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                        <g><path d="M18,11H6c-0.552,0-1-0.448-1-1s0.448-1,1-1h12c0.553,0,1,0.448,1,1S18.553,11,18,11z"></path></g>
                                    <g><path d="M21,7H3C2.448,7,2,6.552,2,6s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,7,21,7z"></path></g>
                                    <g><path d="M21,15H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,15,21,15z"></path></g>
                                    <g><path d="M18,19H6c-0.552,0-1-0.447-1-1s0.448-1,1-1h12c0.553,0,1,0.447,1,1S18.553,19,18,19z"></path></g>
                                    </svg>
                            </div>
                            <div class="aspect-options-heading">Text Tool</div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Text Alignment:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Choose your preferred alignment for all text in this section."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly active" data-tip="Left Align">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="align-left" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                    <g><path d="M17,11H3c-0.552,0-1-0.448-1-1s0.448-1,1-1h14c0.553,0,1,0.448,1,1S17.553,11,17,11z"></path></g>
                                                <g><path d="M21,7H3C2.448,7,2,6.552,2,6s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,7,21,7z"></path></g>
                                                <g><path d="M21,15H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,15,21,15z"></path></g>
                                                <g><path d="M17,19H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h14c0.553,0,1,0.447,1,1S17.553,19,17,19z"></path></g>
                                                </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Center Align">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="align-center" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                    <g><path d="M18,11H6c-0.552,0-1-0.448-1-1s0.448-1,1-1h12c0.553,0,1,0.448,1,1S18.553,11,18,11z"></path></g>
                                                <g><path d="M21,7H3C2.448,7,2,6.552,2,6s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,7,21,7z"></path></g>
                                                <g><path d="M21,15H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,15,21,15z"></path></g>
                                                <g><path d="M18,19H6c-0.552,0-1-0.447-1-1s0.448-1,1-1h12c0.553,0,1,0.447,1,1S18.553,19,18,19z"></path></g>
                                                </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Right Align">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="align-right" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                    <g><path d="M21,11H7c-0.552,0-1-0.448-1-1s0.448-1,1-1h14c0.553,0,1,0.448,1,1S21.553,11,21,11z"></path></g>
                                                <g><path d="M21,7H3C2.448,7,2,6.552,2,6s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,7,21,7z"></path></g>
                                                <g><path d="M21,15H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,15,21,15z"></path></g>
                                                <g><path d="M21,19H7c-0.552,0-1-0.447-1-1s0.448-1,1-1h14c0.553,0,1,0.447,1,1S21.553,19,21,19z"></path></g>
                                                </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Justify">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="align-justify" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                    <g><path d="M21,11H3c-0.552,0-1-0.448-1-1s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,11,21,11z"></path></g>
                                                <g><path d="M21,7H3C2.448,7,2,6.552,2,6s0.448-1,1-1h18c0.553,0,1,0.448,1,1S21.553,7,21,7z"></path></g>
                                                <g><path d="M21,15H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,15,21,15z"></path></g>
                                                <g><path d="M21,19H3c-0.552,0-1-0.447-1-1s0.448-1,1-1h18c0.553,0,1,0.447,1,1S21.553,19,21,19z"></path></g>
                                                </svg>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Text Columns:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Split your text into columns similar to a newspaper layout."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">None</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">x2</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">x3</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">x4</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Toggle Buttons:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Enable or Disable buttons for this section."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">Yes</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">No</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Background Colour:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Set the background colour for this section."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn active" data-tip="Transparent">None</div>
                                </li>
                                <li class="aspect-toggles-item p3">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Select Colour">
                                        <div class="aspect-colour-selection" data-hash=""></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Button Size:</span>
                                    <span class="aspect-global-btn aspect-simple-tip">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="globe" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                            <g><path d="M12,23C5.935,23,1,18.065,1,12S5.935,1,12,1s11,4.935,11,11S18.065,23,12,23z M12,3c-4.962,0-9,4.038-9,9   c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C21,7.038,16.963,3,12,3z"></path></g>
                                            <g><path d="M22,13H2c-0.552,0-1-0.447-1-1c0-0.552,0.448-1,1-1h20c0.553,0,1,0.448,1,1C23,12.553,22.553,13,22,13z"></path></g>
                                            <g><path d="M12,23L12,23c-0.281,0-0.549-0.118-0.738-0.325C8.596,19.756,7.083,15.973,7,12.021c0.083-3.994,1.596-7.777,4.262-10.695   c0.379-0.415,1.098-0.415,1.477,0c2.666,2.917,4.18,6.701,4.262,10.653c-0.082,3.995-1.596,7.778-4.262,10.696   C12.549,22.882,12.281,23,12,23z M12,3.55c-1.878,2.42-2.936,5.387-3,8.471c0.064,3.046,1.121,6.009,3,8.428   c1.879-2.419,2.937-5.386,3-8.47C14.937,8.932,13.879,5.969,12,3.55z"></path></g>
                                        </svg>
                                    </span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Adjust the size of the banner buttons."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Large</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">Medium</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Small</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Tiny</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Background Image Position:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Choose how the background image will position itself within this section."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Top Left">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100">
                                                <g id="Custom_Size_1" data-name="Custom Size – 1" class="cls-1">
                                                    <g id="maximize" transform="translate(8 8)">
                                                        <path id="Path_1" data-name="Path 1" d="M26,82H14A12.015,12.015,0,0,1,2,70V58a4,4,0,1,1,8,0V70a4,4,0,0,0,4,4H26a4,4,0,0,1,0,8ZM78,30a4,4,0,0,1-4-4V14a4,4,0,0,0-4-4H58a4,4,0,1,1,0-8H70A12.015,12.015,0,0,1,82,14V26A4,4,0,0,1,78,30ZM6,30a4,4,0,0,1-4-4V14A12.015,12.015,0,0,1,14,2H26a4,4,0,0,1,0,8H14a4.007,4.007,0,0,0-4,4V26A4,4,0,0,1,6,30Z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Top Right">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100">
                                                <g id="Custom_Size_1" data-name="Custom Size – 1" class="cls-1">
                                                    <g id="maximize" transform="translate(8 8)">
                                                        <path id="Path_1" data-name="Path 1" d="M70,82H58a4,4,0,1,1,0-8H70a4,4,0,0,0,4-4V58a4,4,0,1,1,8,0V70A12.015,12.015,0,0,1,70,82Zm8-52a4,4,0,0,1-4-4V14a4,4,0,0,0-4-4H58a4,4,0,1,1,0-8H70A12.015,12.015,0,0,1,82,14V26A4,4,0,0,1,78,30ZM6,30a4,4,0,0,1-4-4V14A12.015,12.015,0,0,1,14,2H26a4,4,0,0,1,0,8H14a4.007,4.007,0,0,0-4,4V26A4,4,0,0,1,6,30Z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly active" data-tip="Center">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="maximize" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                                    <g>
                                                        <path d="M19,22h-3c-0.553,0-1-0.447-1-1s0.447-1,1-1h3c0.552,0,1-0.448,1-1v-3c0-0.553,0.447-1,1-1s1,0.447,1,1v3   C22,20.654,20.654,22,19,22z M8,22H5c-1.654,0-3-1.346-3-3v-3c0-0.553,0.448-1,1-1s1,0.447,1,1v3c0,0.552,0.449,1,1,1h3   c0.552,0,1,0.447,1,1S8.552,22,8,22z M21,9c-0.553,0-1-0.448-1-1V5c0-0.551-0.448-1-1-1h-3c-0.553,0-1-0.448-1-1s0.447-1,1-1h3   c1.654,0,3,1.346,3,3v3C22,8.552,21.553,9,21,9z M3,9C2.448,9,2,8.552,2,8V5c0-1.654,1.346-3,3-3h3c0.552,0,1,0.448,1,1   S8.552,4,8,4H5C4.449,4,4,4.449,4,5v3C4,8.552,3.552,9,3,9z"></path>
                                                    </g>
                                                </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Bottom Left">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100">
                                                <g id="Custom_Size_1" data-name="Custom Size – 1" class="cls-1">
                                                    <g id="maximize" transform="translate(8 8)">
                                                        <path id="Path_1" data-name="Path 1" d="M70,82H58a4,4,0,1,1,0-8H70a4,4,0,0,0,4-4V58a4,4,0,1,1,8,0V70A12.015,12.015,0,0,1,70,82ZM26,82H14A12.015,12.015,0,0,1,2,70V58a4,4,0,1,1,8,0V70a4,4,0,0,0,4,4H26a4,4,0,0,1,0,8ZM6,30a4,4,0,0,1-4-4V14A12.015,12.015,0,0,1,14,2H26a4,4,0,0,1,0,8H14a4.007,4.007,0,0,0-4,4V26A4,4,0,0,1,6,30Z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li class="aspect-toggles-item">
                                    <div class="aspect-toggles-btn iconOnly" data-tip="Bottom Right">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100">
                                                <g id="Custom_Size_1" data-name="Custom Size – 1" class="cls-1">
                                                    <g id="maximize" transform="translate(8 8)">
                                                        <path id="Path_1" data-name="Path 1" d="M70,82H58a4,4,0,1,1,0-8H70a4,4,0,0,0,4-4V58a4,4,0,1,1,8,0V70A12.015,12.015,0,0,1,70,82ZM26,82H14A12.015,12.015,0,0,1,2,70V58a4,4,0,1,1,8,0V70a4,4,0,0,0,4,4H26a4,4,0,0,1,0,8ZM78,30a4,4,0,0,1-4-4V14a4,4,0,0,0-4-4H58a4,4,0,1,1,0-8H70A12.015,12.015,0,0,1,82,14V26A4,4,0,0,1,78,30Z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Max Width:</span>
                                    <span class="aspect-global-btn aspect-simple-tip active">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="globe" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                            <g><path d="M12,23C5.935,23,1,18.065,1,12S5.935,1,12,1s11,4.935,11,11S18.065,23,12,23z M12,3c-4.962,0-9,4.038-9,9   c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C21,7.038,16.963,3,12,3z"></path></g>
                                            <g><path d="M22,13H2c-0.552,0-1-0.447-1-1c0-0.552,0.448-1,1-1h20c0.553,0,1,0.448,1,1C23,12.553,22.553,13,22,13z"></path></g>
                                            <g><path d="M12,23L12,23c-0.281,0-0.549-0.118-0.738-0.325C8.596,19.756,7.083,15.973,7,12.021c0.083-3.994,1.596-7.777,4.262-10.695   c0.379-0.415,1.098-0.415,1.477,0c2.666,2.917,4.18,6.701,4.262,10.653c-0.082,3.995-1.596,7.778-4.262,10.696   C12.549,22.882,12.281,23,12,23z M12,3.55c-1.878,2.42-2.936,5.387-3,8.471c0.064,3.046,1.121,6.009,3,8.428   c1.879-2.419,2.937-5.386,3-8.47C14.937,8.932,13.879,5.969,12,3.55z"></path></g>
                                        </svg>
                                    </span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Adjust the max width of this element with one of the options below. This setting will react differently on different size screens."> ? </span>
                                </span>
                            <ul class="aspect-toggles aspect-disable">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">Large</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Medium</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Small</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Tiny</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">None</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Margin:</span>
                                    <span class="aspect-global-btn aspect-simple-tip active">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="globe" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                            <g><path d="M12,23C5.935,23,1,18.065,1,12S5.935,1,12,1s11,4.935,11,11S18.065,23,12,23z M12,3c-4.962,0-9,4.038-9,9   c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C21,7.038,16.963,3,12,3z"></path></g>
                                            <g><path d="M22,13H2c-0.552,0-1-0.447-1-1c0-0.552,0.448-1,1-1h20c0.553,0,1,0.448,1,1C23,12.553,22.553,13,22,13z"></path></g>
                                            <g><path d="M12,23L12,23c-0.281,0-0.549-0.118-0.738-0.325C8.596,19.756,7.083,15.973,7,12.021c0.083-3.994,1.596-7.777,4.262-10.695   c0.379-0.415,1.098-0.415,1.477,0c2.666,2.917,4.18,6.701,4.262,10.653c-0.082,3.995-1.596,7.778-4.262,10.696   C12.549,22.882,12.281,23,12,23z M12,3.55c-1.878,2.42-2.936,5.387-3,8.471c0.064,3.046,1.121,6.009,3,8.428   c1.879-2.419,2.937-5.386,3-8.47C14.937,8.932,13.879,5.969,12,3.55z"></path></g>
                                        </svg>
                                    </span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note=
                                        "Top & bottom margin (spacing).
                                             By clicking the globe icon you can toggle global
                                             margin on and off. If global is on
                                             the margins will match the global settings & you
                                             won't be able to edit the margins here."> ? </span>
                                </span>
                            <div class="aspect-labInput aspect-disable">
                                <div class="aspect-labInput-label">Margin Top</div>
                                <div class="aspect-labInput-input">
                                    <input class="aspect-input" type="text" name="" value="0">
                                </div>
                            </div>
                            <div class="aspect-labInput aspect-disable">
                                <div class="aspect-labInput-label">Margin Bottom</div>
                                <div class="aspect-labInput-input">
                                    <input class="aspect-input" type="text" name="" value="50">
                                </div>
                            </div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Padding:</span>
                                    <span class="aspect-global-btn aspect-simple-tip active">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="globe" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                            <g><path d="M12,23C5.935,23,1,18.065,1,12S5.935,1,12,1s11,4.935,11,11S18.065,23,12,23z M12,3c-4.962,0-9,4.038-9,9   c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C21,7.038,16.963,3,12,3z"></path></g>
                                            <g><path d="M22,13H2c-0.552,0-1-0.447-1-1c0-0.552,0.448-1,1-1h20c0.553,0,1,0.448,1,1C23,12.553,22.553,13,22,13z"></path></g>
                                            <g><path d="M12,23L12,23c-0.281,0-0.549-0.118-0.738-0.325C8.596,19.756,7.083,15.973,7,12.021c0.083-3.994,1.596-7.777,4.262-10.695   c0.379-0.415,1.098-0.415,1.477,0c2.666,2.917,4.18,6.701,4.262,10.653c-0.082,3.995-1.596,7.778-4.262,10.696   C12.549,22.882,12.281,23,12,23z M12,3.55c-1.878,2.42-2.936,5.387-3,8.471c0.064,3.046,1.121,6.009,3,8.428   c1.879-2.419,2.937-5.386,3-8.47C14.937,8.932,13.879,5.969,12,3.55z"></path></g>
                                        </svg>
                                    </span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note=
                                        "Top & bottom padding (inside spacing).
                                             By clicking the globe icon you can toggle global
                                             padding on and off. If global is on
                                             the padding will match the global settings & you
                                             won't be able to edit the padding here."> ? </span>
                                </span>
                            <div class="aspect-labInput aspect-disable">
                                <div class="aspect-labInput-label">Padding Top</div>
                                <div class="aspect-labInput-input">
                                    <input class="aspect-input" type="text" name="" value="0">
                                </div>
                            </div>
                            <div class="aspect-labInput aspect-disable">
                                <div class="aspect-labInput-label">Padding Bottom</div>
                                <div class="aspect-labInput-input">
                                    <input class="aspect-input" type="text" name="" value="0">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="aspect-menu-section seo-page">
                    <div class="aspect-menu-item active">

                        <div class="aspect-options-item mb30">
                                <span class="section-heading">
                                    <span class="w100">Page SEO:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="
                                    SEO (Search Engine Optimisation). This is the practice of
                                    increasing the quantity & quality of traffic to your website
                                    through organic search engine results. Below we Provide some basic tools
                                    to help with SEO.
                                    "> ? </span>
                                </span>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Page Meta Keywords:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Enter a list of keywords seporated with a comma"> ? </span>
                                </span>
                            <div class="aspect-input-hold">
                                <textarea class="aspect-input" name="message" cols="35" rows="8" ></textarea>
                            </div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Page Meta Description:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Enter a desciption for this page try use the same keywords."> ? </span>
                                </span>
                            <div class="aspect-input-hold">
                                <textarea class="aspect-input" name="message" cols="35" rows="8" ></textarea>
                            </div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Select Page:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="If 'Internal' is selected. Select which existing page from this website you would like this button to point to."> ? </span>
                                </span>
                            <div class="aspect-selectbox-hold">
                                <select class="aspect-selectbox" name="" id="">
                                    <option value="Page 1">Page 1</option>
                                    <option value="Page 2">Page 2</option>
                                    <option value="Page 3">Page 3</option>
                                    <option value="Page 4">Page 4</option>
                                </select>
                            </div>
                        </div>

                        <div class="aspect-options-item">
                            <div class="aspect-menu-btn-hold">
                                <div class="aspect-options-btn">Button Example 1</div>
                            </div>
                            <div class="aspect-menu-btn-hold">
                                <div class="aspect-options-btn">Exampe 2</div>
                                <div class="aspect-options-btn">Exampe 3</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="aspect-menu-section settings-page">
                    <div class="aspect-menu-item active">

                        <div class="aspect-options-item mb30">
                                <span class="section-heading">
                                    <span class="w100">Settings:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Control settings for the page builder such as Global settings."> ? </span>
                                </span>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Global Max Width:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Adjust the Global max width. This setting will react differently on different size screens."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">Large</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Medium</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Small</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Tiny</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Global Margin:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Global top & bottom margin (outside spacing)."> ? </span>
                                </span>
                            <div class="aspect-labInput">
                                <div class="aspect-labInput-label">Margin Top</div>
                                <div class="aspect-labInput-input">
                                    <input class="aspect-input" type="text" name="" value="0">
                                </div>
                            </div>
                            <div class="aspect-labInput">
                                <div class="aspect-labInput-label">Margin Bottom</div>
                                <div class="aspect-labInput-input">
                                    <input class="aspect-input" type="text" name="" value="50">
                                </div>
                            </div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Global Padding:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Global top & bottom padding (inside spacing)."> ? </span>
                                </span>
                            <div class="aspect-labInput">
                                <div class="aspect-labInput-label">Padding Top</div>
                                <div class="aspect-labInput-input">
                                    <input class="aspect-input" type="text" name="" value="0">
                                </div>
                            </div>
                            <div class="aspect-labInput">
                                <div class="aspect-labInput-label">Padding Bottom</div>
                                <div class="aspect-labInput-input">
                                    <input class="aspect-input" type="text" name="" value="50">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="aspect-menu-section overlay btn-page">
                    <div class="aspect-menu-item active">

                        <div class="aspect-options-item mb30">
                                <span class="section-heading light">
                                    <span class="w100">
                                        <div class="aspect-backBtn btn-page-close-btn">
                                            <div class="aspect-backBtn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="arrow-left" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" xml:space="preserve">
                                            <g><path d="M20,13H4c-0.552,0-1-0.447-1-1c0-0.552,0.448-1,1-1h16c0.553,0,1,0.448,1,1C21,12.553,20.553,13,20,13z"></path></g>
                                            <g><path d="M10,19c-0.256,0-0.512-0.098-0.707-0.293l-6-6c-0.391-0.391-0.391-1.023,0-1.414l6-6c0.391-0.391,1.023-0.391,1.414,0   s0.391,1.023,0,1.414L5.414,12l5.293,5.293c0.391,0.391,0.391,1.023,0,1.414C10.512,18.902,10.256,19,10,19z"></path></g>
                                        </svg>
                                            </div>
                                            <span class="aspect-backBtn-txt">Close</span>
                                        </div>
                                    </span>
                                </span>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Button Label:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Enter the text that you would like displayed inside the button."> ? </span>
                                </span>
                            <div class="aspect-input-hold">
                                <input class="aspect-input" type="text" name="" value="">
                            </div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Button Type:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="Select the type of button you would like to use. Internal will point to a page within this website, External will point to any URL you enter, Mailto points to an email and Tel points to a phone number."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="Link Internal Page">Internal</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="Link External Page">External</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="Link an Email">Mailto</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="Link a Number">Tel</div></li>
                            </ul>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Select Page:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="If 'Internal' is selected. Select which existing page from this website you would like this button to point to."> ? </span>
                                </span>
                            <div class="aspect-selectbox-hold">
                                <select class="aspect-selectbox" name="" id="">
                                    <option value="Page 1">Page 1</option>
                                    <option value="Page 2">Page 2</option>
                                    <option value="Page 3">Page 3</option>
                                    <option value="Page 4">Page 4</option>
                                </select>
                            </div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Enter URL:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="If 'External' is selected. Copy the URL from the webpage you would like to point this button to and paste it in below."> ? </span>
                                </span>
                            <div class="aspect-input-hold aspect-disable">
                                <input class="aspect-input" type="text" name="" value="">
                            </div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Enter Email Address:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="If 'Mailto' is selected. Enter the email address below, this allows users to send an email to a specific address directly from the website."> ? </span>
                                </span>
                            <div class="aspect-input-hold aspect-disable">
                                <input class="aspect-input" type="text" name="" value="">
                            </div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Enter Tel Number:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="If 'Tel' is selected. Enter the number below, this allows users to call a specific number directly from the website if they are using a device capable of making calls ."> ? </span>
                                </span>
                            <div class="aspect-input-hold aspect-disable">
                                <input class="aspect-input" type="text" name="" value="">
                            </div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Button Title:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="If a title is added, when a user hovers over the button a tooltip with the title text will be shown."> ? </span>
                                </span>
                            <div class="aspect-input-hold">
                                <input class="aspect-input" type="text" name="" value="">
                            </div>
                        </div>

                        <div class="aspect-options-item">
                                <span class="section-heading">
                                    <span class="w100">Open in a new tab ?:</span>
                                    <span class="aspect-infoIcon aspect-simple-tip large" data-note="If yes is selected, when the button is clicked a new tab will be opened keeping the exiting tab open. When using an external link this option should always turned on."> ? </span>
                                </span>
                            <ul class="aspect-toggles">
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn" data-tip="">Yes</div></li>
                                <li class="aspect-toggles-item"><div class="aspect-toggles-btn active" data-tip="">No</div></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="aspect-bottom">
            <ul class="aspect-bottom-list">
                <li class="aspect-bottom-item"><div class="aspect-bottom-link">Preview</div></li>
                <li class="aspect-bottom-item"><div class="aspect-bottom-link">Logout</div></li>
                <li class="aspect-bottom-item"><div class="aspect-bottom-link bold">Save</div></li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
name: "AspectMenu"
}
</script>

<style scoped>
#aspect .aspect-menu {
    display: none;
    position: fixed;
    top: 0;
    left: -300px;
    width: 300px;
    height: 100vh;
    z-index: 13000;
    background-color: rgba(255,255,255,1);
    -webkit-box-shadow: 0 0 30px 0 rgba(0,0,0,0.1);
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.1);
    font-family: 'Roboto',sans-serif;
    -webkit-transition: left 250ms ease-out;
    -moz-transition: left 250ms ease-out;
    -o-transition: left 250ms ease-out;
    transition: left 250ms ease-out;
}

#aspect.menu-open .aspect-menu {left: 0;}
#aspect .aspect-menu-inner {position: relative; height: calc(100vh - 121px);}
#aspect .aspect-menu-inner::after {
    content: "";
    position: absolute;
    height: 100%;
    top: 0;
    right: 2px;
    width: 20px;
    background-color: rgba(255,255,255,1);
    -webkit-transition: right 250ms linear;
    -moz-transition: right 250ms linear;
    -o-transition: right 250ms linear;
    transition: right 250ms linear;
    pointer-events: none;
}

#aspect .aspect-menu-inner:hover::after {right: 4px;}
@-moz-document url-prefix() {#aspect .aspect-menu-inner::after {right: 3px;} #aspect .aspect-menu-inner:hover::after {right: 4px;}}
#aspect .aspect-menu-scroll {position: relative; height: 100%; overflow-x: hidden; overflow-y: auto;}
#aspect .aspect-menu-scroll::-webkit-scrollbar {padding: 0; width: 17px;}
#aspect .aspect-menu-scroll::-webkit-scrollbar-thumb {background: #ccc;}

#aspect .aspect-menu {display: block;}

/*/////////////////////////////////////////*/
/*///////////// MENU SECTIONS /////////////*/
/*/////////////////////////////////////////*/

#aspect .aspect-menu-section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    padding: 30px 0;
    box-sizing: border-box;
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    -o-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
    pointer-events: none;
    max-height: 100%;
    overflow: hidden;
    -webkit-transition: all 0ms ease-out;
    -moz-transition: all 0ms ease-out;
    -o-transition: all 0ms ease-out;
    transition: all 0ms ease-out;
    background-color: #fff;
}

#aspect .aspect-menu-item {position: relative; display: none;}
#aspect .aspect-menu-item.active {display: block;}
#aspect .aspect-menu-section.show {
    -moz-transform: translateX(0px);
    -webkit-transform: translateX(0px);
    -o-transform: translateX(0px);
    -ms-transform: translateX(0px);
    transform: translateX(0px);
    pointer-events: auto;
    max-height: none;
    overflow: visible;
    -webkit-transition: all 250ms ease-out;
    -moz-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    transition: all 250ms ease-out;
}

#aspect .aspect-menu-section.hide {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition: all 250ms ease-out;
    -moz-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    transition: all 250ms ease-out;
    pointer-events: none;
}

#aspect .aspect-menu-section.overlay {
    z-index: 10;
    -webkit-transition: all 250ms ease-out;
    -moz-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    transition: all 250ms ease-out;
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    -o-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%);
    opacity: 0;
}

#aspect .aspect-menu-section.overlay.show {opacity: 1;}
#aspect .aspect-menu-section.overlay.hide {
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    -o-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%);
    opacity: 0;
}

/*/////////////////////////////////////////*/
/*//////////////// MENU TOP ///////////////*/
/*/////////////////////////////////////////*/

#aspect .aspect-menu-top {display: flex; flex-flow: row nowrap; border-bottom: 1px solid rgba(var(--aspect-color-3), 1); position: relative;}
#aspect .aspect-menu-heading {padding: 20px 25px; flex: 1; max-width: calc(100% - 59px); box-sizing: border-box;}
#aspect .aspect-menu-heading span {
    font-size: 15px;
    font-weight: 400;
    color: rgba(var(--aspect-color-1), 1);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#aspect .aspect-menu-btn {
    position: relative;
    width: 58px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    border-left: 1px solid rgba(var(--aspect-color-3), 1);
    cursor: pointer;
    -webkit-transition: all 250ms ease-out;
    -moz-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    transition: all 250ms ease-out;
}

#aspect .aspect-menu-btn-icon {width: 20px; height: 20px;}
#aspect .aspect-menu-btn-icon svg {fill: rgba(var(--aspect-color-1), 1);}
#aspect .aspect-menu-btn:hover {background-color: rgba(var(--aspect-color-3), 1);}

#aspect .aspect-menu-slice {
    position: absolute;
    top: 0;
    right: -19px;
    width: 18px;
    height: 100%;
    background-color: #fff;
    border: 1px solid rgba(var(--aspect-color-3), 1);
    border-left: none;
    border-top: none;
    z-index: 10;
    -webkit-border-radius: 0 0 5px 0;
    border-radius: 0 0 5px 0;
    opacity: 1;
    pointer-events: auto;
    -webkit-transition: opacity 250ms ease-out;
    -moz-transition: opacity 250ms ease-out;
    -o-transition: opacity 250ms ease-out;
    transition: opacity 250ms ease-out;
}

#aspect.menu-open .aspect-menu-slice {opacity: 0; pointer-events: none;}
#aspect .aspect-menu-slice-inner {position: relative; height: 100%;}
#aspect .aspect-menu-slice-hold {
    position: absolute;
    top: 19px;
    left: -12px;
    display: block;
    font-size: 11px;
    color: rgba(var(--aspect-color-1), 1);
    -moz-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    width: 40px;
}

#aspect .aspect-menu-slice-txt, #aspect .aspect-menu-slice-arrow {display: inline-block; vertical-align: middle;}
.aspect-menu-slice-arrow {
    -moz-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
}

/*/////////////////////////////////////////*/
/*////////////////// TABS /////////////////*/
/*/////////////////////////////////////////*/

#aspect .aspect-tabs {position: relative; border-bottom: 1px solid rgba(var(--aspect-color-3), 1);}
#aspect .aspect-tabs.border-top {border-bottom: 0; border-top: 1px solid rgba(var(--aspect-color-3), 1);}
#aspect .aspect-tabs-list {display: flex; flex-flow: row nowrap; margin: 0; padding: 0;}
#aspect .aspect-tabs-item {flex: 1; list-style: none;}
#aspect .aspect-tabs-item.settings {width: 58px; max-width: 58px; flex: auto;}
#aspect .aspect-tabs-link {
    display: block;
    padding: 5px 10px;
    font-size: 13px;
    text-align: center;
    border-right: 1px solid rgba(var(--aspect-color-3), 1);
    cursor: pointer;
    color: rgba(var(--aspect-color-1), 1);
    -webkit-transition: all 250ms ease-out;
    -moz-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    transition: all 250ms ease-out;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

#aspect .aspect-tabs-link.bold {font-weight: 700; color: rgba(var(--aspect-color-2), 1);}
#aspect .aspect-tabs.large .aspect-tabs-link {padding: 10px 10px;}
#aspect .aspect-tabs-item.settings .aspect-tabs-link {padding: 0 10px; height: 100%; display: flex; justify-content: center; align-items: center;}
#aspect .aspect-tabs-icon {display: inline-block; width: 15px; height: 15px;}
#aspect .aspect-tabs-icon svg {fill: rgba(var(--aspect-color-1), 1);}
#aspect .aspect-tabs-item:nth-last-child(1) .aspect-tabs-link {border-right: none;}
#aspect .aspect-tabs-link:hover {background-color: rgba(var(--aspect-color-3), 0.5);}
#aspect .aspect-tabs-link.active {background-color: rgba(var(--aspect-color-3), 1); color: rgba(var(--aspect-color-2), 1);}

/*/////////////////////////////////////////*/
/*////////////// SIMPLE TIP ///////////////*/
/*/////////////////////////////////////////*/

#aspect *.aspect-simple-tip {position: relative;}
#aspect .aspect-simple-tip::before {
    content: attr(data-note);
    position: absolute;
    top: -9px;
    margin-right: 10px;
    right: 100%;
    width: 10000%;
    max-width: 115px;
    padding: 10px;
    font-size: 12px;
    color: rgba(var(--aspect-color-1), 1);
    line-height: 1.4;
    background-color: rgba(var(--aspect-color-white), 1);
    -webkit-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: 0 3px 30px 0 rgba(0,0,0,0.1);
    box-shadow: 0 3px 30px 0 rgba(0,0,0,0.1);
    -webkit-transition: opacity 250ms ease-out;
    -moz-transition: opacity 250ms ease-out;
    -o-transition: opacity 250ms ease-out;
    transition: opacity 250ms ease-out;
    z-index: 1000;
    text-align: center;
    font-weight: 400;
    pointer-events: none;
    opacity: 0;
}

#aspect .aspect-simple-tip:hover::before {opacity: 1; pointer-events: auto;}
#aspect .aspect-simple-tip.large::before {max-width: 187px; text-align: left;}

/*/////////////////////////////////////////*/
/*/////////// SECTION HEADINGS ////////////*/
/*/////////////////////////////////////////*/

#aspect .section-heading {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    text-align: left;
    font-size: 13px;
    font-weight: 700;
    color: rgba(var(--aspect-color-2), 1);
    margin-bottom: 15px;
    padding: 0 25px;
}

#aspect .section-heading .w100 {flex: 1;}
#aspect .section-heading.light {color: rgba(var(--aspect-color-1), 1);}
#aspect .section-heading.mb20 {margin-bottom: 20px;}
#aspect .aspect-global-btn {position: relative; width: 20px; height: 20px; cursor: pointer;}
#aspect .aspect-global-btn.aspect-simple-tip::before {content:"Global Settings (Off)";}
#aspect .aspect-global-btn.aspect-simple-tip.active::before {content:"Global Settings (On)";}
#aspect .aspect-global-btn:hover::before {opacity: 1; pointer-events: auto;}
#aspect .aspect-global-btn svg {fill: rgba(var(--aspect-color-3), 1);}
#aspect .aspect-global-btn.active svg {fill: rgba(var(--aspect-color-2), 1);}

/*/////////////////////////////////////////*/
/*///////////// OPTIONS TOP ///////////////*/
/*/////////////////////////////////////////*/

#aspect .aspect-options-top {position: relative; display: flex; flex-flow: row nowrap; align-items: center; padding: 0 25px; margin-bottom: 30px;}
#aspect .aspect-options-icon {
    position: relative;
    width: 20px;
    padding: 10px;
    background-color: rgba(var(--aspect-color-2), 1);
    margin-right: 15px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}

#aspect .aspect-options-icon svg {fill: rgba(255,255,255,1);}
#aspect .aspect-options-heading {flex: 1; font-size: 15px; font-weight: 700; color: rgba(var(--aspect-color-2), 1); text-align: left;}
#aspect .aspect-options-item {position: relative; margin-bottom: 20px;}
#aspect .aspect-options-item:nth-last-child(1) {margin-bottom: 0;}
#aspect .aspect-options-item.mb30 {margin-bottom: 30px;}
#aspect .aspect-menu-btn-hold {position: relative; padding: 0 20px; display: flex; flex-flow: row wrap;}
#aspect .aspect-menu-btn-hold > * {flex: 1; margin: 5px;}
#aspect .aspect-options-btn {
    display: block;
    font-size: 13px;
    color: rgba(var(--aspect-color-1), 1);
    border: 1px solid rgba(var(--aspect-color-3), 1);
    padding: 5px 10px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    cursor: pointer;
    -webkit-transition: all 250ms ease-out;
    -moz-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    transition: all 250ms ease-out;
    text-align: center;
}

#aspect .aspect-options-btn:hover {color: rgba(var(--aspect-color-2), 1); background-color: rgba(var(--aspect-color-3), 1);}

/*/////////////////////////////////////////*/
/*////////////// TOGGLES ////////////////*/
/*/////////////////////////////////////////*/

#aspect .aspect-toggles {display: flex; flex-flow: row nowrap; margin: 0; padding: 0 25px;}
#aspect .aspect-toggles-item {flex: 1; list-style: none;}
#aspect .aspect-toggles-item.w0 {flex: auto;}
#aspect .aspect-toggles-btn {
    position: relative;
    display: block;
    padding: 5px;
    font-size: 12px;
    font-weight: 400;
    color: rgba(var(--aspect-color-1), 1);
    border-left: 1px solid rgba(var(--aspect-color-3), 1);
    border-top: 1px solid rgba(var(--aspect-color-3), 1);
    border-bottom: 1px solid rgba(var(--aspect-color-3), 1);
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    -webkit-transition: all 250ms ease-out;
    -moz-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    transition: all 250ms ease-out;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

#aspect .aspect-toggles-item.p3 .aspect-toggles-btn {padding: 3px;}
#aspect .aspect-toggles-item:nth-last-child(1) .aspect-toggles-btn {border-right: 1px solid rgba(var(--aspect-color-3), 1); width: calc(100% - 1px);}
#aspect .aspect-toggles-btn:hover {background-color: rgba(var(--aspect-color-3), 0.5);}
#aspect .aspect-toggles-btn.active {background-color: rgba(var(--aspect-color-3), 1); color: rgba(var(--aspect-color-2), 1);}

#aspect .aspect-toggles-btn.iconOnly {font-size: 0; padding: 3px 10px;}
#aspect .aspect-toggles-btn .icon {display: inline-block; width: 21px; height: 21px;}
#aspect .aspect-toggles-btn .icon svg {fill: rgba(var(--aspect-color-1), 1); display: block;}
#aspect .aspect-toggles-btn.active .icon svg {fill: rgba(var(--aspect-color-2), 1);}

#aspect .aspect-toggles-btn::before {
    content: attr(data-tip);
    position: absolute;
    bottom: 100%;
    margin-bottom: 10px;
    left: 50%;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    font-size: 12px;
    color: rgba(var(--aspect-color-1), 1);
    line-height: 1.4;
    padding: 5px 10px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: 0 3px 30px 0 rgba(0,0,0,0.1);
    box-shadow: 0 3px 30px 0 rgba(0,0,0,0.1);
    -webkit-transition: opacity 250ms ease-out;
    -moz-transition: opacity 250ms ease-out;
    -o-transition: opacity 250ms ease-out;
    transition: opacity 250ms ease-out;
    z-index: 1000;
    font-weight: 400;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
    background-color: #fff;
}

#aspect .aspect-toggles-btn:hover::before {opacity: 1;}
#aspect .aspect-toggles-btn[data-tip]:not([data-tip=""]) {content: none;}

/*/////////////////////////////////////////*/
/*////////// COLOUR SELECTION /////////////*/
/*/////////////////////////////////////////*/
#aspect .aspect-colour-selection {position: relative; width: 100%; height: 18px; background-color: rgba(var(--aspect-color-2), 1); text-align: center; line-height: 18px;}
#aspect .aspect-colour-selection::before {content: "#" attr(data-hash); font-size: 11px; color: #fff; text-shadow: 0 0 1px rgba(var(--aspect-color-2), 1);}

/*/////////////////////////////////////////*/
/*////////////// INFO ICON ////////////////*/
/*/////////////////////////////////////////*/

#aspect .aspect-infoIcon {
    position: relative;
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    width: 16px;
    height: 16px;
    font-size: 13px;
    color: rgba(var(--aspect-color-3), 1);
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    border: 2px solid rgba(var(--aspect-color-3), 1);
    -webkit-border-radius: 25px;
    border-radius: 25px;
    cursor: pointer;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -webkit-transition: all 250ms ease-out;
    -moz-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    transition: all 250ms ease-out;
}

#aspect .aspect-infoIcon:hover {color: rgba(var(--aspect-color-2), 1); border-color: rgba(var(--aspect-color-2), 1);}

/*/////////////////////////////////////////*/
/*///////////// BACK BUTTON ///////////////*/
/*/////////////////////////////////////////*/

#aspect .aspect-backBtn {display: block; cursor: pointer; font-size: 0; text-align: left;}
#aspect .aspect-backBtn-icon {display: inline-block; width: 20px; height: 20px; vertical-align: middle; margin-right: 10px;}
#aspect .aspect-backBtn-icon svg {fill: rgba(var(--aspect-color-1), 1);}
#aspect .aspect-backBtn-txt {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    font-size: 13px;
    font-weight: 700;
    color: rgba(var(--aspect-color-1), 1);
    -webkit-transition: color 250ms ease-out;
    -moz-transition: color 250ms ease-out;
    -o-transition: color 250ms ease-out;
    transition: color 250ms ease-out;
}

#aspect .aspect-backBtn:hover .aspect-backBtn-icon svg {fill: rgba(var(--aspect-color-2), 1);}
#aspect .aspect-backBtn:hover .aspect-backBtn-txt {color: rgba(var(--aspect-color-2), 1);}

/*/////////////////////////////////////////*/
/*////////////// aspect INPUTS ///////////////*/
/*/////////////////////////////////////////*/

#aspect .aspect-labInput {position: relative; display: flex; flex-flow: row nowrap; align-items: center; padding: 0 25px; margin-bottom: 10px;}
#aspect .aspect-labInput-label {font-size: 12px; color: rgba(var(--aspect-color-1), 1); text-align: left; padding-right: 15px; font-weight: 400; flex: 1;}
#aspect .aspect-labInput-input {width: 60px;}

#aspect .aspect-input-hold {position: relative; padding: 0 25px;}
#aspect .aspect-input {
    border: 1px solid rgba(var(--aspect-color-3), 1);
    width: 100%;
    height: 30px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    padding: 0 15px;
    font-size: 13px;
    color: rgba(var(--aspect-color-1), 1);
    font-weight: 400;
    font-family: inherit;
    box-sizing: border-box;
    text-align: center;
}

#aspect .aspect-input {text-align: left;}
#aspect .aspect-input:focus {outline: transparent !important;}

#aspect textarea.aspect-input {padding: 15px; min-height: 50px; resize: vertical;}

/*/////////////////////////////////////////*/
/*//////////// aspect SELECTBOX //////////////*/
/*/////////////////////////////////////////*/

#aspect .aspect-selectbox-hold {position: relative; margin: 0 25px;}
#aspect .aspect-selectbox {
    width: 100%;
    border: 1px solid rgba(var(--aspect-color-3), 1);
    height: 30px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    padding: 0 15px;
    font-size: 13px;
    color: rgba(var(--aspect-color-1), 1);
    font-weight: 400;
    font-family: inherit;
    background-color: #fff;
}

#aspect .aspect-selectbox option {padding: 0;}
#aspect .aspect-selectbox-hold::after {
    content: "❯";
    position: absolute;
    top: 1px;
    right: 1px;
    width: 28px;
    height: 28px;
    color: rgba(var(--aspect-color-1), 1);
    background-color: #fff;
    line-height: 28px;
    text-align: center;
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    border-bottom: none;
    pointer-events: none;
    outline: none;
    box-shadow: none;
}

#aspect .aspect-selectbox {outline: 0 transparent !important;}

/*/////////////////////////////////////////*/
/*////////////// aspect BOTTOM ///////////////*/
/*/////////////////////////////////////////*/

#aspect .aspect-bottom {position: relative; border-top: 1px solid rgba(var(--aspect-color-3), 1);}
#aspect .aspect-bottom-list {display: flex; flex-flow: row nowrap; margin: 0; padding: 0;}
#aspect .aspect-bottom-item {flex: 1; list-style: none; border-right: 1px solid rgba(var(--aspect-color-3), 1);}
#aspect .aspect-bottom-item:nth-last-child(1) {border-right: none;}
#aspect .aspect-bottom-link {
    display: block;
    padding: 10px;
    font-size: 13px;
    font-weight: 400;
    color: rgba(var(--aspect-color-2), 1);
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    -webkit-transition: all 250ms ease-out;
    -moz-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    transition: all 250ms ease-out;
}

#aspect .aspect-bottom-link:hover {background-color: rgba(var(--aspect-color-3), 1);}

/*/////////////////////////////////////////*/
/*//////////// aspect TOOLS LIST /////////////*/
/*/////////////////////////////////////////*/

#aspect .aspectTools-list {display: block; margin: 0; padding: 0 25px;}
#aspect .aspectTools-list .aspect-options-top {padding: 0; margin: 0;}
#aspect .aspectTools-item {display: block; list-style: none; border-bottom: 1px solid rgba(var(--aspect-color-3), 1); padding-bottom: 15px; margin-bottom: 15px;}
#aspect .aspectTools-item:nth-last-child(1) {margin-bottom: 0; padding-bottom: 0; border-bottom: none;}
#aspect .aspectTools-item:only-child {margin-bottom: 0; padding-bottom: 0; border-bottom: none;}

/*/////////////////////////////////////////*/
/*////////////// RESPONSIVE ///////////////*/
/*/////////////////////////////////////////*/

@media (max-width: 1100px){
    #aspect .aspect-menu {left: 0;}
    #aspect.menu-open .aspect-menu {left: -300px;}
    #aspect .aspect-menu-slice {opacity: 0; pointer-events: none;}
    #aspect.menu-open .aspect-menu-slice {opacity: 1; pointer-events: auto;}
}
</style>