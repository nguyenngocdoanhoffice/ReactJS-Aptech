function RentVehicle({ rentedVehicles }) {
    return (
        <div>
            {rentedVehicles.length === 0 && <p>Chưa thuê xe nào.</p>}

            {rentedVehicles.map(v => (
                <div key={v.id} style={{ marginBottom: 10 }}>
                    <b>{v.name}</b> — Giá: {v.price}$
                </div>
            ))}
        </div>
    );
}

export default RentVehicle;
