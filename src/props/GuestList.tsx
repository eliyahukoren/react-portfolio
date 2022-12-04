import { useState} from "react";
import { Card } from "./Card";
import { ElementsList } from "./ElementsList";
import { Button } from "./Button";
import { Input } from "./Input";

const GuestList: React.FC = () => {
	const [name, setName ] = useState<string>('');
	const [guests, setGuests ] = useState<string[]>([]);

	const onClick = () => {
		if(name.trim() !== ''){
			setName('');
			setGuests([...guests, name]);
		}
	}

	return (
		<>
			<Card cardTitle="Guests List">
				<ElementsList elements={guests} />
				<Input value={name} onChange={(e) => setName(e.target.value)} />
				<Button text="Add Guest" onClick={onClick} />
			</Card>
		</>
	);
};

export default GuestList;
