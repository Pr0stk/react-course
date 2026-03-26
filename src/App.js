import './styles/App.css';
import React from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import Header from './components/Header';
import PostItem from './components/PostItem';

function App() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "Ниже текст меняется:" },
    { id: 2, title: "Ниже текст меняется:" },
  ]);

  return (
    <>
      <Header />
      <div className="App">
      {posts.map(post => (
      <PostItem key={post.id} post={post} />
        ))}
      <Counter />
      <ClassCounter />
    </div>
    </>
  );
}

export default App;
