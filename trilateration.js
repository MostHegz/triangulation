import trilat from 'trilat';

export const getTrilateration =(input) =>{
    return trilat(input);
}



// export const getTrilateration = (position1, position2, position3) => {
//     const xa = position1.x;
//     const ya = position1.y;
//     const xb = position2.x;
//     const yb = position2.y;
//     const xc = position3.x;
//     const yc = position3.y;
//     const ra = position1.distance;
//     const rb = position2.distance;
//     const rc = position3.distance;

//     const S = (Math.pow(xc, 2.) - Math.pow(xb, 2.) + Math.pow(yc, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(rc, 2.)) / 2.0;
//     const T = (Math.pow(xa, 2.) - Math.pow(xb, 2.) + Math.pow(ya, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(ra, 2.)) / 2.0;
//     const y = ((T * (xb - xc)) - (S * (xb - xa))) / (((ya - yb) * (xb - xc)) - ((yc - yb) * (xb - xa)));
//     const x = ((y * (ya - yb)) - T) / (xb - xa);

//     return {
//         x: x,
//         y: y
//     };
// }