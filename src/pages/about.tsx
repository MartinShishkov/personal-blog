import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet";
import { List } from "./../components/ui/atoms/List";

export interface IAboutPageProps{

}

export default class AboutPage extends React.Component<IAboutPageProps, {}> {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Helmet title={`sharkDeveloper - about`} />
                <div className={"row"}>              
                    <div className={"col-xs-12 col-sm-8 col-sm-offset-2"}>
                        <h2 style={{fontWeight: "normal"}}>What is this all about?</h2>
                        <p>
                            A blog for helping software developers (and not only) with
                            a lot of bullshit that they have to go through (on a daily basis):
                        </p>
                        <List 
                            items={[
                                {text: "Technical insanity", children: [
                                    {text: "Shitty language "},
                                    {text: "Configurations"},
                                    {text: "Keeping up (developers will know)"}
                                ]},
                                {text: "Default assumptions about everything"},
                                {text: "Health/Energy"},
                                {text: "Relationships with people"}
                            ]}
                        />

                        <p>Helpful stuff:</p>
                        <List
                            items={[
                                {text: "Tutorials"},
                                {text: "Book reviews"},
                                {text: "Life hacks"},
                                {text: "Web dev hacks"},
                                {text: "Mindset hacks"}
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}