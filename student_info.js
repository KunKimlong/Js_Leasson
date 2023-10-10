var id = document.getElementById('id');
// console.log(id);
var Name = document.getElementById('name');
var gender = document.getElementById('gender');
var course = document.getElementById('course');
var att = document.getElementById('attendent');
var act = document.getElementById('activities');
var exam = document.getElementById('exam');
var show = document.getElementById('show');
var btn_submit = document.getElementById('btn-submit');

var table=`
    <table class="table table-hover text-center table-dark">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Attendent</th>
                <th>Activites</th>
                <th>Exam</th>
                <th>Total</th>
                <th>Average</th>
            </tr>
        </thead>
        
`;
btn_submit.addEventListener('click',function(){
    var total = Number(att.value) + Number(act.value) + Number(exam.value);
    var avg   = total/3;
    table+=`
        <tr>
            <td>${id.value}</td>
            <td>${Name.value}</td>
            <td>${gender.value}</td>
            <td>${course.value}</td>
            <td>${att.value}</td>
            <td>${act.value}</td>
            <td>${exam.value}</td>
            <td>${total}</td>
            <td>${avg}</td>
        </tr>
    `;
    show.innerHTML=table+'</table>';
});