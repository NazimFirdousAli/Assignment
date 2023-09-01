import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/index";
import getPublicGists from "../../services/gistService";

import Home from "./Home";
jest.mock("../../services/gistService", () => ({
  getPublicGists: jest.fn(),
}));
describe("Home Component", () => {
  const renderComponent = (
    <Provider store={store}>
      <Home />
    </Provider>
  );

  test("Check if data is nothing", async () => {
    const mockGistData = [];
    const mockResponse = { data: mockGistData };

    const getPublicGistsSpy = jest.spyOn(getPublicGists, "getPublicGists");
    getPublicGistsSpy.mockResolvedValue(mockResponse);
    render(renderComponent);

    expect(await screen.findByText(/No Data Found/i)).toBeInTheDocument();
  });
  test("renders loading spinner while fetching data", async () => {
    const mockResponse = {
      data: [
        {
          url: "https://api.github.com/gists/be33a1144d657250499180330a16c73c",
          forks_url:
            "https://api.github.com/gists/be33a1144d657250499180330a16c73c/forks",
          commits_url:
            "https://api.github.com/gists/be33a1144d657250499180330a16c73c/commits",
          id: "be33a1144d657250499180330a16c73c",
          node_id: "G_kwDOBz4FHNoAIGJlMzNhMTE0NGQ2NTcyNTA0OTkxODAzMzBhMTZjNzNj",
          git_pull_url:
            "https://gist.github.com/be33a1144d657250499180330a16c73c.git",
          git_push_url:
            "https://gist.github.com/be33a1144d657250499180330a16c73c.git",
          html_url:
            "https://gist.github.com/raccoons-bot/be33a1144d657250499180330a16c73c",
          files: {
            "swap.json": {
              filename: "swap.json",
              type: "application/json",
              language: "JSON",
              raw_url:
                "https://gist.githubusercontent.com/raccoons-bot/be33a1144d657250499180330a16c73c/raw/d48c56be6be2241da5f477eff421a4ec206a40d3/swap.json",
              size: 11667,
            },
          },
          public: true,
          created_at: "2023-08-31T21:07:02Z",
          updated_at: "2023-08-31T21:07:02Z",
          description: null,
          comments: 0,
          user: null,
          comments_url:
            "https://api.github.com/gists/be33a1144d657250499180330a16c73c/comments",
          owner: {
            login: "raccoons-bot",
            id: 121505052,
            node_id: "U_kgDOBz4FHA",
            avatar_url: "https://avatars.githubusercontent.com/u/121505052?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/raccoons-bot",
            html_url: "https://github.com/raccoons-bot",
            followers_url:
              "https://api.github.com/users/raccoons-bot/followers",
            following_url:
              "https://api.github.com/users/raccoons-bot/following{/other_user}",
            gists_url:
              "https://api.github.com/users/raccoons-bot/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/raccoons-bot/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/raccoons-bot/subscriptions",
            organizations_url: "https://api.github.com/users/raccoons-bot/orgs",
            repos_url: "https://api.github.com/users/raccoons-bot/repos",
            events_url:
              "https://api.github.com/users/raccoons-bot/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/raccoons-bot/received_events",
            type: "User",
            site_admin: false,
          },
          truncated: false,
        },
        {
          url: "https://api.github.com/gists/14b4e2b3c01492a080b3c8b0a0f855f4",
          forks_url:
            "https://api.github.com/gists/14b4e2b3c01492a080b3c8b0a0f855f4/forks",
          commits_url:
            "https://api.github.com/gists/14b4e2b3c01492a080b3c8b0a0f855f4/commits",
          id: "14b4e2b3c01492a080b3c8b0a0f855f4",
          node_id: "G_kwDOBz4FHNoAIDE0YjRlMmIzYzAxNDkyYTA4MGIzYzhiMGEwZjg1NWY0",
          git_pull_url:
            "https://gist.github.com/14b4e2b3c01492a080b3c8b0a0f855f4.git",
          git_push_url:
            "https://gist.github.com/14b4e2b3c01492a080b3c8b0a0f855f4.git",
          html_url:
            "https://gist.github.com/raccoons-bot/14b4e2b3c01492a080b3c8b0a0f855f4",
          files: {
            "swap.json": {
              filename: "swap.json",
              type: "application/json",
              language: "JSON",
              raw_url:
                "https://gist.githubusercontent.com/raccoons-bot/14b4e2b3c01492a080b3c8b0a0f855f4/raw/9b1436555e4a457cc5fbc330c26679f94fa69ce1/swap.json",
              size: 12062,
            },
          },
          public: true,
          created_at: "2023-08-31T21:07:00Z",
          updated_at: "2023-08-31T21:07:00Z",
          description: null,
          comments: 0,
          user: null,
          comments_url:
            "https://api.github.com/gists/14b4e2b3c01492a080b3c8b0a0f855f4/comments",
          owner: {
            login: "raccoons-bot",
            id: 121505052,
            node_id: "U_kgDOBz4FHA",
            avatar_url: "https://avatars.githubusercontent.com/u/121505052?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/raccoons-bot",
            html_url: "https://github.com/raccoons-bot",
            followers_url:
              "https://api.github.com/users/raccoons-bot/followers",
            following_url:
              "https://api.github.com/users/raccoons-bot/following{/other_user}",
            gists_url:
              "https://api.github.com/users/raccoons-bot/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/raccoons-bot/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/raccoons-bot/subscriptions",
            organizations_url: "https://api.github.com/users/raccoons-bot/orgs",
            repos_url: "https://api.github.com/users/raccoons-bot/repos",
            events_url:
              "https://api.github.com/users/raccoons-bot/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/raccoons-bot/received_events",
            type: "User",
            site_admin: false,
          },
          truncated: false,
        },
      ],
    };
    const getPublicGistsSpy = jest.spyOn(getPublicGists, "getPublicGists");
    getPublicGistsSpy.mockResolvedValue(mockResponse);
    render(renderComponent);
  });
});
