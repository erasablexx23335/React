import { useState } from "react";

const Prac = () => {
  const [profile, setProfile] = useState({
    name: "Rishabh kumar",
    Email: "rk9498184@gmail.com",
    profilePic:
      "https://t4.ftcdn.net/jpg/06/93/28/55/360_F_693285508_vbAfGdv1NsZVyjaWzivPeUX7TONVnvxA.jpg",
  });

  const ChangeHandle = (e) => {
        const {name, value} = e.target;
        setProfile({...profile, [name]: value})
  }
  return (
    <div style={styles.profileContainer}>
      <img src={profile.profilePic} alt="profile pc" style={styles.profileImage} />
      <input
        type="text"
        value={profile.name}
        name="name"
        style={styles.inputField}
        onChange={ChangeHandle}
        placeholder="Enter your name"
      />
      <input
        type="text"
        value={profile.Email}
        name="email"
        style={styles.inputField}
        onChange={ChangeHandle}
        placeholder="Enter your email"
      />
    </div>
  );
};

const styles = {
    profileContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '300px',
      margin: '0 auto',
      backgroundColor: '#000000',
    },
    profileImage: {
      borderRadius: '100px',
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      marginBottom: '10px',
    },
    inputField: {
      padding: '10px',
      margin: '10px 0',
      width: '100%',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
  };

export default Prac;
