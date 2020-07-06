import React, {  useState } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";

import { ScrollspyNav } from "./scrollSpy";
import { Block, getSectionId } from "../../core/block";
import { Menu } from 'react-feather';


export interface NavbarPageProps {
  data: Block[];
}

export const NavbarPage: React.FC<NavbarPageProps> = ({ data }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const navClass = "navbar-dark";
  const imglight = true;

  const menuItems = data
      .filter((block) => block.showInMenu)
      .map((block) => ({
        id: block.index,
        menuHref: getSectionId(block),
        menuTitle: block?.menuTitle || "",
      }));

  //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
  let targetId = menuItems.map((item) => {
    return item.menuHref;
  });
  return (
      <Navbar
          expand="lg"
          fixed="top"
          className={"navbar-custom sticky sticky-dark navbar-dark " + navClass}
          style={{ marginTop: "50px", backgroundColor: "none" }}
      >
        <Container>
          <NavbarBrand className="logo text-uppercase" href="/">
            <img
                src={
                  "https://storage.googleapis.com/airtable-live/logo.png"
                }
                alt=""
                className="logo-light"
                height="20"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} style={{color: "black", borderColor: "black"}}>
            <i className="mdi mdi-menu"><Menu /></i>
          </NavbarToggler>

          <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
            <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="200"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
            >
              <Nav navbar className="ml-auto navbar-center" id="mySidenav">
                {menuItems.map((item, key) => (
                    <NavItem
                        key={key}
                        className={item.menuTitle === "Home" ? "active" : ""}
                    >
                      <NavLink href={"#" + item.menuHref}>
                        {" "}
                        {item.menuTitle}
                      </NavLink>
                    </NavItem>
                ))}
              </Nav>
            </ScrollspyNav>
          </Collapse>
        </Container>
      </Navbar>
  );
};
