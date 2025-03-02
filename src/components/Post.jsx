import { format, formatDistanceToNow } from "date-fns" 
import prBR from "date-fns/locale/pt-BR"

import styles from "./Post.module.css"

import Comment from './Comment'
import Avatar from "./Avatar"

const Post = (props) => {
    const publishedDateFormatted = format(props.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: prBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: prBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>

                {/* primeira parte do header */}
                <div className={styles.author}>
                    <Avatar 
                        src={props.author.avatarUrl}/>

                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                {/* segunda parte do header */}
                <time title={publishedDateFormatted} dateTime={(props.publishedAt).toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            {/* conteúdo do post */}
            <div className={styles.content}>
                {(props.content).map(line => {
                    if(line.type === "paragraph") {
                        return <p>{line.content}</p>
                    } else if(line.type === "link") {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            {/* escrever comentário */}
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário'></textarea>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}

export default Post