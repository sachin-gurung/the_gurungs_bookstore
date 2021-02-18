import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Travel
                </DropdownItem>
                <DropdownItem>
                  Children
                </DropdownItem>
                <DropdownItem>
                  Families & Relationships
                </DropdownItem>
                <DropdownItem>
                  Fantasy
                </DropdownItem>
                <DropdownItem>
                  Adventure
                </DropdownItem>
                <DropdownItem>
                  Romance
                </DropdownItem>
                <DropdownItem>
                  Mystery
                </DropdownItem>
                <DropdownItem>
                  Horror
                </DropdownItem>
                <DropdownItem>
                  Thriller
                </DropdownItem>
                <DropdownItem>
                  Science Fiction
                </DropdownItem>
                <DropdownItem>
                  Cooking
                </DropdownItem>
                <DropdownItem>
                  Art
                </DropdownItem>
                <DropdownItem>
                  History
                </DropdownItem>
                <DropdownItem>
                  Self-help / Personal Development
                </DropdownItem>
                <DropdownItem>
                  Health
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="mr-auto" navbar></Nav>
          <ButtonGroup>
      <Button size="md" color="success">Login </Button>
      &nbsp;&nbsp;&nbsp;
      <Button size="md" color="danger"> Sign-up</Button>
      
    </ButtonGroup>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;