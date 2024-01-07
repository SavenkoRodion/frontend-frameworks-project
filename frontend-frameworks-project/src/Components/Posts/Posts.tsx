import TPost from "../../Model/TPost";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import Post from "./Post";
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

  const postsPerPage: number = 15;

  useEffect(() => {
    jsonApiFetch<TPost>(JsonApiEndpointsEnum.POSTS, "", setAllPosts);
    jsonApiFetch<TUser>(JsonApiEndpointsEnum.USERS, "", setUsers);
    jsonApiFetch<TComment>(JsonApiEndpointsEnum.COMMENTS, "", setComments);
  }, []);

  useEffect(() => {
    setCountPages(Math.ceil(allPosts.length / postsPerPage));
    setPagePosts(
      allPosts.slice(postsPerPage * (page - 1), postsPerPage * page)
    );
  }, [allPosts, postsPerPage, page]);

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setPagePosts(
      allPosts.slice(postsPerPage * (page - 1), postsPerPage * page)
    );
    setPage(page);
  };

  return (
    <>
      {pagePosts.length ? (
        pagePosts.map((post: TPost, i: number) => (
          <Post
            key={i}
            post={post}
            userName={users.find((user) => user.id === post.userId)?.username!}
            commentsCount={
              comments.filter((comment) => comment.postId === post.id).length
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
