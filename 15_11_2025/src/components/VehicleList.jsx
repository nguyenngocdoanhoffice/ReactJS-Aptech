import Vehicle from "./Vehicle.jsx";

function VehicleList({
    vehicles, setVehicles,
    budget, setBudget,
    rentedVehicles, setRentedVehicles
}) {

    const handleRent = (id) => {
        alert("Xử lý thuê xe");

        const selectedVehicle = vehicles.find(v => v.id === id);

        if (budget < selectedVehicle.price) {
            alert("Ngân sách không đủ để thuê xe này!");
            return;
        }

        const updatedVehicles = vehicles.map(vehicle =>
            vehicle.id === id ? { ...vehicle, status: "rented" } : vehicle
        );

        setVehicles(updatedVehicles);

        setBudget(budget - selectedVehicle.price);

        setRentedVehicles([...rentedVehicles, selectedVehicle]);

        alert("Thuê thành công: " + selectedVehicle.name);
    };

    return (
        <div>
            <h2>Danh sách xe</h2>

            {vehicles.map(vehicle => (
                <Vehicle
                    key={vehicle.id}
                    vehicle={vehicle}
                    handleRent={handleRent}
                />
            ))}
        </div>
    );
}

export default VehicleList;
