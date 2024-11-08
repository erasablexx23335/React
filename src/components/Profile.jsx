import { useState } from "react";
const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: 'Rishabh kumar',
    email: 'rk9698184@gmail.com',
    profilePic: 'https://images8.alphacoders.com/134/1348853.png',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div style={styles.profileContainer}>
      <img src={profile.profilePic} alt="Profile" style={styles.profileImage} />
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleInputChange}
        style={styles.inputField}
        placeholder="Enter your name"
      />
      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleInputChange}
        style={styles.inputField}
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
    borderRadius: '50%',
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

export default UserProfile;
