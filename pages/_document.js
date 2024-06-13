import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* If we wants to use the React portal then we can utlize this _document.js file  */}
          {/* Now, In this app we are using React portal for notification in components/ui/notification.js file */}
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
