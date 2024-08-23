import "./globals.css";
export const metadata = {
  title: " اسنپ فود | سفارش آنلاین غذا از تمامی رستوران ها و فست فودها",
  description: "سفارش غذا با تخفیف از رستوران ها و فست فود های ایران. ارسال اکسپرس در سریع ترین زمان ممکن. خرید غذا با امکان مقایسه رستوران ها",
  charset: "UTF-8"
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="en">
      <head>
        <link rel="icon" href="logo.png" />
      </head>
      <body dir="rtl">
          {children}
      </body>
    </html>
  );
}
