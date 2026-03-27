import './styles/App.css';
import React, { useMemo } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import Header from './components/Header';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/Select/MySelect.jsx';
import MyButton from './components/UI/Button/MyButton.jsx';
import MyInput from './components/UI/Input/MyInput.jsx';
import PostFilter from './components/PostFilter.jsx';
import MyModal from './components/UI/MyModal/MyModal.jsx';

function App() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "New text:", body: "Post text" },
    { id: 2, title: "Text:", body: "Text post" },
  ]);
  const [post, setPost] = React.useState({ title: "", body: "" });
  const [filter, setFilter] = React.useState({sort: "title", query: ""});
  const [modal, setModal] = React.useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.PostListsort) {
      return [...posts].sort((a, b) =>
        a[filter.PostListsort].localeCompare(b[filter.PostListsort])
      );
    }
    return posts;
  }, [filter.PostListsort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    if (filter.query) {
      return sortedPosts.filter(post =>
        post.title.toLowerCase().includes(filter.query.toLowerCase())
      );
    }
    return sortedPosts;
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };


  return (
    <>
      <Header />
      <div className="App">
        <PostFilter filter={filter} setFilter={setFilter} />
        <MyButton onClick={() => setModal(true)}>Create post</MyButton>
      <div className="counter">
        <MyModal isOpen={modal} close={() => setModal(false)}>
          <PostForm create={createPost} />
        </MyModal>
      <PostList remove = {removePost} posts = {sortedAndSearchedPosts} />
      </div>
      <Counter />
      <ClassCounter />
    </div>
    </>
  );
}

export default App;
