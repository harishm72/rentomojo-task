import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:userId" component={Posts} />
        <Route exact path="/:userId/posts/:postId" component={PostDetail} />
        <Route path="*"><h1 style={{textAlign: 'center'}}>Page Not Found</h1></Route>
      </Switch>
    </main>
  );
};

export default AppRouter;
