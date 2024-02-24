const faturamento_sp = 67836.43
const faturamento_rj = 36678.66
const faturamento_mg = 29229.88
const faturamento_es = 27165.48
const faturamento_outros = 19849.53

const faturamento_total = faturamento_sp + faturamento_rj + faturamento_mg + faturamento_es + faturamento_outros

const percentual_faturamento_sp = ((faturamento_sp / faturamento_total) * 100).toFixed(2);
const percentual_faturamento_rj = ((faturamento_rj / faturamento_total) * 100).toFixed(2);
const percentual_faturamento_mg = ((faturamento_mg / faturamento_total) * 100).toFixed(2);
const percentual_faturamento_es = ((faturamento_es / faturamento_total) * 100).toFixed(2);
const percentual_faturamento_outros = ((faturamento_outros / faturamento_total) * 100).toFixed(2);

console.log(`O percentual de faturamento de SP é de ${percentual_faturamento_sp}%`)
console.log(`O percentual de faturamento de RJ é de ${percentual_faturamento_rj}%`)
console.log(`O percentual de faturamento de MG é de ${percentual_faturamento_mg}%`)
console.log(`O percentual de faturamento de ES é de ${percentual_faturamento_es}%`)
console.log(`O percentual de faturamento de outros estados é de ${percentual_faturamento_outros}%`)
