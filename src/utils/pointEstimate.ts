import { PointEstimate } from "../graphql";

const pointEstimateValues = {
	[PointEstimate.One]: 1,
	[PointEstimate.Four]: 4,
	[PointEstimate.Two]: 2,
	[PointEstimate.Zero]: 0,
	[PointEstimate.Eight]: 8,
};

export function formatPointEstimate(pointEstimate: PointEstimate) {
	const pointEstimateValue = pointEstimateValues[pointEstimate].toString();
	const unit = pointEstimateValue === "1" ? "Point" : "Points";
	return `${pointEstimateValue} ${unit}`;
}
