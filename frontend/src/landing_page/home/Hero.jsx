import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container-fluid mb-5 home-hero">
      <div className="heroGlass">
        <div className="row d-flex justify-content-center align-items-center text-center mb-5">
          <h1>
            Elevate your skills,
            <br /> empower your future through tech.
          </h1>
          <p>
            Join our global community of students who are passionate about
            building solutions with technology. <br /> Accelerate innovation and
            grow the skills you need to have greater impact in the projects and
            <br />
            communities that matter to you.
          </p>
          <Link className="btn btn-primary" style={{ width: "10%" }} to="/join">
            Join Now !
          </Link>
        </div>
      </div>
    </div>
  );
}
