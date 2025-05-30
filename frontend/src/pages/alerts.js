import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Alerts() {
    const navigate = useNavigate();
    const [popupOpen, setPopupOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar from Home.js, blue theme, doctor perspective */}
            <div className="sidebar">
                <div className="logo">
                    <i className="fas fa-heartbeat" style={{ color: '#3b82f6', fontSize: 24 }}></i>
                    <h2>VitalSync</h2>
                </div>
                <ul className="menu">
                    <li><button type="button" onClick={() => navigate('/home')} className={window.location.pathname === '/home' ? 'active' : ''}><i className="fas fa-chart-line"></i> <span>Dashboard</span></button></li>
                    <li><button type="button" onClick={() => navigate('/live')} className={window.location.pathname === '/live' ? 'active' : ''}><i className="fas fa-file-medical"></i> <span>Reports</span></button></li>
                    <li><button type="button" onClick={() => navigate('/alerts')} className={window.location.pathname === '/alerts' ? 'active' : ''}><i className="fas fa-bell"></i> <span>Alerts</span></button></li>
                    <li><button type="button" onClick={() => navigate('/history')} className={window.location.pathname === '/history' ? 'active' : ''}><i className="fas fa-procedures"></i> <span>Patient</span></button></li>
                    <li><button type="button" onClick={() => navigate('/schedule')} className={window.location.pathname === '/schedule' ? 'active' : ''}><i className="fas fa-calendar-alt"></i> <span>Schedule</span></button></li>
                </ul>
                <div className="user-profile" onClick={() => setPopupOpen((v) => !v)}>
                    <img src="images.jpeg" alt="User" />
                    <div className="user-info">
                        <h4>Dr. Sarah Johnson</h4>
                        <p>Cardiologist</p>
                    </div>
                    {popupOpen && (
                        <div id="popup" className="popup-container" style={{ display: 'block', position: 'absolute', backgroundColor: 'white', border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 10, zIndex: 1000, borderRadius: 18, width: 200, bottom: 80, left: 20 }}>
                            <div className="popup-content">
                                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                                    <li style={{ padding: '8px 12px' }}><a href="profile.html" style={{ textDecoration: 'none', color: '#333', display: 'block' }}>Profile</a></li>
                                    <li style={{ padding: '8px 12px' }}><a href="settings.html" style={{ textDecoration: 'none', color: '#333', display: 'block' }}>Settings</a></li>
                                    <li style={{ padding: '8px 12px' }}><button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#333', width: '100%', textAlign: 'left', cursor: 'pointer', padding: 0 }}>Logout</button></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <button className="filter-btn apply-btn" style={{ marginTop: 20, background: '#3b82f6', color: 'white', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 500, cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }} onClick={handleLogout}>
                    Logout
                </button>
            </div>
            {/* Main Content: Doctor Alerts */}
            <div className="main-content" style={{ marginLeft: 260, padding: '60px 30px 30px 30px', width: 'calc(100% - 260px)', minHeight: '100vh', boxSizing: 'border-box', overflowY: 'auto', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                <div className="header" style={{ marginBottom: 30 }}>
                    <h1 style={{ color: '#3b82f6' }}>Patient Alerts</h1>
                </div>
                <section className="alerts-section" style={{ background: 'white', borderRadius: 16, boxShadow: '0 5px 15px rgba(0,0,0,0.05)', padding: 30, marginBottom: 30 }}>
                    <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <h3 style={{ fontSize: 20, color: '#333', fontWeight: 600 }}>Recent Critical Alerts</h3>
                        <div className="section-actions" style={{ display: 'flex', gap: 10 }}>
                            <button className="section-btn" style={{ background: '#3b82f6', color: '#fff' }}><i className="fas fa-bell"></i> Mute All</button>
                            <button className="section-btn"><i className="fas fa-download"></i> Export</button>
                        </div>
                    </div>
                    <div className="alert-list">
                        <div className="alert-item" style={{ display: 'flex', alignItems: 'flex-start', padding: '15px 0', borderBottom: '1px solid #f5f5f5' }}>
                            <div className="alert-icon critical" style={{ width: 40, height: 40, borderRadius: '50%', background: '#ffe6e6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 15, flexShrink: 0 }}>
                                <i className="fas fa-heartbeat" style={{ color: '#ff3333', fontSize: 16 }}></i>
                            </div>
                            <div className="alert-content" style={{ flexGrow: 1 }}>
                                <h4 style={{ fontSize: 15, color: '#333', marginBottom: 5 }}>Critical Heart Rate</h4>
                                <p style={{ fontSize: 14, color: '#666', marginBottom: 5 }}>Michael Brown's heart rate reached 120 BPM</p>
                                <div className="alert-time" style={{ fontSize: 12, color: '#999', display: 'flex', alignItems: 'center' }}>
                                    <i className="far fa-clock" style={{ marginRight: 5, fontSize: 12 }}></i> 15 minutes ago
                                </div>
                            </div>
                            <div className="alert-actions" style={{ display: 'flex', gap: 10 }}>
                                <button className="alert-btn" style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', border: 'none', cursor: 'pointer', color: '#555' }}><i className="fas fa-phone"></i></button>
                                <button className="alert-btn" style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', border: 'none', cursor: 'pointer', color: '#555' }}><i className="fas fa-comment-medical"></i></button>
                            </div>
                        </div>
                        <div className="alert-item" style={{ display: 'flex', alignItems: 'flex-start', padding: '15px 0', borderBottom: '1px solid #f5f5f5' }}>
                            <div className="alert-icon warning" style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff9e6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 15, flexShrink: 0 }}>
                                <i className="fas fa-temperature-high" style={{ color: '#ffa500', fontSize: 16 }}></i>
                            </div>
                            <div className="alert-content" style={{ flexGrow: 1 }}>
                                <h4 style={{ fontSize: 15, color: '#333', marginBottom: 5 }}>High Temperature</h4>
                                <p style={{ fontSize: 14, color: '#666', marginBottom: 5 }}>Jane Smith's temperature is 100.2°F</p>
                                <div className="alert-time" style={{ fontSize: 12, color: '#999', display: 'flex', alignItems: 'center' }}>
                                    <i className="far fa-clock" style={{ marginRight: 5, fontSize: 12 }}></i> 1 hour ago
                                </div>
                            </div>
                            <div className="alert-actions" style={{ display: 'flex', gap: 10 }}>
                                <button className="alert-btn" style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', border: 'none', cursor: 'pointer', color: '#555' }}><i className="fas fa-phone"></i></button>
                                <button className="alert-btn" style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', border: 'none', cursor: 'pointer', color: '#555' }}><i className="fas fa-comment-medical"></i></button>
                            </div>
                        </div>
                        <div className="alert-item" style={{ display: 'flex', alignItems: 'flex-start', padding: '15px 0', borderBottom: '1px solid #f5f5f5' }}>
                            <div className="alert-icon" style={{ width: 40, height: 40, borderRadius: '50%', background: '#e6f4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 15, flexShrink: 0 }}>
                                <i className="fas fa-pills" style={{ color: '#3b82f6', fontSize: 16 }}></i>
                            </div>
                            <div className="alert-content" style={{ flexGrow: 1 }}>
                                <h4 style={{ fontSize: 15, color: '#333', marginBottom: 5 }}>Medication Reminder</h4>
                                <p style={{ fontSize: 14, color: '#666', marginBottom: 5 }}>John Doe missed his evening medication</p>
                                <div className="alert-time" style={{ fontSize: 12, color: '#999', display: 'flex', alignItems: 'center' }}>
                                    <i className="far fa-clock" style={{ marginRight: 5, fontSize: 12 }}></i> 3 hours ago
                                </div>
                            </div>
                            <div className="alert-actions" style={{ display: 'flex', gap: 10 }}>
                                <button className="alert-btn" style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', border: 'none', cursor: 'pointer', color: '#555' }}><i className="fas fa-phone"></i></button>
                                <button className="alert-btn" style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', border: 'none', cursor: 'pointer', color: '#555' }}><i className="fas fa-comment-medical"></i></button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="alerts-summary" style={{ marginTop: 40 }}>
                    <h3>Alerts Overview</h3>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <div style={{ background: '#e6f4ff', borderRadius: '12px', padding: '1.5rem', minWidth: '220px', flex: 1 }}>
                            <h4 style={{ color: '#3b82f6' }}>Total Alerts</h4>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1e293b' }}>8</div>
                        </div>
                        <div style={{ background: '#fff9e6', borderRadius: '12px', padding: '1.5rem', minWidth: '220px', flex: 1 }}>
                            <h4 style={{ color: '#ffa500' }}>Pending</h4>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1e293b' }}>2</div>
                        </div>
                        <div style={{ background: '#ffe6e6', borderRadius: '12px', padding: '1.5rem', minWidth: '220px', flex: 1 }}>
                            <h4 style={{ color: '#ff3333' }}>Critical</h4>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1e293b' }}>2</div>
                        </div>
                        <div style={{ background: '#e6fff2', borderRadius: '12px', padding: '1.5rem', minWidth: '220px', flex: 1 }}>
                            <h4 style={{ color: '#00cc66' }}>Resolved</h4>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1e293b' }}>4</div>
                        </div>
                    </div>
                </section>
            </div>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                body { font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
                .sidebar { width: 260px; height: 100vh; background: white; padding: 30px 20px; position: fixed; left: 0; top: 0; box-shadow: 0 0 20px rgba(0, 0, 0, 0.05); display: flex; flex-direction: column; }
                .logo { display: flex; align-items: center; margin-bottom: 40px; }
                .logo h2 { color: #3b82f6; font-weight: 700; font-size: 24px; letter-spacing: 1px; margin-left: 10px; }
                .menu { list-style: none; padding: 0; margin-top: 10px; flex-grow: 1; }
                .menu li { margin: 8px 0; }
                .menu li button { text-decoration: none; color: #555; font-size: 16px; display: flex; align-items: center; padding: 12px 15px; border-radius: 10px; transition: all 0.3s ease; font-weight: 500; background: none; border: none; cursor: pointer; }
                .menu li button i { margin-right: 12px; font-size: 18px; }
                .menu li button:hover { background: #e0edff; color: #3b82f6; }
                .menu li button.active { background: #3b82f6; color: white; box-shadow: 0 5px 10px rgba(59, 130, 246, 0.2); }
                .user-profile { display: flex; align-items: center; padding: 15px 0; border-top: 1px solid #f1f1f1; cursor: pointer; position: relative; }
                .user-profile img { width: 40px; height: 40px; border-radius: 50%; margin-right: 10px; background: #eee; }
                .user-info { flex-grow: 1; }
                .user-info h4 { font-size: 14px; margin: 0; color: #333; }
                .user-info p { font-size: 12px; color: #888; margin: 0; }
                .main-content { margin-left: 260px; padding: 30px; width: calc(100% - 260px); }
                .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
                .header h1 { font-size: 28px; color: #3b82f6; font-weight: 600; }
                .alerts-section { background: white; border-radius: 16px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); padding: 25px; margin-bottom: 30px; }
                .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
                .section-header h3 { font-size: 20px; color: #333; font-weight: 600; }
                .section-actions { display: flex; gap: 10px; }
                .section-btn { background: white; border: none; padding: 8px 15px; border-radius: 8px; display: flex; align-items: center; cursor: pointer; box-shadow: 0 2px 5px rgba(59, 130, 246, 0.08); font-size: 13px; color: #3b82f6; font-weight: 500; }
                .section-btn i { margin-right: 8px; color: #3b82f6; }
                .section-btn[style*='background: #3b82f6'] { color: #fff !important; }
                .alert-list { margin-top: 10px; }
                .alert-item { border-bottom: 1px solid #f5f5f5; }
                .alert-icon.critical { background: #ffe6e6; color: #ff3333; }
                .alert-icon.warning { background: #fff9e6; color: #ffa500; }
                .alert-icon { background: #e6f4ff; color: #3b82f6; }
                .alert-btn { background: #f5f5f5; border: none; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #555; transition: background 0.2s, color 0.2s; }
                .alert-btn:hover { background: #3b82f6; color: white; }
                .alerts-summary { margin-top: 40px; }
                @media (max-width: 991px) {
                    .sidebar { width: 70px; padding: 20px 10px; }
                    .logo h2, .menu li button span, .user-info { display: none; }
                    .menu li button { justify-content: center; padding: 12px; }
                    .menu li button i { margin-right: 0; }
                    .main-content { margin-left: 70px; width: calc(100% - 70px); }
                    .user-profile { justify-content: center; }
                    .user-profile img { margin-right: 0; }
                }
                @media (max-width: 768px) {
                    .main-content { padding: 10px; }
                    .alerts-section { padding: 10px; }
                }
            `}</style>
        </div>
    );
}

export default Alerts;
