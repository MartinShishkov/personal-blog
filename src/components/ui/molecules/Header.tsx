import * as React from 'react'
import Link from 'gatsby-link'

const styles = require('./Header.module.scss');

export const Header = () => {
    const appName = "sharkDeveloper";

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    <Link to="/">
                        {appName}
                    </Link>
                </h1>
            </div>
        </header>
    )
}
