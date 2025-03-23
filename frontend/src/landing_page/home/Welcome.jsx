export default function About() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="container"
        style={{ height: "60vh", marginTop: "10rem" }}
      >
        <div className="row">
          <div className="col-5 pt-4 ">
            <h1 className="mb-3">Welcome!</h1>
            <p>
              The Azure Student Chapter, a vibrant community of tech
              enthusiasts, innovators, and future leaders passionate about cloud
              computing and Microsoft technologies. Our chapter is dedicated to
              empowering students by providing hands-on learning experiences,
              industry insights, and networking opportunities with professionals
              in the field. Whether you're a beginner exploring the cloud or an
              experienced developer looking to enhance your skills, our
              community offers a collaborative space to grow, build, and
              innovate.
            </p>
          </div>
          <div className="col-6 offset-1">
            <img
              className="neon-image"
              src="images/welcome.png"
              style={{
                width: "40rem",
                borderRadius: "20px",
                aspectRatio: "16/9",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
