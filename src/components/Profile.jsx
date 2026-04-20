const Profile = () => {
  return (
    <div style={{
      padding: '20px',
      background: '#f8f9fa',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Profile Page</h2>
        <p style={{ color: '#666', fontSize: '18px' }}>This is the profile page. Here you can view and edit your profile information.</p>
      </div>
    </div>
  );
};

export default Profile;