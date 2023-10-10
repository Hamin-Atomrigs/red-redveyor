'use client';
import { useState } from 'react';
import { headerFont, subHeaderFont, navigationFont } from '../components/font/font';

export default function Quote() {
  const [openTab, setOpenTab] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phoneNumber: '',
    emailAddress: '',
    goodsType: '',
    hourlyTransportQuantity: '',
    beltWidth1: '',
    conveyorLength1: '',
    number1: '',
    // beltWidth2: '',
    // conveyorLength2: '',
    // number2: '',
    // beltWidth3: '',
    // conveyorLength3: '',
    // number3: '',
    // beltWidth4: '',
    // conveyorLength4: '',
    // number4: '',
    // beltWidth5: '',
    // conveyorLength5: '',
    // number5: '',
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

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // const [divs, setDivs] = useState([
  //   {
  //     id: 1,
  //     content: (
  //       <div className='leading-[3] text-xs'>
  //         <label htmlFor="beltWidth1" className="mr-2">
  //           벨트 폭
  //         </label>
  //         <input
  //           className='rounded-2xl border border-black border-opacity-20 w-16 h-6 mx-2.5'
  //           type="text"
  //           id="beltWidth1"
  //           name="beltWidth1"
  //           value={formData.beltWidth1}
  //           onChange={handleInputChange}
  //         />
  //         <label htmlFor="conveyorLength1" className="mr-2">
  //           컨베이어 길이
  //         </label>
  //         <input
  //           className='rounded-2xl border border-black border-opacity-20 w-16 h-6 mx-2.5'
  //           type="text"
  //           id="conveyorLength1"
  //           name="conveyorLength1"
  //           value={formData.conveyorLength1}
  //           onChange={handleInputChange}
  //         />
  //         - - -
  //         <label htmlFor="number1" className="mr-2">
  //           입력
  //         </label>
  //         <input
  //           className='rounded-2xl border border-black border-opacity-20 w-16 h-6 mx-2.5'
  //           type="text"
  //           id="number1"
  //           name="number1"
  //           value={formData.number1}
  //           onChange={handleInputChange}
  //         />
  //         대
  //       </div>
  //     ),
  //   },
  // ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };


  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const newDiv = {
  //     id: divs.length + 1, // Assign a unique ID
  //     content: (
  //       <div className='leading-[3] text-xs'>
  //         <label htmlFor={`beltWidth${divs.length + 1}`} className="mr-2">
  //           벨트 폭
  //         </label>
  //         <input
  //           className='rounded-2xl border border-black border-opacity-20 w-16 h-6 mx-2.5'
  //           type="text"
  //           id={`beltWidth${divs.length + 1}`}
  //           name={`beltWidth${divs.length + 1}`}
  //           value={formData[`beltWidth${divs.length + 1}`]}
  //           onChange={handleInputChange}
  //         />
  //         <label htmlFor={`conveyorLength${divs.length + 1}`} className="mr-2">
  //           컨베이어 길이
  //         </label>
  //         <input
  //           className='rounded-2xl border border-black border-opacity-20 w-16 h-6 mx-2.5'
  //           type="text"
  //           id={`conveyorLength${divs.length + 1}`}
  //           name={`conveyorLength${divs.length + 1}`}
  //           value={formData[`conveyorLength${divs.length + 1}`]}
  //           onChange={handleInputChange}
  //         />
  //         - - -
  //         <label htmlFor={`number${divs.length + 1}`} className="mr-2">
  //           입력
  //         </label>
  //         <input
  //           className='rounded-2xl border border-black border-opacity-20 w-16 h-6 mx-2.5'
  //           type="text"
  //           id={`number${divs.length + 1}`}
  //           name={`number${divs.length + 1}`}
  //           value={formData[`number${divs.length + 1}`]}
  //           onChange={handleInputChange}
  //         />
  //         대
  //       </div>
  //     ),
  //   };
  //   if (divs.length < 5) {
  //     setDivs([...divs, newDiv]);
  //   }
  // }

  return (
    <>
      <div className='max-w-xs 2xl:py-24 mx-auto md:gap-x-3 md:max-w-3xl md:justify-center 2xl:max-w-7xl 2xl:gap-x-8'>
        <div className={[headerFont.className, 'text-sm', 'text-center', 'mt-24', 'mb-10'].join(' ')}>견적신청서</div>
        <ul className="flex flex-col gap-y-5 content-center list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
          <li className="mr-2 last:mr-0 flex-auto w-36">
            <a
              className={[`text-xs md:text-lg 2xl:text-xl font-bold px-5 py-3 ${openTab === 1 ? 'text-black text-xs' : 'text-grey'} ${navigationFont.className} text-right`].join(' ')}
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
          </li>
          <li className="mr-2 last:mr-0 flex-auto w-36">
            <a
              className={[`text-xs md:text-lg 2xl:text-xl font-bold px-5 py-3 ${openTab === 2 ? 'text-black text-xs' : 'text-grey'} ${navigationFont.className} text-right`].join(' ')}
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
          </li>
        </ul>
        <div className='relative flex flex-col min-w-0 break-words w-full mb-6'>
          <div className='py-5 flex-auto'>
            <div className='tab-content tab-space'>
              <div className={openTab === 1 ? 'block' : 'hidden'} id="conveyor">
                <form id="submit" onSubmit={handleSubmit}>
                  <div className="mx-auto">
                    <div className="flex flex-wrap gap-x-5 gap-y-3.5 justify-between">
                      <div className="w-48">
                        <label htmlFor="companyName" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                          회사명
                        </label>
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48">
                        <label htmlFor="contactPerson" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                          담당자
                        </label>
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48">
                        <label htmlFor="phoneNumber" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                          TEL(전화번호)
                        </label>
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48">
                        <label htmlFor="emailAddress" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                          이메일 주소
                        </label>
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange}></input>
                      </div>
                    </div>
                    <div className="border border-black border-opacity-10 h-[1px] my-6" />
                    <div className="flex flex-col mb-4 w-72">
                      <label htmlFor="goodsType" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        운반물 종류
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="goodsType" name="goodsType" value={formData.goodsType} onChange={handleInputChange}></input>
                    </div>
                    <div className="flex flex-col mb-4 w-72">
                      <label htmlFor="hourlyTransportQuantity" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        시간당 운반량
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="hourlyTransportQuantity" name="hourlyTransportQuantity" value={formData.hourlyTransportQuantity} onChange={handleInputChange}></input>
                    </div>
                    <div className="flex flex-col mb-4 w-72">
                      <label htmlFor="conveyorType" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        컨베이어 종류
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="conveyorType" name="conveyorType" value={formData.conveyorType} onChange={handleInputChange}></input>
                    </div>
                    <div className='leading-[3] text-xs'>
                      <div className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        컨베이어 치수
                      </div>
                      <label htmlFor="beltWidth1" className="mr-2 text-right">
                        벨트 폭
                      </label>
                      <input
                        className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 w-16 h-6 mx-2.5 p-2 text-right'].join(' ')}
                        type="text"
                        id="beltWidth1"
                        name="beltWidth1"
                        value={formData.beltWidth1}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="conveyorLength1" className="mr-2 text-right">
                        컨베이어 길이
                      </label>
                      <input
                        className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 w-16 h-6 mx-2.5 p-2 text-right'].join(' ')}
                        type="text"
                        id="conveyorLength1"
                        name="conveyorLength1"
                        value={formData.conveyorLength1}
                        onChange={handleInputChange}
                      />
                      - - -
                      <label htmlFor="number1" className="mr-2 text-right">
                        입력
                      </label>
                      <input
                        className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 w-16 h-6 mx-2.5 p-2 text-right'].join(' ')}
                        type="text"
                        id="number1"
                        name="number1"
                        value={formData.number1}
                        onChange={handleInputChange}
                      />
                      대
                    </div>
                    <div className="w-48">
                      <label htmlFor="location" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        설치 지역
                      </label>
                      <div>
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 w-16 h-6 mr-2.5 p-2 text-right'].join(' ')} type="text" id="location1" name="location1" value={formData.location1} onChange={handleInputChange}></input> 도{' '}
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 w-16 h-6 ml-2.5 p-2 text-right'].join(' ')} type="text" id="location2" name="location2" value={formData.location2} onChange={handleInputChange}></input>
                        <div className='mt-4 text-xs'>
                          <input type="radio" id="inside" name="inside" value="inside" checked={formData.inside === 'inside'} onChange={handleInputChange} />{' '}
                          <label className="mr-2">
                            실내
                          </label>
                          <input type="radio" id="outside" name="outside" value="outside" checked={formData.inside === 'outside'} onChange={handleInputChange} /> <label>실외</label>
                        </div>
                      </div>
                    </div>
                    <div htmlFor="scheduledInstallationDate" className="w-48">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        설치 예정일
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="scheduledInstallationDate" name="scheduledInstallationDate" value={formData.scheduledInstallationDate} onChange={handleInputChange}></input>
                    </div>
                    <div htmlFor="conveyorPowerSupply" className="w-48">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        컨베이어 공급 전원
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="conveyorPowerSupply" name="conveyorPowerSupply" value={formData.conveyorPowerSupply} onChange={handleInputChange}></input>
                    </div>
                    <div htmlFor="conveyorPaintColor" className="w-48">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        컨베이어 페인트 색상
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="conveyorPaintColor" name="conveyorPaintColor" value={formData.conveyorPaintColor} onChange={handleInputChange}></input>
                    </div>
                    <div className="w-48">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        컨베이어 속도 조절
                      </label>
                      <div className='mt-4 text-xs mb-4'>
                        <input type="radio" id="noNeed" name="noNeed" value="noNeed" checked={formData.noNeed === 'noNeed'} onChange={handleInputChange} />{' '}
                        <label className="mr-2">
                          필요없음
                        </label>
                        <input type="radio" id="need" name="need" value="need" checked={formData.need === 'need'} onChange={handleInputChange} /> <label>필요함</label>
                      </div>
                    </div>
                    <div className="w-48">
                      <label htmlFor="additionalItemsOutsideConveyor" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        컨베이어 본체외 추가 제작품
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="additionalItemsOutsideConveyor" name="additionalItemsOutsideConveyor" value={formData.additionalItemsOutsideConveyor} onChange={handleInputChange}></input>
                    </div>
                    <div htmlFor="specificationsForOtherQuotes" className="w-48">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        타 견적에 필요한 사양
                      </label>
                      <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="specificationsForOtherQuotes" name="specificationsForOtherQuotes" value={formData.specificationsForOtherQuotes} onChange={handleInputChange}></input>
                    </div>
                    <div htmlFor="comment" className="flex flex-col mt-2.5 w-64">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        코멘트
                      </label>
                      <textarea className={[navigationFont.className, 'rounded-[15px] border border-black border-opacity-20 h-44 p-5 text-right'].join(' ')} type="text" id="comment" name="comment" value={formData.comment} onChange={handleInputChange}></textarea>
                    </div>
                  </div>
                  <div className="flex justify-center pt-14 pb-14">
                    <div className="bg-[#162A4A] rounded-[30px] inline-block">
                      <button className={[subHeaderFont.className, 'text-center', 'text-white', 'text-sm', 'font-bold', 'py-2', 'px-10'].join(' ')}>Send Request</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id="autocad">
                <form id="submit" onSubmit={handleSubmit}>
                  <div className="mx-auto">
                    <div className="flex flex-wrap gap-x-5 gap-y-3.5 justify-between">
                      <div className="w-48">
                        <label htmlFor="companyName" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                          회사명
                        </label>
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48">
                        <label htmlFor="contactPerson" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                          담당자
                        </label>
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48">
                        <label htmlFor="phoneNumber" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                          TEL(전화번호)
                        </label>
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}></input>
                      </div>
                      <div className="w-48">
                        <label htmlFor="emailAddress" className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                          이메일 주소
                        </label>
                        <input className={[navigationFont.className, 'rounded-2xl border border-black border-opacity-20 h-6 p-2 text-right'].join(' ')} type="text" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange}></input>
                      </div>
                    </div>
                    <div className="border border-black border-opacity-10 h-[1px] my-6" />
                    <div htmlFor="comment" className="flex flex-col mt-2.5 w-64">
                      <label className={[subHeaderFont.className, 'text-xs', 'mb-2.5'].join(' ')}>
                        코멘트
                      </label>
                      <textarea className={[navigationFont.className, 'rounded-[15px] border border-black border-opacity-20 h-44 p-5 text-right'].join(' ')} type="text" id="comment" name="comment" value={formData.comment} onChange={handleInputChange}></textarea>
                    </div>
                  </div>
                  <div className="flex justify-center pt-14 pb-14">
                    <div className="bg-[#162A4A] rounded-[30px] inline-block">
                      <button className={[subHeaderFont.className, 'text-center', 'text-white', 'text-sm', 'font-bold', 'py-2', 'px-10'].join(' ')}>Send Request</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
