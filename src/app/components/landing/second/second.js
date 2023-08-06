import Image from 'next/image';
import Button from '../../button/button';

export default function SecondLanding() {
  return (
    <>
      <div id="services">
        <div className="text">
          <div className="header">서비스</div>
          <div className="subHeader">레드콘베이어는 고객의 요구에 맞춤 제작된 콘베이어와 도면 제작 서비스를 전문으로 제공합니다.</div>
        </div>
        <div className="sections flex flex-row justify-center">
          <div className="leftSection flex flex-col	items-center w-5/12">
            <div className="image flex items-center justify-center">
              <Image className="absolute mb-[-180px] z-10" src="/eclipse.png" width={358} height={358} alt="eclippse" />
              <Image className=" mb-[-175px] z-20" src="/left-section.png" width={344} height={352} alt="leftSection" />
            </div>
            <div className="w-[555px] h-[423px] bg-white rounded-[25px] shadow">
              <div className="h-[380px] flex flex-col p-7 justify-center">
                <div className="sectionHeader mt-36">콘베이어 제작</div>
                <div className="sectionSubHeader mt-3">고객의 요구를 반영한 다양한 컨베이어 제작 서비스를 제공합니다.</div>
                <div className="mt-8">
                  <Button name="Learn more" />
                </div>
              </div>
            </div>
          </div>
          <div className="rightSection flex flex-col items-center w-5/12">
            <div className="image flex items-center justify-center">
              <Image className="absolute mb-[-180px] z-10" src="/eclipse.png" width={358} height={358} alt="eclippse" />
              <Image className=" mb-[-175px] z-20" src="/right-section.png" width={344} height={352} alt="leftSection" />
            </div>
            <div className="w-[555px] h-[423px] bg-white rounded-[25px] shadow">
              <div className="h-[380px] flex flex-col p-7 justify-center">
                <div className="sectionHeader mt-36">도면 제작</div>
                <div className="sectionSubHeader mt-3">다양한 요구사항을 반영하여 정밀한 컨베이어 도면 제작 서비스를 제공합니다.</div>
                <div className="mt-8">
                  <Button name="Learn more" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
