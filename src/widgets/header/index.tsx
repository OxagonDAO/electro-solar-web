"use client"

import { Logo } from "@/shared/ui";
import { Button, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { FC, useState } from "react";
;


type Props = {
  onProjectClick: () => void,
  onCrisisClick: () => void,
  onContactClick: () => void,
}

export const Header: FC<Props> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(v => !v)
    console.log("close")
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      classNames={{
        wrapper: "px-4 max-w-none !container",
        base: "bg-[#212121] pt-2"
      }}
    >
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive className="text-[#89939E] data-[active=true]:text-white">
          <Link href="#about-us" className="text-current">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem className="text-[#89939E] data-[active=true]:text-white">
          <Link onPress={props.onProjectClick} className="text-current">
            Proyecto
          </Link>
        </NavbarItem>
        <NavbarItem className="text-[#89939E] data-[active=true]:text-white">
          <Link onPress={props.onCrisisClick} className="text-current">
            Crisis actual
          </Link>
        </NavbarItem>
        <NavbarItem className="text-[#89939E] data-[active=true]:text-white">
          <Link onPress={props.onContactClick} className="text-current">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="default"
            href="#"
            variant="bordered"
            className="text-white px-6"
            radius="sm"
            onPress={props.onContactClick}
          >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white "

        />
      </NavbarContent>
      <NavbarMenu className="bg-[#212121] pt-8">
        <NavbarMenuItem>
          <Link
            className="w-full text-white justify-center"
            href="#about-us"
            size="lg"
            onPress={toggleMenu}
          >
            Nosotros
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-white justify-center"
            onPress={() => {
              toggleMenu()
              props.onProjectClick()
            }}
            size="lg"
          >
            Proyecto
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-white justify-center"
            onPress={() => {
              toggleMenu()
              props.onContactClick()
            }}
            size="lg"
          >
            Contacto
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}