import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { headerFont, subHeaderFont, navigationFont } from '../../font/font';
import Image from 'next/image';
import Link from 'next/link';
import { portfolios } from "../../portfolios/portfolios";

export default function ThirdLanding() {
  return (
    <>
      <div id="portfolio" className="container max-w-xs py-11 mx-auto md:max-w-3xl md:py-7 2xl:max-w-7xl 2xl:py-16">
        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider className="lg:block hidden" naturalSlideWidth={370} isIntrinsicHeight={true} totalSlides={6} visibleSlides={3.5} step={1} infinite={true}>
            <div className="w-full relative flex flex-col items-center justify-center">
              <div className="flex w-full justify-between mb-5">
                <div className={[navigationFont.className, "w-60", "text-4xl"].join(' ')}>
                  이전 프로젝트를 살펴보세요
                </div>
                <div className="flex items-end">
                  <ButtonBack role="button" aria-label="slide backward" className="relative mr-2 cursor-pointer" id="prev">
                    <Image className="object-cover" src="/button-backward.svg" alt="button-backward" width={50} height={50} />
                  </ButtonBack>
                  <ButtonNext role="button" aria-label="slide forward" className="relative cursor-pointer" id="next">
                    <Image className="object-cover" src="/button-forward.svg" alt="button-backward" width={50} height={50} />
                  </ButtonNext>
                </div>
              </div>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full w-full flex gap-4 items-center justify-start ">
                    {portfolios.map((portfolio, index) => {
                      return (
                        <Slide key={index} className="h-[440px]" index={index}>
                          <Link href="/portfolio">
                            <div className="flex relative w-full">
                              <div className="flex relative">
                                <Image className="object-cover object-center w-full rounded-2xl" src={portfolio.pics[0]} alt={portfolio.name} width={0}
                                  height={440} sizes="100vw" style={{ width: '370px', height: '440px' }} />
                              </div>
                              <div className="absolute w-full h-full">
                                <div className="flex h-full items-end">
                                  <div className="bg-card-portfolio w-[370px] rounded-b-2xl backdrop-blur-sm pl-4 py-1.5">
                                    <h3 className={[headerFont.className, "text-xl", "text-white"].join(' ')}>{portfolio.name}</h3>
                                    <h3 className={[subHeaderFont.className, "text-sm", "text-white"].join(' ')}>프로젝트 타입: {portfolio.tags[0]}</h3>
                                    <h3 className={[subHeaderFont.className, "text-sm", "text-white"].join(' ')}>프로젝트 기간: {portfolio.duration}</h3>
                                    <h3 className={[subHeaderFont.className, "text-sm", "text-white"].join(' ')}>지역: {portfolio.location}</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Slide>
                      )
                    })}
                  </div>
                </Slider>
              </div>
            </div>
          </CarouselProvider>

          {/* Carousel for tablet and medium size devices */}
          <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={200} isIntrinsicHeight={true} totalSlides={6} visibleSlides={3.5} step={1} infinite={true}>
            <div className="w-full relative flex flex-col items-center justify-center">
              <div className="flex w-full justify-between mb-5">
                <div className={[navigationFont.className, "w-32", "text-xl"].join(' ')}>
                  이전 프로젝트를 살펴보세요
                </div>
                <div className="flex items-end">
                  <ButtonBack role="button" aria-label="slide backward" className="relative mr-2 cursor-pointer" id="prev">
                    <Image className="object-cover" src="/button-backward.svg" alt="button-backward" width={25} height={25} />
                  </ButtonBack>
                  <ButtonNext role="button" aria-label="slide forward" className="relative cursor-pointer" id="next">
                    <Image className="object-cover" src="/button-forward.svg" alt="button-backward" width={25} height={25} />
                  </ButtonNext>
                </div>
              </div>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full w-full flex gap-4 items-center justify-start ">
                    {portfolios.map((portfolio, index) => {
                      return (
                        <Slide key={index} className="h-[230px]" index={index}>
                          <Link href="/portfolio">
                            <div className="flex relative w-full">
                              <div className="flex relative">
                                <Image className="object-cover object-center w-full rounded-2xl" src={portfolio.pics[0]} alt={portfolio.name} width={0}
                                  height={230} sizes="100vw" style={{ width: '210px', height: '230px' }} />
                              </div>
                              <div className="absolute w-full h-full">
                                <div className="flex h-full items-end">
                                  <div className="bg-card-portfolio w-full rounded-b-2xl backdrop-blur-sm pl-4 py-1.5">
                                    <h3 className={[headerFont.className, "text-xs", "text-white"].join(' ')}>{portfolio.name}</h3>
                                    <h3 className={[subHeaderFont.className, "text-[10px]", "text-white"].join(' ')}>프로젝트 타입: {portfolio.tags[0]}</h3>
                                    <h3 className={[subHeaderFont.className, "text-[10px]", "text-white"].join(' ')}>프로젝트 기간: {portfolio.duration}</h3>
                                    <h3 className={[subHeaderFont.className, "text-[10px]", "text-white"].join(' ')}>지역: {portfolio.location}</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                        </Slide>

                      )
                    })}
                  </div>
                </Slider>
              </div>
            </div>
          </CarouselProvider>

          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider className="block md:hidden " naturalSlideWidth={150} isIntrinsicHeight={true} totalSlides={6} visibleSlides={2.2} step={1} infinite={true}>
            <div className="w-full relative flex flex-col items-center justify-center">
              <div className="flex w-full justify-between mb-5">
                <div className={[navigationFont.className, "w-24", "text-sm"].join(' ')}>
                  이전 프로젝트를 살펴보세요
                </div>
                <div className="flex items-end">
                  <ButtonBack role="button" aria-label="slide backward" className="relative mr-2 cursor-pointer" id="prev">
                    <Image className="object-cover" src="/button-backward.svg" alt="button-backward" width={25} height={25} />
                  </ButtonBack>
                  <ButtonNext role="button" aria-label="slide forward" className="relative cursor-pointer" id="next">
                    <Image className="object-cover" src="/button-forward.svg" alt="button-backward" width={25} height={25} />
                  </ButtonNext>
                </div>
              </div>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full w-full flex gap-4 items-center justify-start ">
                    {portfolios.map((portfolio, index) => {
                      return (
                        <Slide key={index} className="h-[170px]" index={index}>
                          <Link href="/portfolio">
                            <div className="flex relative w-full">
                              <div className="flex relative">
                                <Image className="object-cover object-center w-full rounded-2xl" src={portfolio.pics[0]} alt={portfolio.name} width={0}
                                  height={170} sizes="100vw" style={{ width: '150px', height: '170px' }} />
                              </div>
                              <div className="absolute w-full h-full">
                                <div className="flex h-full items-end">
                                  <div className="bg-card-portfolio w-full rounded-b-2xl backdrop-blur-sm pl-4 py-1.5">
                                    <h3 className={[headerFont.className, "text-xs", "text-white"].join(' ')}>{portfolio.name}</h3>
                                    <h3 className={[subHeaderFont.className, "text-[9px]", "text-white"].join(' ')}>프로젝트 타입: {portfolio.tags[0]}</h3>
                                    <h3 className={[subHeaderFont.className, "text-[9px]", "text-white"].join(' ')}>프로젝트 기간: {portfolio.duration}</h3>
                                    <h3 className={[subHeaderFont.className, "text-[9px]", "text-white"].join(' ')}>지역: {portfolio.location}</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Slide>

                      )
                    })}
                  </div>
                </Slider>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}
