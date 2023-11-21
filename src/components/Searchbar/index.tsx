import { ChangeEvent, useState } from "react";

import {
	RiSearchLine as SearchIcon,
	RiNotification3Line as NotificationIcon,
	RiCloseCircleLine as CloseIcon,
} from "react-icons/ri";
import { Avatar } from "../common/Avatar";
import { Container, IconButton, Input } from "./styles";

function Searchbar() {
	const [query, setQuery] = useState("");

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleInputClear = () => {
		setQuery("");
	};

	return (
		<Container>
			<SearchIcon size={24} style={{ minWidth: "24px" }} />
			<Input placeholder="Search" value={query} onChange={handleInputChange} />
			{!!query.length && (
				<IconButton onClick={handleInputClear}>
					<CloseIcon size={24} />
				</IconButton>
			)}
			<IconButton>
				<NotificationIcon size={24} />
			</IconButton>
			<Avatar src={""} size={40} />
		</Container>
	);
}

export { Searchbar };
