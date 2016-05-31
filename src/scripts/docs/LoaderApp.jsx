import React    from 'react';
import ReactDOM from 'react-dom';

import { Loader } from '../components';

import Playground from 'component-playground';

const labelExample = require('raw!./examples/Loader.example.txt');
const exampleScope  = {
  React:  React,
  ReactDOM: ReactDOM,
  Loader: Loader
};

class LoaderApp extends React.Component {
  static displayName = 'Rhinostyle Loader Example';

  render() {
    return (
      <div>
        <h1 className="site-headline">Loaders</h1>

        <section className="site-section">
          <h3 className="site-subheadline">Loader Pulse</h3>

          <div class="u-m-b-md">
            <Loader />
            <Loader type="accent" />
            <Loader type="secondary" />
          </div>

        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Loader Line</h3>

          <div class="u-m-b-md">
            <Loader type="line" />
          </div>

        </section>

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={loaderExample} scope={exampleScope} noRender={false} />
        </section>

      </div>
    );
  }
}

ReactDOM.render(<LoaderApp />, document.getElementById('js-app'));



//     <div class="loader-pulse loader-pulse--default">
//       <span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span>
//     </div>

//     <div class="loader-pulse loader-pulse--accent">
//       <span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span>
//     </div>

//     <div class="loader-pulse loader-pulse--secondary">
//       <span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span>
//     </div>
//
//   </div>
//
//
//

//
//     <div class="loader-line loader-line--default">
//       <span class="loader-line__line"></span><span class="loader-line__line"></span>
//     </div>
//
