import {useSelector} from "react-redux";

function request(url, type = 'GET', body = {}) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const auth = useSelector((state) => state.token.data);

    let options = {
        method: type,
    };
    options.headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
    };
    if (type.match('POST')) {
        options.body = JSON.stringify(body);
    }
    return fetch('http://localhost:8080' + url, options).then(async (response) => {
        if (!response.ok) {
            throw new Error(response.status + ': Network response was not ok');
        }
        try {
            return await response.json();
        } catch (e) {
            return true;
        }
    }).catch(error => {
        alert('Error!' + error.message);
        return false;
    });
}

export {request}