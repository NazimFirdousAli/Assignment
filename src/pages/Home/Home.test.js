import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/index";

import Home from "./Home";

describe("Home Component", () => {
  const renderComponent = (
    <Provider store={store}>
      <Home />
    </Provider>
  );
  //   test("Check if data is nothing", async () => {
  //     render(renderComponent);

  //     expect(screen.getByText(/No Data Found/i)).toBeInTheDocument();
  //   });
  test("renders loading spinner while fetching data", async () => {
    const dumyData = [];
    render(renderComponent);
    jest.mock("../../services/gistService", () => {
      return {
        Octokit: jest.fn().mockImplementation(() => {
          return {
            gists: {
              listPublic: jest.fn().mockResolvedValue({ data: dumyData }), // Mock the response using dumyData
            },
          };
        }),
      };
    });
    // await waitFor(async () => {
    // const result = await getPublicGists();
    // expect(result).toEqual(dumyData);
    // console.log(result, "ooooooooooooo");
    await waitFor(async () => {
      screen.debug();
    });

    // });
    // expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
