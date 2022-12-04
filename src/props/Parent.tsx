import { Child, ChildAsFC } from "./Child";

const Parent = () => {
	return 
		<>
			<Child color="blue" onClick={() => console.log("Clicked")} />
			<ChildAsFC color="green" onClick={() => console.log("Clicked")}>
				children
			</ChildAsFC>
		</>;

};

export { Parent };
