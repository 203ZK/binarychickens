import { useState, useEffect } from "react";
import { Link, useParams, UNSAFE_NavigationContext, useNavigate } from "react-router-dom";

function Dashboard() {
    const { userId } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const goToMart = (user) => navigate(`/${user}/mart`, { state: { user } });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const path = "http://localhost:3000/api/" + String(userId);
                const response = await fetch(path);
                const result = await response.json();
                setData(result.users[0]);
            } catch (error) {
                console.error("Error encountered:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        (loading) ? (
            <div>Loading...</div>
        ) : (
            <>
                <div>
                    Welcome, {data.user_name}<br/>
                    Vouchers remaining: {data.balance}
                </div>

                <button onClick={() => goToMart(userId)}>Go to Mart</button>
            </>
        )
    );
}

export default Dashboard;