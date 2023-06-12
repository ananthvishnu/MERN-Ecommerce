import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../../actions/blogAction";
import { Button, TextField, Typography, Box, Card } from "@mui/material";
import { Link } from "react-router-dom";
// import MetaData from "../../more/Metadata";
import { ToastContainer, toast } from "react-toastify";

const CreateBlog = ({ history }) => {

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.creatBlog);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createBlog(title, content, images));
    setTitle("");
    setContent("");
    setImages([]);
    setImagesPreview([]);
    // history.push("/blogs");
    toast.success("Blog created successfully");
  };
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((prevImages) => [...prevImages, reader.result]);
          setImagesPreview((prevPreviews) => [
            ...prevPreviews,
            URL.createObjectURL(file),
          ]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      {/* <MetaData title="Create Blog" /> */}

      <div className="dashboard">
        {/* <Sidebar /> */}
        <div className="productReviewsContaine">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              py: 40,
            }}
          >
            <Card sx={{ maxWidth: 800, mt: 4 }}>
              <Link to="/admin/blogs">
                <Button variant="contained" color="primary">
                  Back to Blogs
                </Button>
              </Link>

              <Typography
                variant="h5"
                gutterBottom
                style={{ marginTop: "20px" }}
              >
                Create Blog
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <TextField
                  label="Content"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  style={{ marginTop: "10px" }}
                />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                />

                {imagesPreview.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt="Preview"
                    style={{
                      width: "200px",
                      height: "auto",
                      marginTop: "10px",
                    }}
                  />
                ))}

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  style={{ marginTop: "10px" }}
                >
                  Create
                </Button>
              </form>
            </Card>
          </Box>
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

export default CreateBlog;