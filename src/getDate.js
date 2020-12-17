const date = new Date();
const month = date.getUTCMonth() + 1;
const day = date.getUTCDate();
const year = date.getUTCFullYear();
const newDate = `${day}/${month}/${year}`;

export { newDate };
