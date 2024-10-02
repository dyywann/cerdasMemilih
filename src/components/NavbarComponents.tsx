import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-pilkada", label: "Tentang Pilkada" },
  { href: "/kandidat", label: "Kandidat" },
  { href: "/daerah-pilihan", label: "Daerah Pilihan" },
  { href: "/berita", label: "Berita" },
  { href: "/peta-interaktif", label: "Peta Interaktif" },
];

export const NavbarComponents = () => {
  const { asPath } = useRouter();
  return (
    <div className="sticky top-0 z-50">
      <Navbar fluid rounded className="mx-auto top-0 sticky md:px-20 drop-shadow-lg z-40">
        <NavbarBrand>
          <Image src={"/logo-cerdasmemilih.svg"} alt="Logo CerdasMemilih" width={150} height={150} />
        </NavbarBrand>

        <NavbarToggle />

        <NavbarCollapse>
          {links.map((tautan) => {
            const isActive = asPath === tautan.href;

            return (
              <Link
                href={tautan.href}
                key={tautan.href}
                className={`${
                  isActive ? "font-semibold text-secondary-color border-b-0 sm:border-b-2 border-accent-color mb-3 text-center sm:text-left sm:mb-0" : " font-semibold text-secondary-text-color mb-3 text-center sm:text-left sm:mb-0"
                }`}
              >
                {tautan.label}
              </Link>
            );
          })}
        </NavbarCollapse>

        <NavbarCollapse>
          <button className="px-5 py-3 bg-accent-color rounded-xl font-sans text-white hover:bg-[#ff9b06e5]">Jadwal Pilkada</button>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};
