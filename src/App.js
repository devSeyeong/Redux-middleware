import { Route, Routes } from "react-router-dom";

import CounterContainer from "./containers/CounterContainer";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import React from "react";

function App() {
  return (
    <>
      <CounterContainer />
      <Routes>
        <Route exact path="/" element={<PostListPage />} />
        <Route path=":id" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
