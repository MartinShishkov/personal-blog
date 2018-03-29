import * as React from "react";
import Link from "gatsby-link";

const styles = require('./PostListViewItem.module.scss');

export interface IPostListViewItemProps{
    url: string;
    title: string;
    date: string;
}

export const PostListViewItem = (props: IPostListViewItemProps) => {
    return (
        <div className={styles.postListViewItem}>
            <span className={styles.date}>
                {props.date}
            </span>
            <Link
                to={props.url} 
                className={styles.title}
            >
                {props.title}
            </Link>
        </div>
    );
}