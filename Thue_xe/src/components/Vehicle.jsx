function Vehicle({ vehicle, handleRent }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: 20,
                marginBottom: 15,
                borderRadius: 8
            }}
        >
            <h3>{vehicle.name}</h3>

            <p>Giá thuê: {vehicle.price}$/ngày</p>

            <p>Trạng thái:
                <b> {vehicle.status === "available" ? "Còn xe" : "Đã thuê"}</b>
            </p>

            <button
                onClick={() => handleRent(vehicle.id)}
                disabled={vehicle.status !== "available"}
            >
                Thuê xe
            </button>
        </div>
    );
}

export default Vehicle;
