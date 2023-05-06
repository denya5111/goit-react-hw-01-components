import css from "./Statistics.module.css";
import PropTypes from 'prop-types';

export default function Statistics({title,  stats} ) {

    return (<section className={css.statistics}>

        {title !== "" && <h2 className={css.title}>{title}</h2>}
        
     <ul className={css.stat_list}>
        {stats.map(statElement => (
        <li className={css.item} key={statElement.id}>
            <span className={css.label}>{statElement.label}</span>
             <span className={css.percentage}>{statElement.percentage} %</span>
        </li>
        ))}
    </ul>
</section>)
}
 
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired})),
}