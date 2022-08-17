const baseUrl = "https://boiling-refuge-66454.herokuapp.com/images";

const response = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
};

export const getImages = async () => {
    return fetch(baseUrl).then(response);
};

export const getLargeImage = (id) => {
    return fetch(`${baseUrl}/${id}`).then(response);
};

export const sendComment = async (id, name, comment) => {
    return fetch(`${baseUrl}/${id}/comments`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            comment: comment
        })
    }).then((res) => {
        if (res.ok) {
            return "Comment sent successfully!";
        }
        return Promise.reject(`Error ${res.status}`);
    });
};
