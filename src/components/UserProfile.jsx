import React from 'react';

function UserProfile({ 
  avatar, 
  username, 
  email, 
  isVerified 
}) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      width: '280px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <img 
          src={avatar} 
          alt={``}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #f0f0f0'
          }}
        />
      </div>

      <h3 style={{ 
        margin: '0 0 8px 0',
        fontSize: '20px',
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        {username}
        {isVerified ? (
          <span style={{ 
            color: 'green',
            fontSize: '18px'
          }} title="Аккаунт подтвержден">
            ✅
          </span>
        ) : (
          <span style={{
            fontSize: '12px',
            color: '#ff6b6b',
            backgroundColor: '#ffeaea',
            padding: '2px 8px',
            borderRadius: '10px',
            fontWeight: 'normal'
          }}>
            Не подтвержден
          </span>
        )}
      </h3>
      <div style={{ 
        marginTop: '12px',
        paddingTop: '12px',
        borderTop: '1px solid #eee'
      }}>
        <p style={{ 
          margin: '0',
          fontSize: '14px',
          color: '#666'
        }}>
          <strong style={{ color: '#333' }}>Email:</strong> 
          <br />
          <a 
            href={`mailto:${email}`}
            style={{
              color: '#0066cc',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          >
            {email}
          </a>
        </p>
      </div>
    </div>
  );
}



export default UserProfile;