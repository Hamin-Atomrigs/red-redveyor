import { Nunito_Sans } from 'next/font/google';
import Button from '../components/button/button';

const headerFont = Nunito_Sans({
  weight: '900',
  style: 'normal',
  subsets: ['latin'],
});

const subHeaderFont = Nunito_Sans({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

const descFont = Nunito_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function Quote() {
  return (
    <>
      <div className={[headerFont.className, 'text-4xl', 'text-center', 'my-24'].join(' ')}>견적신청서</div>
      <form id="submit">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[34rem]">
              <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
                회사명
              </label>
              <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
            </div>
            <div className="flex flex-col w-[34rem]">
              <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
                담당자
              </label>
              <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-5">
            <div className="flex flex-col w-[34rem]">
              <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
                TEL(전화번호)
              </label>
              <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
            </div>
            <div className="flex flex-col w-[34rem]">
              <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
                FAX(팩스번호)
              </label>
              <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
            </div>
          </div>
          <div className="border border-black border-opacity-10 h-[1px] my-24" />
          <div className="flex flex-col w-[34rem] mb-5">
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              운반물 종류와 치구
            </label>
            <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
          </div>
          <div className="flex flex-col w-[34rem] mb-5">
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              시간당 운반량
            </label>
            <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
          </div>
          <div className="flex flex-col w-[34rem] mb-5">
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              콘베이어 종류
            </label>
            <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
          </div>
          <div>
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              콘베이어 치수
            </label>
          </div>
          <div className="flex flex-col w-[34rem] mb-5 mt-24">
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              설치 지역
            </label>
            <div>
              <input className="rounded-[15px] w-[15rem] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input> 도{' '}
              <input className="rounded-[15px] w-[15rem] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
              <div>
                <input type="radio" id="inside" name="install" value="inside" checked />{' '}
                <label className="mr-2" for="inside">
                  실내
                </label>
                <input type="radio" id="outside" name="install" value="outside" /> <label for="outside">실외</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[34rem] mb-5">
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              설치 예정일
            </label>
            <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
          </div>
          <div className="flex flex-col w-[34rem] mb-5">
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              콘베이어 공급 전원
            </label>
            <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
          </div>
          <div className="flex flex-col w-[34rem] mb-5">
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              콘베이어 페인트 색상
            </label>
            <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
          </div>
          <div className="flex flex-col w-[34rem] mb-5">
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              콘베이어 속도 조절
            </label>
            <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
          </div>
          <div className="flex flex-col w-[34rem] mb-5">
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              콘베이어 본체외 추가 제작품
            </label>
            <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
          </div>
          <div className="flex flex-col w-[34rem] mb-5">
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              타 견적에 필요한 사양
            </label>
            <input className="rounded-[15px] border border-black border-opacity-20 h-12 p-5" type="text" id="firstName" name="firstName"></input>
          </div>
          <div className="flex flex-col w-[34rem] mb-5">
            <label className={[descFont.className, 'text-xl', 'mb-2.5'].join(' ')} for="firstName">
              코멘트
            </label>
            <textarea className="rounded-[15px] border border-black border-opacity-20 h-44 p-5" type="text" id="firstName" name="firstName"></textarea>
          </div>
        </div>
        <div className="flex justify-center pt-14 pb-40">
          <div className="bg-[#162A4A] rounded-[30px] inline-block">
            <button className={[descFont.className, 'text-center', 'text-white', 'text-lg', 'font-bold', 'py-2', 'px-10'].join(' ')}>Send Request</button>
          </div>
        </div>
      </form>
    </>
  );
}
