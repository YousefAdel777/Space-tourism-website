// import { useState } from 'react'
import { Routes, Route } from "react-router"
import { BrowserRouter } from "react-router-dom";
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";
import Error from "./pages/Error";
import Loading from "./pages/Loading";
import useFetch from "./hooks/useFetch"

const App = () => {

  const {isLoading, isError, data} = useFetch("/data.json");

  if (isError) {
    return <Error />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="destination" element={<Destinations destinations={data?.destinations} />}></Route>
          <Route path="crew" element={<Crew crew={data?.crew} />}></Route>
          <Route path="technology" element={<Technology technology={data?.technology} />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
