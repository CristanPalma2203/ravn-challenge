import { useEffect, RefObject } from "react";

type Event = MouseEvent | TouchEvent;

const onClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: (event: Event) => void,
) => {
	useEffect(() => {
		const handleClickOutside = (event: Event) => {
			const targetElement = ref?.current;
			if (targetElement && !targetElement.contains((event?.target as Node) || null)) {
				handler(event);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
	}, [ref, handler]);
};

export { onClickOutside };
