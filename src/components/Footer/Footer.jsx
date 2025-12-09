import footerCSS from './Footer.module.css'


export default function Footer(){

    return(
        <>
            <div className={footerCSS.FooterTemplate}>
                <p>Copyright © 2024 DEPI.</p>
                <p>All rights reserved</p>
            </div>
        </>
    )
}