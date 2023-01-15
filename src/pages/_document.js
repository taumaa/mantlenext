import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html className="dark">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/icon.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icon.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/icon.png"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument