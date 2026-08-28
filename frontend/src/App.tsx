import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Playground } from './components/Playground';
import { Performance } from './components/Performance';
import { Documentation } from './components/Documentation';

function App() {
  return (
    <Layout>
      <Hero />
      <Playground />
      <Performance />
      <Documentation />
    </Layout>
  );
}

export default App;