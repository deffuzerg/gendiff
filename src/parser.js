const parse = (data, format) => {
    
    switch (format) {
        case '.json': return JSON.parse(data);
    }
};
export default (parse);