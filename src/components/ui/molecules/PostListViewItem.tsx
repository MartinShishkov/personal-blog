import * as React from "react";
import Link from "gatsby-link";

const styles = require('./PostListViewItem.style.scss');

export interface IPostListViewItemProps{
    url: string;
    title: string;
    date: string;
}

export const PostListViewItem = (props: IPostListViewItemProps) => {
    return (
        <Link
            to={props.url} 
            className={"postListViewItem"}
        >
            <span className={"title"}>{props.title}</span>
            <span className={"date"}>
                {props.date}
            </span>                
        </Link>
    );
}