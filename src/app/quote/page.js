'use client';
import { useState } from 'react';
import { headerFont, subHeaderFont, navigationFont } from '../components/font/font';
import Image from 'next/image';
import ReCAPTCHA from "react-google-recaptcha";

export default function Quote() {
  const [openTab, setOpenTab] = useState(1);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phoneNumber: '',
    emailAddress: '',
    goodsType: '',
    hourlyTransportQuantity: '',
    conveyorType: '',
    beltWidth1: '',
    conveyorLength1: '',
    number1: '',
    location1: '',
    location2: '',
    inside: '',
    outside: '',
    scheduledInstallationDate: '',
    conveyorPowerSupply: '',
    conveyorPaintColor: '',
    noNeed: '',
    need: '',
    additionalItemsOutsideConveyor: '',
    specificationsForOtherQuotes: '',
    comment: '',
  });

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      companyName: '',
      contactPerson: '',
      phoneNumber: '',
      emailAddress: '',
      goodsType: '',
      hourlyTransportQuantity: '',
      conveyorType: '',
      beltWidth1: '',
      conveyorLength1: '',
      number1: '',
      location1: '',
      location2: '',
      inside: '',
      outside: '',
      scheduledInstallationDate: '',
      conveyorPowerSupply: '',
      conveyorPaintColor: '',
      noNeed: '',
      need: '',
      additionalItemsOutsideConveyor: '',
      specificationsForOtherQuotes: '',
      comment: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("reCAPTCHA를 완성해주세요");
      return;
    }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("성공적으로 전송되었습니다.");
        console.log('Form submitted successfully');
        resetForm();
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <>
      <div className='max-w-xs 2xl:py-24 mx-auto md:gap-x-3 md:max-w-3xl md:justify-center 2xl:max-w-7xl 2xl:gap-x-8' style={{ backgroundImage: 'url(/background-pattern.png)' }}>
        <div className={[headerFont.className, 'text-lg', 'text-center', 'mt-24', 'mb-10', 'md:text-2xl', '2xl:text-3xl'].join(' ')}>무료 상담 신청서</div>
        <div className={[subHeaderFont.className, 'm-auto', 'text-sm', 'text-center', 'mb-10', 'md:text-lg', '2xl:text-xl', 'md:w-2/3', '2xl:w-2/3', 'w-50%'].join(' ')}>
          회사명, 담당자 성명, 전화번호, 이메일 주소, 그리고 코멘트는 필수 정보입니다. 이외의 정보도 저희 팀이 빠르고 효과적인 상담을 제공하는 데 큰 도움이 됩니다.
        </div>
        <ul className="flex flex-col md:flex-row md:justify-center md:gap-x-5 2xl:gap-x-28 content-center list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
          <li className="mr-2 last:mr-0 flex-auto md:flex-none w-36">
            <div className='flex 2xl:w-52'>
              {openTab === 1 ? <Image src="/radio-clicked.svg" alt="radio-clicked" width={15} height={15} /> : <Image src="/radio-unclicked.svg" alt="radio-unclicked" width={15} height={15} />}
              <a
                className={[`text-xs md:text-sm 2xl:text-base font-bold px-2 py-3 ${openTab === 1 ? 'text-black' : 'text-grey'} ${navigationFont.className} text-left`].join(' ')}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#conveyor"
                role="tablist"
              >
                컨베이어 제작 견적
              </a>
            </div>
          </li>
          <li className="mr-2 last:mr-0 flex-auto md:flex-none w-36">
            <div className='flex 2xl:w-52'>
              {openTab === 2 ? <Image src="/radio-clicked.svg" alt="radio-clicked" width={15} height={15} /> : <Image src="/radio-unclicked.svg" alt="radio-unclicked" width={15} height={15} />}
              <a
                className={[`text-xs md:text-sm 2xl:text-base font-bold px-2 py-3 ${openTab === 2 ? 'text-black' : 'text-grey'} ${navigationFont.className} text-left`].join(' ')}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#autocad"
                role="tablist"
              >
                도면 제작 견적
              </a>
            </div>
          </li>
        </ul>
        <div className='relative flex flex-col min-w-0 break-words w-full mb-6'>
          <div className='py-5 flex-auto'>
            <div className='tab-content tab-space'>
              <div className={openTab === 1 ? 'block' : 'hidden'} id="conveyor">
                <form id="submit" onSubmit={handleSubmit}>
                  <div className="mx-auto">
                    <div className="flex flex-wrap gap-x-5 gap-y-3.5 justify-between">
                      <div className="w-48 md:w-80 2xl:w-2/5 md:flex md:flex-col">
                        <label htmlFor="companyName" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                          회사명
                        </label>
                        <input required className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48 md:w-80 2xl:w-2/5 md:flex md:flex-col">
                        <label htmlFor="contactPerson" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                          담당자
                        </label>
                        <input required className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48 md:w-80 2xl:w-2/5 md:flex md:flex-col">
                        <label htmlFor="phoneNumber" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                          TEL(전화번호)
                        </label>
                        <input required className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48 md:w-80 2xl:w-2/5 md:flex md:flex-col">
                        <label htmlFor="emailAddress" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                          이메일 주소
                        </label>
                        <input required className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange}></input>
                      </div>
                    </div>
                    <div className="border border-black border-opacity-10 h-[1px] my-6 md:my-12 2xl:my-20" />
                    <div className="flex flex-col mb-4 w-72 md:w-80 2xl:w-2/5">
                      <label htmlFor="goodsType" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        운반물 종류
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="goodsType" name="goodsType" value={formData.goodsType} onChange={handleInputChange}></input>
                    </div>
                    <div className="flex flex-col mb-4 w-72 md:w-80 2xl:w-2/5">
                      <label htmlFor="hourlyTransportQuantity" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        시간당 운반량
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="hourlyTransportQuantity" name="hourlyTransportQuantity" value={formData.hourlyTransportQuantity} onChange={handleInputChange}></input>
                    </div>
                    <div className="flex flex-col mb-4 w-72 md:w-80 2xl:w-2/5">
                      <label htmlFor="conveyorType" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        컨베이어 종류
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="conveyorType" name="conveyorType" value={formData.conveyorType} onChange={handleInputChange}></input>
                    </div>
                    <div className='leading-[3] text-xs'>
                      <div className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        컨베이어 치수
                      </div>
                      <div className='md:flex md:flex-row items-center justify-center'>
                        <label htmlFor="beltWidth1" className="mr-2 text-left text-xs md:text-sm 2xl:text-base">
                          벨트 폭
                        </label>
                        <input
                          className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 w-16 h-6 md:w-20 md:h-8 2xl:w-28 2xl:h-14 mx-2.5 p-2 text-left'].join(' ')}
                          type="text"
                          id="beltWidth1"
                          name="beltWidth1"
                          value={formData.beltWidth1}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="conveyorLength1" className="mr-2 text-left text-xs md:text-sm 2xl:text-base">
                          컨베이어 길이
                        </label>
                        <input
                          className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 w-16 h-6 md:w-20 md:h-8 2xl:w-28 2xl:h-14 mx-2.5 p-2 text-left'].join(' ')}
                          type="text"
                          id="conveyorLength1"
                          name="conveyorLength1"
                          value={formData.conveyorLength1}
                          onChange={handleInputChange}
                        />
                        - - - -
                        <label htmlFor="number1" className="ml-2 mr-2 text-left text-xs md:text-sm 2xl:text-base">
                          컨베이어
                        </label>
                        <input
                          className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 w-16 h-6 md:w-20 md:h-8 2xl:w-28 2xl:h-14 mx-2.5 p-2 text-left'].join(' ')}
                          type="text"
                          id="number1"
                          name="number1"
                          value={formData.number1}
                          onChange={handleInputChange}
                        />
                        <span className='text-xs md:text-sm 2xl:text-base'>
                          대
                        </span>
                      </div>

                    </div>
                    <div className="w-48 md:w-80 2xl:w-2/5">
                      <label htmlFor="location" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        설치 지역
                      </label>
                      <div>
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 w-16 h-6 md:w-32 md:h-8 2xl:w-28 2xl:h-14 mr-2.5 p-2 text-left'].join(' ')} type="text" id="location1" name="location1" value={formData.location1} onChange={handleInputChange}></input> 도{' '}
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 w-16 h-6 md:w-32 md:h-8 2xl:w-28 2xl:h-14 ml-2.5 p-2 text-left'].join(' ')} type="text" id="location2" name="location2" value={formData.location2} onChange={handleInputChange}></input>
                        <div className='my-4 text-xs md:flex md:gap-x-1 2xl:gap-x-3'>
                          <input type="radio" id="inside" name="inside" value="inside" checked={formData.inside === 'inside'} onChange={handleInputChange} />{' '}
                          <label className="mr-2 md:text-sm 2xl:text-base">
                            실내
                          </label>
                          <input type="radio" id="outside" name="outside" value="outside" checked={formData.inside === 'outside'} onChange={handleInputChange} /> <label className='md:text-sm 2xl:text-base'>실외</label>
                        </div>
                      </div>
                    </div>
                    <div htmlFor="scheduledInstallationDate" className="mt-4 w-48 md:w-80 md:flex md:flex-col 2xl:w-2/5">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        설치 예정일
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="scheduledInstallationDate" name="scheduledInstallationDate" value={formData.scheduledInstallationDate} onChange={handleInputChange}></input>
                    </div>
                    <div htmlFor="conveyorPowerSupply" className="mt-4 w-48 md:w-80 md:flex md:flex-col 2xl:w-2/5">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        컨베이어 공급 전원
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="conveyorPowerSupply" name="conveyorPowerSupply" value={formData.conveyorPowerSupply} onChange={handleInputChange}></input>
                    </div>
                    <div htmlFor="conveyorPaintColor" className="mt-4 w-48 md:w-80 md:flex md:flex-col 2xl:w-2/5">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        컨베이어 페인트 색상
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="conveyorPaintColor" name="conveyorPaintColor" value={formData.conveyorPaintColor} onChange={handleInputChange}></input>
                    </div>
                    <div className="mt-4 w-48 md:flex md:flex-col">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        컨베이어 속도 조절
                      </label>
                      <div className='my-4 text-xs md:flex md:gap-x-1 2xl:gap-x-3'>
                        <input type="radio" id="noNeed" name="noNeed" value="noNeed" checked={formData.noNeed === 'noNeed'} onChange={handleInputChange} />{' '}
                        <label className="mr-2 md:text-sm 2xl:text-base">
                          필요없음
                        </label>
                        <input type="radio" id="need" name="need" value="need" checked={formData.need === 'need'} onChange={handleInputChange} /> <label className='md:text-sm 2xl:text-base'>필요함</label>
                      </div>
                    </div>
                    <div className="mt-4 w-48 md:w-80 md:flex md:flex-col 2xl:w-2/5">
                      <label htmlFor="additionalItemsOutsideConveyor" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        컨베이어 본체외 추가 제작품
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="additionalItemsOutsideConveyor" name="additionalItemsOutsideConveyor" value={formData.additionalItemsOutsideConveyor} onChange={handleInputChange}></input>
                    </div>
                    <div htmlFor="specificationsForOtherQuotes" className="mt-4 w-48 md:w-80 md:flex md:flex-col 2xl:w-2/5">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        타 견적에 필요한 사양
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="specificationsForOtherQuotes" name="specificationsForOtherQuotes" value={formData.specificationsForOtherQuotes} onChange={handleInputChange}></input>
                    </div>
                    <div htmlFor="comment" className="flex flex-col mt-2.5 w-64 md:mt-4 md:w-3/4 2xl:w-4/5">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        코멘트
                      </label>
                      <textarea className={[navigationFont.className, 'rounded-[15px] border border-black border-opacity-20 h-44 2xl:h-80 p-5 text-left'].join(' ')} type="text" id="comment" name="comment" value={formData.comment} onChange={handleInputChange}></textarea>
                    </div>
                  </div>
                  <div className="flex justify-center pt-14 pb-14 2xl:pt-16">
                    <div className="bg-[#162A4A] rounded-[30px] inline-block">
                      <button className={[subHeaderFont.className, 'text-center', 'text-white', 'text-sm', '2xl:text-lg', 'font-bold', 'py-2', 'px-10'].join(' ')}>Send Request</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id="autocad">
                <form id="submit" onSubmit={handleSubmit}>
                  <div className="mx-auto">
                    <div className="flex flex-wrap gap-x-5 gap-y-3.5 justify-between">
                      <div className="w-48 md:w-80 2xl:w-2/5 md:flex md:flex-col">
                        <label htmlFor="companyName" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                          회사명
                        </label>
                        <input required className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48 md:w-80 2xl:w-2/5 md:flex md:flex-col">
                        <label htmlFor="contactPerson" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                          담당자
                        </label>
                        <input required className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48 md:w-80 2xl:w-2/5 md:flex md:flex-col">
                        <label htmlFor="phoneNumber" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                          TEL(전화번호)
                        </label>
                        <input required className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48 md:w-80 2xl:w-2/5 md:flex md:flex-col">
                        <label htmlFor="emailAddress" className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                          이메일 주소
                        </label>
                        <input required className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 md:h-8 2xl:h-14 p-2 text-left'].join(' ')} type="text" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange}></input>
                      </div>
                    </div>
                    <div className="border border-black border-opacity-10 h-[1px] my-6" />
                    <div htmlFor="comment" className="flex flex-col mt-2.5 w-64 md:mt-4 md:w-3/4 2xl:w-4/5">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5', 'md:text-sm', '2xl:text-base'].join(' ')}>
                        코멘트
                      </label>
                      <textarea required className={[navigationFont.className, 'rounded-[15px] border border-black border-opacity-20 h-44 2xl:h-80 p-5 text-left'].join(' ')} type="text" id="comment" name="comment" value={formData.comment} onChange={handleInputChange}></textarea>
                    </div>
                  </div>
                  <div className="flex justify-center pt-14 pb-14 2xl:pt-16">
                    <div className="bg-[#162A4A] rounded-[30px] inline-block">
                      <button className={[subHeaderFont.className, 'text-center', 'text-white', 'text-sm', '2xl:text-lg', 'font-bold', 'py-2', 'px-10'].join(' ')}>Send Request</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mb-5 justify-center">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
        </div>
      </div>
    </>
  );
}
