"use client"

import { Logo } from "@/shared/ui";
import { Button, Link } from "@heroui/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { FC } from "react";
;


type Props = {
  onProjectClick: () => void
  onContactClick: () => void
}

export const Header: FC<Props> = (props) => {
  return (
    <Navbar classNames={{
      wrapper: "px-0 max-w-none !container",
      base: "bg-[#212121] pt-2"
    }}>
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
          <Link onPress={props.onContactClick} className="text-current">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
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
    </Navbar>
  );
}