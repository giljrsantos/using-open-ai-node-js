// 1 - importa a biblioteca dotenv

import "dotenv/config";

import OpenAI from "openai";

// 2 - importa a biblioteca OpenAi


// 3 - Cria um objeto de configuração
const configuration = {
    apiKey: process.env.OPENAI_API_KEY,
}

// 4 - cria uma variavel para o nosso prompt
const prompt = ' Responda de forma debochada a seguinte pergunta: Qual a maior cidade do Brasil?'

// 5 - cria um array com as mensagens
const messages = [
    { role: 'user', content: prompt },
]

// 6 - cria uma instância da OpenAI usando o configuration
const openai = new OpenAI(configuration);


// 7 - faz a chamada a API usando o chat completions create
openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: 0,
})
    .then((data) => {
        // 8 - exibe a resposta da AI juntamente com o custo
        console.log(data.choices.at(0).message.content);
        console.log(data.usage.total_tokens);
    })
    .catch(console.error)
