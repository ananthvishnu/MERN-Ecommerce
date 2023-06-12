import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs, deleteBlog } from "../../actions/blogAction";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import { DELETE_BLOG_RESET } from "../../constans/blogConstans";
import { ToastContainer, toast } from "react-toastify";
import MetaData from "../layouts/MetaData";
import "./CustomerBlog.css";

const BlogsList = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.AllBlogs);
  const { success: deleteSuccess } = useSelector((state) => state.deletBlog);

  useEffect(() => {
    dispatch(getAllBlogs());
    if (deleteSuccess) {
      dispatch({ type: DELETE_BLOG_RESET });
      toast.success("Blog deleted successfully");
    }
  }, [dispatch, deleteSuccess]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      dispatch(deleteBlog(id));
    }
  };

  return (
    <Fragment>
      <MetaData title="Create-Blogs" />
      <div className="dashboard">

        <div className="productReviewsContaine">
          <div>
            <Link to="/create-blog">
              <Button variant="contained" color="primary">
                Create Blog
              </Button>
            </Link>
          </div>
          <div className="projcard-container">
            {blogs.map((blog, index) => (
              <div
                className={`projcard projcard-${
                  index % 3 === 0 ? "blue" : index % 3 === 1 ? "red" : "green"
                }`}
                key={blog._id}
              >
                <div className="projcard-innerbox">
                  {blog.images.length > 0 && (
                    <img
                      src={blog.images[0].url}
                      alt={blog.title}
                      className="projcard-img"
                    />
                  )}
                  <div className="projcard-textbox">
                    <div className="projcard-title">{blog.title}</div>
                    <div className="projcard-subtitle">
                      {moment(blog.createdAt).format("MMMM Do, YYYY")}
                    </div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">{blog.content}</div>
                    <div className="projcard-tagbox">
                      <span className="projcard-tag">
                        <Link
                          to={`/edit-blog/${blog._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            sx={{ mr: 2 }}
                          >
                            Edit
                          </Button>
                        </Link>
                      </span>
                      <span className="projcard-tag">
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleDelete(blog._id)}
                        >
                          Delete
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default BlogsList;
