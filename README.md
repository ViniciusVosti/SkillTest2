# SkillTest2

## Como instalar

- Na raiz do projeto em um prompt de comando (powershell ou cmd: npm install -e
- react-native link apesar da versão ^0.60 ter auto-link para algumas bibliotecas, os icones precisam desse comando)
- rodar: react-native run-android

### Observações:

react-native-reanimated: 2.2.4
native-base: 3.3.5

São versões especificas para rodar o projeto em react-native 0.67.2

## Alterar User-Key

- util/config.js
- Alterar a user USER_KEY_DEV e USER_KEY_PRO
- Como o projeto base que eu tenho possui a opção de mudar de servidor (ambiente dev VS ambiente em produção), ele possui o DEBUG para saber o ambiente que esta sendo utilizado, no caso da Ploomes tanto faz, ja que é o mesmo domínio.
