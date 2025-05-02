file_path = "sygnaly.txt"

with open(file_path, "r") as file:
    lines = [line.strip() for line in file.readlines() if line.strip()]

# Zadanie 4.1
zad_4_1 = ''.join(lines[i][9] for i in range(39, len(lines), 40))

# Zadanie 4.2
max_unique_count = 0
max_unique_word = ""

for word in lines:
    unique_letters = len(set(word))
    if unique_letters > max_unique_count:
        max_unique_count = unique_letters
        max_unique_word = word

zad_4_2 = f"{max_unique_word} {max_unique_count}"

# Zadanie 4.3
zad_4_3_words = []

for word in lines:
    valid = True
    for i in range(len(word)):
        for j in range(i + 1, len(word)):
            if abs(ord(word[i]) - ord(word[j])) > 10:
                valid = False
                break
        if not valid:
            break
    if valid:
        zad_4_3_words.append(word)

# wyniki
output_path = "wyniki4.txt"
with open(output_path, "w") as out:
    out.write("4.1\n")
    out.write(zad_4_1 + "\n")
    out.write("4.2\n")
    out.write(zad_4_2 + "\n")
    out.write("4.3\n")
    for word in zad_4_3_words:
        out.write(word + "\n")

output_path
