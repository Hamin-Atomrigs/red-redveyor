import { Nunito_Sans } from 'next/font/google';
import { useEffect } from 'react';

const headerFont = Nunito_Sans({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

const subHeaderFont = Nunito_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function FifthLanding() {
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

  return (
    <>
      <div id="contactUs" className="flex flex-row bg-[#162A4A]">
        <div className="text-white ml-48 mt-28">
          <div className="mb-20">
            <div className={[headerFont.className, 'text-2xl'].join(' ')}>E-mail</div>
            <div className={[subHeaderFont.className, 'text-lg'].join(' ')}>gasiyo@hanmail.net</div>
          </div>
          <div className="mb-20">
            <div className={[headerFont.className, 'text-2xl'].join(' ')}>Telephone</div>
            <div className={[subHeaderFont.className, 'text-lg'].join(' ')}>031-479-1990</div>
          </div>
          <div className="mb-20">
            <div className={[headerFont.className, 'text-2xl'].join(' ')}>Fax</div>
            <div className={[subHeaderFont.className, 'text-lg'].join(' ')}>02-2685-1745</div>
          </div>
          <div className="mb-40">
            <div className={[headerFont.className, 'text-2xl'].join(' ')}>Business Hour</div>
            <div className={[subHeaderFont.className, 'text-lg'].join(' ')}>월-금, 8AM-6PM</div>
          </div>
        </div>
        <div className="ml-72 mt-28">
          <div className="text-white pb-12">
            <div className={[headerFont.className, 'text-2xl'].join(' ')}>Address</div>
            <div className={[subHeaderFont.className, 'text-lg'].join(' ')}>경기 시흥시 금오로477번길 15-5</div>
          </div>
          <div>
            <div id="map" className="w-96 h-96"></div>
          </div>
        </div>
      </div>
    </>
  );
}
