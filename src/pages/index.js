function IndexPage() {
  const isBrowser = () => typeof window !== "undefined";

  if (isBrowser()) {
    const url = new URL(window.location);
    url.pathname = "projects";
    window.history.pushState({}, "", url);
    window.location.reload();
  }
  // return <Navigate replace to="/projects" />;
}

export default IndexPage;
