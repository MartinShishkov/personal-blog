import * as React from "react";
import Link from "gatsby-link";

const styles = require('./PostListViewItem.module.scss');

export interface IPostListViewItemProps{
    url: string;
    title: string;
    date: string;
    description: string;
}

export const PostListViewItem = (props: IPostListViewItemProps) => {

    return (
        <div className={styles.postListViewItem}>
            <Link
                to={props.url} 
                className={styles.title}
            >
                {props.title}
            </Link>
            <span>{" = "}</span>
            <span className={styles.description}>{`"${props.description}";`}</span>
            <span className={styles.date}>
                {`${props.date}`}
            </span>
        </div>
    );
}