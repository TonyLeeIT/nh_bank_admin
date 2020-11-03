import {stringify} from "query-string";
import {fetchUtils} from "react-admin";

const apiUrl = "http://localhost:8080";
const httpClient = fetchUtils.fetchJson;

const myDataProvider = {
    getList: (resource, params) => {
        const {page, perPage} = params.pagination;
        // const {field, order} = params.sort;
        // const query = {
        //     sort: JSON.stringify([field, order]),
        //     range: JSON.stringify([(pageNumber - 1) * pageSize, pageNumber * pageSize - 1]),
        //     filter: JSON.stringify(params.filter)
        // };

        const url = `${apiUrl}/${resource}?page=${page}&pageSize=${perPage}`;

        return httpClient(url).then(({headers, json}) => (
            {
                data: json.content,
                total: 10 // xu li cho nay`, dang fix cung gia tri
            }));
    },

    getOne: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}/${params.id}`).then(({headers, json}) => ({
            data: json
        }))
    },

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({json}) => ({data: json}));
    },

    getManyReference: (resource, params) => {
        const {pageNumber, pageSize} = params.pagination;
        // const {field, order} = params.sort;
        const query = {
            // sort: JSON.stringify([field, order]),
            // range: JSON.stringify([(pageNumber - 1) * pageSize, pageNumber * pageSize - 1]),
            range: JSON.stringify([(pageNumber - 1) * pageSize, pageNumber * pageSize - 1]),
            // filter: JSON.stringify({
            //     ...params.filter,
            //     [params.target]: params.id,
            // }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({headers, json}) => ({
            data: json,
            total: 10,
        }));
    },

    update: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data)
        }).then(() => ({
            data: {...params.data, id: ""}
        }))
    },

    create: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(() => ({
            data: {...params.data, id: ""}
        }))
    },

    delete: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data)
        }).then(() => ({
            data: {...params.data, id: ""}
        }))
    },

    deleteMany: (resource, params) => {
        return Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: "DELETE",
                    body: JSON.stringify(params.data)
                })
            )
        ).then(responses => ({
            data: responses.map(response => response.json)
        }))
    }
};

export default myDataProvider;
