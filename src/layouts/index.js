import * as React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Header } from '../components/ui/molecules/Header';

import './bootstrap.min.css';
import './index.scss';
import './site.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="SharkDevelopep"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className={"container-fluid"}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
