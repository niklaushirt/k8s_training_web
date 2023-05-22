import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher'; // default export, no brackets needed
import { divider } from './Switcher.module.scss';


export const CustomSwitcherDivider = (props) => (
  <li className={divider}>
    <span {...props} />
  </li>
);

export const CustomSwitcherLink = (props) => (
  <li>
  <a
    role="button"
    
    href="{...props}"> test
  </a>
</li>
);


const CustomSwitcher = (props) => (
  <Switcher {...props}>
    <CustomSwitcherLink  href="https://somelinks.id">
      Japan Festival
    </CustomSwitcherLink>
    <CustomSwitcherLink href="https://somelinks.id">
      Japan Festival Media
    </CustomSwitcherLink>
    <CustomSwitcherLink href="https://somelinks.id">
      Japan Festival Platfrom
    </CustomSwitcherLink>
    <CustomSwitcherDivider>Technology Stack</CustomSwitcherDivider>
  </Switcher>
);

export default CustomSwitcher;