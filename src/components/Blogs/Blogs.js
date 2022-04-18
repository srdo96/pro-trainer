import React from "react";

const Blogs = () => {
  return (
    <div className="ml-10 mt-5">
      <h3>1. Difference between authorization and authentication?</h3>
      <p className="ml-5">
        <span className="font-bold">Authorization</span> will tell what kind of
        information user can access. User cannot control it. Admin can maintains
        it.
        <br />
        <span className="font-bold">Authentication</span> can check who is the
        user. It works through user password, biometric info and other type of
        user info. User can control it.
      </p>
      <h3 className="mt-4">
        2. Why are you using firebase? What other options do you have to
        implement authentication?
      </h3>
      <p className="ml-5">
        I am using firebase for user authentication. Some other options are:
        <ul className="ml-5">
          <li>Auth0</li>
          <li>Okta</li>
          <li>Keycloak</li>
          <li>Amazon Cognito, etc.</li>
        </ul>
      </p>
      <h3 className="mt-4">
        3. What other services does firebase provide other than authentication?
      </h3>
      <p className="ml-5">
        Firebase most useful services other than authentication are given blow:
        <ul className="ml-5">
          <li>Hosting</li>
          <li>Cloud Storage</li>
          <li>Cloud Messaging</li>
          <li>Google Analytics</li>
          <li>Predictions, etc.</li>
        </ul>
      </p>
    </div>
  );
};

export default Blogs;
