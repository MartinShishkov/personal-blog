import * as React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Header } from '../components/ui/molecules/Header';

import './bootstrap.min.css';
import './index.scss';
import './site.scss';

const TemplateWrapper = ({ children }) => (
  <div style={{height: "100%"}}>
    <Helmet
        title="sharkDeveloper"
        meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
        ]}
    />
    
    <div className={"container-fluid"} style={{height: "100%"}}>
        <div className={"row"}>
            <div className={"col-xs-12 col-sm-10 col-sm-offset-2"} style={{height: "100%" }}>
                <div className={"row"} style={{backgroundColor: "rgb(231, 231, 231)"}}>
                    <div className={"col-xs-12"}>
                        <Header />
                    </div>
                </div>
                
                <main className={"row"} style={{height: "100%", backgroundColor: "rgb(231, 231, 231)"}}>
                    <div className={"col-xs-12"} style={{height: "100%" }}>
                        {children()}
                    </div>
                </main>
            </div>
        </div>
        <footer className={"row"}>
            <div className={"col-xs-12"} style={{height: "200px"}}>

            </div>
        </footer>
        
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
