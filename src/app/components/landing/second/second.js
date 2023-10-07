import Image from 'next/image';
import Button from '../../button/button';
import { headerFont, subHeaderFont } from '../../font/font';

export default function SecondLanding() {

  const services = [
    {
      image: '/conveyor-service.svg',
      name: "컨베이어 제작",
      desc: "고객의 요구를 반영한 다양한 컨베이어 제작 서비스를 제공합니다."
    },
    {
      image: '/design-service.svg',
      name: "도면 제작",
      desc: "다양한 요구사항을 반영하여 정밀한 컨베이어 도면 제작 서비스를 제공합니다."
    }
  ]

  return (
    <>
      <div id="services" className="bg-cover py-5" style={{ backgroundImage: 'url(/landing-first-part-bg.svg)' }}>
        <div className="bg-card-section max-w-xs flex flex-col items-center m-auto py-11 rounded-2xl md:flex-row md:py-7 md:gap-x-20 2xl:py-16 md:max-w-3xl md:justify-center 2xl:max-w-7xl 2xl:gap-x-64">
          <div className="w-56 md:w-80 2xl:w-[505px]">
            <div className={[headerFont.className, 'text-base', 'pb-2', 'md:text-xl', '2xl:text-4xl'].join(' ')}>우리는 어떤 서비스를 제공합니까?</div>
            <div className={[subHeaderFont.className, 'text-xs', 'pb-9', 'md:text-xs', '2xl:text-base', 'pb-8', 'md:pb-5', '2xl:pb-14'].join(' ')}>
              레드컨베이어는 고객의 요구에 맞춤 제작된 컨베이어와 도면 제작 서비스를 전문으로 제공합니다.
            </div>
            <Button height="h-8 md:h-7 2xl:h-12" width="w-24 2xl:w-36" size="text-xs 2xl:text-base" bg="black" name="더 보기" link="/services" />
          </div>
          <div className="hidden md:flex flex-col gap-y-6">
            {services.map((s, i) => {
              return (
                <div className="flex flex-col text-center items-center md:p-5 2xl:px-8 2xl:pb-8 2xl:pt-10 w-36 2xl:w-60 bg-white shadow-service-card md:rounded-xl 2xl:rounded-3xl" key={i}>
                  <div className="w-9 h-9 2xl:w-20 2xl:h-20 relative">
                    <Image src={s.image} fill alt={s.name} />
                  </div>
                  <div className={[headerFont.className, 'md:text-xs', 'md:pt-3', 'md:pb-2', '2xl:text-xl'].join(' ')}>
                    {s.name}
                  </div>
                  <div className={[subHeaderFont.className, 'md:text-xs', '2xl:text-base'].join(' ')}>
                    {s.desc}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-row m-auto mt-12 max-w-xs gap-x-6 justify-center md:hidden">
          {services.map((s, i) => {
            return (
              <div className="flex flex-col text-center items-center px-3 pt-4 pb-6 w-44 bg-white shadow-service-card rounded-xl" key={i}>
                <div className="w-6 h-6 relative">
                  <Image src={s.image} fill alt={s.name} />
                </div>
                <div className={[headerFont.className, 'text-xs', 'pt-3', 'pb-2'].join(' ')}>
                  {s.name}
                </div>
                <div className={[subHeaderFont.className, 'text-xs'].join(' ')}>
                  {s.desc}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
