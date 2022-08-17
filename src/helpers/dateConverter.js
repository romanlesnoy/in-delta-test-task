const dateConverter = (time) => {
    const newDate = new Date(time);
    return newDate.toLocaleString();
};

export default dateConverter;
