'use client';
import { useState } from 'react';
import Button from '../components/button/button';
import { subHeaderFont, navigationFont } from '../components/font/font';

export default function Services() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <ul className="flex list-none flex-wrap pt-3 pb-4 flex-row my-14" role="tablist">
          <li className="mr-2 last:mr-0 flex-auto text-center">
            <a
              className={[`text-xs md:text-lg 2xl:text-xl font-bold px-5 py-3 ${openTab === 1 ? 'text-black text-xs underline underline-offset-[10px]' : 'text-grey'} ${navigationFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              컨베이어 제작
            </a>
          </li>
          <li className="mr-2 last:mr-0 flex-auto text-center">
            <a
              className={[`text-xs md:text-lg 2xl:text-xl font-bold px-5 py-3 ${openTab === 2 ? 'text-black text-xs underline underline-offset-[10px]' : 'text-grey'} ${navigationFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#autocad"
              role="tablist"
            >
              도면 제작
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? 'block' : 'hidden'} id="conveyor">
                <h2 className={[`text-xs md:text-base 2xl:text-lg font-bold mb-5 md:mb-8 ${navigationFont.className}`]}>컨베이어 설치와 사용에 관한 안내</h2>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  1. <b>컨베이어 설치 전 확인 과정</b> <br /> 설치 현장을 방문하여 운반물의 종류, 무게, 다양성을 조사합니다. 이후, 적합한 컨베이어 종류를 제안하고 협의합니다. 또한, 운반물의 최대
                  크기와 컨베이어 폭을 결정하여 최소 크기가 컨베이어 연결 운반에 적합한지 검토합니다.
                </p>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  2. <b>컨베이어 설계와 견적 제출</b> <br />
                  운반물의 투입방법과 높이, 배출위치의 높이를 파악한 후 컨베이어 설계를 진행합니다. 또한, 필요한 소요자재를 확인하여 제작 가격을 협의할 견적서를 제출합니다.
                </p>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  3. <b>제작과 완료 단계</b> <br />
                  가격 협의가 이루어지면 공사 계약서 또는 발주서를 받아 제작을 시작합니다. 착수 계약금이 입금되면 제작에 착수하며, 협의한 기일 내에 제작을 완료합니다.
                </p>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  4. <b>검수 및 납품</b> <br />
                  제작이 완료된 후 담당자의 지도 하에 컨베이어 제작과 단순 동작 및 기능을 검수합니다. 이후, 납품 및 설치 일정을 조정한 뒤 정해진 날짜에 컨베이어를 운반하고 설치하며 시운전을
                  진행합니다.
                </p>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  5. <b>사용자 안전과 마무리</b> <br />
                  컨베이어 사용 시 주의사항과 정기적인 점검 내용을 반드시 사용자에게 설명합니다. 이후 모든 작업이 마무리되며 공사를 완료합니다.
                </p>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  컨베이어 설치와 사용 과정을 통해 효율적인 운반을 실현할 수 있습니다. 문의 사항이나 자세한 안내가 필요하다면 언제든지 문의해주십시오.
                </p>
                <div className="flex justify-center mt-10 md:mt-16 md:mb-24 2xl:mt-28 2xl:mb-60">
                  <Button height="h-8 2xl:h-12" width="w-32 md:w-32 2xl:w-48" size="text-xs 2xl:text-base" bg="yellow" name="견적 요청하기" link="/quote" />
                </div>
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id="autocad">
                <h2 className={[`text-xs md:text-base 2xl:text-lg font-bold mb-5 md:mb-8 ${navigationFont.className}`]}>기계 도면 제작과 협의 과정 안내</h2>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  1. <b>기계 설계 요구사항 확인</b> <br />
                  먼저, 만들고자 하는 기계의 특성과 요구사항을 자세히 듣습니다. 이를 바탕으로 대략적인 기계 형태, 동작, 크기 등을 고려하여 외형 도면을 작성합니다. 도면은 PDF나 JPG 파일로 인쇄하여
                  담당자와 함께 재 협의하며 누락된 기능이나 변경 사항이 있는지 확인합니다.
                </p>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  2. <b>도면 제작 범위 협의와 견적 제출</b> <br />
                  기계의 형태와 크기가 확정되면, 도면 작업에 소요될 예상 일수를 산정하고 도면 제작 범위를 협의합니다. 이후, 협의 내용을 정리한 협의록을 작성하고 도면 제작 비용과 일정을 포함한 견적서를
                  제출합니다.
                </p>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  3-1. <b>변경 사항 및 추가 내용에 대한 명확한 협의</b> <br />
                  도면 제작 중 협의되지 않은 내용이나 추가 변경사항은 도면 제작에 반영되지 않습니다. 변경이나 추가가 필요한 경우, 선지급 거래로서 처리될 수 있도록 명확하게 정해야 합니다.
                </p>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  3-2. <b>도면 수정 및 오류 처리</b> <br />
                  실제 제작 단계에서 도면의 오류 내용이나 미완성된 부분은 상호 합의 하에 처리됩니다. 도면 제작자는 오류를 무료로 수정해주어야 하며, 도면 제작자의 금전적인 청구를 지양함을 발주서에
                  명시합니다.
                </p>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  4. <b>도면 제작과 착수</b> <br />
                  도면 제작 금액이 합의되면 3-1항과 3-2항의 내용을 반드시 포함하는 발주서와 함께 착수금의 50% 이상을 송금받습니다. 이후 도면 작업에 착수하며 협의한 기일 내에 도면을 완성합니다.
                </p>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  5. <b>도면 확인 및 인수</b> <br />
                  도면이 완성되었음을 발주가에게 확인 받고 잔금 지불을 확인한 후, 최종 캐드 도면을 인수하게 됩니다.
                </p>
                <p className={[`text-xs 2xl:text-lg mb-4	${subHeaderFont.className}`]}>
                  기계 도면 제작과 협의 절차를 통해 원활한 협력과 효율적인 결과를 얻을 수 있습니다. 필요한 내용이나 문의 사항이 있으면 언제든지 문의해주십시오.
                </p>
                <div className="flex justify-center mt-10 md:mt-16 md:mb-24 2xl:mt-28 2xl:mb-60">
                  <Button height="h-8 2xl:h-12" width="w-32 md:w-32 2xl:w-48" size="md:text-xs 2xl:text-base" bg="yellow" name="견적 요청하기" link="/quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
