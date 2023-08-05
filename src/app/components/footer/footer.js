import { Nunito_Sans } from 'next/font/google';

const footerFont = Nunito_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-center h-10 bg-blue-50">
        <div className={[footerFont.className, 'text'].join(' ')}>© 2023 Red Conveyor 레드콘베이어. All rights reserved.</div>
      </div>
    </>
  );
}
