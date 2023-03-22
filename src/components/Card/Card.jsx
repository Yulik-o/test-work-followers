import React, { useEffect } from 'react';
import { useState } from 'react';
import css from './Card.module.css';
import Boy from '../../img/Boy.png';
import Logo from '../../img/Logo.png';
import signs from '../../img/Signs.jpg';

export default function Card() {
  const isFollowing = localStorage.getItem('isFollowing');
  const tweets = 777;

  const [following, setFollowing] = useState(
    isFollowing === 'true' ? isFollowing : false
  );
  const [followers, setFollowers] = useState(100500);

  useEffect(() => {
    const calculateFollowers = localStorage.getItem('calculateFollowers');
    if (isFollowing) {
      setFollowing(isFollowing === 'true');
    }
    if (calculateFollowers) {
      setFollowers(parseInt(calculateFollowers));
    }
  }, [isFollowing]);

  function handleClick() {
    if (following) {
      setFollowing(false);
      setFollowers(followers - 1);

      localStorage.setItem('isFollowing', 'false');
      localStorage.setItem('calculateFollowers', followers - 1);
    } else {
      setFollowing(true);
      setFollowers(followers + 1);

      localStorage.setItem('isFollowing', 'true');
      localStorage.setItem('calculateFollowers', followers + 1);
    }
  }
  return (
    <div className={css.Card}>
      <img src={Logo} alt="Logo" className={css.logo} />
      <img src={signs} alt="thoughts" />
      <div>
        <img src={Boy} alt="User avatar" />
      </div>
      <p>
        <span>{`${tweets}`}</span> TWEETS
      </p>
      <p>
        <span>{`${followers.toLocaleString('en-US')}`}</span> FOLLOWERS
      </p>
      <button
        type="button"
        onClick={handleClick}
        className={css.button}
        style={{ backgroundColor: following ? '#5CD3A8' : '#EBD8FF' }}
      >
        <span>{following ? 'Following' : 'Follow'}</span>
      </button>
    </div>
  );
}
