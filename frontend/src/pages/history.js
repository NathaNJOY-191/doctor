import React from "react";
import { useNavigate } from 'react-router-dom';

const Patients = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar (copied from Home.js, blue theme) */}
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
        <div className="user-profile">
          <img src="images.jpeg" alt="User" />
          <div className="user-info">
            <h4>Dr. Sarah Johnson</h4>
            <p>Cardiologist</p>
          </div>
        </div>
        <button className="filter-btn apply-btn" style={{ marginTop: 20, background: '#3b82f6', color: 'white', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 500, cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="main-content" style={{ paddingTop: '400px' }}>
        <div className="header">
          <h1>Patients</h1>
        </div>
        <section className="patients-section">
          <div className="section-header">
            <h3>Patient List</h3>
            <div className="section-actions">
              <button className="section-btn"><i className="fas fa-user-plus"></i> Add Patient</button>
              <button className="section-btn"><i className="fas fa-filter"></i> Filter</button>
              <button className="section-btn"><i className="fas fa-sort"></i> Sort</button>
            </div>
          </div>
          <table className="patients-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Condition</th>
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
                <td>54</td>
                <td>Male</td>
                <td>Hypertension</td>
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
                <td>61</td>
                <td>Female</td>
                <td>Arrhythmia</td>
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
                <td>70</td>
                <td>Male</td>
                <td>Heart Failure</td>
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
                <td>47</td>
                <td>Female</td>
                <td>Post-Op Recovery</td>
                <td><span className="status normal">Stable</span></td>
                <td><button className="action-btn">View</button></td>
              </tr>
              <tr>
                <td>
                  <div className="patient-info">
                    <div className="patient-avatar"></div>
                    <div>
                      <div className="patient-name">Ava Lee</div>
                      <div className="patient-id">P-2023-120</div>
                    </div>
                  </div>
                </td>
                <td>38</td>
                <td>Female</td>
                <td>Diabetes</td>
                <td><span className="status warning">Monitor</span></td>
                <td><button className="action-btn">View</button></td>
              </tr>
              <tr>
                <td>
                  <div className="patient-info">
                    <div className="patient-avatar"></div>
                    <div>
                      <div className="patient-name">David Kim</div>
                      <div className="patient-id">P-2023-121</div>
                    </div>
                  </div>
                </td>
                <td>45</td>
                <td>Male</td>
                <td>Asthma</td>
                <td><span className="status normal">Stable</span></td>
                <td><button className="action-btn">View</button></td>
              </tr>
              <tr>
                <td>
                  <div className="patient-info">
                    <div className="patient-avatar"></div>
                    <div>
                      <div className="patient-name">Priya Singh</div>
                      <div className="patient-id">P-2023-122</div>
                    </div>
                  </div>
                </td>
                <td>29</td>
                <td>Female</td>
                <td>Pregnancy</td>
                <td><span className="status normal">Stable</span></td>
                <td><button className="action-btn">View</button></td>
              </tr>
              <tr>
                <td>
                  <div className="patient-info">
                    <div className="patient-avatar"></div>
                    <div>
                      <div className="patient-name">Carlos Rivera</div>
                      <div className="patient-id">P-2023-123</div>
                    </div>
                  </div>
                </td>
                <td>63</td>
                <td>Male</td>
                <td>Chronic Kidney Disease</td>
                <td><span className="status critical">Critical</span></td>
                <td><button className="action-btn">View</button></td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="patients-summary" style={{marginTop: '40px'}}>
          <h3>Patient Overview</h3>
          <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
            <div style={{background:'#e6f4ff', borderRadius: '12px', padding: '1.5rem', minWidth: '220px', flex: 1}}>
              <h4 style={{color:'#3b82f6'}}>Total Patients</h4>
              <div style={{fontSize:'2rem', fontWeight:700, color:'#1e293b'}}>8</div>
            </div>
            <div style={{background:'#fff9e6', borderRadius: '12px', padding: '1.5rem', minWidth: '220px', flex: 1}}>
              <h4 style={{color:'#ffa500'}}>Under Monitoring</h4>
              <div style={{fontSize:'2rem', fontWeight:700, color:'#1e293b'}}>2</div>
            </div>
            <div style={{background:'#ffe6e6', borderRadius: '12px', padding: '1.5rem', minWidth: '220px', flex: 1}}>
              <h4 style={{color:'#ff3333'}}>Critical</h4>
              <div style={{fontSize:'2rem', fontWeight:700, color:'#1e293b'}}>2</div>
            </div>
            <div style={{background:'#e6fff2', borderRadius: '12px', padding: '1.5rem', minWidth: '220px', flex: 1}}>
              <h4 style={{color:'#00cc66'}}>Stable</h4>
              <div style={{fontSize:'2rem', fontWeight:700, color:'#1e293b'}}>4</div>
            </div>
          </div>
        </section>
        <section className="patients-actions" style={{marginTop: '40px'}}>
          <h3>Quick Actions</h3>
          <div style={{display:'flex', gap:'1.5rem', flexWrap:'wrap'}}>
            <button className="section-btn" style={{background:'#3b82f6', color:'#fff'}}><i className="fas fa-user-plus"></i> Register New Patient</button>
            <button className="section-btn"><i className="fas fa-file-medical-alt"></i> Generate Report</button>
            <button className="section-btn"><i className="fas fa-envelope"></i> Message All</button>
            <button className="section-btn"><i className="fas fa-download"></i> Export List</button>
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
        .user-profile { display: flex; align-items: center; padding: 15px 0; border-top: 1px solid #f1f1f1; cursor: pointer; }
        .user-profile img { width: 40px; height: 40px; border-radius: 50%; margin-right: 10px; background: #eee; }
        .user-info { flex-grow: 1; }
        .user-info h4 { font-size: 14px; margin: 0; color: #333; }
        .user-info p { font-size: 12px; color: #888; margin: 0; }
        .main-content { margin-left: 260px; padding: 30px; width: calc(100% - 260px); }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .header h1 { font-size: 28px; color: #333; font-weight: 600; }
        .patients-section { background: white; border-radius: 16px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); padding: 25px; margin-bottom: 30px; }
        .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .section-header h3 { font-size: 20px; color: #333; font-weight: 600; }
        .section-actions { display: flex; gap: 10px; }
        .section-btn { background: white; border: none; padding: 8px 15px; border-radius: 8px; display: flex; align-items: center; cursor: pointer; box-shadow: 0 2px 5px rgba(59, 130, 246, 0.08); font-size: 13px; color: #3b82f6; font-weight: 500; }
        .section-btn i { margin-right: 8px; color: #3b82f6; }
        .patients-table { width: 100%; border-collapse: collapse; }
        .patients-table th { background: #f9f9f9; padding: 15px; text-align: left; font-weight: 600; color: #555; font-size: 14px; border-bottom: 1px solid #eee; }
        .patients-table td { padding: 15px; border-bottom: 1px solid #eee; color: #333; font-size: 14px; }
        .patients-table tr:hover { background: #f9f9f9; }
        .patient-info { display: flex; align-items: center; }
        .patient-avatar { width: 40px; height: 40px; border-radius: 50%; background: #e0edff; margin-right: 12px; }
        .patient-name { font-weight: 500; }
        .patient-id { font-size: 12px; color: #888; }
        .status { display: inline-block; padding: 5px 10px; border-radius: 20px; font-size: 12px; font-weight: 500; }
        .status.normal { background: #e6f4ff; color: #3b82f6; }
        .status.warning { background: #fff9e6; color: #ffa500; }
        .status.critical { background: #ffe6e6; color: #ff3333; }
        .action-btn { background: #e0edff; border: none; padding: 6px 12px; border-radius: 6px; color: #3b82f6; cursor: pointer; font-size: 12px; font-weight: 500; transition: all 0.3s ease; }
        .action-btn:hover { background: #3b82f6; color: white; }
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
          .patients-section { padding: 10px; }
        }
      `}</style>
    </div>
  );
};

export default Patients;