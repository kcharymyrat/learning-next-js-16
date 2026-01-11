import React from 'react'

import styles from './page.module.css'

const UIVerseIO = () => {
    return (
        <div className='p-4 m-4'>
            <h1>Yo</h1>
            <br />
            <div className={`${styles.spinner} p-4 m-4`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
    )
}

export default UIVerseIO