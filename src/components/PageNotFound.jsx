import Footer from "./Footer";
import Navbar from "./Navbar";

function PageNotFound() {
  return (
    <>
      <section id="landing-page">
        <Navbar />
        <div className="page-not-found">
          <h1>404</h1>
          <p>Page not found.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PageNotFound;
