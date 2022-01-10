import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <Card>
        <div className="about">
          <h1>About this app</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, sit
            voluptates deleniti temporibus delectus repudiandae alias sint
            maiores fugiat architecto magnam voluptatibus assumenda natus
            officiis incidunt corporis. Praesentium, voluptas fuga!
          </p>

          <Link to="/">
            <p>Homepage</p>
          </Link>
        </div>
      </Card>
    </>
  );
}

export default AboutPage;
