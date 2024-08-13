import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <div className='flex items-center justify-around'>
            <div>
                <div>
                    ONLINE SHOPPING
                </div>

                <div>
                    <div>Women</div>
                    <div>Kids</div>
                    <div>Furniture</div>
                    <div>Beauty</div>
                    <div>Fragrance</div>
                    <div>Groceries</div>
                </div>


            </div>
            <div>
            <div>
                CUSTOMER POLICIES
                </div>
<div>
                <div>Contact us</div>
                <div>FAQ</div>
                <div>T&C</div>
                <div>Terms of Use</div>



            </div>
            </div>
            <div>
                EXPERIENCE IT

                <div>Keep in Touch</div>
                <div className='flex'><IoLogoFacebook /> <TiSocialTwitter /> <TiSocialYoutube /> <FaSquareInstagram /></div>



            </div>
            <div>
                100% ORIGINAL guarantee for all products
                <div>
                    Return within 30days of receiving your order

                </div>
            </div>
        </div>
    )



}

export default Footer
