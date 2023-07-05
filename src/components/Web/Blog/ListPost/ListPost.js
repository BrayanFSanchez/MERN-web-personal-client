import React, { useState, useEffect } from "react";
import { Loader, Pagination } from "semantic-ui-react";
import { map } from "lodash";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Post } from "../../../../api";
import { ListPostItem } from "../ListPostItem";
import "./ListPost.scss";

const postController = new Post();

export const ListPost = () => {
  const [posts, setPosts] = useState(null);
  const [pagination, setPagination] = useState();
  const navigate = useNavigate();
  const [searcParams] = useSearchParams();
  const [page, setPage] = useState(searcParams.get("page") || 1);

  useEffect(() => {
    (async () => {
      try {
        const response = await postController.getPost(page, 2);
        setPosts(response.docs);
        setPagination({
          limit: response.limit,
          page: response.page,
          pages: response.pages,
          total: response.total,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page]);

  const changePage = (_, data) => {
    const newPage = data.activePage;
    setPage(newPage);
    navigate(`?page=${newPage}`);
  };

  if (!posts) return <Loader active inline="centered" />;

  return (
    <div className="list-posts-web">
      <div className="list">
        {map(posts, (post) => (
          <div key={post._id} className="item">
            <ListPostItem post={post} />
          </div>
        ))}
      </div>

      <div className="pagination">
        <Pagination
          totalPages={pagination.pages}
          defaultActivePage={pagination.page}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          secondary
          pointing
          onPageChange={changePage}
        />
      </div>
    </div>
  );
};
