export default function Events() {
  return (
    <div
      style={{ marginTop: "10rem" }}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h1 className="text-center mb-5">Events</h1>
      <div className="container-fluid d-flex flex-column mb-5 events">
        <div className="eventsWrapper">
          <div className="mb-5 d-flex align-items-center justify-content-evenly mt-5">
            <div
              className="card glass"
              style={{ height: "20rem", width: "25rem" }}
            >
              <h2 className="text-center">Git2Azure</h2>
            </div>
            <div
              className="card glass"
              style={{ height: "20rem", width: "25rem" }}
            >
              <h2 className="text-center">Coming Soon</h2>
            </div>
            <div
              className="card glass"
              style={{ height: "20rem", width: "25rem" }}
            >
              <h2 className="text-center">Coming Soon</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
