import React, { Component, useState } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
  Button,
} from "reactstrap";

import { ScrollspyNav } from "./scrollSpy";
import { Block, getSectionId } from "../../core/block";

export interface NavbarPageProps {
  data: Block[];
}

export const NavbarPage: React.FC<NavbarPageProps> = ({ data }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const navClass = "navbar-light";
  const imglight = true;

  const menuItems = data
    .filter((block) => block.showInMenu)
    .map((block) => ({
      id: block.index,
      menuHref: getSectionId(block),
      menuTitle: block?.menuTitle || '',
    }));

  //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
  let targetId = menuItems.map((item) => {
    return item.menuHref;
  });
  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        fixed="top"
        className={"navbar-custom sticky sticky-dark " + navClass}
      >
        <Container>
          <NavbarBrand className="logo text-uppercase" href="/">
            {imglight === true ? (
              <img
                src={
                  "https://storage.googleapis.com/airtable-live/logo-light.png"
                }
                alt=""
                className="logo-light"
                height="20"
              />
            ) : (
              <img
                src={
                  "https://storage.googleapis.com/airtable-live/logo-light.png"
                }
                alt=""
                className="logo-dark"
                height="20"
              />
            )}
          </NavbarBrand>
          <NavbarToggler onClick={toggle}>
            <i className="mdi mdi-menu"></i>
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
              <Button color="success" className="btn-rounded navbar-btn">
                Try for Free
              </Button>
            </ScrollspyNav>
          </Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
