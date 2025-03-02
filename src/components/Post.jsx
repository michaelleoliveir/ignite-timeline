import React from 'react'

import styles from "./Post.module.css"

const Post = () => {
    return (
        <article className={styles.post}>
            <header>

                {/* primeira parte do header */}
                <div className={styles.author}>
                    <img
                        src="https://64.media.tumblr.com/eff450b860c3f2c2fb6006cd754ae49c/c3d375d01875d8c6-8a/s1280x1920/b0ae516254203f1d4015061377b5044d0fd8a9d7.jpg"
                        className={styles.avatar}
                    />

                    <div className={styles.authorInfo}>
                        <strong>Michaelle Oliveira</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>

                {/* segunda parte do header */}
                <time title='01 de março, às 21h19' dateTime="2024-01-03 21:19:34">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{" "} <a href='#'>jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{" "}
                    <a href="">#nlw</a>{" "}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário'></textarea>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}

export default Post