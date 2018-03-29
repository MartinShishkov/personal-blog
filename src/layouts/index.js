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
        title="SharkDeveloper"
        meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
        ]}
    />
    
    <div className={"container-fluid"} style={{height: "100%"}}>
        <div className={"row"} style={{height: "100%"}}>
            <div className={"col-xs-1 col-sm-2 hidden-xs"} 
                style={{backgroundColor: "rgb(45, 45, 45)", height: "100%"}}>

            </div>
            <div className={"col-xs-12 col-sm-10"}>
                <div className={"row"}>
                    <div className={"col-xs-12"}>
                        <Header />
                    </div>
                </div>
                
                <div className={"row"}>
                    <div className={"col-xs-12"}>
                        {children()}
                    </div>
                </div>
            </div>
        </div>
    
        
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
