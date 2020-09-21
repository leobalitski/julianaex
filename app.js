var cars = [];

/**
 * Função para salvar os dados do carro
 */
function save() {
    // Obtém os dados dos inputs
    const color = document.getElementById("car_color").value;
    const make = document.getElementById("car_make").value;
    const year = document.getElementById("car_year").value;
    const model = document.getElementById("car_model").value;

    //Gera um ID do carro baseado no tamanho do array
    car_id = cars.length + 1;

    // Adiciona o carro no array
    cars.push({
        color,
        make,
        year,
        model,
        car_id
    });

    //Atualiza a table
    update_table();
    //Limpa o form
    clear_form();
    //alert("Carro inserido com sucesso");
    console.log("Carro inserido");
    console.log(cars);
}

/**
 * Função para limpar o formulário
 */

function clear_form() {
    document.getElementById("car_color").value = '';
    document.getElementById("car_make").selectedIndex = 0;
    document.getElementById("car_year").value = '';
    document.getElementById("car_model").value = '';
}

/**
 * Função para deletar o carro baseado no ID
 */
function delete_car(id) {
    //filtra o carro no array com id diferente do que foi passado para deletar
    cars = cars.filter(car => car.car_id != id);
    console.log("Carro deletado");
    console.log(cars);
    //Atualiza a tabela de dados
    update_table();

    alert("Carro deletado");
}

/**
 * Função para atualizar o carro baseado no ID
 */

function update_car(id) {
    //Obtem os dados do formulario
    const color = document.getElementById("car_color").value;
    const make = document.getElementById("car_make").value;
    const year = document.getElementById("car_year").value;
    const model = document.getElementById("car_model").value;

    // Acha o indice do carro no array
    const carIndex = cars.findIndex(car => car.car_id == id);
    var car = cars[carIndex];

    // Troca os dados no array
    car.color = color;
    car.make = make;
    car.year = year;
    car.model = model;

    //Atualiza o elemento do array

    cars[carIndex] = car;

    console.log("Carro atualizado");
    console.log(cars);

    alert("Carro atulizado");

    //Atualiza a tabela de dados e limpa os campos.
    update_table();
    clear_form();
}

/**
 * Função para atualizar a tabela de dados. Obtem os dados do array e coloca os dados nas linhas da tabela.
 */
function update_table() {

    //Corpo da tabela
    const car_table = document.getElementById("car_table").getElementsByTagName('tbody')[0];

    // Adiciona o cabeçalho da tabela
    car_table.innerHTML = ` 
        <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Ano</th>
                <th>Cor</th>
                <th>Controles</th>
        </tr>`;

    // Para cada carro no array, adiciona um item na tabela.
    cars.forEach(car => {
        // Insere a linha na tabela
        const new_row = car_table.insertRow(car_table.length);

        // Insere a celula na linha

        const make_cell = new_row.insertCell(0);
        make_cell.innerHTML = car.make;

        // Ao entrar o mouse, muda a cor da celula
        make_cell.onmouseenter = () => {
            make_cell.style.backgroundColor = 'rgb(153, 171, 228)'
        };

        // Ao sair o mouse, muda a cor da celula
        make_cell.onmouseleave = () => {
            make_cell.style.backgroundColor = 'rgb(223, 223, 223)'
        };

        const model_cell = new_row.insertCell(1);
        model_cell.innerHTML = car.model;

        model_cell.onmouseenter = () => {
            model_cell.style.backgroundColor = 'rgb(153, 171, 228)'
        };

        model_cell.onmouseleave = () => {
            model_cell.style.backgroundColor = 'rgb(223, 223, 223)'
        };

        const year_cell = new_row.insertCell(2);
        year_cell.innerHTML = car.year;

        year_cell.onmouseenter = () => {
            year_cell.style.backgroundColor = 'rgb(153, 171, 228)'
        };

        year_cell.onmouseleave = () => {
            year_cell.style.backgroundColor = 'rgb(223, 223, 223)'
        };

        const color_cell = new_row.insertCell(3);
        color_cell.innerHTML = car.color;

        color_cell.onmouseenter = () => {
            color_cell.style.backgroundColor = 'rgb(153, 171, 228)'
        };

        color_cell.onmouseleave = () => {
            color_cell.style.backgroundColor = 'rgb(223, 223, 223)'
        };


        const delete_button_cell = new_row.insertCell(4);
        // Adiciona os botoes passando o id do carro para deletar e editar.
        delete_button_cell.innerHTML = '<button onclick="delete_car(' + car.car_id + ')">Remover</button> <button onclick="update_car(' + car.car_id + ')">Editar</button>'
    })

    console.log("Tabela atualizada");
    console.log(cars);
}

//msg ao entrar no programa
window.onload = () => {
    const welcome_message = "Iniciando o sistema LOJA DE CARROS";
    alert(welcome_message);
}