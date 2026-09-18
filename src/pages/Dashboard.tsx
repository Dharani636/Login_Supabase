import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to the HRMS Dashboard</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}