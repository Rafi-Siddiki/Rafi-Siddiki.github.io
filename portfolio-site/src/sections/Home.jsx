import "../styles/Home.css"
const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-text">
        <p>WELCOME TO MY PORTFOLIO</p>
        <h1>Hi, I'm Rafi.</h1>
        <h2>I build things for the web.</h2>
        <p>
          Computer Science graduate exploring software
          development and creating things that i am passionate about.
        </p>
        <p>
          I am a passionate developer who loves to create innovative solutions.
        </p>
      </div>
      <div className="rafi-image">
        <img src="/rafi.jpeg" alt="rafi-img" />
      </div>
    </div>
  );
};

export default Home;