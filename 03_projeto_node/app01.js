//momentjs.com
let moment = require('moment');

moment.locale('pt-BR');
// moment.locale('en-US');

const now = moment();
console.log(now);
console.log(now.format("DD/MM/yyyy - dddd - (MMMM)"));