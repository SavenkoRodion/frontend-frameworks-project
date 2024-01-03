import TPost from "../../Model/TPost";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import Post from "./PostListElement";
import { TUser } from "../../Model/TUser";
import TComment from "../../Model/TComments";
import { useEffect, useState } from "react";
import { CircularProgress, Pagination } from "@mui/material";

const Posts = () => {
  const [allPosts, setAllPosts] = useState<TPost[]>([]);
  const [pagePosts, setPagePosts] = useState<TPost[]>([]);
  const [users, setUsers] = useState<TUser[]>([]);
  const [comments, setComments] = useState<TComment[]>([]);
  const [page, setPage] = useState<number>(1);
  const [countPages, setCountPages] = useState<number>(0);

  const postsPerPage: number = 10;

  useEffect(() => {
    jsonApiFetch<TPost>(JsonApiEndpointsEnum.POSTS, "", setAllPosts);
    jsonApiFetch<TUser>(JsonApiEndpointsEnum.USERS, "", setUsers);
    jsonApiFetch<TComment>(JsonApiEndpointsEnum.COMMENTS, "", setComments);
  }, []);

  useEffect(() => {
    setCountPages(Math.ceil(allPosts.length / postsPerPage));
    setPagePosts(
      allPosts.slice(countPages * page - postsPerPage, countPages * page)
    );
  }, [allPosts, postsPerPage, countPages, page]);

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setPagePosts(
      allPosts.slice(countPages * page - postsPerPage, countPages * page)
    );
    setPage(page);
  };

  return (
    <>
      {pagePosts.length ? (
        pagePosts.map((e, i) => (
          <Post
            key={i}
            post={e}
            userName={users.find((user) => user.id === e.userId)?.username!}
            commentsCount={
              comments.filter((comment) => comment.postId === e.id).length
            }
          />
        ))
      ) : (
        <CircularProgress />
      )}
      {countPages && pagePosts.length ? (
        <Pagination
          sx={{ ul: { justifyContent: "center" }, marginBottom: "20px" }}
          count={countPages}
          page={page}
          shape="rounded"
          onChange={handleChange}
          color="primary"
          siblingCount={2}
          showLastButton
          showFirstButton
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Posts;
