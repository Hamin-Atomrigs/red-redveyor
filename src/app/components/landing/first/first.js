
import Image from 'next/image';
import { headerFont, subHeaderFont, handWriteFont } from '../../font/font';
import Button from '../../button/button';

export default function FirstLanding() {
  return (
    <>
      <div className="bg-cover" style={{ backgroundImage: 'url(/background-pattern.png)' }}>
        <div className="max-w-xs flex flex-row py-11 md:py-15 2xl:py-24 mx-auto md:gap-x-3 md:max-w-3xl md:justify-center 2xl:max-w-7xl 2xl:gap-x-8" >
          <div className="hidden md:block md:w-36 md:h-64 md:mr-2 2xl:w-64 2xl:h-[616px] relative">
            <Image className="rounded-[20px] object-cover" src="/first-section-belt.png" alt="first-section-belt" fill />
          </div>
          <div className="w-40 h-[325px] md:w-52 md:h-64 2xl:w-96 2xl:h-[616px] relative">
            <Image className="rounded-[20px] object-cover" src="/second-section-belt.png" alt="second-section-belt" fill />
          </div>
          <div className="w-52 pl-6 md:w-96 md:pl-12 2xl:w-[550px] 2xl:pl-20 flex flex-col justify-center">
            <div className={[handWriteFont.className, 'text-cyan', 'text-xs', 'md:text-sm', '2xl:text-xl'].join(' ')}>the best conveyor services</div>
            <div className={[headerFont.className, 'text-xl', 'md:text-3xl', '2xl:text-5xl'].join(' ')}>컨베이어 제작의</div>
            <div className={[headerFont.className, 'text-xl', 'md:text-3xl', '2xl:text-5xl', 'mb-4', '2xl:mb-7'].join(' ')}>최강자</div>
            <div className={[subHeaderFont.className, 'text-xs', 'md:text-xs', '2xl:text-lg', 'pb-3', 'md:pb-5'].join(' ')}>
              30년간 검증된 컨베이어 제작의 노하우를 바탕으로, 탁월한 기술과 신뢰로 고객의 요구를 만족시키는 최적화된 솔루션을 제공합니다
            </div>
            <div className={[subHeaderFont.className, 'text-xs', 'md:text-xs', '2xl:text-lg', 'pb-8', 'md:pb-5', '2xl:pb-14'].join(' ')}>
              컨베이어는 환경이나 운반물에 따라 다양하기 때문에 미리 제작하기 어려운 제품입니다. 하지만 저희와의 무료 상담을 통해, 고객 맞춤형으로 가장 저렴하게 컨베이어를 제작할 수 있습니다.
            </div>
            <Button height="h-8 2xl:h-12" width="w-32 2xl:w-48" size="text-xs 2xl:text-base" bg="yellow" name="무료 상담하기" link="/quote" />
          </div>
        </div>
      </div>

    </>
  );
}
