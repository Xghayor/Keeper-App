import React from "react";

const year = new Date().getFullYear();


const Footer = () => {
    return (
        <footer>
        <p>Copright @{year}</p>
        </footer>
    )
}

export default Footer;