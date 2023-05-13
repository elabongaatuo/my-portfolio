import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Elabonga</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" 
                    className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#blog" className="footer__link">Blog</a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://github.com/elabongaatuo" className="footer__social-link" target="_blank" rel="noreferrer">
            <i class="bx bxl-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/yvonne-elabonga-08b69b144/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i class="bx bxl-linkedin"></i>
            </a>
            </div>
            <span className='footer__copy'>
            &#169; Signed Elabonga
            </span>
        </div>
    </footer>


  )
}

export default Footer