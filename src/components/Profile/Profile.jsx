import css from './Profile.module.css'

export const Profile = (props) => {
  const { avatar, username, tag, location, stats } = props;

  const { followers, views, likes } = stats;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
          width={100}
        />
        <p className={css.name}>{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.li}>
          <span className="label">Followers:</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css.li}>
          <span className="label">Views:</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={css.li}>
          <span className="label">Likes:</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  )
}
