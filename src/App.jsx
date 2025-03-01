import Post from "./Post"

import "./styles.css"

function App() {

  return (
    <div>
      {/* reutilização de componentes */}

      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure nihil quasi! Ea eligendi doloremque omnis modi molestias natus cumque, quaerat cupiditate reiciendis eius deleniti nobis nam placeat assumenda illum."
      />

      <Post 
        author="Lucas Santos" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure nihil quasi! Ea eligendi doloremque omnis modi molestias natus cumque, quaerat cupiditate reiciendis eius deleniti nobis nam placeat assumenda illum."
      />
    </div>
  )
}

export default App
