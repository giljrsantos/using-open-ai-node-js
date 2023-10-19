// 1 - importa a biblioteca dotenv

import "dotenv/config";

// 2 - cria a url da API
const url = 'https://api.openai.com/v1/chat/completions';

// 3 - cria uma variavel para a nossa pergunta (prompt)
const question = 'Qual a maior cidade do Brasil';

// 4 - cria os headers, passando o Content-Type e Authorazation header
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,

};

// 5 - cria o body, passando o model, a temperatura e as mensagens
const body = {
    'model': 'gpt-3.5-turbo',
    'temperature': 0,
    'messages': [{ role: 'user', content: question }]
};


// 6 - executa a requisção
fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
})
    // 7 - transforma a resposta em um objeto json
    .then((response) => response.json())
    .then((data) => {
        // 8 - exibe a resposta da AI juntamente com o custo
        console.log(data.choices.at(0).message.content);
        console.log(data.usage.total_tokens);
    })
    .catch(console.error);