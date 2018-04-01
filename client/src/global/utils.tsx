export const getAllImages = async () => {

    const response = await fetch('http://localhost:5000/api/getAllImages');
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message);
    }

    return body;
};