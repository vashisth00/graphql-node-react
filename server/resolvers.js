const resolvers = {
    Query: {
        users: async () => {
            try {
                const response = await axios.get('https://608b7a57737e470017b74d29.mockapi.io/api/v1/users');
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },

        
    },
    Mutation: {
        createUser: async (_, args) => {
            try {
                const response = await axios.post('https://608b7a57737e470017b74d29.mockapi.io/api/v1/users', args);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },
        updateUser: async (_, args) => {
            try {
                const response = await axios.put(`https://608b7a57737e470017b74d29.mockapi.io/api/v1/users/${args.id}`, args);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },
        deleteUser: async (_, args) => {
            try {
                const response = await axios.delete(`https://608b7a57737e470017b74d29.mockapi.io/api/v1/users/${args.id}`);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
};
