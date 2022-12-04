interface IUserList {
	elements: {
		id: number;
		name: string;
		age: number;
	}[];
}
export const UserList: React.FC<IUserList> = (props: IUserList) => {
	return (
		<ul className="list-group list-group-flush">
			{props.elements.map((element, index) => (
				<li key={index} className="list-group-item">
					{element.name} age:{element.age}
				</li>
			))}
		</ul>
	);
};
