import { DataProvider, fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://26.118.5.15:8787/api';
const httpClient = fetchUtils.fetchJson;

const transformRecord = (record: any) => {
    if (record.ID_Booking !== undefined) {
        return {
            ...record,
            id: record.ID_Booking,
            room_type: record.room_type ?? record.Room_Type,
            in_date_booking: record.in_date_booking ?? record.In_date_booking,
            out_date_booking: record.out_date_booking ?? record.Out_date_booking,
            price_of_booking: record.price_of_booking ?? record.Price_of_booking,
            name_client: record.name_client ?? record.Name_client,
            email_client: record.email_client ?? record.Email_client,
            phone_client: record.phone_client ?? record.Phone_client,
        };
    }
    if (record.ID_Events !== undefined) {
        return {
            ...record,
            id: record.ID_Events
        };
    }
    if (record.ID_Room !== undefined) {
        return {
            ...record,
            id: record.ID_Room
        };
    }
    if (record.ID_Client !== undefined) {
        return {
            ...record,
            id: record.ID_Client
        };
    }
    if (record.ID_Hotel !== undefined) {
        return { 
            ...record,
            id: record.ID_Hotel
        };
    }
    if (record.ID_Additional !== undefined) {
        return {
            ...record,
            id: record.ID_Additional
        };
    }
    return null;
};

export const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        const { page = 1, perPage = 10 } = params.pagination || {};
        const { field = 'id', order = 'ASC' } = params.sort || {};
        
        const query = {
            page,
            perPage,
            sort: field,
            order,
            ...params.filter
        };
        if (resource === 'hotel-rooms') {
          
            const { ID_Hotel, Room_Availability } = params.filter;
            let endpoint = 'rooms'
            let status = Room_Availability;
            if (status !== 'all' && status !== 'true' && status !== 'false') status = 'all';
            if (status === 'all') endpoint = 'rooms'
            if (status === 'false') endpoint = 'rooms/unavailable'
            if (status === 'true') endpoint = 'rooms/available'
            
           
            const url = `${apiUrl}/hotel/${ID_Hotel}/${endpoint}`;
            console.log(url)
            
            
            const { json } = await httpClient(url);
            
            return { data: json.map(transformRecord).filter(Boolean), total: json.length };
        }

        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        console.log(url)
        const { json, headers } = await httpClient(url);

        return {
            data: json.map(transformRecord).filter(Boolean),
            total: parseInt(headers.get('x-total-count') || json.length, 10)
        };
    },

    getOne: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const { json } = await httpClient(url);
        return { data: transformRecord(json) };
    },

    getMany: async (resource, params) => {
        const query = {
            ids: params.ids.join(',')
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const { json } = await httpClient(url);
        return { data: json.map(transformRecord).filter(Boolean) };
    },

    getManyReference: async (resource, params) => {
        const { page = 1, perPage = 10 } = params.pagination || {};
        const { field = 'id', order = 'ASC' } = params.sort || {};
        
        const query = {
            page,
            perPage,
            sort: field,
            order,
            [params.target]: params.id,
            ...params.filter
        };

        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const { json, headers } = await httpClient(url);

        return {
            data: json.map(transformRecord).filter(Boolean),
            total: parseInt(headers.get('x-total-count') || json.length, 10)
        };
    },

    create: async (resource, params) => {
        let url;
        if (resource === 'bookings') {
            url = `${apiUrl}/bookings/admin`;
        } else {
            url = `${apiUrl}/${resource}`;
        }
        const { json } = await httpClient(url, {
            method: 'POST',
            body: JSON.stringify(params.data),
        });
        return { data: transformRecord(json) };
    },

    update: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const { json } = await httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        });
        return { data: transformRecord(json) };
    },

    updateMany: async (resource, params) => {
        const responses = await Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                })
            )
        );
        return { data: responses.map(({ json }) => json.id) };
    },

    delete: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const { json } = await httpClient(url, {
            method: 'DELETE',
        });
        return { data: transformRecord(json) };
    },

    deleteMany: async (resource, params) => {
        const responses = await Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: 'DELETE',
                })
            )
        );
        return { data: responses.map(({ json }) => json.id) };
    }
};