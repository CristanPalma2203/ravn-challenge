export type ArrayItem<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
