# Consumindo OpenAI Com NodeJs

## Fetch()

O método global `fetch()` inicia o processo de busca de um recurso da rede, retornando uma promessa que é cumprida assim que a resposta estiver disponível.

A promessa é resolvida para o objeto `Response` que representa a resposta à sua solicitação. A promessa não rejeita erros de `HTTP` - apenas rejeita erros de rede. Você deve usar os manipuladores then para chechar erros de `HTTP`.

```javascript
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
```

## Biblioteca OpenAI

Esta biblioteca fornece acesso conveniente à API REST OpenAI de TypeScript ou JavaScript.
```typescript
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
```


