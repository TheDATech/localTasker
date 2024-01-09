import { BlogProvider } from '../Context/BlogContext';
import { Footer } from '../Component/Footer'
import { Header } from '../Component/Header'
import "../globals.css";
import "./style/footer.css";
import "./style/header.css";
import "./style/home.css";
import "./style/whoweare.css";

const MyApp = ({ Component, pageProps }) => {
  return (
      <>
      <BlogProvider>
      <Header/>
      <main className='main-containerbox'>
      <Component {...pageProps} />
       </main>
      <Footer/>
      </BlogProvider>
      </>
  );
};

export default MyApp;