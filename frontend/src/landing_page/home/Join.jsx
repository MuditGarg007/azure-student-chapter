export default function Join() {
  return (
    <div
      className="container"
      style={{ marginTop: "6rem" }}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="row mb-5">
        <div className="col-6">
          <img
            className="neon-image"
            src="images/join.png"
            style={{
              width: "40rem",
              borderRadius: "20px",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col px-5 mx-5">
          <h1 className="mb-4">
            Become a Part of the <br /> Azure Student Chapter!
          </h1>
          <p>
            Passionate about cloud computing, AI, and Microsoft Azure? Join our
            thriving student community to learn, collaborate, and grow with
            like-minded tech enthusiasts. Gain access to exclusive Azure
            resources, hands-on workshops, hackathons, and mentorship
            opportunities—all for free!
          </p>
          <button className="btn btn-primary">Learn More &#8594;</button>
        </div>
      </div>
    </div>
  );
}
