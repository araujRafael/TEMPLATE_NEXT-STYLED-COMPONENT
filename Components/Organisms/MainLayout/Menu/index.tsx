import React from 'react';
import { navLinks } from '../../../../Constants/NavLinks';
import Href from '../../../Atoms/Href';
import { Ul } from '../../../Atoms/Ul';
import NavBar from '../../../Molecules/NavBar';

// import { Container } from './styles';

interface MenuProps {
  hasTheme?: boolean
}

const Menu: React.FC<MenuProps> = ({
  hasTheme
}) => {
  return (
    <NavBar hasTheme={hasTheme} >
      <Ul className='center-row'>
        {navLinks.map((x, i) => (
          <li key={i.toString()} >
            <Href
              href={x.href}
              title={x.name}
            />
          </li>
        ))}
      </Ul>
    </NavBar>
  );
}

export default Menu;