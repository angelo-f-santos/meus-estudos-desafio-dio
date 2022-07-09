function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new map();

usuarios.set('Jonas', 'Admin');
usuarios.set('Angelo', 'Admin');
usuarios.set('Vinicius', 'User');
usuarios.set('Gabs', 'Admin');

console.log(getAdmins(usuarios));