import { useState } from 'react';
import { Button } from "./Button";
import { Input } from "./Input";
import { Card } from "./Card";
import { UserList } from "./UserList";
import { ElementsList } from './ElementsList';

const users = [
	{ name: "Sarah", age: 19, id: 1 },
	{ name: "Mike", age: 21, id: 2 },
	{ name: "Tony", age: 23, id: 3 },
	{ name: "Alex", age: 18, id: 4 },

];
export const FindUsers:React.FC = () => {
	const [name, setName ] = useState<string>('');
	const [user, setUser] = useState<{name: string; age: number; id: number} | undefined>();

	const searchUser = () => {

		const foundUser = users.find( user => user.name === name )

		setUser(foundUser);

		console.log(foundUser)
	}

	return (
		<>
		<Card cardTitle="Find User">
			<ElementsList elements={users.map(user => user.name)}/>
			<Input value={name} onChange={(e) => setName(e.target.value)}/>
			<Button 
				text="Find" 
				onClick={searchUser} />
			<p className="mt-1 text-bold">User Details</p>
			{ user && <><p>{user.name}</p></> }
		</Card>
		</>
	)
}
