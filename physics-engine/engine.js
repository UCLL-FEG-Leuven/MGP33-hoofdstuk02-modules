import { Vector2D } from "./vector-2d.js";

export function calculateNewPosition(currentPosition, speedVector, timeSpanInMsec) {
    let speedDelta = new Vector2D(
        speedVector.x * (timeSpanInMsec / 1000), 
        speedVector.y * (timeSpanInMsec / 1000));
    let newPosition = new Vector2D(
        currentPosition.x + speedDelta.x,
        currentPosition.y + speedDelta.y
    );
    return newPosition;
}