"use client"
import { Header } from "@/widgets/header";
import { Button } from "@heroui/button";
import { TbArrowUpRight, TbCopy, TbCheck, TbMapPinFilled } from "react-icons/tb";

import Image from "next/image";
import { Loader, LogoIcon } from "@/shared/ui";
import { Input, Link, Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import { useState } from "react";
import ReactPlayer from "react-player";

const steps = [{
  title: "solar",
  content: <div className="flex flex-col pl-4 xs:pl-6">
    <span className="text-4xl xs:text-5xl lg:text-6xl font-bold">100</span>
    <span>MW de energía<br />entregable.</span>
  </div>
}, {
  title: "ubicación",
  content: <span><strong className="font-medium">250 hectareas</strong> ubicadas en Piura - Peru</span>
}, {
  title: "EN DESARROLLO",
  content: <span><strong className="font-medium">200</strong> empleos directos e indirectos a generar durante su desarrollo.</span>
}, {
  title: "en OPERACIÓN",
  content: <span><strong className="font-medium">100</strong> empleos directos y 250,000 hogares a beneficiarse en fase de operacion.</span>
}]

export default function Home() {
  const [showFirstVideo, setShowFirstVideo] = useState(false)
  const [showSecondVideo, setShowSecondVideo] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const toggleFirstVideo = () => setShowFirstVideo(v => !v)
  const toggleSecondVideo = () => setShowSecondVideo(v => !v)
  const handleCopy = () => {
    setIsCopied(true)
    navigator.clipboard.writeText("51933441737")
    setTimeout(() => setIsCopied(false), 1000)
  }
  const toggleContact = () => setShowContact(v => !v)

  const ABOUT_ITEMS = [{
    name: "Compañia",
    action: () => window.scrollBy({ top: 320 })
  }, {
    name: "Proyecto",
    action: toggleSecondVideo
  }, {
    name: "Crisis actual",
    action: toggleFirstVideo
  }, {
    name: "Contacto",
    action: toggleContact
  }]

  return (
    <>
      <Header
        onProjectClick={toggleSecondVideo}
        onCrisisClick={toggleFirstVideo}
        onContactClick={toggleContact}
      />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="bg-[#212121] w-full mx-0 pt-12 xl:pt-32 pb-0">
          <div className="container mx-auto flex justify-between gap-24 px-4">
            <header className="">
              <h1 className="text-3xl xs:text-5xl md:text-6xl xl:text-7xl uppercase font-black text-white leading-10 xs:leading-[4rem] md:leading-[5rem] xl:leading-[6rem] max-w-4xl">
                Generamos{" "}
                <span className="relative text-[#96FC04]">
                  energía
                  <svg className="absolute  md:block -rotate-2 scale-105 scale-y-125 top-0 left-0 w-full h-full pointer-events-none">
                    <rect x="0" y="0" width="100%" height="100%" rx="8" ry="8"
                      fill="none" stroke="#96FC04" strokeWidth="2" strokeDasharray="10,5" />
                  </svg>
                </span> para el futuro.
              </h1>
              <p className="text-[#96FC04] text-lg pl-1">Energía renovable</p>
            </header>
            <article className="max-w-52 lg:mr-[5%] mt-[5%] hidden md:block">
              <div className="flex items-center gap-3">
                <div className="flex items-center text-center justify-between w-12 h-12 bg-[#96FC04] font-bold text-xs text-[#212121] rounded-full">
                  <span>100 MW+</span>
                </div>
                <div className="flex flex-col text-[#96FC04] text-xs">
                  <span>Energía</span>
                  <span>Renovable</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <Button
                  href="#"
                  className="text-[#96FC04] border-[#96FC04] font-bold"
                  radius="sm"
                  fullWidth
                  variant="bordered"
                  size="lg"
                  onPress={toggleFirstVideo}
                  endContent={
                    <TbArrowUpRight className="text-2xl" />
                  }

                >
                  Crisis actual
                </Button>
                <Button
                  href="#"
                  className="mt-4 bg-[#96FC04] text-[#212121] font-bold"
                  fullWidth
                  radius="sm"
                  size="lg"
                  onPress={toggleSecondVideo}
                  endContent={
                    <TbArrowUpRight className="text-2xl" />
                  }

                >
                  Proyecto
                </Button>
              </div>
            </article>
          </div>
          <div className="w-full px-4 h-min relative mt-8 md:mt-12 xl:mt-16 before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:bg-white">
            <div className="container mx-auto relative h-[138px] xs:h-[156px] md:h-[296px] lg:h-[420px]">
              <picture className="flex-grow rounded-lg overflow-hidden w-full">
                <Image
                  src="/images/hero.avif"
                  alt="Wind Turbines"
                  fill
                  className="rounded-lg object-cover object-bottom outline outline-[#212121] outline-[12px] outline-offset-0"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="container mx-auto pt-4 md:pt-12 lg:pt-24" id="about-us">

          <article className="md:hidden flex justify-between items-center px-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center text-center justify-between w-12 h-12 bg-[#96FC04] font-bold text-xs text-[#212121] rounded-full">
                <span>100 MW+</span>
              </div>
              <div className="flex flex-col text-[#212121] text-xs">
                <span>Energía</span>
                <span>Renovable</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="">
              {/* <Button
                href="#"
                className="text-[#96FC04] border-[#96FC04] font-bold"
                radius="sm"
                fullWidth
                variant="bordered"
                size="lg"
                onPress={toggleFirstVideo}
                endContent={
                  <TbArrowUpRight className="text-2xl" />
                }

              >
                Crisis actual
              </Button> */}
              <Button
                href="#"
                className=" bg-[#96FC04] text-[#212121] font-bold"
                fullWidth
                radius="sm"
                size="lg"
                onPress={toggleSecondVideo}
                endContent={
                  <TbArrowUpRight className="text-2xl" />
                }

              >
                Proyecto
              </Button>
            </div>
          </article>

          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-24">
            <article className="px-4 md:py-0 pt-8">
              <h2 className="font-bold text-2xl md:text-3xl">Sobre Nosotros<span className="text-[#96FC04]">.</span></h2>
              <div className="flex flex-wrap w-full gap-3 mt-6">
                {ABOUT_ITEMS.map(({ name, action }, i) => {
                  return (
                    <Button
                      key={i}
                      variant="bordered"
                      onPress={action}
                      className=""
                    >
                      {name}
                    </Button>
                  )
                })}
              </div>
            </article>
            <article className="md:max-w-sm lg:max-w-2xl px-4 md:pl-0">
              <h2 className="font-bold text-2xl md:text-3xl ">ElectroSolar<span className="text-[#96FC04]">.</span></h2>
              <p className="mt-6 lg:text-lg">
                <strong>ElectroSolar</strong> es una empresa generadora de energía renovable y gestión de activos con sede en Peru. <strong>ElectroSolar</strong> esta desarrollando 5 proyectos que generaran 100 MW de energía entregable.
              </p>
              <div className="mt-10 flex gap-4">
                <Button
                  href="#"
                  className="bg-[#212121] text-white font-bold"
                  radius="sm"
                  size="lg"
                  onPress={toggleSecondVideo}
                  endContent={
                    <TbArrowUpRight className="text-2xl text-[#96FC04]" />
                  }

                >
                  Proyecto
                </Button>
                <Button
                  href="#"
                  className="text-[#212121] font-bold"
                  radius="sm"
                  size="lg"
                  variant="bordered"
                  onPress={toggleFirstVideo}
                  endContent={
                    <TbArrowUpRight className="text-2xl" />
                  }

                >
                  Crisis actual
                </Button>
              </div>
            </article>
          </div>

          <div className="mt-16">
            {steps.map(({ title, content }, i) => (
              <article key={i} className="relative flex flex-col md:flex-row px-4 py-8 mt-2 justify-between items-start border-t rounded-3xl border-[#212121]">
                <LogoIcon className="w-4 md:6 absolute right-4 fill-[#212121]" />
                <div className="flex items-center gap-2">
                  <small>0{i + 1}</small>
                  <h3 className="text-2xl font-bold uppercase">{title}</h3>
                </div>
                <summary className="flex mt-2 md:mt-0 gap-4 items-center text-lg xs:text-xl md:max-w-sm lg:max-w-none lg:w-[42rem] md:px-4 lg:text-start">
                  {!i && (
                    <div className="relative">
                      <figure className="w-44 h-32 xs:w-52 xs:h-40 lg:w-80 lg:h-56 relative">
                        <Image
                          src="/images/panels.jpg"
                          alt="Panels"
                          fill
                          className="rounded-lg object-cover"
                        />
                      </figure>
                      <Button
                        href="#"
                        className="!absolute bottom-4 outline-4 outline-white outline-offset-0 left-full -translate-x-1/2 bg-[#212121] text-[#96FC04] font-bold"
                        radius="full"
                        size="lg"
                        isIconOnly
                        onPress={toggleSecondVideo}
                        endContent={
                          <TbArrowUpRight className="text-2xl" />
                        }

                      >
                      </Button>
                    </div>
                  )}
                  {content}
                </summary>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-6 xs:mt-10 md:mt-0 px-4 md:px8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:py-8 md:mt-12">
            <p className="font-medium text-center md:text-start text-2xl xs:text-[1.75rem] sm:text-3xl lg:text-5xl max-w-[299px] xs:max-w-none sm:max-w-xl md:max-w-[560px] lg:max-w-2xl xl:max-w-5xl">
              Nos dedicamos a transformar la manera en que el país obtiene su electricidad, apostando por <span className="relative before:block before:absolute before:-bottom-0.5 before:left-0 before:-rotate-2 before:w-full before:h-2 before:md:h-4 before:rounded-full before:bg-[#96FC04]"><strong className="relative font-medium">fuentes limpias</strong></span>, sostenibles y eficientes.
            </p>
            <div className="hidden mt-10 md:mt-16 md:px-6 flex-col items-center md:items-start md:flex justify-between">
              {/* <span className="text-xl">- Electro Solar</span> */}
              <div>
                <strong className="block text-5xl">90+</strong>
                <span className="text-lg">Toneladas de CO <small>2</small>evitadas por año</span>
              </div>
            </div>
          </div>
          <picture className="relative w-[129px] h-[355px] xs:w-[159px] xs:h-[435px] lg:h-[506px] lg:w-[175px] flex-shrink-0">
            <Image
              src="/images/turbine.png"
              alt="Wind Turbines"
              fill
              className="rounded-lg"
            />
          </picture>
        </section>

        <section className="container mx-auto mt-9 md:mt-16  mb-12">
          <h2 className="text-3xl md:text-5xl px-4">¿Donde estamos ubicados?</h2>
          <p className="text-base md:text-2xl px-4 mt-2">250 hectáreas listas para generar energía sostenible que impulse el <strong>cambio</strong>.</p>
          <picture className="relative block w-full h-[380px] xs:h-[420px] 2xl:h-[500px] md:mt-20">
            <Image
              src="/images/map.png"
              alt="Map"
              fill
              className="rounded-lg object-cover object-left"
            />
            <span className="absolute bottom-[32%] left-[136px] xs:left-[156px] 2xl:left-[182px] text-xl flex items-center gap-1">
              <TbMapPinFilled />
              <strong>Piura, Perú</strong>
            </span>
          </picture>
          <div className="flex items-center mt-8 mb-24">
            <Button
              href="#"
              className="mt-10 !mx-auto text-[#212121] font-bold"
              radius="sm"
              variant="bordered"
              size="lg"
              onPress={toggleSecondVideo}
              endContent={
                <TbArrowUpRight className="text-2xl" />
              }

            >
              Proyecto
            </Button>
          </div>
        </section>

      </main>
      <footer className="bg-[#212121] pb-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            <h3 className="relative text-white leading-10 md:leading-[3.32rem] xl:leading-[4rem] text-center lg:text-start text-3xl xs:text-4xl md:text-5xl xl:text-6xl mt-12 lg:mt-0 lg:saturate-100 lg:mix-blend-difference font-black bottom-[3.75rem] uppercase" >
              Regístrate y recibe avances de nuestros proyectos y <span className="text-[#96FC04]">oportunidades</span> de inversion.
            </h3>
            <form className="relative bottom-[4rem] lg:bottom-[6rem] xl:bottom-[8rem] 2xl:bottom-[4rem] bg-white xs:w-96 md:min-w-80 h-max p-9 rounded-xl outline outline-[#212121] outline-[8px] outline-offset-0">
              <Input
                radius="sm"
                size="lg"
                placeholder="Ingresa tu correo"
              />
              <Button
                href="#"
                className="mt-6 bg-[#96FC04] text-[#212121] font-bold"
                fullWidth
                radius="sm"
                size="lg"
                endContent={
                  <TbArrowUpRight className="text-2xlt" />
                }

              >
                Enviar
              </Button>
            </form>
          </div>
          <div className="flex flex-col md:flex-row justify-center text-center lg:text-start md:justify-around lg:justify-between items-center">
            <div>
              <h4 className="font-bold text-white text-2xl">ElectroSolar<span className="text-[#96FC04]">.</span></h4>
              <div className="flex flex-col text-white/90 mt-4">
                <span>Sede Lima - Miraflores</span>
                <span>Planta Piura - Peru</span>
                <span>(+51) 951 615 540</span>
              </div>
            </div>
            <ul className="flex flex-col md:flex-row gap-8 mt-12 md:mt-0">
              <li>
                <Link aria-current="page" href="#about-us" className="text-white/90">
                  NOSOTROS
                </Link>
              </li>
              <li>
                <Link aria-current="page" onPress={toggleSecondVideo} className="text-white/90">
                  PROYECTO
                </Link>
              </li>
              <li>
                <Link aria-current="page" onPress={toggleContact} className="text-white/90">
                  CONTACTO
                </Link>
              </li>
            </ul>
          </div>
          <p className="mt-12 md:mt-16 lg:mt-20 border-t pt-7 px-8 text-center border-white rounded-2xl text-white/60">Copyright © 2025 Electro Solar S. A. - TODOS LOS DERECHOS RESERVADOS</p>
        </div>
      </footer>
      <Modal
        isOpen={showFirstVideo}
        size="2xl"
        onClose={toggleFirstVideo}
      >
        <ModalContent>
          <ModalBody className="p-0 !h-[420px]">
            <Loader
              theme="dark"
              classNames={{
                container: "-z-10"
              }}
            />
            <ReactPlayer
              url="https://vimeo.com/1063466130/3ab6b5e30c?share=copy"
              width="100%"
              height={374}
              loop
              playing
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={showSecondVideo}
        size="2xl"
        onClose={toggleSecondVideo}
      >
        <ModalContent>
          <ModalBody className="p-0 !h-[420px]">
            <Loader
              theme="dark"
              classNames={{
                container: "-z-10"
              }}
            />
            <ReactPlayer
              url="https://vimeo.com/1063467705/24e0d6cb8c?share=copy"
              width="100%"
              height={374}
              loop
              playing
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={showContact}
        size="sm"
        onClose={toggleContact}
      >
        <ModalContent>
          <ModalHeader>Contacto</ModalHeader>
          <ModalBody className="pb-4">
            <label className="flex items-center justify-between">
              <span>Teléfono:</span>
              <div className="flex items-center gap-2">
                <span>(+51) 933 441 737</span>
                <Button
                  isIconOnly
                  size="sm"
                  variant="flat"
                  disabled={isCopied}
                  onPress={handleCopy}
                  endContent={!isCopied ? <TbCopy className="text-lg text-[#212121]" /> : <TbCheck className="text-lg text-[#96FC04]" />}
                />
              </div>
            </label>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
