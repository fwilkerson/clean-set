declare module 'clean-set' {
	/**
	 * Update a value in a deeply nested object and clone each node touched
	 * @param source The object to be updated
	 * @param location The dot notation path to the property you wish to update
	 * @param update Either a function that will receive the current value and return a new value OR the new value for the node
	 * @returns The new object
	 */
	export default function<A>(
		source: A,
		location: string,
		update: <B>(value: B) => B | any
	): A;
}
