import "./App.css";
import Navbar from "./components/Navbar";
import Range from "./components/Range";
import Intro from "./components/Intro";
import Image from "./components/Image";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="midcontainer">
        <Intro />
        <Image />
      </div>
      <hr
        style={{
          height: "5px",
          borderWidth: "0",
          color: "white",
          backgroundColor: "white",
        }}
      ></hr>
      <div className="container" id="About">
        <h1 className="text-center">About</h1>
        <p className="text-light">
          Hey
          <span className="brmedium"></span>
          Introducing Anshul Chamoli, a talented individual born in 2003 in
          Gopeshwar, Uttarakhand, India. Anshul follows the Hindu religion and
          has a diverse range of interests and talents. Having completed high
          school and intermediate education at KV ONGC Dehradun, Anshul has a
          strong academic foundation.
          <span className="brmedium"></span>
          He is a Results-driven and enthusiastic undergraduate student with a
          passion for programming, web development, and data analysis.
          Possessing a strong foundation in Python, data structures, algorithms,
          JavaScript, and web development, coupled with a keen interest and
          experience in drama. Skilled in problem-solving, creative thinking,
          and delivering high-quality projects. Committed to continuous learning
          and leveraging technology to drive innovation. Seeking opportunities
          to apply my technical skills and collaborate with diverse teams in a
          dynamic and challenging environment
          <span className="brmedium"></span>
           Beyond academics, Anshul has a passion for
          the arts. With a keen interest in Dramatics, Anshul enjoys
          participating in and perhaps even performing in theatrical
          productions, showcasing their talent and creativity on stage. Anshul
          is also a skilled singer, using their voice to captivate audiences and
          express emotions through music.
          <span className="brmedium"></span>
           Additionally, Anshul's enthusiasm
          extends to the realm of sports. Cricket holds a special place in their
          heart, and they enjoy playing and following the game. Whether it's
          batting, bowling, or being part of a team, Anshul's involvement in
          cricket showcases their dedication, teamwork, and love for the sport.
          <span className="brmedium"></span>
          With such diverse interests and talents in the arts, music, and
          sports, Anshul Chamoli is undoubtedly an individual with a vibrant and
          multifaceted personality, ready to explore and excel in various
          pursuits. 
        </p>
        <p className="text-center text-light">Here's my resume for further Details</p>
        <a className="link-light link-center" href="/">Resume</a>
      </div>
      <hr
        style={{
          height: "5px",
          borderWidth: "0",
          color: "white",
          backgroundColor: "white",
        }}
      ></hr>
      <div className="container my-3">
        <Range />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
