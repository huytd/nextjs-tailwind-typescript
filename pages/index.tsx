import { Layout } from '../components/Layout';
import {getAPIBaseURL} from '../helpers/api';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
  return <Layout>
    <div className="w-full h-full">
      <div className="flex p-5 flex-row">
        Hello { props.hello || '(waiting...)' }
      </div>
    </div>
  </Layout>;
};

Index.getInitialProps = async ({ req }) => {
  const base = getAPIBaseURL(req);
  const re = await fetch(`${base}/api/hello/world`);
  const data = await re.json();
  return data;
};

export default Index;
