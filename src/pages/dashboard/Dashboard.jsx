import Cards from "./card/Cards";
import BarChart from "./chart/BarChart";

const Dashboard = () => {
    return (
        <section id="dashboard" className="container-xxl">
            <Cards />
            <BarChart />
        </section>
    );
}

export default Dashboard;