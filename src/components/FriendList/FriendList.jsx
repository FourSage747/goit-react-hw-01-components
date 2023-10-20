import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

