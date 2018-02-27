/**
 * Created by Samuel Kaessner on 2/26/2018.
 */

/**
 *
 * @param mass1
 * @param mass2
 * @param distance
 * @returns {number}
 */
function findGravityForce(mass1, mass2, distance) {
    let gravityConst = 3.0;
    return (gravityConst * mass1 * mass2) / distance;
}

function getDistance(x1, y1, x2, y2) {
    let deltaX = (x1 - x2);
    let deltaY = (y1 - y2);
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}