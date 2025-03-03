import { useState } from "react"
import { format, formatDistanceToNow } from "date-fns" 
import prBR from "date-fns/locale/pt-BR"

import styles from "./Post.module.css"

import Comment from './Comment'
import Avatar from "./Avatar"


const Post = (props) => {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])
    const [newCommentText, setNewCommentText] = useState("")

    const publishedDateFormatted = format(props.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: prBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: prBR,
        addSuffix: true
    })

    // adiciona novo comentário a array de comentários
    function handleCreateNewComment(e) {
        e.preventDefault();
        setComments([...comments, newCommentText])

        setNewCommentText("")
    }

    // atualiza o texto do novo comentário quando o usuário muda o input
    function handleNewCommentChange(e) {
        e.target.setCustomValidity("")
        setNewCommentText(e.target.value)
    }

    function handleNewCommentInvalid(e) {
        e.target.setCustomValidity("Esse campo é obrigatório")
    }

    function deleteComment(commentToDelete) {
        // atualizando a lista de comentários sem o comentário que foi deletado

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type === "link") {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            {/* escrever comentário */}
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment" 
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={(e) => handleNewCommentChange(e)}
                    required
                    onInvalid={(e) => handleNewCommentInvalid(e)}
                ></textarea>

                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>
        </article>
    )
}

export default Post