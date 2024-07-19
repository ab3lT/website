const AboutUs = () => {
  return (
    <div className="about-us-page">
      <header>
        <h1>Looking back at Amigos</h1>
      </header>
      <section className="about-amigos">
        <div className="text">
          <p>
            10 years from now in 2005 E.C. 20 friends (ie. ‘Amigos’) planned and
            founded Amigos saving and credit cooperation with a capital of only
            9,000ETB. Since then, our company has lived to fulfill its purpose
            of making its members successful by providing the most suitable and
            flexible financial service products.
          </p>
        </div>
        <div className="image">
          {/* Add the image URL or import the image here */}
          <img src="" alt="Amigos Workers" />
        </div>
      </section>
      <section className="stats">
        <div className="columns">
          <div className="column">
            <h2>10+</h2>
            <p>Maximum loan amount</p>
          </div>
          <div className="column">
            <h2>10,000,000+</h2>
            <p>Years of experience</p>
          </div>
          <div className="column">
            <h2>80+</h2>
            <p>Experienced staff</p>
          </div>
          <div className="column">
            <h2>1,000,000,000</h2>
            <p>Loans dispersed</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
