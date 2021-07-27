import React from "react";
import { useEffect, useState, useRef } from "react";

type TypeWriterProps = {
  phrases: string;
};
export default function TypeWriter({ phrases }: TypeWriterProps) {
	const index = useRef(0);

	const [text, setText] = useState("");

	useEffect(() => {
		index.current = 0;
		setText("");
	}, []);

	useEffect(() => {
		const timeoutID = setTimeout(() => {
			setText((value) => value + phrases.charAt(index.current));
			index.current += 1;
		}, 100);
		return () => {
			clearTimeout(timeoutID);
		};
	}, [text, phrases]);

	return <h1 className="writer-text">{text}</h1>;
}
