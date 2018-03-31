import * as React from 'react'
import Link from 'gatsby-link'

const styles = require('./Header.module.scss');

export const Header = ({data}) => {
    const appName = "sharkDeveloper";

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.cell}>
                    <h1 className={styles.title}>
                        <Link to="/">
                            {appName}
                        </Link>
                    </h1>
                </div>
                {/*<div className={styles.cell}>
                    <Link to={"/about"}>
                        {"bookshelf"}
                    </Link>
                </div>*/}
                <div className={styles.cell}>
                    <Link to={"/about"}>
                        {"about"}
                    </Link>
                </div>
            </div>
        </header>
    )
}
