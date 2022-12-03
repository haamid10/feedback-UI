
import Card from "../components/shared/Card";
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <h3>This is React app feedback for product  of service</h3>
      <p>version 1.0.0</p>
      <Link to ="/">back Home</Link>
    </Card>
  )
}

export default AboutPage;
