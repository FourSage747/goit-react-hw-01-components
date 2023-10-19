import css from './Statistics.module.css'
export const Statistics = ({ data }) => {
    return (
        <section className={css.statistics}>
            <h2 className="title">Upload stats</h2>

            <ul className={css.statlist}>
                {data.map(({ id, label, percentage }) => (
                    <li key={id} className={css.item} style={{backgroundColor: getRandomHexColor()}}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
