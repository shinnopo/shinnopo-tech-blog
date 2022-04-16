import React from 'react'
import * as styles from './title.module.css'
import * as style from '../templates/blog-post.module.css'

const Title = ({ title, content }) => (
    <div className={`${styles.titleWrapper} ${style.article}`}>
        <div className={styles.details}>
            <h1 className={styles.title}>{title}</h1>
            {content && <p className={styles.content}>{content}</p>}
        </div>
    </div>
)

export default Title