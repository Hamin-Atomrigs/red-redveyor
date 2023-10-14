import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function GET() {
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function POST(request) {
    const formData = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_MY_EMAIL,
            pass: process.env.NEXT_PUBLIC_MY_PASSWORD,
        },
    });

    const mailOptions = {
        from: formData.emailAddress,
        to: 'ggasiyo@hanmail.net',
        cc: ['gogokhm1@gmail.com'],
        subject: `Message from website`,
        text:
            `견적서

             회사명: ${formData.companyName}
             담당자: ${formData.contactPerson}
             TEL(전화번호): ${formData.phoneNumber}
             이메일 주소: ${formData.emailAddress}
             운반물 종류: ${formData.goodsType}
             시간당 운반량: ${formData.hourlyTransportQuantity}
             컨베이어 종류: ${formData.conveyorType}
             컨베이어 치수: 벨트 폭 - ${formData.beltWidth1}, 컨베이어 길이 - ${formData.conveyorLength1}, 몇 ${formData.number1} 대
             설치 지역: ${formData.location1} - ${formData.location2}
             실내/살외: ${formData.inside}, ${formData.outside}
             설치 예정일: ${formData.scheduledInstallationDate}
             컨베이어 공급 전원: ${formData.conveyorPowerSupply}
             컨베이어 페인트 색상: ${formData.conveyorPaintColor}
             속도조절: ${formData.noNeed ? '필요없음' : ''}, ${formData.need ? '필요함' : ''}
             컨베이어 본체외 추가 제작품: ${formData.additionalItemsOutsideConveyor}
             타 견적에 필요한 사양: ${formData.specificationsForOtherQuotes}
             코멘트: ${formData.comment}
        `,
    };

    const sendMailPromise = () =>
        new Promise((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
