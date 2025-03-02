import { Header } from "./components/Header"
import Sidebar from "./components/Sidebar"
import Post from "./components/Post"

import "./global.css"
import styles from "./App.module.css"

//author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://64.media.tumblr.com/eff450b860c3f2c2fb6006cd754ae49c/c3d375d01875d8c6-8a/s1280x1920/b0ae516254203f1d4015061377b5044d0fd8a9d7.jpg",
      name: "Michaelle Oliveira",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" }      
    ],
    publishedAt: new Date("2025-03-02 14:45:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://64.media.tumblr.com/b55a6a8a76cf0083658082a61dbdbf5f/d56bae5dfa964882-bd/s1280x1920/8d11709cf41d87186323a5e963304d05c40a253c.jpg",
      name: "Thiago Correia",
      role: "Fullstack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" }      
    ],
    publishedAt: new Date("2025-03-01 14:45:00")
  }
]

function App() {

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

export default App
