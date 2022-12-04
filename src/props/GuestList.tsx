import { useState} from "react";

const GuestList: React.FC = () => {
	const [name, setName ] = useState('');

	return (
		<div className="row justify-content-center my-auto mt-5 mw-50">
			<div className="col-sm-6">
				<div className="card shadow">
					<div className="card-body">
						<h5 className="card-title">Guest List</h5>
						<input type="text" className="form-control mb-2" value={name} onChange={(e) => setName(e.target.value)} />
						<button className="btn btn-primary">
							Add Guest
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GuestList;
