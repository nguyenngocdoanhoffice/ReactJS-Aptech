import { useState } from "react";
import VehicleList from "./components/VehicleList.jsx";
import RentVehicle from "./components/RentVehicle.jsx";

function App() {
    const [vehicles, setVehicles] = useState([
        { id: 1, name: 'Honda Civic', image: '/path/to/civic', status: 'available', price: 20 },
        { id: 2, name: 'Toyota Corolla', image: '/path/to/corolla', status: 'available', price: 25 },
        { id: 3, name: 'Tesla Model 3', image: '/path/to/tesla', status: 'available', price: 50 }
    ]);

    const [rentedVehicles, setRentedVehicles] = useState([]);

    const [budget, setBudget] = useState(500);

    return (
        <div style={{ padding: 30 }}>
            <h1>Ứng dụng Quản lý Thuê Xe</h1>
            <p>Ngân sách còn lại: <b>{budget}$</b></p>

            <VehicleList
                vehicles={vehicles}
                setVehicles={setVehicles}
                budget={budget}
                setBudget={setBudget}
                rentedVehicles={rentedVehicles}
                setRentedVehicles={setRentedVehicles}
            />

            <h2>Xe đã thuê</h2>
            <RentVehicle rentedVehicles={rentedVehicles} />
        </div>
    );
}

export default App;
