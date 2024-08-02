// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body >{children}</body>
//     </html>
//   );
// }


import './globals.css'
import { Inter } from 'next/font/google'
import ThemeRegistry from '@/utils/ThemeRegistry'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'PeriSkope',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
    //     <ThemeRegistry options={{ key: 'mui-theme' }} >
    //       <div className=' h-screen w-full relative '>
    //         <Sidebar />
    //         <div className='absolute left-[190px] w-[87.5%]'>
    //           <Header />
    //           <div className='pt-2 bg-gray-50 h-70 ' >

    //             {children}
    //           </div>
    //         </div>

    //       </div>



    //     </ThemeRegistry>
    //   </body>
    // </html>



    <html lang="en">
      <body >
        <ThemeRegistry options={{ key: 'mui-theme' }} >
        {children}



        </ThemeRegistry>
      </body>
    </html>
  )
}

