import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'Link';
    content: string;
}
export interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}


export function Post({author, publishedAt, content}: PostProps){

    const [comments, setComments] = useState([
        'Parabéns pelo novo projeto!!'
    ])

    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    // day: '2-digit',
    // month: 'long',
    // hour: '2-digit',
    // minute: '2-digit'
    // }
    // ).format(publishedAt);
    // Formato do JS para datas (intl)

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    }) // Compara a data adicionada a data atual

    // Programação imperativa
    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()

        // const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText]); // os três pontos vão pegar os valores da lista

        setNewCommentText('');
        // event.target.comment.value = '';

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function handleCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string){

        const commentsWithoutDeleteOne = comments.filter(comment =>{
            return comment != commentToDelete;
        })
        // imutabilidade => as variéveis não sofrem mutação, nós criamos um novo valor (novo espaço na memória)
        setComments(commentsWithoutDeleteOne)

        // essa função cria uma nova lista com comentários diferentes do comentário que foi deletado.
    }

    // const publishedDateComment = new Date()

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'Link'){
                        return <p key={line.content}><a href='#'>👉 Clique no link </a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    value={newCommentText}
                    placeholder='Deixe seu comentário'
                    onChange={handleNewCommentChange}
                    onInvalid={handleCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            contentcomment={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}