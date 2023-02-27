# Bot de duelo aleatório
## Desafie seus amigos 'num' duelo baseado em sorte!
![preview](https://github.com/kennedfer/duel-discord-bot/blob/master/preview/duel-message.png)

O bot é bem simples assim como a lógica por trás dele, <br>
o principal (e único) comando `/duelar` tem apenas uma verificação<br>
em `Math.random()` para decidir se o desafiante perdeu ou ganhou, <br>
algo como:

``` js
const challengerWin = () => Math.random() >= 0.55
```
eu nao pretendo levar esse projeto mais adiante, <br>
contudo, talvez eu faça mais alguns comandos de interações <br>
entre usuários caso eu consigar deixar ele online <br>
sem grandes complicações.

<br>

O bot pode ser adicionado ao seu servidor clicando
[aqui](https://discord.com/api/oauth2/authorize?client_id=1079152592254402661&permissions=2147494912&scope=bot)

```
Comandos:
/duelar *oponente* = use para desafiar alguem para um duelo
```
```
Acho importante tambem deixar claro que foi um projeto mais para
diversão que qualquer outro motivo, mas, ainda assim, 
mantive uma estrutura de projeto real e escalavel.
```
