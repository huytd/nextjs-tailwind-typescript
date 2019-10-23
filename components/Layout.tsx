import Head from "next/head";
import '../style.css';

export const Layout = props => (
  <div className="Layout">
    <Head>
      <title></title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <div className="Content">{props.children}</div>
  </div>
);
