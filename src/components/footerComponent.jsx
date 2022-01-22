import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div class="container">
                    <div className='row top-footer justify-content-between'>
                        <div className='col-12 col-sm-12 col-md-6 p-0'>
                            <a className='footer-logo pr-5'>
                                <img src={window.location.origin + '/images/logo.png'} alt="" />
                            </a>
                            <p className='pr-0'>
                                <span className='d-inline-block'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </span>
                                <span className='d-inline-block py-3'>
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                    software like Aldus PageMaker including versions of Lorem Ipsum.
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                                </span>

                                <span className='d-inline-block'>
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with 
                                </span>
                            </p>
                        </div>
                        <div className='v-line col-1'></div>
                        <div className='row col-12 col-sm-12 col-md-5'>
                            <div className='col-12 news-letter p-0'>
                                <h3 className='pb-2'>Subscrip Our NewsLetter</h3>
                                <div class="input-group mb-3 news-letter-input">
                                    <input type="text" class="form-control border-0" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span class="input-group-text" id="basic-addon2">Subscribe</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-8'>
                                    <ul className='footer-links'>
                                        <li>About US</li>
                                        <li>Contatc Us</li>
                                        <li>Track Order</li>
                                        <li>Terms & conditions</li>
                                        <li>Privacy and policy</li>
                                        <li>Sell With Us</li>
                                        <li>Shipping And Returns</li>
                                    </ul>
                                </div>
                                <div className='col-4 social-media'>
                                    <ul>
                                        <li className='d-flex'>
                                            <a>
                                            <img className='social-logo' src='/images/facebook.png'/>
                                            /YESHTERY
                                            </a>
                                        </li>
                                        <li className='d-flex'>
                                            <a>
                                            <img className='social-logo' src='/images/linkedin.png'/>
                                             /YESHTERY
                                            </a>
                                        </li>
                                        <li className='d-flex'>
                                            <a>
                                            <img className='social-logo' src='/images/instagram.png'/>
                                             /YESHTERY
                                            </a>
                                        </li>
                                        <li className='d-flex'>
                                            <a>
                                            <img className='social-logo' src='/images/twitter.png'/>
                                             /YESHTERY
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row bottom-footer justify-content-between align-items-center'>
                        <div className='bfr col-6 col-sm-6 col-md-4'>@2021 Yashtary all right reserved</div>
                        <div className='list-unstyled row payment-icons col-6 col-sm-6 col-md-4'>
                            <div className='col-3 d-flex justify-content-end'>
                                <img src={window.location.origin + '/images/Payment-copy-copy.png'} alt="" />
                            </div>
                            <div className='col-3'>
                                <img src={window.location.origin + '/images/images.png'} alt="" />

                            </div>
                            <div className='col-3 d-flex justify-content-start'>
                                <img src={window.location.origin + '/images/download.png'} alt="" />

                            </div>
                        </div>
                        <div className='bfl col-6 col-sm-6 col-md-4'>Power By NasNav</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;