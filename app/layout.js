import "./globals.css";
import Header from '@/Components/Header';
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation';
import { GlobalContextProvider } from '@/context/globalContext';
import SigmaLogoHeader from '@/Components/SigmaLogoHeader';
import Provider from '@/Components/Provider';
import Footer from '@/Components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SIGMA NODE - A Platform By Developers, For Developers',
  description: 'Welcome to SIGMA NODE, the ultimate social media platform designed exclusively for developers like you. Discover a vibrant community of like-minded individuals where you can unleash your creativity and showcase your talent through various mediums such as blogs, infographics, shorts, podcasts, and much more. At SIGMA NODE, we understand the unique needs and aspirations of developers. That\'s why we have created a space dedicated to your growth and success. Whether you\'re a seasoned professional or just starting your coding journey, our platform provides the perfect environment to connect, learn, and collaborate with other developers from around the world.\n\nWith SIGMA NODE, you can build your personal brand and amplify your voice in the developer community. Share your insights, expertise, and innovative ideas through engaging blog posts that capture the attention of fellow developers and tech enthusiasts. Dive into the world of visual storytelling by crafting captivating infographics that simplify complex concepts and leave a lasting impact.\n\nBut that\'s not all. We go beyond traditional content formats. Create compelling shorts to showcase your coding skills, share quick tips and tricks, or simply entertain and inspire others in the community. Take your communication to the next level with podcasts, where you can discuss trending topics, interview industry experts, and explore the latest developments in the world of technology.\n\nAt SIGMA NODE, we prioritize your experience and ensure that your content reaches the right audience. Our platform is built with advanced SEO features, helping your work gain visibility and attract organic traffic. Connect with developers who share your interests, follow influential profiles, and engage in meaningful discussions that fuel your growth.\n\nJoin the revolution and be a part of SIGMA NODE today. Together, let\'s shape the future of developer-centric social media, where innovation thrives, knowledge is shared, and connections are forged. Unleash your potential and join a community where developers inspire, learn from, and empower each other.\n\nStart your journey on SIGMA NODE - The Platform By Developers, For Developers. Let\'s create, collaborate, and code together!'

}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
          <main className="app">
            {pathname === "/onBoard" || pathname === "/login" ? <SigmaLogoHeader/>:<Header/>}
            {children}
            <Footer/>
          </main>
          </Provider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}

