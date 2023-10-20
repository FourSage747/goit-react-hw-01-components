import css from '../FriendList.module.css'
export const FriendListItem = ({ friends }) => {
    return (
      friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          <span className={
            isOnline
              ? `${css.status} ${css.green}`
              : `${css.status} ${css.red}`
          }
          >
          </span>
          <img src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))
    );
  };
  