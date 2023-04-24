import { ReactComponent as LogoSvg } from '../Logo/logo.svg';

import { BsGithub } from 'react-icons/bs';
import './footer.css';
export const Footer = () => {
  return (
    <div className="footer_conteiner">
      <div className="footer_logo">
        <LogoSvg className="logo" />
        <p>
          новостной сайт
          <br />© 2023
        </p>
      </div>
      <div className="footer__info">
        <h3>Создатели:</h3>
        <ul className="footer__link">
          <li>
            Каптурин Андрей
            <BsGithub className="footer__social" />
          </li>
          <li>
            Боронина Карина <BsGithub className="footer__social" />
          </li>
          <li>
            Веселкина Диана <BsGithub className="footer__social" />
          </li>
        </ul>
      </div>
    </div>
  );
};
