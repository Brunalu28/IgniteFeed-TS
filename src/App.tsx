import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import "./global.css";

// author: {avatarURL: "", name:"", role:""}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/Brunalu28.png',
      name: 'Luiza Bruna',
      role: 'Web developer'
  },
  content: [
    { type: 'paragraph', content:'Fala galeraa 👋'},
    { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite da Rocketseat. 🚀"},
    { type: 'Link', content:'github.com/Brunalu28/IgniteFeed-Reactjs'}
  ],
  publishedAt: new Date('2023-01-27 22:13:00')
},
{
  id: 2,
  author: {
    avatarUrl:'https://github.com/LucenaDanilo.png',
    name: 'Danilo Lucena',
    role: 'back and developer'
},
content: [
  { type: 'paragraph', content:'Fala galeraa 👋'},
  { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite da Rocketseat. 🚀"},
  { type: 'Link', content:'github.com/Brunalu28/IgniteFeed-Reactjs'}
],
publishedAt: new Date('2023-01-25 22:13:00')
}
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
