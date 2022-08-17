const baseUrl = "https://boiling-refuge-66454.herokuapp.com/images";

const response = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Request failed!");
    }
};

export const getImages = async () => {
    return fetch(baseUrl).then(response);
};

export const getLargeImage = (id) => {
    return fetch(`${baseUrl}/${id}`).then(response);
};

export const sendComment = (id, name, comment) => {
    fetch(`${baseUrl}/${id}/comments`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            comment: comment
        })
    }).then(response);
};
