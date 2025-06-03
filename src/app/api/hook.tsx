import axios from 'axios';


function Api() {
    const baseURL = 'http://localhost:3000/books';

    const get = async () => {
        const response = await axios.get(baseURL);
        return response.data;
    };

    const post = async (data: { title: string; description: string }) => {
        const response = await axios.post(baseURL, data);
        return response.data;
    };

    const put = async (data: { id: string, title: string; description: string }) => {
        const response = await axios.put(`${baseURL}/${data.id}`, {
            title: data.title,
            description: data.description,
        });
        return response.data;
    };

    const del = async (id: string) => {
        const response = await axios.delete(`${baseURL}/${id}`);
        return response.data;
    };

    return { get, post, put, del };


}
export default Api

