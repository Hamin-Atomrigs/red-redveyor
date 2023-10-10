import { navigationFont, subHeaderFont } from '../../font/font';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function FifthLanding() {
  const [copyMessage, setCopyMessage] = useState(false);

  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.445362, 126.829469),
          level: 3,
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
        new window.kakao.maps.Marker({
          map: new window.kakao.maps.Map(mapContainer, mapOption),
          position: new window.kakao.maps.LatLng(37.445362, 126.829469),
        });
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, []);

  const handleClick = () => {
    navigator.clipboard.writeText('gasiyo@hanmail.net')
    setCopyMessage('이메일이 복사되었습니다. 이메일을 보내주세요!')
  }

  return (
    <>
      <div id="contactUs" className="flex flex-col bg-black items-center">
        <div className='flex flex-col md:flex-row max-w-xs md:max-w-3xl 2xl:max-w-7xl my-12 md:gap-x-20 2xl:gap-x-48'>
          <div>
            <button onClick={handleClick} className={`w-28 h-8 2xl:w-48 2xl:h-12 bg-button-yellow rounded-3xl flex pl-2 items-center justify-center relative md:ml-7 md:mt-7`}>
              <div className={[subHeaderFont.className, 'text-xs', 'text-black', 'pr-2', '2xl:text-base'].join(' ')}>이메일 복사</div>
              <div className={`h-6 w-[24px] 2xl:w-[35px] 2xl:h-[35px] relative`}>
                <Image fill src="/bg-black-copy.svg" alt="bg-black-copy" />
              </div>
            </button>
            <div className={[subHeaderFont.className, 'text-xs', 'text-white', 'mt-2', '2xl:text-sm'].join(' ')}>
              {copyMessage}
            </div>
          </div>
          <div className="flex flex-row text-white flex-wrap basis-2/4 md:flex-col md:basis-full gap-y-5 gap-x-16 mt-7">
            <div className="w-32">
              <div className={[navigationFont.className, 'text-xs', '2xl:text-lg'].join(' ')}>E-mail</div>
              <div className={[subHeaderFont.className, 'text-xs', '2xl:text-sm'].join(' ')}>gasiyo@hanmail.net</div>
            </div>
            <div className="w-32">
              <div className={[navigationFont.className, 'text-xs', '2xl:text-lg'].join(' ')}>Telephone</div>
              <div className={[subHeaderFont.className, 'text-xs', '2xl:text-sm'].join(' ')}>031-479-1990</div>
            </div>
            <div className="w-32">
              <div className={[navigationFont.className, 'text-xs', '2xl:text-lg'].join(' ')}>Fax</div>
              <div className={[subHeaderFont.className, 'text-xs', '2xl:text-sm'].join(' ')}>02-2685-1745</div>
            </div>
            <div className="w-32">
              <div className={[navigationFont.className, 'text-xs', '2xl:text-lg'].join(' ')}>Business Hour</div>
              <div className={[subHeaderFont.className, 'text-xs', '2xl:text-sm'].join(' ')}>월-금, 8AM-6PM</div>
            </div>
          </div>
          <div className="mt-9">
            <div className="text-white mb-2.5">
              <div className={[navigationFont.className, 'text-xs', '2xl:text-lg'].join(' ')}>Address</div>
              <div className={[subHeaderFont.className, 'text-xs', '2xl:text-sm'].join(' ')}>경기 시흥시 금오로477번길 15-5</div>
            </div>
            <div>
              <a target="_blank" href="https://map.kakao.com/?urlX=462274&urlY=1096135&urlLevel=3&itemId=18607538&q=%EB%A0%88%EB%93%9C%EB%B2%A0%EC%96%B4&srcid=18607538&map_type=TYPE_MAP">
                <div id="map" className="w-44 h-44 2xl:w-64 2xl:h-64"></div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
