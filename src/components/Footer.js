import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLang } from '../utils/appConfigSlice';
import { FOOTER_LANG_CONFIG } from '../utils/constant';

const Footer = () => {
    const dispath = useDispatch();
    const changedlang = useSelector((store) => store.supportedlang.Lang);
    const footerLinks = FOOTER_LANG_CONFIG[changedlang].links;
    const footerLinksSecond = FOOTER_LANG_CONFIG[changedlang].linksSecond;
    return (
        <div className="footer bg-black">
            <div className="wrap w-8/12 m-auto py-8 text-gray-500">
                <div className="number">
                    <p>{FOOTER_LANG_CONFIG[changedlang].number}<span> 000-800-919-1694</span></p>
                </div>
                <div className="links mt-10">
                    <ul className="flex gap-36">
                        {footerLinks.map((elm, i) => <li key={i}>{elm.listItem}</li>)}
                    </ul>
                    <ul className="flex gap-8 mt-4">
                        {footerLinksSecond.map((elm, i) => <li key={i}>{elm.listItem}</li>)}
                    </ul>
                </div>
                <select
                    name="lang"
                    id="language"
                    className=" mr-6 px-4 py-1 bg-transparent text-white border border-white rounded-md font-bold mt-4"
                    onChange={(e) => {
                        dispath(changeLang(e.target.value))
                    }}>
                    <option className="bg-black" value="en">
                        English
                    </option>
                    <option className="bg-black" value="hindi">
                        Hindi
                    </option>
                </select>
            </div>
        </div>
    )
}

export default Footer
