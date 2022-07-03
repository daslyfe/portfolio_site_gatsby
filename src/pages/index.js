

function IndexPage() {
    const url = new URL(window.location);
    url.pathname='projects';

window.history.pushState({}, '', url);
window.location.reload();
return null;

}

export default IndexPage;