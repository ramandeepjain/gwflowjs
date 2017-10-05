
export default function numericallyIntegrate( a, b, dx, f ) {
    // define the variable for area
    let area = 0;

    // loop to calculate the area of each trapezoid and sum.
    for ( let x1 = a + dx; x1 <= b; x1 += dx ) {
        // the x locations of the left and right side of each trapezoid
        const x0 = x1 - dx;

        // the area of each trapezoid
        const Ai = dx * ( f( x0 ) + f( x1 ) ) / 2.0;

        // cumulatively sum the areas
        area += Ai;
    }

    return area;
}
