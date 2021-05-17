import React from "react";
import { User, UserType } from "@bondhouse/iam";
import dayjs from "dayjs";
import UserDropDown from "components/Navbar/UserNav/UserMenuDropDown/UserMenuDropDown";
import { render, screen } from "test/utils";

dayjs.tz.setDefault("America/New_York");

describe("UserMenuDropDown", () => {
  test("Should render", () => {
    const mockUser: User = {
      id: "",
      email: "",
      first: "Mock",
      last: "User",
      userType: UserType.ADMIN,
      terms: true
    };
    const { container } = render(
      <UserDropDown
        user={mockUser}
        toggleDropDown={jest.fn}
        lastLogin={new Date()}
      />
    );
    expect(container).toBeDefined();
  });

  test("Admin user type should see manage users and investor accounts links", () => {
    const mockUser: User = {
      id: "",
      email: "",
      first: "Mock",
      last: "User",
      userType: UserType.ADMIN,
      terms: true,
      institutionId: "mock-institution"
    };
    const { asFragment } = render(
      <UserDropDown
        user={mockUser}
        toggleDropDown={jest.fn}
        lastLogin="2018-04-04T16:00:00.000Z"
      />
    );
    expect(screen.queryByText(/Investor accounts/i)).toBeInTheDocument();
    expect(screen.queryByText(/Manage users/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("Default user type should not see manage users link", () => {
    const mockUser: User = {
      id: "",
      email: "",
      first: "Mock",
      last: "User",
      userType: UserType.DEFAULT,
      terms: true,
      institutionId: "mock-institution"
    };
    const { asFragment } = render(
      <UserDropDown
        user={mockUser}
        toggleDropDown={jest.fn}
        lastLogin="2018-04-04T16:00:00.000Z"
      />
    );
    expect(screen.queryByText(/Investor accounts/i)).toBeInTheDocument();
    expect(screen.queryByText(/Manage users/i)).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("Trial user type should not see manage users link or investors link", () => {
    const mockUser: User = {
      id: "",
      email: "",
      first: "Mock",
      last: "User",
      userType: UserType.TRIAL,
      terms: true,
      institutionId: "mock-institution"
    };
    const { asFragment } = render(
      <UserDropDown
        user={mockUser}
        toggleDropDown={jest.fn}
        lastLogin="2018-04-04T16:00:00.000Z"
      />
    );
    expect(screen.queryByText(/Investor accounts/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Manage users/i)).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("Manage users should only appear if user is ADMIN and has non default institution", () => {
    const mockUser: User = {
      id: "",
      email: "",
      first: "Mock",
      last: "User",
      userType: UserType.ADMIN,
      terms: true
    };
    const { rerender } = render(
      <UserDropDown
        user={mockUser}
        toggleDropDown={jest.fn}
        lastLogin="2018-04-04T16:00:00.000Z"
      />
    );
    expect(screen.queryByText(/Manage users/i)).not.toBeInTheDocument();

    rerender(
      <UserDropDown
        user={{ ...mockUser, institutionId: "bondhouse" }}
        toggleDropDown={jest.fn}
        lastLogin="2018-04-04T16:00:00.000Z"
      />
    );
    expect(screen.queryByText(/Manage users/i)).not.toBeInTheDocument();
    rerender(
      <UserDropDown
        user={{ ...mockUser, institutionId: "mock-id" }}
        toggleDropDown={jest.fn}
        lastLogin="2018-04-04T16:00:00.000Z"
      />
    );
    expect(screen.queryByText(/Manage users/i)).toBeInTheDocument();
  });
});
