const { heroes } = require("../data/data");

export const getHeroByName =(name ='' )=>{
    if(name===''){
        return [];
    }
    name= name.toLowerCase();
    return heroes.filter(hero=>hero.superhero.toLowerCase().includes(name));
}