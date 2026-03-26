import './styles/App.css';
import React from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import Header from './components/Header';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton.jsx';
import MyInput from './components/UI/Input/MyInput.jsx';

function App() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "Ниже текст меняется:" },
    { id: 2, title: "Ниже текст меняется:" },
  ]);
  const [title, setTitle] = React.useState("");

  const bodyInputRef = React.useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(setTitle);
    console.log(bodyInputRef.current.value); 
  }

  return (
    <>
      <Header />
      <div className="App">
      <PostList posts={posts} />
      <div className="counter">
        <form>
          <MyInput type="text" onChange={e => setTitle(e.target.value)} value={title} />
          <MyInput ref = {bodyInputRef} type="text" />
          <MyButton onClick = {addNewPost}>Создать</MyButton>
        </form>
      </div>
      <Counter />
      <ClassCounter />
    </div>
    </>
  );
}

export default App;
