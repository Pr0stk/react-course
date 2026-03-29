import '../styles/App.css';
import React, { useEffect, useMemo, useRef } from 'react';
import Counter from '../components/Counter';
import ClassCounter from '../components/ClassCounter';
import Header from '../components/Header';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import MySelect from '../components/UI/Select/MySelect.jsx';
import MyButton from '../components/UI/Button/MyButton.jsx';
import MyInput from '../components/UI/Input/MyInput.jsx';
import PostFilter from '../components/PostFilter.jsx';
import MyModal from '../components/UI/MyModal/MyModal.jsx';
import { usePosts } from '../hooks/usePosts.js';
import PostService from '../API/PostService.js';
import { getPageCount} from '../utils/pages.js'; 
import Loader from '../components/UI/Loader/Loader.jsx';
import { useFetching } from '../hooks/useFetching.js';
import Pagination from '../components/UI/Pagination/Pagination.jsx';
import {useObserver} from "../hooks/useObserver";

function Posts() {
  const [posts, setPosts] = React.useState([]);
  const [post, setPost] = React.useState({ title: "", body: "" });
  const [filter, setFilter] = React.useState({sort: "title", query: ""});
  const [modal, setModal] = React.useState(false);
  const [totalPages, setTotalPages] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const lastElement = useRef()
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching( async (limit, page) => {
    const response = await PostService.getPosts(limit, page);
    setPosts(prev => [...prev, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(prev => prev + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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
        {postError && <div>Ошибка: {postError}</div>}
        {isPostLoading
      ? <Loader />
      : <>
          <PostList remove={removePost} posts={sortedAndSearchedPosts} />
          <div ref={lastElement} style={{ height: 20 }} />
        </>
}
      </div>
      <Counter />
      <ClassCounter />
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
    </>
  );
}

export default Posts;
