import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai'
import './Footer.css';


const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <footer className='container-fluid footer mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-12'>
                        <div className='reserved text-white'>
                            <p className='text-center'>	&copy; {getCurrentYear()} All rights reserved by </p>
                        </div>
                        <div className='horigental'></div>
                        <div className='social-icon text-center my-4'>
                            <a target="blank" href="https://github.com/zannatreya">
                                <BsFacebook className='social-icon-fb' />
                            </a>
                            <a target="blank" href="https://github.com/zannatreya">
                                <AiFillGithub className='social-icon-git' />
                            </a>
                            <a target="blank" href="https://github.com/zannatreya">
                                <AiFillInstagram className='social-icon-insta' />
                            </a>
                            <a target="blank" href="https://www.youtube.com/channel/UCfSCklo94X_Z8T_pTB2IsOA">
                                <BsYoutube className='social-icon-uTube' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;