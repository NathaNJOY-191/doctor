import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        navigate('/'); // Redirect to landing page
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <i className="fas fa-heartbeat" style={{ color: "#4A90E2", fontSize: 24 }}></i>
                    <h2>VitalSync</h2>
                </div>
                <ul className="menu">
                    <li><button type="button" onClick={() => navigate('/home')} className={window.location.pathname === '/home' ? 'active' : ''}><i className="fas fa-chart-line"></i> <span>Dashboard</span></button></li>
                    <li><button type="button" onClick={() => navigate('/live')} className={window.location.pathname === '/live' ? 'active' : ''}><i className="fas fa-file-medical"></i> <span>Reports</span></button></li>
                    <li><button type="button" onClick={() => navigate('/alerts')} className={window.location.pathname === '/alerts' ? 'active' : ''}><i className="fas fa-bell"></i> <span>Alerts</span></button></li>
                    <li><button type="button" onClick={() => navigate('/history')} className={window.location.pathname === '/history' ? 'active' : ''}><i className="fas fa-procedures"></i> <span>Patient</span></button></li>
                    <li><button type="button" onClick={() => navigate('/schedule')} className={window.location.pathname === '/schedule' ? 'active' : ''}><i className="fas fa-calendar-alt"></i> <span>Schedule</span></button></li>
                </ul>
                <div className="user-profile">
                    <img src="images.jpeg" alt="User" />
                    <div className="user-info">
                        <h4>Dr. Sarah Johnson</h4>
                        <p>Cardiologist</p>
                    </div>
                </div>
                <button className="filter-btn apply-btn" style={{ marginTop: 20, background: '#4A90E2', color: 'white', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 500, cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }} onClick={handleLogout}>
                    Logout
                </button>
            </div>

            {/* Main Content */}
            <div className="main-content" style={{ paddingTop: '600px' }}>
                <div className="header">
                    <h1>Doctor Dashboard</h1>
                    <div className="header-actions">
                        <button className="header-btn"><i className="fas fa-download"></i> Export</button>
                        <button className="header-btn"><i className="fas fa-print"></i> Print</button>
                    </div>
                </div>

                {/* Dashboard Cards */}
                <div className="dashboard-grid">
                    <div className="dashboard-card">
                        <div className="card-header">
                            <h3>Active Patients</h3>
                            <i className="fas fa-procedures"></i>
                        </div>
                        <div className="card-value">24</div>
                        <div className="card-footer">
                            <span>+3 this week</span>
                            <span className="card-trend up"><i className="fas fa-arrow-up"></i> 12.5%</span>
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-header">
                            <h3>Critical Alerts</h3>
                            <i className="fas fa-exclamation-triangle"></i>
                        </div>
                        <div className="card-value">5</div>
                        <div className="card-footer">
                            <span>Today</span>
                            <span className="card-trend down"><i className="fas fa-arrow-down"></i> 20%</span>
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-header">
                            <h3>Appointments</h3>
                            <i className="fas fa-calendar-check"></i>
                        </div>
                        <div className="card-value">8</div>
                        <div className="card-footer">
                            <span>Today</span>
                            <span className="card-trend up"><i className="fas fa-arrow-up"></i> 2 new</span>
                        </div>
                    </div>
                </div>

                {/* Patients Section */}
                <section className="patients-section">
                    <div className="section-header">
                        <h3>Recent Patients</h3>
                        <div className="section-actions">
                            <button className="section-btn"><i className="fas fa-filter"></i> Filter</button>
                            <button className="section-btn"><i className="fas fa-sort"></i> Sort</button>
                        </div>
                    </div>
                    <table className="patients-table">
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Condition</th>
                                <th>Last Reading</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="patient-info">
                                        <div className="patient-avatar"></div>
                                        <div>
                                            <div className="patient-name">John Doe</div>
                                            <div className="patient-id">P-2023-056</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Hypertension</td>
                                <td>Mar 10, 09:30 AM</td>
                                <td><span className="status normal">Stable</span></td>
                                <td><button className="action-btn">View</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="patient-info">
                                        <div className="patient-avatar"></div>
                                        <div>
                                            <div className="patient-name">Jane Smith</div>
                                            <div className="patient-id">P-2023-112</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Arrhythmia</td>
                                <td>Mar 10, 08:45 AM</td>
                                <td><span className="status warning">Monitor</span></td>
                                <td><button className="action-btn">View</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="patient-info">
                                        <div className="patient-avatar"></div>
                                        <div>
                                            <div className="patient-name">Michael Brown</div>
                                            <div className="patient-id">P-2023-078</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Heart Failure</td>
                                <td>Mar 9, 04:15 PM</td>
                                <td><span className="status critical">Critical</span></td>
                                <td><button className="action-btn">View</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="patient-info">
                                        <div className="patient-avatar"></div>
                                        <div>
                                            <div className="patient-name">Emily Davis</div>
                                            <div className="patient-id">P-2023-095</div>
                                        </div>
                                    </div>
                                </td>
                                <td>Post-Op Recovery</td>
                                <td>Mar 9, 11:30 AM</td>
                                <td><span className="status normal">Stable</span></td>
                                <td><button className="action-btn">View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Recent Alerts */}
                <section className="alerts-section">
                    <div className="section-header">
                        <h3>Recent Alerts</h3>
                        <div className="section-actions">
                            <button className="section-btn"><i className="fas fa-bell-slash"></i> Mute</button>
                        </div>
                    </div>
                    <div className="alert-list">
                        <div className="alert-item">
                            <div className="alert-icon critical">
                                <i className="fas fa-heartbeat"></i>
                            </div>
                            <div className="alert-content">
                                <h4>Critical Heart Rate</h4>
                                <p>Michael Brown's heart rate reached 120 BPM</p>
                                <div className="alert-time">
                                    <i className="far fa-clock"></i> 15 minutes ago
                                </div>
                            </div>
                            <div className="alert-actions">
                                <button className="alert-btn"><i className="fas fa-phone"></i></button>
                                <button className="alert-btn"><i className="fas fa-comment-medical"></i></button>
                            </div>
                        </div>
                        <div className="alert-item">
                            <div className="alert-icon warning">
                                <i className="fas fa-temperature-high"></i>
                            </div>
                            <div className="alert-content">
                                <h4>High Temperature</h4>
                                <p>Jane Smith's temperature is 100.2°F</p>
                                <div className="alert-time">
                                    <i className="far fa-clock"></i> 1 hour ago
                                </div>
                            </div>
                            <div className="alert-actions">
                                <button className="alert-btn"><i className="fas fa-phone"></i></button>
                                <button className="alert-btn"><i className="fas fa-comment-medical"></i></button>
                            </div>
                        </div>
                        <div className="alert-item">
                            <div className="alert-icon">
                                <i className="fas fa-pills"></i>
                            </div>
                            <div className="alert-content">
                                <h4>Medication Reminder</h4>
                                <p>John Doe missed his evening medication</p>
                                <div className="alert-time">
                                    <i className="far fa-clock"></i> 3 hours ago
                                </div>
                            </div>
                            <div className="alert-actions">
                                <button className="alert-btn"><i className="fas fa-phone"></i></button>
                                <button className="alert-btn"><i className="fas fa-comment-medical"></i></button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* CSS Styles */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                body { font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
                .sidebar { width: 260px; height: 100vh; background: white; padding: 30px 20px; position: fixed; left: 0; top: 0; box-shadow: 0 0 20px rgba(0, 0, 0, 0.05); display: flex; flex-direction: column; }
                .logo { display: flex; align-items: center; margin-bottom: 40px; }
                .logo h2 { color: #4A90E2; font-weight: 700; font-size: 24px; letter-spacing: 1px; margin-left: 10px; }
                .menu { list-style: none; padding: 0; margin-top: 10px; flex-grow: 1; }
                .menu li { margin: 8px 0; }
                .menu li button { background: none; border: none; color: #555; font-size: 16px; display: flex; align-items: center; padding: 12px 15px; border-radius: 10px; transition: all 0.3s ease; font-weight: 500; width: 100%; text-align: left; cursor: pointer; }
                .menu li button i { margin-right: 12px; font-size: 18px; }
                .menu li button:hover, .menu li .active { background: #f0f7ff; color: #4A90E2; }
                .menu li .active { background: #4A90E2 !important; color: white !important; box-shadow: 0 5px 10px rgba(74, 144, 226, 0.2); }
                .user-profile { display: flex; align-items: center; padding: 15px 0; border-top: 1px solid #f1f1f1; cursor: pointer; }
                .user-profile img { width: 40px; height: 40px; border-radius: 50%; margin-right: 10px; background: #eee; }
                .user-info { flex-grow: 1; }
                .user-info h4 { font-size: 14px; margin: 0; color: #333; }
                .user-info p { font-size: 12px; color: #888; margin: 0; }
                .main-content { margin-left: 260px; padding: 30px; width: calc(100% - 260px); }
                .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
                .header h1 { font-size: 28px; color: #333; font-weight: 600; }
                .header-actions { display: flex; gap: 10px; }
                .header-btn { background: white; border: none; padding: 8px 15px; border-radius: 8px; display: flex; align-items: center; cursor: pointer; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); }
                .header-btn i { margin-right: 8px; color: #4A90E2; }
                .dashboard-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px; }
                .dashboard-card { background: white; border-radius: 16px; padding: 25px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); transition: all 0.3s ease; }
                .dashboard-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); }
                .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
                .card-header h3 { font-size: 18px; color: #333; font-weight: 600; }
                .card-header i { color: #4A90E2; font-size: 22px; }
                .card-value { font-size: 28px; font-weight: 700; color: #333; margin-bottom: 10px; }
                .card-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 15px; font-size: 14px; }
                .card-trend { display: flex; align-items: center; }
                .card-trend.up { color: #00cc66; }
                .card-trend.down { color: #FF6B6B; }
                .card-trend i { margin-right: 5px; }
                .patients-section { background: white; border-radius: 16px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); padding: 25px; margin-bottom: 30px; }
                .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
                .section-header h3 { font-size: 20px; color: #333; font-weight: 600; }
                .section-actions { display: flex; gap: 10px; }
                .section-btn { background: white; border: none; padding: 8px 15px; border-radius: 8px; display: flex; align-items: center; cursor: pointer; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); font-size: 13px; color: #555; font-weight: 500; }
                .section-btn i { margin-right: 8px; color: #4A90E2; }
                .patients-table { width: 100%; border-collapse: collapse; }
                .patients-table th { background: #f9f9f9; padding: 15px; text-align: left; font-weight: 600; color: #555; font-size: 14px; border-bottom: 1px solid #eee; }
                .patients-table td { padding: 15px; border-bottom: 1px solid #eee; color: #333; font-size: 14px; }
                .patients-table tr:hover { background: #f9f9f9; }
                .patient-info { display: flex; align-items: center; }
                .patient-avatar { width: 40px; height: 40px; border-radius: 50%; background: #eee; margin-right: 12px; }
                .patient-name { font-weight: 500; }
                .patient-id { font-size: 12px; color: #888; }
                .status { display: inline-block; padding: 5px 10px; border-radius: 20px; font-size: 12px; font-weight: 500; }
                .status.normal { background: #e6fff2; color: #00cc66; }
                .status.warning { background: #fff9e6; color: #ffa500; }
                .status.critical { background: #ffe6e6; color: #ff3333; }
                .action-btn { background: #f0f7ff; border: none; padding: 6px 12px; border-radius: 6px; color: #4A90E2; cursor: pointer; font-size: 12px; font-weight: 500; transition: all 0.3s ease; }
                .action-btn:hover { background: #4A90E2; color: white; }
                .alerts-section { background: white; border-radius: 16px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); padding: 25px; }
                .alert-item { display: flex; align-items: flex-start; padding: 15px 0; border-bottom: 1px solid #f5f5f5; }
                .alert-item:last-child { border-bottom: none; }
                .alert-icon { width: 40px; height: 40px; border-radius: 50%; background: #fff5f5; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0; }
                .alert-icon.critical { background: #ffe6e6; }
                .alert-icon.warning { background: #fff9e6; }
                .alert-icon i { color: #FF6B6B; font-size: 16px; }
                .alert-icon.critical i { color: #ff3333; }
                .alert-icon.warning i { color: #ffa500; }
                .alert-content { flex-grow: 1; }
                .alert-content h4 { font-size: 15px; color: #333; margin-bottom: 5px; }
                .alert-content p { font-size: 14px; color: #666; margin-bottom: 5px; }
                .alert-time { font-size: 12px; color: #999; display: flex; align-items: center; }
                .alert-time i { margin-right: 5px; font-size: 12px; }
                .alert-actions { display: flex; gap: 10px; }
                .alert-btn { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f5f5f5; border: none; cursor: pointer; color: #555; }
                .alert-btn:hover { background: #4A90E2; color: white; }
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
                    .dashboard-grid { grid-template-columns: 1fr; }
                    .header { flex-direction: column; align-items: flex-start; gap: 15px; }
                }
            `}</style>
        </div>
    );
}

export default Home;
