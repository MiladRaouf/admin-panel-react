import './card.css';

const Card = ({ title, dailyCount, weeklyCount, mounthlyCount, yearlyCount, icon, background }) => {
    return (
        <article className={`statistics-card ${background}-background`}>
            <i class={icon}></i>
            <h3 className='card-title'>{title}</h3>
            <hgroup className='daily-hgroup'>
                <h5 className='count-title'>{dailyCount}</h5>
                <h6 className='today-title'>از ابتدای روز</h6>
            </hgroup>
            <hgroup className='timeframes-hgroup'>
                <p>{weeklyCount} </p>
                <h6 className='timeframe-title'>از ابتدای هفته</h6>
            </hgroup>
            <hgroup className='timeframes-hgroup'>
                <p>{mounthlyCount} </p>
                <h6 className='timeframe-title'>از ابتدای ماه</h6>
            </hgroup>
            <hgroup className='timeframes-hgroup'>
                <p>{yearlyCount} </p>
                <h6 className='timeframe-title'>از ابتدای سال</h6>
            </hgroup>
        </article>
    );
}

export default Card;