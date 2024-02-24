import pandas as pd
import json

def ler_json(dados):
    with open(dados, 'r') as f:
        data = json.load(f)
    return data

def calcular_estatisticas(data):
    df = pd.DataFrame(data)
    menor_valor = df['valor'].min()
    maior_valor = df['valor'].max()
    media_mensal = df[df['valor'] != 0]['valor'].mean()
    dias_acima = (df['valor'] > media_mensal).sum()

    return menor_valor, maior_valor, media_mensal, dias_acima

def main():
    dados = 'dados.json'
    data = ler_json(dados)
    menor_valor, maior_valor, media_mensal, dias_acima = calcular_estatisticas(data)
    print(f'Menor valor: {menor_valor}')
    print(f'Maior valor: {maior_valor}')
    print(f'Média mensal: {media_mensal}')
    print(f'Dias acima da média: {dias_acima}')

if __name__ == '__main__':
    main()