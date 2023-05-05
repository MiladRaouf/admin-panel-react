import Cards from "./card/Cards";
import ChartComponent from "./chart/ChartComponent";

const IndexDashboard = () => {
    return (
        <section id="dashboard" className="container-xxl">
            <Cards />
            <ChartComponent />
        </section>
    );
}

export default IndexDashboard;