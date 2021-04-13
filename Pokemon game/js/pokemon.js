function Pokemon(name, lvl, type1, type2 = null, hp, att, def, att_sp, def_sp, speed) {
    this.name = name;
    this.level = lvl;
    this.type = {
        'first': type1,
        'last': type2
    }
    this.hp = hp;
    this.attack = att;
    this.defense = def;
    this.att_especial = att_sp;
    this.def_epecial = def_sp;
    this.speed = speed;
}

