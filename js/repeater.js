
function repeater(){
    var  result_generator_paragraph = document.getElementById('result_generator_paragraph_identifier')
    var  while_repeater_string = document.getElementById('while_repeater_string_identifier').value
    var while_repeater_value = document.getElementById('while_repeater_value_identifier').value
    var repeat_quantity = 1

        for(let i = 0; i <= while_repeater_value; i++) {
        (function(i) {
            setTimeout(function() {
        document.getElementById("while_repeater_loading_identifier").style.width  = `${Math.floor((i/while_repeater_value)*100)}%`
            }, 80*i);
        })(i++)}
        while (repeat_quantity <= while_repeater_value) {
                (function(repeat_quantity) {
                    setTimeout(function() {
                        result_generator_paragraph.innerHTML  += while_repeater_string    
                    }, 80*repeat_quantity);
                })(repeat_quantity++)
        }
}    