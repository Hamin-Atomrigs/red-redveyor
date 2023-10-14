'use client';
import { useState } from 'react';
import Button from '../components/button/button';
import { useSearchParams } from 'next/navigation';
import { subHeaderFont, navigationFont } from '../components/font/font';

export default function Products() {
  const searchParams = useSearchParams();
  const service = searchParams.get('products');

  const pageNum = service === 'belt-conveyor' ? 1 : service === 'roller-conveyor' ? 2 : service == 'mash-conveyor' ? 3 : service === 'chain-conveyor' ? 4 : 5;

  const [openTab, setOpenTab] = useState(pageNum);

  return (
    <div className="flex flex-column justify-center" style={{ backgroundImage: 'url(/background-pattern.png)' }}>
      <div className="w-1/3 md:w-1/4 bg-green">
        <ul className="flex list-none flex-col mt-36" role="tablist">
          <li className="flex-auto text-center">
            <a
              className={[`text-xs md:text-base 2xl:text-2xl 2xl:py-10 font-bold py-4 md:py-6 w-full h-full flex justify-center ${openTab === 1 ? 'text-white bg-black' : 'text-black'} ${navigationFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              벨트 컨베이어
            </a>
          </li>
          <li className="flex-auto text-center">
            <a
              className={[`text-xs md:text-base 2xl:text-2xl 2xl:py-10 font-bold py-4 md:py-6 w-full h-full flex justify-center ${openTab === 2 ? 'text-white bg-black' : 'text-black'} ${navigationFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              롤러 컨베이어
            </a>
          </li>
          <li className="flex-auto text-center">
            <a
              className={[`text-xs md:text-base 2xl:text-2xl 2xl:py-10 font-bold py-4 md:py-6 w-full h-full flex justify-center ${openTab === 3 ? 'text-white bg-black' : 'text-black'} ${navigationFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              메쉬 컨베이어
            </a>
          </li>
          <li className="flex-auto text-center">
            <a
              className={[`text-xs md:text-base 2xl:text-2xl 2xl:py-10 font-bold py-4 md:py-6 w-full h-full flex justify-center ${openTab === 4 ? 'text-white bg-black' : 'text-black'} ${navigationFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              체인 컨베이어
            </a>
          </li>
          <li className="flex-auto text-center">
            <a
              className={[`text-xs md:text-base 2xl:text-2xl 2xl:py-10 font-bold py-4 md:py-6 w-full h-full flex justify-center ${openTab === 5 ? 'text-white bg-black' : 'text-black'} ${navigationFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(5);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              효율적인 컨베이어 제작
            </a>
          </li>
        </ul>
      </div>
      <div className="w-2/3 md:w-3/4 bg-white pl-6 pt-20 relative flex flex-col break-words">
        <div className="px-4 py-5 max-w-4xl flex-auto">
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? 'block' : 'hidden'} id="belt">
              <h2 className={[`text-xs md:text-base 2xl:text-lg font-bold mb-8 md:mb-9 2xl:mb-16 ${navigationFont.className}`]}>벨트 컨베이어의 주요 특징</h2>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                1. <b>구동 기술과 원리</b>
                <br /><br />
                벨트 컨베이어는 두 개의 드럼에 걸친 컨베이어 벨트를 구동용 기어드 모터를 통해 회전시켜 벨트를 움직임으로써 박스나 운반물을 이송시키는 방식을 사용합니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                2. <b>다양한 벨트 재질</b>
                <br /><br />
                움직이는 벨트는 다양한 재질로 제작됩니다. 녹색 PVC 벨트(두께 약 2.2mm), 백색 우레탄 벨트(두께 약 1.5mm), 흑색 고무 갈매기 무늬벨트(두께 약 7mm) 등 3가지 주요 재질이 주로 사용되며 가죽,
                천, PE 망, 스텐 판 등 다양한 재질이 활용됩니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                3. <b>단순하면서도 신뢰성 높은 구조</b>
                <br /><br />
                벨트 컨베이어는 가장 단순한 구조로 제작되어 고장율이 낮으며, 작동 중에 다칠 위험 또한 적습니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                4. <b>다양한 프레임 재질</b>
                <br /><br />
                주로 사용되는 프레임 구조물은 알루미늄 프로파일, 스테인레스, 철판 재질로 만들어집니다. 스테인레스 재질의 경우 외관을 중시하는 경우에 선택되며 분체도장 등을 고려할 때 비용이 더 들 수
                있습니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                5. <b>경사 설치의 고려 사항</b>
                <br /><br />
                경사면에 설치할 경우 경사각이 30도 이상인 경우 박스가 굴러가지 않을 수 있습니다. 경사면 운반에는 다른 방법이 필요하며, 비닐 봉지나 곡식 포대 등 역시 경사 운반에 어려움을 겪을 수
                있습니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                벨트 컨베이어는 간단한 구조와 다양한 재질 선택의 장점을 가지고 있으며, 여러 운반 상황에 유연하게 대응할 수 있습니다. 더 많은 정보나 궁금한 사항이 있으면 언제든지 문의해주십시오.
              </p>
              <div className="mt-16 md:mt-20 2xl:mt-32 mb-52">
                <Button height="h-8 2xl:h-12" width="w-32 2xl:w-48" size="text-xs 2xl:text-base" bg="yellow" name="무료 상담하기" link="/quote" />
              </div>
            </div>
            <div className={openTab === 2 ? 'block' : 'hidden'} id="roller">
              <h2 className={[`text-xs md:text-base 2xl:text-lg font-bold mb-8 md:mb-9 2xl:mb-16 ${navigationFont.className}`]}>롤러 컨베이어의 주요 특징</h2>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                1. <b>다양한 로울러 크기와 재질</b>
                <br /><br />
                롤러 컨베이어는 일반적인 하중의 운반물을 위해 외경 48.6의 아연 도금 파이프 로울러나 외경 50.8의 스테인레스 파이프로 제작됩니다. 작은 로울러는 연결부나 특수한 상황에서 사용되며, 큰 외경
                60.5 이상의 로울러는 중량물 운반에 가끔 사용됩니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                2. <b>강력한 운반 능력</b>
                <br /><br />
                롤러 컨베이어의 로울러는 작은 동력으로 회전시킬 수 있지만, 이를 통해 운반물을 움직이는 힘은 매우 강력합니다. 로울러 회전 방식으로는 주로 체인 구동, 링벨트 구동, 띠벨트 구동 방식이
                사용됩니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                3. <b>다양한 체인 구동 방식</b>
                <br /><br />
                체인 구동 방식은 연동식 체인 구동 타입과 싱글 체인 타입으로 나뉩니다. 연동식 체인 구동은 2열 체인 스프로켓에 체인을 지그재그로 걸어 사용하며, 싱글 체인 타입은 긴 체인 한 줄로 로울러를
                회전시킵니다. 중량물 운반에는 중량 물건을 이동하는 데 주로 사용되며, 약간의 회전 소음이 발생할 수 있습니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                4. <b>오링벨트 구동 방식</b>
                <br /><br />
                오링벨트 구동 방식은 구성이 간단하고 사용 위험성이 낮아 장점을 가지며, 오링벨트 교체가 필요한 경우가 가끔 있습니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                5. <b>커브 로울러 컨베이어</b>
                <br /><br />
                커브 로울러 컨베이어는 고무나 우레탄으로 코팅한 로울러를 사용하며 테이퍼로 가공하여 제작됩니다. 이 컨베이어는 커브 형태로 운반물을 이송할 수 있으며, 체인 연동식 타입으로 구성됩니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                롤러 컨베이어는 다양한 크기와 구동 방식을 통해 다양한 운반 요구사항에 대응할 수 있으며, 강력한 운반 능력과 신뢰성을 제공합니다. 더 자세한 정보나 궁금한 사항이 있으면 언제든지
                문의해주십시오.
              </p>
              <div className="mt-16 md:mt-20 2xl:mt-32 mb-52">
                <Button height="h-8 2xl:h-12" width="w-32 2xl:w-48" size="text-xs 2xl:text-base" bg="yellow" name="무료 상담하기" link="/quote" />
              </div>
            </div>
            <div className={openTab === 3 ? 'block' : 'hidden'} id="mash">
              <h2 className={[`text-xs md:text-base 2xl:text-lg font-bold mb-8 md:mb-9 2xl:mb-16 ${navigationFont.className}`]}>메쉬 컨베이어의 특징과 용도</h2>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5	md:mb-7 2xl:mb-11 ${subHeaderFont.className}`]}>
                1. <b>다양한 메쉬 소재</b>
                <br /><br />
                메쉬 컨베이어는 주로 스텐레스 스틸로 만드는 스텐메쉬와 PE 소재로 제작되는 플라스텍메쉬가 널리 사용됩니다. 최근에는 철메쉬는 거의 사용되지 않는 추세입니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5	${subHeaderFont.className}`]}>
                2. <b>다양한 메쉬 형태</b>
                <br /><br />
                메쉬 컨베이어는 망을 짜는 형태에 따라 다양한 종류로 분류됩니다. 일반메쉬 타입은 스테인레스 철사를 나사 모양으로 말아서 연결하는 형태이고, 열처리타입은 3열의 철사로 V자 형태로 밀착된
                구조입니다. 양측면 절곡메쉬 타입 역시 일반적입니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                3. <b>체인 컨베이어 형태</b>
                <br /><br />
                메쉬 컨베이어는 메쉬 양측에 체인을 조립한 형태로 제작되며 체인이 없는 경우에는 메쉬가 너무 늘어나거나 좌우로 쏠릴 수 있어 권장되지 않습니다. 다만 아주 느린 속도로 가벼운 부품을 운반할
                때 고려될 수 있습니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                4. <b>다양한 용도와 기능</b>
                <br /><br />
                메쉬 컨베이어의 구조상 에어로 불어나 물을 뿌려서 말리거나 열을 가하거나 작은 물체를 날리거나 기름을 흘리는 용도로 사용됩니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                5. <b>내구성과 다양한 기능</b>
                <br /><br />
                메쉬는 대부분 스테인레스로 만들어져 열에 강하며 체인과 조립되어 있어 교체 시간이 빠릅니다. 또한 운반 중 부스러기나 물빠짐 등 다양한 기능을 수행할 수 있습니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                메쉬 컨베이어는 다양한 메쉬 형태와 용도를 통해 다양한 산업 분야에서 활용되며, 내구성과 다양한 기능을 제공하여 효율적인 운반을 지원합니다. 더 자세한 정보나 궁금한 사항이 있으면 언제든지
                문의해주십시오.
              </p>
              <div className="mt-16 md:mt-20 2xl:mt-32 mb-52">
                <Button height="h-8 2xl:h-12" width="w-32 2xl:w-48" size="text-xs 2xl:text-base" bg="yellow" name="무료 상담하기" link="/quote" />
              </div>
            </div>
            <div className={openTab === 4 ? 'block' : 'hidden'} id="chain">
              <h2 className={[`text-xs md:text-base 2xl:text-lg font-bold mb-8 md:mb-9 2xl:mb-16 ${navigationFont.className}`]}>체인 컨베이어의 주요 특징</h2>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                1. <b>다양한 아타치먼트 조립 가능</b>
                <br /><br />
                체인 컨베이어는 체인의 구조적 특성으로 인해 일정한 간격을 가지며, 이로 인해 단속적인 운전이 용이합니다. 각 마다마다 다양한 모양의 아타치먼트를 조립할 수 있어 다양한 형태의 운반물에
                맞는 브라켓을 만들어 조립할 수 있어 많이 사용됩니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                2. <b>체인 슬래트 컨베이어</b>
                <br /><br />
                가장 일반적으로 사용되는 형태인 체인 슬래트 컨베이어는 체인의 아타치먼트 홀마다 막대 형태의 슬래트를 가로질러 조립하고 그 위에 운반물을 싣는 구조로 제작됩니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5	${subHeaderFont.className}`]}>
                3. <b>다양한 체인 형태</b>
                <br /><br />
                체인 컨베이어는 다양한 체인 형태로 나뉩니다. 구동용 아타치 체인을 이용한 방식, 더블 피치(하이 피치) 아타치 체인, 드래그 체인, 트롤리 체인 등 다양한 형태의 체인 컨베이어가 있습니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                4. <b>운반 속도와 수명</b>
                <br /><br />
                체인 컨베이어는 운반 속도가 20m/min 이하로 사용되어야 수명을 보장할 수 있습니다. 더 빠른 속도를 사용하려면 특수한 윤활이 필요하며, 체인 교체 주기가 짧아집니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                5. <b>재질 선택과 윤활</b>
                <br /><br />
                체인 컨베이어에서 물이나 녹 발생이 우려되는 경우에는 스테인레스 체인을 선택해야 합니다. 또한 음식물에 윤활유가 혼입될 수 있는 경우에는 사전에 협의가 필요합니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                체인 컨베이어는 다양한 형태와 용도로 활용되며, 강력한 운반 능력과 다양한 아타치먼트 조립의 장점을 가지고 있습니다. 더 자세한 정보나 궁금한 사항이 있으면 언제든지 문의해주십시오.
              </p>
              <div className="mt-16 md:mt-20 2xl:mt-32 mb-52">
                <Button height="h-8 2xl:h-12" width="w-32 2xl:w-48" size="text-xs 2xl:text-base" bg="yellow" name="무료 상담하기" link="/quote" />
              </div>
            </div>
            <div className={openTab === 5 ? 'block' : 'hidden'} id="new">
              <h2 className={[`text-xs md:text-base 2xl:text-lg font-bold mb-8 md:mb-9 2xl:mb-16 ${navigationFont.className}`]}>효율적인 컨베이어 제작을 위한 고려 사항</h2>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                1. <b>운반물의 특성에 따른 종류 선택</b>
                <br /><br />
                운반물의 종류, 무게 및 바닥 모양에 따라 적절한 컨베이어 종류를 선택해야 합니다. 수평인지, 오르막 경사인지, 내리막 경사인지에 따라 벨트 종류도 달라집니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                2. <b>컨베이어 폭 결정</b>
                <br /><br />
                운반물의 최대 크기에 따라 컨베이어의 폭을 결정합니다. 후레임 폭보다 운반물이 넓은 경우, 컨베이어 제작 형태가 조정될 수 있습니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                3. <b>운반 방식과 속도 결정</b>
                <br /><br />
                운반물을 수동으로 싣는지, 자동으로 받아가는지, 떨어지는 운반물을 처리하는지에 따라 슈트 모양과 컨베이어 형태, 속도가 다를 수 있습니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                4. <b>고정 방식 고려</b>
                <br /><br />
                컨베이어를 바닥에 고정하는지, 다른 가게에 고정하는지에 따라 제작 형태가 다르게 결정됩니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                5. <b>작업 흐름에 따른 속도 조절</b>
                <br /><br />
                운반물이 이동 중에 다른 작업이나 검사가 필요한 경우 컨베이어의 속도를 조절해야 합니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                6. <b>환경 요소 반영</b>
                <br /><br />
                바닥에 물이나 기름이 흐르면 안되는 경우, 설계 단계부터 환경 요소를 고려하여 제작해야 합니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                7. <b>운반물 다양성에 따른 고려</b>
                <br /><br />
                운반물의 다양성으로 인해 컨베이어 적용이 어려울 수 있으며, 크기의 다양성도 설치의 어려움을 초래할 수 있습니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                8. <b>운영 시간과 견적의 적정성</b>
                <br /><br />
                하루 8시간을 기준으로 한 견적서가 적정하며, 시간당 운반물의 양이 많을 경우나 컨베이어 운전 시간이 길 경우에는 설계와 견적을 조정해야 합니다.
              </p>
              <p className={[`text-xs md:text-sm 2xl:text-base mb-5 md:mb-7 2xl:mb-11	${subHeaderFont.className}`]}>
                효율적인 컨베이어 제작을 위해서는 운반물의 특성과 환경 요소를 철저하게 분석하고, 다양한 요소를 고려하여 최적의 컨베이어를 설계해야 합니다. 더 자세한 정보나 궁금한 사항이 있으면
                언제든지 문의해주십시오.
              </p>
              <div className="mt-16 md:mt-20 2xl:mt-32 mb-52">
                <Button height="h-8 2xl:h-12" width="w-32 2xl:w-48" size="text-xs 2xl:text-base" bg="yellow" name="무료 상담하기" link="/quote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
