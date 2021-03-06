import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TopComponents from "../components/TopComponents"
import AboutComponents from "../components/AboutComponents";
import ContactComponents from "../components/ContactComponents";
import DownloadComponents from "../components/DownloadComponents";
import ServiceComponents from "../components/ServiceComponents";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gaming Creators Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
       <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>
      </Head>
     
       
        <h1></h1>
       <TopComponents />
       <AboutComponents />
       <ContactComponents />
       <DownloadComponents />
       <ServiceComponents />

      <footer className={styles.footer}>
        <a
         
        >
       
          <span className={styles.logo}>
      
          </span>
        </a><script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin="true"></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin="true"></script>
      </footer>
    </div>
  )
}
