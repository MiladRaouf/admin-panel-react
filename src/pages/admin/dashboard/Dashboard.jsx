import Cards from "../../../components/card/Cards";
import BarChart from "../../../components/chart/BarChart";

const Dashboard = () => {
    return (
        <section id="dashboard" className="container-xxl">
            <Cards />
            <BarChart />
        </section>
    );
}

export default Dashboard;