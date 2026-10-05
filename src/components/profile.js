import './profile.css';
import profileImage from './profile.jpg.jpg';

export default function Profile() {
  return (
    <main className="profile-page">
      <article className="profile-card">
        <div className="profile-card__content">
          <div className="profile-card__avatar-wrap">
            <img
              className="profile"
              src={profileImage}
              alt="Suuraa profile koo"
              width="150"
              height="150"
            />
          </div>

          <h1>My Profile</h1>
        </div>
      </article>
    </main>
  );
}