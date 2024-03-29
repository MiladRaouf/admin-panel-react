import Card from "../../../components/card/Card";
import BarChart from "../../../components/chart/BarChart";
import Title from "../../../components/title/Title";

const Dashboard = () => {
    return (
        <section id="dashboard" className="container-xxl">
            <section id="cards">
                <Card
                    title='سبد خرید'
                    dailyCount='12'
                    weeklyCount='51'
                    mounthlyCount='120'
                    yearlyCount='1200'
                    icon='fas fa-shopping-cart'
                    background='yellow'
                />
                <Card
                    title='سفارش موفق'
                    dailyCount='39'
                    weeklyCount='89'
                    mounthlyCount='310'
                    yearlyCount='2060'
                    icon='fas fa-handshake'
                    background='purple'
                />
                <Card
                    title='سفارش ناموفق'
                    dailyCount='1'
                    weeklyCount='8'
                    mounthlyCount='23'
                    yearlyCount='114'
                    icon='fas fa-thumbs-down'
                    background='green'
                />
                <Card
                    title='درآمد'
                    dailyCount='1250000'
                    weeklyCount='9520020'
                    mounthlyCount='54000000'
                    yearlyCount='3000000000'
                    icon='fa fa-credit-card'
                    background='orang'
                />
            </section>
            <Title title='پر فروشترین محصولات' />
            <BarChart />
        </section>
    );
}

export default Dashboard;