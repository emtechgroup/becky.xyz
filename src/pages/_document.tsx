import Document, { Html, Head, Main, NextScript } from 'next/document'
import NavBar from 'components/Navbar'
import Secondline from 'components/Secondline'
import Title from 'components/Title'
import Paragraph1 from 'components/Paragraph1'
import Paragraph2 from 'components/Paragraph2'
import Threebuttons from 'components/Threebuttons'
import Bulletpoints from 'components/Bulletpoints'
import Bottombutton from 'components/Bottombutton'
import Bottombutton2 from 'components/Bottombutton2'


class MyDocument extends Document {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="h-full font-sans">
        <Head />
        <NavBar />
        <img src="/chad.jpeg" style={{width: "20%", height: "auto", margin: "0 auto"}}/>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (localStorage.darkMode === 'true') {
              document.documentElement.classList.add('dark')
            }`,
          }}
        ></script>
        <body className="h-full bg-gray-100 dark:bg-gray-850">
          <Title />
          <Secondline />
          <Paragraph1 />
          <Threebuttons />
          <Paragraph2 />
          <Bulletpoints />
          <Bottombutton />
          <Bottombutton2 />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
