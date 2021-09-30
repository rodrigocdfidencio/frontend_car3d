# Front-End Car 3D
## _Teste para Desenvolvedor Front-End da Softruck_

Teste para desenvolvedor Front-End Júnior da empresa Softruck, desenvolvido por Rodrigo Fidencio, utilizando a Javascript Library Leaflet para renderização do mapa e o plugin Leaflet Moving Marker para a animação da rota.

## Solicitado

• Com os dados geográficos e o sprite dados, sua tarefa é criar uma tela com um mapa que fará a animação da imagem no sprite baseada na direção do carro.

## Tarefas bônus:
- [x] Utilizar a velocidade do veículo para definir quão rápido ele vai se mover no trajeto
- [x] Deixar o usuário selecionar qual dos trajetos será desenhado naquele momento


## Como utilizar

- Realizar o clone do projeto
- Utilizar a extensão Live Server do VS Code e rodar a página index.html que está dentro da pasta public
- Ao selecionar a rota, a antiga é removida do mapa e a nova é criada
- Ao chegar a seu destino final a mensagem "Destino final !" é exibida na tela

## Tecnologias utilizadas

SPA desenvolvida em HTML, Javascript e SCSS. Na pasta Server se encontra o arquivo JSON que simula o Banco de dados com as coordenadas das rotas.
Foi utilizada a biblioteca grátis [Leaflet](https://leafletjs.com/)  para gerar o mapa e o plugin [Leaflet Moving Marker](https://github.com/ewoken/Leaflet.MovingMarker) para a animação do marcador e da rota.

