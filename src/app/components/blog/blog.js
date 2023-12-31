'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { subHeaderFont, navigationFont } from '../font/font';
import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Lightbox = ({ imageSrc, altText, closeLightbox, isDesktop }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
    onClick={closeLightbox}
  >
    <div className="max-w-full max-h-full">
      <Image
        src={imageSrc}
        alt={altText}
        layout="responsive"
        width={isDesktop ? 800 : 600}
        height={isDesktop ? 600 : 400}
        objectFit="contain"
        objectPosition="center"
      />
    </div>
  </div>
);

export default function Blog(props) {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <>
      <div className="flex flex-col max-w-6xl mx-auto mb-24">
        <div className="mb-4">
          <div className={[navigationFont.className, 'text-sm', 'text-black', 'md:text-base', 'lg:text-lg'].join(' ')}>{props.name}</div>
          <div className="pt-1.5 pb-3.5">
            <span className={[subHeaderFont.className, 'text-xs', 'text-black', 'lg:text-sm', 'opacity-80'].join(' ')}>
              프로젝트 기간: {props.duration} | 컨베이어 타입: {props.type} | 지역: {props.location}
            </span>
          </div>
          <div className={[subHeaderFont.className, 'text-xs', 'lg:text-sm', 'text-black'].join(' ')}>{props.desc}</div>
        </div>
        <div>
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider className="lg:block hidden" naturalSlideWidth={330} isIntrinsicHeight={true} totalSlides={6} visibleSlides={3} step={1} infinite={true}>
            <div className="w-full relative flex flex-row items-center justify-center">
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full w-full flex gap-4 items-center justify-start ">
                    {props.pics.map((pic, index) => {
                      return (
                        <Slide key={index} className="h-[215px]" index={index}>
                          <div className="flex relative w-full">
                            <div className="flex relative">
                              <Image
                                alt={pic}
                                className="object-cover object-center w-full rounded-2xl"
                                src={pic}
                                width={0}
                                height={215}
                                sizes="100vw"
                                style={{ width: '330px', height: '215px' }}
                                onClick={() => openLightbox(pic)}
                              />
                            </div>
                          </div>
                        </Slide>
                      );
                    })}
                  </div>
                </Slider>
              </div>
              <div className="flex w-4 h-[215px] items-center justify-center">
                <div className="flex items-end">
                  <ButtonNext role="button" aria-label="slide forward" className="relative cursor-pointer" id="next">
                    <Image className="object-cover" src="/vector-forward.svg" alt="button-backward" width={11} height={16} />
                  </ButtonNext>
                </div>
              </div>
            </div>
          </CarouselProvider>

          {/* Carousel for tablet and medium size devices */}
          <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={230} isIntrinsicHeight={true} totalSlides={6} visibleSlides={3} step={1} infinite={true}>
            <div className="w-full relative flex flex-row items-center justify-center">
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full w-full flex gap-4 items-center justify-start ">
                    {props.pics.map((pic, index) => {
                      return (
                        <Slide key={index} className="h-[150px]" index={index}>
                          <div className="flex relative w-full">
                            <div className="flex relative">
                              <Image
                                alt={pic}
                                className="object-cover object-center w-full rounded-2xl"
                                src={pic}
                                width={0}
                                height={150}
                                sizes="100vw"
                                style={{ width: '230px', height: '150px' }}
                                onClick={() => openLightbox(pic)}
                              />
                            </div>
                          </div>
                        </Slide>
                      );
                    })}
                  </div>
                </Slider>
              </div>
              <div className="flex w-4 h-[150px] items-center justify-center">
                <div className="flex items-end">
                  <ButtonNext role="button" aria-label="slide forward" className="relative cursor-pointer" id="next">
                    <Image className="object-cover" src="/vector-forward.svg" alt="button-backward" width={7} height={15} />
                  </ButtonNext>
                </div>
              </div>
            </div>
          </CarouselProvider>

          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider className="block md:hidden" naturalSlideWidth={140} isIntrinsicHeight={true} totalSlides={6} visibleSlides={2.5} step={1} infinite={true}>
            <div className="w-full relative flex flex-row items-center justify-center">
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full w-full flex gap-4 items-center justify-start ">
                    {props.pics.map((pic, index) => {
                      return (
                        <Slide key={index} className="h-[90px]" index={index}>
                          <div className="flex relative w-full">
                            <div className="flex relative">
                              <Image
                                alt={pic}
                                className="object-cover object-center w-full rounded-2xl"
                                src={pic}
                                width={0}
                                height={90}
                                sizes="100vw"
                                style={{ width: '140px', height: '90px' }}
                                onClick={() => openLightbox(pic)}
                              />
                            </div>
                          </div>
                        </Slide>
                      );
                    })}
                  </div>
                </Slider>
              </div>
              <div className="flex w-4 ml-2 h-[90px] items-center justify-center bg-grey-2">
                <div className="flex items-end">
                  <ButtonNext role="button" aria-label="slide forward" className="relative cursor-pointer" id="next">
                    <Image className="object-cover" src="/vector-forward.svg" alt="button-backward" width={5} height={16} />
                  </ButtonNext>
                </div>
              </div>
            </div>
          </CarouselProvider>
          {lightboxImage && (
            <Lightbox
              imageSrc={lightboxImage}
              altText="Lightbox Image"
              closeLightbox={closeLightbox}
              isDesktop={window.innerWidth >= 1024}
            />
          )}
        </div>
        <div className="mt-2.5 md:mt-4 flex flex-wrap gap-x-2.5 gap-y-1">
          {props.tags.map((tag, i) => {
            return (
              <div key={i} className="rounded-3xl bg-card-section inline-block">
                <span className={[subHeaderFont.className, 'text-xs', 'text-black', 'opacity-80', 'px-2.5', 'lg:px-4'].join(' ')}>{tag}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
