 // Начальник цеха пригласил людей на совещание
// Каждый, кто входит в кабинет пожимает руки всем присутствующим
// Сколько человек зашло в кабинет, если известно, что всего произошло 120 рукопожатий.


function getPeople(getHandshake) {
let count = 1;

        for( handshake = 0; handshake <= getHandshake; handshake++)  {
            count += 1;
            handshake += (count - 1);
        }

    return count;
}

console.log(getPeople(120));
