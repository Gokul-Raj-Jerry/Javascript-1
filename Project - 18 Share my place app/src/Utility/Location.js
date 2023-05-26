export async function getCoordsFromAddress(coords) {
    const response = await fetch(`yourgoogleapi`);
    if(!response.ok) {
        throw new Error("Failed to fetch address. Please try again");
    }
    const data = await response.json();
if(data.error_message) {
    throw new Error(data.error_message);
}
const address= data.results[0].formatted_address;
return address;
}



export async function getCoordsFromAddress(address) {
    const urlAddress = encodeURI(address);
    const response = await fetch('yourgoogleapi');
    if(!response.ok) {
        throw new Error('Failed to fetch coordinates. Please try again')
    }
const data = await response.json();
if(data.error_message) {
    throw new Error(data.error_message);
}
const coordinates = data.results[0].geometry.location;
return coordinates;
}

