export interface IInput {
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<IInput> = (props: IInput) => {
	return (
		<input
			type="text"
			className="form-control mb-2"
			value={props.value}
			onChange={props.onChange}
		/>
	);
};
