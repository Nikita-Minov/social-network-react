import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/img/user.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div></div>
      <div className={s.descriptionBlock}>
        <img
          src={
            profile.photos.small == null
              ? userPhoto
              : profile.photos.small
          }
        />
        <h1>{profile.fullName}</h1>
        <h2>{profile.lookingForAJob ? 'Ищет работу' : 'Уже работает'}</h2>
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
        <h3>Contacts</h3>
        <ul>
          <li>vk: {profile.contacts.vk}</li>
          <li>github: {profile.contacts.github}</li>
          <li>facebook: {profile.contacts.facebook}</li>
          <li>instagram: {profile.contacts.instagram}</li>
          <li>youtube: {profile.contacts.youtube}</li>
          <li>twitter: {profile.contacts.twitter}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
