import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import userPhoto from '../../../assets/img/user.jpg';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img
          className={s.ava}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.small == null ? userPhoto: props.profile.photos.small} />
        <h1>{props.profile.fullName}</h1>
        <h2>{props.profile.lookingForAJob ? 'Ищет работу' : 'Уже работает'}</h2>
        <h3>Contacts</h3>
        <ul>
          <li>vk: {props.profile.contacts.vk}</li>
          <li>github: {props.profile.contacts.github}</li>
          <li>facebook: {props.profile.contacts.facebook}</li>
          <li>instagram: {props.profile.contacts.instagram}</li>
          <li>youtube: {props.profile.contacts.youtube}</li>
          <li>twitter: {props.profile.contacts.twitter}</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileInfo;