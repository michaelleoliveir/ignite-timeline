import styles from "./Comment.module.css"

import { ThumbsUp, Trash } from 'phosphor-react'

import Avatar from "./Avatar"

const Comment = (props) => {
    function handleDeleteComment() {
        props.onDeleteComment(props.content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://64.media.tumblr.com/204649a9aed38a26b45806ee5ab74c90/98419914024255a6-9c/s540x810/a20627d78dd22cae18ec4d90547cd52aacac6acf.jpg" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Emanuelle Oliveira</strong>
                            <time title='02 de março, às 10h49' dateTime="2024-02-03 10:49:14">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment