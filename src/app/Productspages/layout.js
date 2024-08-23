import './../globals.css'
import Footersec from '@/components/Footer-firtspage/page';
import Header from './Header/page';
import Head from 'next/head';
export const metadata = {
    title: " اسنپ فود | سفارش آنلاین غذا از تمامی رستوران ها و فست فودها",
    description: "سفارش غذا با تخفیف از رستوران ها و فست فود های ایران. ارسال اکسپرس در سریع ترین زمان ممکن. خرید غذا با امکان مقایسه رستوران ها",
    charset: "UTF-8"
};
export default function RootLayout({ children }) {

    return (
        <html dir="rtl" lang="en">
            <Head>
                <link rel="icon" href="logo.png" />
            </Head>
            <body dir='rtl'>
                <Header />
                {children}
                <footer className='w-full mt-[30px] bg-[#f9fafb] flex flex-wrap justify-center items-center'>
                    <Footersec />
                </footer>
            </body>
        </html>
    );
}
