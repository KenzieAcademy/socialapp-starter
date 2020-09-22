import React from 'react';

import { Dropdown } from 'semantic-ui-react';

const PlanetDropdown = () => (
    <Dropdown text='Planets'>
      <Dropdown.Menu>
        <Dropdown.Item text='Mercury' />
        <Dropdown.Item text='Venus'  />
        <Dropdown.Item text='Earth'  />
        <Dropdown.Item text='Mars'  />
        <Dropdown.Item text='Jupiter' />
        <Dropdown.Item icon='Saturn'  />
        <Dropdown.Item icon='Uranus'  />
        <Dropdown.Divider />
        <Dropdown.Item text='Neptune' />
        <Dropdown.Item text='Pluto' />
        <Dropdown.Item text='Planet X' />
      </Dropdown.Menu>
    </Dropdown>
  )

  export default PlanetDropdown;