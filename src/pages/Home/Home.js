/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// mui design
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";

import CircularProgress from "@mui/material/CircularProgress";

// image
import comments from "../../assests/svg-comments.svg";
import files from "../../assests/svg-files.svg";
import folks from "../../assests/svg-folks.svg";
import stars from "../../assests/svg-star.svg";
import file from "../../assests/svg-file.svg";

import { getPublicGists, getGistForUser } from "../../services/gistService";
import dayjs from "dayjs";
import "dayjs/locale/en"; // Import English locale for formatting

import "./Home.css";
import { useSelector } from "react-redux";

function Home() {
  const [gistData, setGistData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchValue = useSelector((state) => state.searchValue).search;

  useEffect(() => {
    if (searchValue) {
      getUserGists();
    } else {
      getAllGists();
    }
  }, [searchValue]);

  const getAllGists = async () => {
    setIsLoading(true);
    try {
      const response = await getPublicGists();
      setGistData(response.data);
    } catch (err) {
      console.log(err, "errrr");
    } finally {
      setIsLoading(false);
    }
  };
  const getUserGists = async () => {
    setIsLoading(true);
    try {
      const response = await getGistForUser(searchValue);
      setGistData(response.data);
    } catch (err) {
      console.log(err, "errrr");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        {gistData?.length > 0 && !isLoading ? (
          gistData.map((data) => {
            return (
              <Box className="homeDiv">
                <div className="dataDiv">
                  <div className="userDetailsDiv">
                    <div className="userNameDiv">
                      <Avatar alt="Remy Sharp" src={data.owner.avatar_url} />
                      <span>{data.owner.login}</span>
                    </div>
                    <div className="dateHistoryDiv">
                      <span>
                        Created at:{" "}
                        {dayjs(data.created_at).format("YYYY-MM-DD")}
                      </span>{" "}
                      &nbsp; &nbsp;
                      <span>
                        Last Updated at:{" "}
                        {dayjs(data.updated_at).format("YYYY-MM-DD")}
                      </span>
                    </div>
                  </div>
                  <div className="buttonDiv">
                    <div>
                      <img src={files} alt="files" />
                      <span>{Object.keys(data?.files).length} Files</span>
                    </div>

                    <div>
                      <img src={folks} alt="folks" />
                      <span
                        onClick={() => window.location.href(data.forks_url)}
                      >
                        1 folks
                      </span>
                    </div>

                    <div>
                      <img src={comments} alt="comments" />
                      <span
                        onClick={(event) => window.location.href("google.com")}
                      >
                        {data.comments} comments
                      </span>
                    </div>

                    <div>
                      <img src={stars} alt="stars" />
                      <span>1 stars</span>
                    </div>
                  </div>
                </div>

                <div className="contentDiv">
                  <p>{data.description || "No Description"}</p>
                  <br />
                  {Object.keys(data?.files).map((data) => {
                    return (
                      <div
                        className="fileData"
                        onClick={() => {
                          window.location.href(data.raw_url);
                        }}
                      >
                        <img src={file} alt="file" />
                        <span>{data}</span>
                      </div>
                    );
                  })}
                </div>

                <hr />
              </Box>
            );
          })
        ) : isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10%",
            }}
            data-testid="loader"
          >
            <CircularProgress />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10%",
            }}
          >
            No Data Found
          </div>
        )}
      </Container>
    </React.Fragment>
  );
}

export default Home;
