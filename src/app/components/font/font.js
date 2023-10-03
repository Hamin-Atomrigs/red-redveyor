import { Nunito_Sans, Caveat } from 'next/font/google';

const headerFont = Nunito_Sans({
    weight: '900',
    style: 'normal',
    subsets: ['latin'],
});

const subHeaderFont = Nunito_Sans({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
});

const navigationFont = Nunito_Sans({
    weight: '700',
    style: 'normal',
    subsets: ['latin'],
});

const handWriteFont = Caveat({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
})

export {
    headerFont,
    subHeaderFont,
    navigationFont,
    handWriteFont,
}
