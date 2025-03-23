export default function Contact() {
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col-6 mt-4">
          <form>
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Organisation/College
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Your message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Write your message here.. (Max 200 words)"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3 form-check"></div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-5 offset-1">
          <img
            src="images/contact.svg"
            style={{
              width: "30rem",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
