import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

interface UserInfo {
  email: string;
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser({
          email: user.email || "",
        });
      }
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">H</div>
          <span>HRMS</span>
        </div>

        <nav className="sidebar-menu">

          <button className="menu-item active">
            <span>▦</span>
            Dashboard
          </button>

          <button className="menu-item">
            <span>👥</span>
            Employees
          </button>

          <button className="menu-item">
            <span>✓</span>
            Attendance
          </button>

          <button className="menu-item">
            <span>📅</span>
            Leave
          </button>

          <button className="menu-item">
            <span>💰</span>
            Payroll
          </button>

          <button className="menu-item">
            <span>🎫</span>
            Tickets
          </button>

        </nav>

        <div className="sidebar-bottom">

          <button className="menu-item">
            <span>⚙</span>
            Settings
          </button>

          <button
            className="menu-item logout"
            onClick={handleLogout}
          >
            <span>↪</span>
            Logout
          </button>

        </div>

      </aside>

      {/* Main Area */}
      <main className="main-content">

        {/* Header */}
        <header className="top-header">

          <div className="header-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="header-right">

            <button className="notification">
              🔔
              <span className="notification-dot"></span>
            </button>

            <div className="profile">

              <div className="profile-avatar">
                {user?.email?.charAt(0).toUpperCase() || "A"}
              </div>

              <div className="profile-info">
                <strong>Admin</strong>
                <span>{user?.email}</span>
              </div>

            </div>

          </div>

        </header>

        {/* Dashboard Content */}
        <section className="dashboard-content">

          <div className="welcome-section">

            <div>
              <h1>Welcome back, Admin 👋</h1>

              <p>
                Here's what's happening in your organization today.
              </p>
            </div>

            <button className="primary-button">
              + Add Employee
            </button>

          </div>

          {/* Statistics */}
          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon employee-icon">
                👥
              </div>

              <div>
                <span>Total Employees</span>
                <h2>124</h2>
                <small>+8 this month</small>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon attendance-icon">
                ✓
              </div>

              <div>
                <span>Present Today</span>
                <h2>108</h2>
                <small>87% attendance</small>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon leave-icon">
                📅
              </div>

              <div>
                <span>Leave Requests</span>
                <h2>06</h2>
                <small>Pending approval</small>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon ticket-icon">
                🎫
              </div>

              <div>
                <span>Open Tickets</span>
                <h2>12</h2>
                <small>3 high priority</small>
              </div>

            </div>

          </div>

          {/* Bottom Grid */}
          <div className="dashboard-grid">

            {/* Recent Activity */}
            <div className="dashboard-card">

              <div className="card-header">

                <div>
                  <h3>Recent Activity</h3>
                  <p>Latest updates from your organization</p>
                </div>

                <button className="view-button">
                  View all
                </button>

              </div>

              <div className="activity-list">

                <div className="activity-item">

                  <div className="activity-avatar">
                    JD
                  </div>

                  <div>
                    <strong>John Doe joined the organization</strong>
                    <span>Software Developer • 10 minutes ago</span>
                  </div>

                </div>

                <div className="activity-item">

                  <div className="activity-avatar">
                    AS
                  </div>

                  <div>
                    <strong>Leave request submitted</strong>
                    <span>Arun S • 30 minutes ago</span>
                  </div>

                </div>

                <div className="activity-item">

                  <div className="activity-avatar">
                    TK
                  </div>

                  <div>
                    <strong>New support ticket created</strong>
                    <span>Technical issue • 1 hour ago</span>
                  </div>

                </div>

                <div className="activity-item">

                  <div className="activity-avatar">
                    RM
                  </div>

                  <div>
                    <strong>Employee profile updated</strong>
                    <span>Raj M • 2 hours ago</span>
                  </div>

                </div>

              </div>

            </div>

            {/* Quick Actions */}
            <div className="dashboard-card">

              <div className="card-header">

                <div>
                  <h3>Quick Actions</h3>
                  <p>Frequently used actions</p>
                </div>

              </div>

              <div className="quick-actions">

                <button>
                  <span>👤</span>
                  Add Employee
                </button>

                <button>
                  <span>📅</span>
                  Manage Leave
                </button>

                <button>
                  <span>✓</span>
                  Attendance
                </button>

                <button>
                  <span>🎫</span>
                  Create Ticket
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}