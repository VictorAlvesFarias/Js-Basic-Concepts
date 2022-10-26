function verify_age() {
    var age_test_result = document.getElementById('age_test_result_identifier')
    var age_test_input = document.getElementById('age_test_input_indentifier').value
    if (age_test_input <= 16) {
        age_test_result.innerHTML = "Voto Opcional"
    }
    else if (age_test_input >= 69) {
        age_test_resutlt.innerHTML = "Voto Opcional"
    }
    else if (age_test_input >= 18) {
        age_test_result.innerHTML = "Voto Obrigatorio"
    }
}

