import React from "react";

const Blogs = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
      <div
        tabindex="0"
        className="collapse collapse-arrow border bg-primary mt-10  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application?
        </div>
        <div className="collapse-content">
          <table className="table table-zebra ">
            <tbody>
              <tr>
                <td>Keeping component state local where necessary</td>
              </tr>

              <tr>
                <td>
                  Memoizing React components to prevent unnecessary re-renders
                </td>
              </tr>
              <tr>
                <td>Code-splitting in React using dynamic import()</td>
              </tr>
              <tr>
                <td>Windowing or list virtualization in React</td>
              </tr>
              <tr>
                <td>Lazy loading images in React</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        tabindex="0"
        className="collapse collapse-arrow border bg-primary mt-10 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>There are four main types of state.</p>
          <h1>
            {" "}
            1.Local State:There are four main types of state in one or another
            component.Local state managed in react using useState.
          </h1>
          <p>
            2.Global State:Global state is data we manage across multiple
            components.Global state is authenticated user state
          </p>
          <p>
            3.Server state:Data comes from an external server that must be
            integrated with our state.Managed every time you fetch or update
            data from an external server.
          </p>
          <p>
            4.URL state: Data that exists on our URLs, including the pathname
            and query parameters.building a blog without being able to fetch a
            post based off of its slug or id that is located in the URL.
          </p>
        </div>
      </div>

      <div
        tabindex="0"
        className="collapse collapse-arrow border bg-primary mt-10 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            Prototype Inheritance is a feature of JavaScript that is used to add
            methods and features to objects.Prototype-based programming is a
            style of object-oriented. JavaScript allowed for prototypal
            inheritance meaning that objects and methods can be shared extended
            and copied.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        className="collapse collapse-arrow border  bg-primary rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            Unit testing is a type of software testing.Different levels of
            software testing,unit testing then integration testing , system
            testing,acceptance testing.Unit tests are typically automated tests
            written and run by software developers to ensure that a section of
            an application.This can help them to stay focused and can also help
            them to create much better designs.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        className="collapse collapse-arrow border  bg-primary rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          hy you do not set products = [...] instead, you use the setProducts?
        </div>
        <div className="collapse-content">
          <p>
            setState() as a request rather than an immediate command to update
            the component.s changes to the component state and tells React that
            this component and its children need to be re-rendered with the
            updated state.setState() works to set the value{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
