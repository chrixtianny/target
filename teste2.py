def soma(a, b):
    return a + b

def fibonacci (num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        return soma(fibonacci(num-1), fibonacci(num-2))
    
def verifica_fibonacci(num):
    if num < 0:
        return False
    else:
        i = 0
        while fibonacci(i) <= num:
            if fibonacci(i) == num:
                return True
            i += 1
        return False

def main():
    num = int(input("Digite um número para verificar se ele pertence à sequência de Fibonacci: "))

    if num < 0:
        print("Número inválido")
    else:
        if verifica_fibonacci(num):
            print("O número", num, "pertence à sequência de Fibonacci")
        else:
            print("O número", num, "não pertence à sequência de Fibonacci")

if __name__ == "__main__":
    main()