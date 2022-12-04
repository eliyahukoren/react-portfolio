import { createRoot } from "react-dom/client";
import GuestList from "./props/GuestList";

const App = () => {
	return (
		<div className="container">
			<GuestList />
		</div>
	);
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
