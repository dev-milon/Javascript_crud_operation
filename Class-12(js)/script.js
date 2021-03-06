const submit_btn = document.querySelector("#submit_user");
const table = document.querySelector("#user_table_body");
var count_row = 1;

submit_btn.addEventListener("click", function(event) {
    event.preventDefault();
    // alert("ok");
    const user_name = document.querySelector("#fullname").value;
    const user_email = document.querySelector("#email").value;
    const user_phone = document.querySelector("#phone").value;

    // console.log(user_name, user_email, user_phone);





    generate_new_row(user_name, user_email, user_phone, );
    count_row++;

    reset_form();


});

function generate_new_row(user_name, user_email, user_phone, ) {
    const table = document.querySelector("#user_table_body");
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${count_row}</td>   
    <td>${user_name}</td>
    <td>${user_email}</td>
    <td>${user_phone}</td>
    <td>
    <a href="#" class="button-primary edit_btn">Edit</a>|
    <a href="#" class = "button-primary delete_btn">Delete</a>
    </td>
   `;
    table.appendChild(row);
    //  count_row++;

}

function reset_form() {
    document.querySelector("#fullname").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
}


// Remove tr row
table.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete_btn")) {
        var conf = confirm("Are you sure delete this user")
        if (conf) {
            event.target.parentElement.parentElement.remove();
            renew_id();
        }

    } else if (event.target.classList.contains("edit_btn")) {
        var clicked_edit_btn = event.target;
        get_the_value_of_row(clicked_edit_btn);
    }
});

//Renew ID number
function renew_id() {
    var alltrs = document.querySelectorAll("#user_table_body tr");
    var count = 1;
    alltrs.forEach(function(tr) {
        var td = tr.querySelector("td:first-child");
        td.innerHTML = count;
        count++;
    });
}

// get the value of the row 
function get_the_value_of_row(clicked_edit_btn) {
    var edit_row = clicked_edit_btn.parentElement.parentElement;
    var edit_id = edit_row.querySelector("td:first-child").innerHTML;
    var edit_name = edit_row.querySelector("td:nth-child(2)").innerHTML;
    var edit_email = edit_row.querySelector("td:nth-child(3)").innerHTML;
    var edit_phone = edit_row.querySelector("td:nth-child(4)").innerHTML;

    set_edited_input_values(edit_id, edit_name, edit_email, edit_phone);
}

//  
function set_edited_input_values(id, name, email, phone) {
    document.querySelector("#id").value = id;
    document.querySelector("#fullname").value = name;
    document.querySelector("#email").value = email;
    document.querySelector("#phone").value = phone;
};