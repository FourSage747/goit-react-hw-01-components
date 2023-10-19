import css from './Profile.module.css'
export const Profile = (props) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={props.avatar}
                    alt="User avatar"
                    className="avatar"
                    width={100}
                />
                <p className={css.name}>{props.username}</p>
                <p className="tag">@{props.tag}</p>
                <p className="location">{props.location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.li}>
                    <span className="label">Followers:</span>
                    <span className="quantity">{props.stats.followers}</span>
                </li>
                <li className={css.li}>
                    <span className="label">Views:</span>
                    <span className="quantity">{props.stats.views}</span>
                </li>
                <li className={css.li}>
                    <span className="label">Likes:</span>
                    <span className="quantity">{props.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}