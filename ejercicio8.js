/*Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero
Consideración: El lobo solo puede comer a la oveja que tiene a su derecha.

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (ESTE ES EL FRENTE DE LA FILA)
   7      6      5      4      3            2      1


warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) ===> "Hey! Oveja numero 1! El lobo esta cerca!"
warnTheSheep(["sheep", "sheep", "sheep", "wolf"]) ===> "No sigas comiendo ovejas!"
*/

const warnTheSheep = (arrayOfSheepsAndWolf) => {
  const wolfIndex = arrayOfSheepsAndWolf.indexOf("wolf");
  const sheepIndex = arrayOfSheepsAndWolf.length - wolfIndex - 1;

  if (wolfIndex === arrayOfSheepsAndWolf.length - 1) {
    return "No sigas comiendo ovejas!";
  }
  return `Hey! Oveja numero ${sheepIndex}! El lobo esta cerca!`;
};

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf"]));
